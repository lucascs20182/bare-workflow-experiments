import React from 'react';
import { StatusBar } from 'expo-status-bar';

// import Ex1 from './components/Ex1';
// import Ex2 from './components/Ex2';
// import Ex3 from './components/Ex3';
// import Ex4 from './components/Ex4';
// import Ex5 from './components/Ex5';
// import Ex6 from './components/Ex6';
// import PrimeiroDesafio from './components/PrimeiroDesafio';
// import CoreComponents from './components/CoreComponents';
// import ScrollComponent from './components/ScrollComponent';
import ImageComponent from './components/ImageComponent';

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <ImageComponent />
    </>
  );
}
