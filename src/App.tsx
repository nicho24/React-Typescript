import React from 'react';
import Header from './Components/Header/Header';
// import './scss/App.scss';
import PageContent from './Components/Content/PageContent';
import Sidebar from './Components/Sidebar/Sidebar';
import { CardProvider } from './Components/Content/Pages/Products/CardContext';

function App() {
  return (
    <div className="main-wrapper">
      <CardProvider>
        <Header />
        <Sidebar />
        <PageContent />
      </CardProvider>
    </div>
    
  );
}

export default App;
