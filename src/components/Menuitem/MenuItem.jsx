import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      {/* ITEM TITLE */}
      <div className="app__menuItem-title">
        <p className="p__cormorant" style={{ color: '#DCCA87'}}>{title}</p>
      </div>
      <div className="app__menuItem-dash" />
      {/* ITEM PRICE */}
      <div className="app__menuItem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
      {/* ITEM TAGS */}
      <div className="app__menuItem-tags">
        <p className="p__opensans" style={{ color: '#aaa' }}>{tags}</p>
      </div>
    </div>
);

export default MenuItem;
