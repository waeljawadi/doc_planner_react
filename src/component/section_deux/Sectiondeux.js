import React from 'react'
import Item from './Item'
import _css_ from '../section_deux/style/style.module.css'
import _image_ from '../../images/separateur.png'

const list = 
[
    {
        text_id: 1,
        text_content : 'We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that\'s why we are always next to them: to help them find the best possible care. Anytime, anywhere. '
    },
    {
        text_id: 2,
        text_content : 'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients. '
    }
]
const Sectiondeux = (props) =>
{
    return(
<React.Fragment>
<div className="container">
<div className="row">
<div className="col-xl-12">
<p className={`${_css_._image_}`}><img src={_image_} /></p>
<h1 className={`${_css_.myh1}`}> Making the healthcare experience more human </h1>
</div>
</div>
    <div className="container">
        <div className="row">
{ list.map( el => <Item item={el} key={el.text_content}/>) }
        </div>  
    </div> 
    </div>   
</React.Fragment>
    )
}
export default Sectiondeux