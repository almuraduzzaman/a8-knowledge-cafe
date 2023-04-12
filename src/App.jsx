import React from 'react';
import BothContainer from './components/BothContainer/BothContainer';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogComponent from './components/BlogComponent/BlogComponent';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <BothContainer></BothContainer>
      <BlogComponent></BlogComponent>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;