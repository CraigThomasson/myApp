import React from 'react';
import DisplayCharacterSheet from '../components/containers/DisplayCharacterSheet';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Character Sheet</h1>
      </header>
      <main className="content-container">
        <DisplayCharacterSheet />
      </main>
    </div>
  );
};

export default Tab2;
