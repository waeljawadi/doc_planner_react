import React from 'react'
import _css_ from './style/style.module.css'
import './style/style.css'
import Item from './Item'
import image_1 from '../../images/card/1.png'
import image_2 from '../../images/card/2.png'
import image_3 from '../../images/card/3.png'
import image_4 from '../../images/card/4.png'
import image_5 from '../../images/card/5.png'
import image_6 from '../../images/card/6.png'
 

const list = [
    {
        src : image_1,
        text:'Warsaw',
        btn_text:'See openings'
    },
    {
        src : image_2,
        text:'Barcelona',
        btn_text:'See openings'
    },
    {
        src : image_3,
        text:'Istanbul',
        btn_text:'See openings'
    },
    {
        src : image_4,
        text:'Rome',
        btn_text:'See openings'
    },
    {
        src : image_5,
        text:'Mexico City',
        btn_text:'See openings'
    },
    {
        src : image_6,
        text:'Curitiba',
        btn_text:'See openings'
    },
]
const Sectionsix = () =>
{
    return(
        <React.Fragment>
            <div className={`container ${_css_.sectionsix}`}>
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Improve the lives of millions.<br/> Change yours forever</h3>
                        </div>
                        <div className="col-lg-8 offset-2">
                        <p>
                                More than 500 team mates share our same vision, goals and passion. 
                                <br/>
                                With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, 
                                <br/>
                                Mexico City,Colombia and Curitiba, our search for great talent never stops.
                        </p>
                        </div>
                        <div className="row">
                        {list.map((el,index) => <div className="col-lg-4"><Item key={index} item={el} /></div>)}
                        </div>



</div>
                    </div>
        </React.Fragment>
    )
}
export default Sectionsix