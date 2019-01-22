import React from 'react'
import _css_ from './style/style.module.css'
import './style/style.css'


const Item = (props) =>
{
    return(
        <React.Fragment>


<div className="card" >
  <img className="card-img-top" src={props.item.src} alt="Card image cap" />
  <div className="card-body">
<div className="row">
<div className="col-lg-6">

    <h5 className="card-title">{props.item.text}</h5>
    </div>
    <div className="col-lg-6">

    <a href="#" className="btn btn-primary">{props.item.btn_text}</a>
</div>
</div>

  </div>
</div>
        </React.Fragment>
    )
}
export default Item