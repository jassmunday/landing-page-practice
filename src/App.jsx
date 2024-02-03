import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import CardSection from './components/CardSection';
import FAQPage from './components/FAQPage';
import Footer from './components/Footer';
import './index.css';
import Scholarship from './components/Scholarship';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Body />
      <CardSection />
    
      <Scholarship/>
      <Description/>
      <FAQPage />
      <Footer />
    </div>
  );
}

export default App;
