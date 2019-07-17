import React, { Component } from "react";

const Header = () => {
  return <h1>Welcome To My Restaurant: Reactaurant</h1>;
};

const Image = () => {
  return (
    <img
      alt="Restaurant Pic"
      src="https://www3.hilton.com/resources/media/hi/OSAHITW/en_US/img/shared/full_page_image_gallery/main/HL_centlumrest1_49_675x359_FitToBoxSmallDimension_Center.jpg"
    />
  );
};

const Description = () => {
  return (
    <p>
      Our restaurant prides itself with it's rich selection of dishes and it's
      noble and luxorious atmosphere.
    </p>
  );
};

class About extends Component {
  render() {
    return (
      <div>
        <Header />,
        <Image />,
        <Description />
      </div>
    );
  }
}

export default About;
