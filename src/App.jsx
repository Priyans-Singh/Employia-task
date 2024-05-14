import React from 'react';
import HeroPart from './heroPart';
import Customers from './Customers';
import UserCase from './UserCase';
import LoremI from './lorem';
import DiveIn from './DiveIn';
import Lorem2 from './lorem2';
import Testimonials from './testimonials';
import C_Partner from './C_Partner';
import Questions from './questions';
import Footer from './footer';

function App() {
  return (
    <div className="App">
     <HeroPart></HeroPart>
     <Customers></Customers>
     <UserCase></UserCase>
     <LoremI></LoremI>
     <DiveIn></DiveIn>
     <Lorem2></Lorem2>
     <Testimonials></Testimonials>
     <C_Partner></C_Partner>
     <Questions></Questions>
     <Footer></Footer>
    </div>
  );
}

export default App;
