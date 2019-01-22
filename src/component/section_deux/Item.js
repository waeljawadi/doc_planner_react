import React from 'react'
import _css_ from '../section_deux/style/style.module.css'


const Item = (props) =>
{
  return(
    <React.Fragment>
    <div class="col-lg-6">
    <p className={`${_css_.left} ${_css_._image_}`}> {props.item.text_content} </p>
     </div>
     </React.Fragment>
  )  
}
export default Item

