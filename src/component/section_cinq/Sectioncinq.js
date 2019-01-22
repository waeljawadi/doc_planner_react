import React from 'react'
import Item from './Item'
import _css_ from './style/style.module.css'
import image_one from '../../images/picto/1.png'
import image_two from '../../images/picto/2.png'
import image_three from '../../images/picto/3.png'
import image_four from '../../images/picto/4.png'



const list =
[
    {
        picto: image_one,
        text_big: "Leader in 10 countries",
        text_small: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile' 
    },
    {
        picto: image_three,
        text_big: "1 million appointments",
        text_small: ' booked last month ' 
    },
    {
        picto: image_two,
        text_big: "30 million unique patients",
        text_small: ' visit us every month ' 
    },
    {
        picto: image_four,
        text_big: "2 million active doctors",
        text_small: ' trust in our solutions ' 
    },
]



const Secttioncinq = () =>
{
    return (
        <React.Fragment>
            <div className={` ${_css_.the_before}`}>
                <div class="container">
                    <div className="row">
                        <div className="col-lg-6">   
                            <h1 className={`${_css_.theh1}`}>The world's <br/> biggest healthcare platform </h1>  
                            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries. </p>                    
                        </div>
                        <div className="col-lg-6">  
                        <div className='row'>
                        { list.map((el,index) => <Item key={index} item={el} id={index} />) }                       
                        </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </React.Fragment>
    )
}
export default Secttioncinq