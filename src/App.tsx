import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Textbox from './components/textbox';
import ComboBox from './components/combobox';
import { LoremIpsum } from 'react-lorem-ipsum';
import './App.css';

const pages = [
  "Home",
  "Downloads",
  "Contact",
  "About",
]

const options = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Black",
  "White"
]

let text = <LoremIpsum />

function App() {
  return (
    <div className="App">
      <Navbar
        pageName={"Home"}
        pageNames={ pages }
      /> 

      <Textbox 
        body={ text } 
      />

      <ComboBox
        disabled={ true }
        comboName={ "Test" }
        options={ options }
      /> 
        
      <Footer
        pageNames={ pages }
      />
    </div>
  );
}

export default App;
