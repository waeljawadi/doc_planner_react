import React from 'react'
import sepwhite from '../../images/sep_white.png'
import _css_ from '../section_quatre/style/style.module.css'

const Item = (props) =>
{
    return(
        <div className={`col-lg-3 ${_css_.lg_modif}`}>
        <span><img src={sepwhite} className={`${_css_.padding_}`} />{props.item}</span>
        </div>
    )
}
export default Item