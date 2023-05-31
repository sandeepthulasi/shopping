import React from 'react'

function Card(props) {
  
  return (
<div>
    <div className="card mb-4 " style={{"width": "18rem"}}>
        <img src={props.url} className="card-img-top" alt="..."/>
      <div className="card-body text-center">
        <h4 className="card-title ">{props.title}</h4>
        <p className="card-text ">{props.price}</p>
        <button className="btn btn-primary " disabled={props.disabled} onClick={()=>{props.myfunction(props.id)}} >{props.button}</button>
        {
          (props.disabled)?
          (<button  className="btn btn-primary mx-2" hidden={!props.hidden} onClick={()=>{props.removefunction(props.id)}}>Remove item</button>):""
        }
      </div>
    </div>
</div>
  )
}

export default Card