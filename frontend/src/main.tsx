import '@fontsource-variable/montserrat/wght-italic.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/locomotive.css';
import { AnimatePresence } from 'framer-motion';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AnimatePresence mode='wait'>
      <RouterProvider router={router} fallbackElement={<div>Loading</div>} />
    </AnimatePresence>
  </QueryClientProvider>

);
