import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="A Menu to Satisfy Any Palette" />
      <h2 className="headtext__cormorant">Specialty Drinks</h2>
    </div>
    <div className="app__specialMenu-menu">
      {/* WINES */}
      <div className="app__specialMenu-menu_wine flex__center">
        <h3 className="app__specialMenu-heading">Wine & Beer</h3>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>
      {/* MENU IMAGE */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="Gericht menu" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <h3 className="app__specialMenu-heading">Cocktails</h3>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>
    {/* MENU BUTTON */}
    <div style={{marginTop: '15px'}}>
      <button type="button" className="custom__button">View Menu</button>
    </div>
  </div>
);

export default SpecialMenu;
