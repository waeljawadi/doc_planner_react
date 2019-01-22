import React from 'react'
import _css_ from "./style/style.module.css";
import "./style/style.css"

const Item = (props) =>

{
    const lebg = props.item.background;
    let mybtn;
    (props.item.button) 
    ?
    mybtn = <button type="button" className="btn btn-light">Select your country</button>
    :
    mybtn = <button type="button" className={`btn btn-light ${_css_.hidden}`}>Select your country</button> 
    return(
    <React.Fragment>
        <div className={`col-lg-6 _max_ ${_css_.bg} ${_css_._max_} ${props.item.background} `}>
            <div className={`col-lg-12 ${_css_.les_p}`}>
                <p>{props.item.little_text}</p>
                <p>{props.item.big_text}</p>
            </div>
            <div className="col-lg-5">
            {mybtn}
            </div>
            <div className="col-lg-10 offset-5">
                <img src={props.item.picture}   />
            </div>
        </div>
     </React.Fragment>

    )
}

export default Item