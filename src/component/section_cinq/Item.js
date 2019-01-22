import React from 'react'
import _css_ from './style/style.module.css'
import './style/style.css'


const Item = (props) =>
{
    return(
        <React.Fragment>
            <div className={`col-lg-6 ${_css_.bck}`}  id={`idnumber_${props.id}`}>
                <img src={props.item.picto} />
                <p className={`${_css_.firstp}`}>{props.item.text_big}</p>
                <p className={`${_css_.lastp}`}>{props.item.text_small}</p>
            </div>
        </React.Fragment>
    )
}

export default Item
