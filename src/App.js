import React, { Component } from 'react';
import Header from '../src/component/header/Header'
import SectionDeux from './component/section_deux/Sectiondeux'
import Sectiontrois from './component/section_trois/Sectiontrois'
import Sectionquatre from './component/section_quatre/Sectionquatre'
import Sectioncinq from './component/section_cinq/Sectioncinq'
import Sectionsix from  './component/section_six/Sectionsix'
import Footer from './component/footer/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionDeux />
        <Sectiontrois />
        <Sectionquatre />
        <Sectioncinq />
        <Sectionsix />
        <Footer />
      </div>
    );
  }
}

export default App;
