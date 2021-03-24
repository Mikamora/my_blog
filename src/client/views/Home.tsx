import * as React from "react";
import PreviewCard from "../component/PreviewCard"
import { IBlog } from "../utils/types";

const Home: React.FC<HomeProps> = props => { // we could also strong code it like props: HomeProps where props is initialized; with function wrapper gives me a children option

    const [blogs, setBlogs] = React.useState<IBlog[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch("/api/blogs");
            const blogs = await res.json();
            setBlogs(blogs);
        })(); //this is called an iife immediately invoked function expression () << invoking itself with the second 
    }, []);
    return (
        <main className="container">
            <section className="row">
                {blogs.map(blog => ( //we can pass in blog to the params bc blog has all of the properties that we are looking for in an IBlog
                    <PreviewCard key={`blog-preview-${blog.id}`} blog={blog} /> //very big possibility a number may repeat in the array map so adding the words prior helps differ
                
                ))}
            </section>
        </main>
    )
}

interface HomeProps {}

export default Home;