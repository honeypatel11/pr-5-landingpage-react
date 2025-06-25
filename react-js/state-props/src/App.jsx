//function based component

import Card from "./component/card.jsx";

const App = ()=> {
    let aboutDsc  = "This is something about about...";
    let serviceDsc  = "This is something about services...";
    let contactDsc = "This is something about contact us...";
    return (
       <section>
        <div className="container my-5">
            <div className="row">
                <div className="col-4">
                    <Card pageName="About" dsc={aboutDsc} color="primary"/>
                </div>
                <div className="col-4">
                    <Card pageName="Service" dsc={serviceDsc} color="success"/>
                </div>
                <div className="col-4">
                    <Card pageName="Contact" dsc={contactDsc} color="danger"/>
                </div>
                
            </div>
        </div>
       </section>
    )


}
export default App;