import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* cung cấp cho toàn bộ ứng dụng */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
