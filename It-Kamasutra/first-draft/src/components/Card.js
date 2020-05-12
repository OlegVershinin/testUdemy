import React from 'react';

const Card = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN6mxPwu0AeaT-5Xo_HYKMN2eLFIYj7mCfOin_Y4xN70p1AczV&usqp=CAU"
        ></img>
      </div>
      <div className="content">
        <a href="#stub" className="header">
          Феликс
        </a>
        <div className="meta">
          <span className="date">Зарегистрирован в 1917 году</span>
        </div>
        <div className="description">Мультимиллионер </div>
      </div>
      <div className="extra content">
        <a href="#stub">
          <i className="user icon"></i> все приговорены суки...{' '}
        </a>
      </div>
    </div>
  );
};

export default Card;
