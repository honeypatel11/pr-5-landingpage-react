

const Button = (props) => {
  return (
   <button className={`btn btn-${props.color}`}>Go At {props.pageName} </button>
  )
}

export default Button