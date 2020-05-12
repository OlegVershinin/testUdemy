import React from 'react';
import Card from './Card';

const Content2 = () => {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="four wide column">
          <Card />
        </div>
        <div className="twelve wide column">
          <div className="ui form">
            <div className="field">
              <label style={{ color: 'white' }}>Мой пост</label>
              <input type="text" placeholder="пишем..."></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
