import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/Home.page';
import ContactPage from './page/Contact.page';
import AboutPage from './page/About.page';
import NotFound from './page/not-found';
import NavComponent from './components/Nav.componet';
import Page from './page/book/Page';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavComponent />

        <Routes>
          <Route path="/" element={<HomePage />}>
            Home
          </Route>
          <Route path="/about" element={<AboutPage />}>
            About
          </Route>
          <Route path="/contact" element={<ContactPage />}>
            Contact
          </Route>
          <Route path="/page/:id" element={<Page />}>
            Contact
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App