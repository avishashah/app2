import logo from './logo.svg';
import './App.css';
import Header from './components/header/index'
import Navbar from './components/navbar/index'
import Hero from './components/hero-div/index'
import Banner1 from './components/banners/banner1'
import DonateInfo from './components/donate-info/index';
import Banner2 from './components/banners/banner2'
import Card1 from './components/cards/card1'
import Listing_react from './components/misc_component/listing_react';
import Banner3 from './components/banners/banner3'
import Card2 from './components/cards/card2'
import Banner4 from './components/banners/banner4'
import Form from './components/contactus/index'
import Teamslider from './components/misc_component/teamslider';
import Banner5 from './components/banners/banner5';
import FNavbar from './components/navbar/f-navbar';
import Footer from './components/footer/index'


function App() {
  return (
    <>
      <Header />
      <Navbar/>
      <Hero/>
      <Banner1/>
      <DonateInfo/>
      <Banner2/>
      <Card1/>
      <Listing_react/>
      <Banner3/>
      <Card2/> 
      <Banner4/>
      <Form/>
      <Teamslider/>
      <Banner5/>
      <FNavbar/>
      <Footer/>
    
      </>
  );
}

export default App;

