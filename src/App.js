import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ScrollProvider } from './components/ScrollContext';

function App() {
  return (
    <div className="App">
      <Header/>
      <ScrollProvider>
        <Main/>
      </ScrollProvider>
      <Footer/>
    </div>
  );
}

export default App;
