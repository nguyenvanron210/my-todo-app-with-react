import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

// React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);



