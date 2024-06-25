import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
