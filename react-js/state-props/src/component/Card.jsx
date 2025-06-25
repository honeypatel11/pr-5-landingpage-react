import Button from "./button";

const Card = (props) => {
    console.log(props);//properties

    //props drilling..
    

    return (
        <div className="card" style={{ width: '18rem' }}>
           
            <div className="card-body">
                <h5 className="card-title">{props.pageName}</h5>
                <p className="card-text">{props.dsc}</p>
               <Button pageName={props.pageName} color={props.color}/>
            </div>
        </div>

    )

}
export default Card;