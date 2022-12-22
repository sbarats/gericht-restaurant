import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* LETTER G */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="capital letter G" />
    </div>
    <div className="app__aboutus-content flex__center">
      {/* ABOUT US */}
      <div className="app__aboutus-content_about">
        <h2 className="headtext__cormorant">About Us</h2>
        <img src={images.spoon} alt="spoon icon" className="spoon__image" />
        <p className="p__opensans">Founded in 1922, Gericht has been a family owned establishment for over a century. Our heritage is expressed and honored in the dishes we create and would love to share the experience with you.</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>
      {/* KNIFE */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="chef's knife" />
      </div>
      {/* HISTORY */}
      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">Our History</h2>
        <img src={images.spoon} alt="spoon icon" className="spoon__image" />
        <p className="p__opensans">Founded in 1922, Gericht has been a family owned establishment for over a century. Our heritage is expressed and honored in the dishes we create and would love to share the experience with you.</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
