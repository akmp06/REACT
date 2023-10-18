import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NoteProvider from './contexts/Note'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteProvider>
    <App />
    </NoteProvider>
  </React.StrictMode>
);
reportWebVitals();
