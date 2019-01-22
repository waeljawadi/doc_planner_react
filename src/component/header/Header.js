import React from 'react'
import _css_ from '../header/style/styleHeader.module.css'
import head_logo from '../../images/head_logo.png'
const Header = () =>
{
    return(
        <React.Fragment>
           <nav id="navbar-example2" className="navbar navbar-light bg-light">
           <div className={`container ${_css_.mynav}`}>
<div className="row">
     <div className="col-xl-3 ">      
  <a className="navbar-brand" href="#"><img src={head_logo} /></a>
</div>

 
     <div className={`col-xl-9 ${_css_.float_to_right }`}>      

  <ul className={`${_css_.nav}  nav-pills nav`}>
    <li className="nav-item">
      <a className="nav-link" href="#fat">About us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#mdo">Career</a>
    </li>
    <li className="nav-item dropdown">
      <a className={`nav-link dropdown-toggle ${_css_.dropdown_toggle}`} data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Departements</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#one">Marketing & PR</a>
        <a className="dropdown-item" href="#two">Customer Success & Sales</a>
        <a className="dropdown-item" href="#three">IT, Product, Design & UX</a>
        <a className="dropdown-item" href="#four">Finance & Administration</a>
        <a className="dropdown-item" href="#four">HR & more</a>
      </div>
    </li>
  </ul>

</div>

</div>

</div>
</nav>
        </React.Fragment>
        )
}
export default Header