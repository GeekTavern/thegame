import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextDisplay } from './components/TextDisplay';
import { ChoiceDisplay } from './components/ChoiceDisplay';
import { ImageDisplay } from './components/ImageDisplay';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("Lorem ipsum");
  const [choices, setChoices] = useState(["Choice A", "Choice B"]);
  const [image, setImage] = useState("I'm an image");


  return (
    <div>
      <ImageDisplay image={image}/>
      <TextDisplay text={text}/>
      <ChoiceDisplay choices={choices}/>
    </div>
  );
}

export default App;
