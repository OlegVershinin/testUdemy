import React from 'react';
import s from './ImgContent.module.css';

const ImgContent = () => {
  return (
    <div className={s.container}>
      <img
        className="ui rounded image"
        alt=""
        src="https://i2.wp.com/vidviday.ua/blog/wp-content/uploads/2016/01/Attachment-1-23.jpeg?w=1200&ssl=1"
      ></img>
    </div>
  );
};

export default ImgContent;
