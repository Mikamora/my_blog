import * as React from "react";
import { useHistory, useParams, Link } from "react-router-dom";


const Admin: React.FC<AdminProps> = props => { // we could also strong code it like props: AdminProps where props is initialized; with function wrapper gives me a children option
    const history = useHistory();
    const { id } = useParams();
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    React.useEffect(() => {        
    (async () => {
        const res = await fetch(`/api/blogs/${id}`);
        const blog = await res.json();
        setTitle(blog.title);
        setContent(blog.content);
    })();
}, [id]) //makes it so if the [id] changes that it reruns the useEffect

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({ title, content });
        const res = await fetch(`/api/blogs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content })
        })
        const result = await res.json();
        console.log(result);
        history.push(`/details/${id}`)
    }

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch(`/api/blogs/${id}`, {
            method: "DELETE",
        })
        if(res.ok) {
            history.push(`/`);
        }
    }

    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <form action="" className="form-group rounded-lg p-3">
                        <label htmlFor="title">Title:</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control form-control-lg mb-2" placeholder="titleeeeee" />
                        <label htmlFor="content">Content:</label>
                        <textarea rows={20} value={content} onChange={e => setContent(e.target.value)} className="form-control form-control-lg mb-2" placeholder="enter message here" />
                        <div className="d-flex justify-content-between align-items-center">
                        <Link className="btn btn-secondary" to={`/details/${id}`}>Go Back</Link>
                            <div>
                                <button onClick={handleEdit} className="btn btn-outline-primary mx-2">Edit it!</button>
                                <button onClick={handleDelete} className="btn btn-outline-danger mx-2">Delete it!</button>
                            </div>
                        </div>
                    </form>

                </div>
            </section>
        </main>
    )
}

interface AdminProps { }

export default Admin;