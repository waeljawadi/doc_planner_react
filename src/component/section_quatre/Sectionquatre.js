import React from 'react'
import Item from './Item'
import _css_ from '../section_quatre/style/style.module.css'
const list = ["ZnaynLekarz","Doctoralia","MioDottore","DoktorTakvimi","ZnamyLekar"]

const Sectiontrois = () =>
{
    return(
    <React.Fragment>
    <div className={`container ${_css_.sectionquatre}`}>
            <div className="row">
                <div className="col-lg-3">
                    <h2 className={`${_css_.left} ${_css_.myh1}`}>We are a global company with local culture</h2>
                </div>
                <div className="col-lg-9">
                <div className="row">

                    {list.map( el => <Item item={el}/>)}
                    </div>
                </div>
            </div>
    </div>
    </React.Fragment>
    )
}
export default Sectiontrois