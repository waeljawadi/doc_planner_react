import React from 'react'
import Item from '../section_trois/Item'
import _css_ from "./style/style.module.css";
import _image_one from '../../images/section31.png'
import _image_two from '../../images/section32.png'
const list = [
    {
        little_text :'For patients',
        big_text:'Find a doctor, book a visit and solve any health-related doubt',
        picture: _image_one,
        background:'blue',
        button : true

    },
    {
        little_text :'For doctors',
        big_text: 'Save time managing visits and cut no-shows by half',
        picture: _image_two,
        background: 'red',
        button : false
    }
]

const Sectiontrois = () =>
{
    return(
        <React.Fragment>
        <div className="container">
    <div className="row">
    {list.map((el,index) => <Item item={el} key={index}  />)} 
    </div>
    </div>
        </React.Fragment>
    )
}

export default Sectiontrois