import '@fontsource-variable/montserrat/wght-italic.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/locomotive.css';
import { AnimatePresence } from 'framer-motion';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(

  <AnimatePresence mode='wait'>
    <RouterProvider router={router} fallbackElement={<div>Loading</div>} />
  </AnimatePresence>

);
