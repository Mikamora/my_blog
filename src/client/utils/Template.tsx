import * as React from "react";

const Template: React.FC<TemplateProps> = props => { // we could also strong code it like props: TemplateProps where props is initialized; with function wrapper gives me a children option
    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Template View</h1>

                </div>
            </section>
        </main>
    )
}

interface TemplateProps {}

export default Template;