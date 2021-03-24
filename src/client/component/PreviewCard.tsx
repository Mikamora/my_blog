import * as React from "react";
import * as moment from "moment";
import { IBlog } from "../utils/Types"
import { Link } from "react-router-dom"

const PreviewCard: React.FC<PreviewCardProps> = ({ blog }) => { // we could also strong code it like props: PreviewCardProps where props is initialized; with function wrapper gives me a children option
    return (
        <div className="col-md-4">
            <article className="card my-2 shadow">
                <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text text-muted mb-2">{blog.name}</p>
                    <p className="card-text">{blog.content.substring(0, 125)} ...</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="card-text text-muted mb-0">{moment(blog._created).format("MMM Do, YYYY")}</p>
                        <Link className="btn btn-primary" to={`/Details/${blog.id}`}>Read More!</Link>
                    </div>

                </div>
            </article>
        </div>
    )
}

interface PreviewCardProps {
    blog: IBlog;
}

export default PreviewCard;