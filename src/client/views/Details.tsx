import * as React from "react";
import { useParams, Link } from "react-router-dom"
import type { IBlog } from "../utils/Types"
import * as moment from "moment";

const Details: React.FC<DetailsProps> = props => { // we could also strong code it like props: DetailsProps where props is initialized; with function wrapper gives me a children option

    const { id } = useParams();

    const [blog, setBlog] = React.useState<IBlog>(null); // blank object is true, but not null 

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/blogs/${id}`);
            const blog = await res.json();
            setBlog(blog);
        })();
    }, []);

    //one way to get around null initial render
    // if(!blog) {
    //     return <h1>Loading...</h1>
    // }
    //another way to get around null initial render ? \/\/\/\/

    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <article className="card my-2 shadow">
                        <div className="card-body">
                            <h1 className="card-text text-center">{blog?.title}</h1>
                            <h6 className="card-text text-center text-muted mb-2"><b>{blog?.name}</b>, <i>{moment(blog?._created).format("MMM Do, YYYY")}</i></h6>
                            <div className="card-text px-md-5">{blog?.content.split("\n").map((para, i) => <p key={`p-block-${i}`}>{para}</p>)}</div>
                            <div className="d-flex justify-content-between align-items-center mx-md-5 mt-5">
                                <Link className="btn btn-outline-primary" to="/">Go Back</Link>
                                <Link className="btn btn-outline-secondary" to={`/admin/${id}`}>Admin Options</Link>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </main>
    )
}

interface DetailsProps { }

export default Details;