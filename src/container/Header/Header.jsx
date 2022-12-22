import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

// import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="The Pinnacle of Fine Dining"/>
      <h1 className="app__header-h1">The Pinnacle of Fine Dining</h1>
      <p className="p__opensans">Test</p>
      <button type="button" className="custom__button">View Menu</button>
    </div>
    <div className="app__header-img">
      <img src={images.welcome} alt="Featured dish: Baked Salmon"/>
    </div>
  </div>
);

export default Header;
