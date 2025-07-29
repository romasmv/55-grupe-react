import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import './index.css';
import { App } from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home.jsx';
import { Todo } from './pages/Todo.jsx';
import { About } from './pages/About.jsx';
import { Register } from './pages/Register.jsx';
import { Error404 } from './pages/Error404.jsx';
import { Login } from './pages/Login.jsx';
import { Services } from './pages/Services.jsx';
import { ServiceInner } from './pages/ServicesInner.jsx';
import { PublicTemplates } from './templates/PublicTemplates.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicTemplates />}>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<ServiceInner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
