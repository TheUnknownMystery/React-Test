import React from 'react';
import CustomLink from './components/customLink';
import ReactDOM from 'react-dom/client';
import './index.css';
import ButtonChange from './components/buttonChange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomLink name="this is a test link" link="https://www.youtube.com/" />
    <ButtonChange text={'changed text'} />
  </React.StrictMode>
);
