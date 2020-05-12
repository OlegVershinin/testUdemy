import React from 'react';
import Nav from './Navigation';
import ImgContent from './ImgContent';
import './Profilepage.css';

const Profilepage = () => {
  return (
    <div className="ui sixteen column grid pge">
      <div className="row">
        <div className="three wide column">
          <Nav />
        </div>
        <div className="thirteen wide column">
          <ImgContent />
        </div>
      </div>
      <div className="row">
        <p>ghlkjlkjlkjlj</p>
      </div>
    </div>
  );
};

export default Profilepage;
