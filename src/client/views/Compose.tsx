import * as React from "react";
import { useHistory } from "react-router-dom";

const Compose: React.FC<ComposeProps> = props => { // we could also strong code it like props: ComposeProps where props is initialized; with function wrapper gives me a children option
    const history = useHistory();
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({ title, content });
        const res = await fetch("/api/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content })
        })
        const result = await res.json();
        console.log(result);
        history.push(`./details/${result.id}`)
    }
    
    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <form action="" className="form-group rounded-lg p-3">
                        <label htmlFor="title">Title:</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control form-control-lg mb-2" placeholder="titleeeeee"/> 
                        <label htmlFor="content">Content:</label>
                        <textarea rows={20} value={content} onChange={e => setContent(e.target.value)} className="form-control form-control-lg mb-2" placeholder="enter message here" />
                        <div className="d-flex justify-content-end">
                            <button onClick={handleSubmit} className="btn btn-primary btn-lg">Write it!</button>
                        </div>
                    </form>

                </div>
            </section>
        </main>
    )
}

interface ComposeProps {}

export default Compose;