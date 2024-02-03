import React from 'react';

function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title}  />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CardSection() {
  return (
    <section className="card-section">
      <Card
        title="Create Your Profile"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        imageUrl="https://github.com/jassmunday/landing-page-practice/assets/129063092/1384e86c-f023-4c16-ab7b-314d25975fb2"
      />
      <Card
        title="Get Academic results and certificates"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        imageUrl="https://github.com/jassmunday/landing-page-practice/assets/129063092/22bf464b-cf6e-46ec-b29e-9b55779de614"
      />
      <Card
        title="Apply For Scholarships"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        imageUrl="https://github.com/jassmunday/landing-page-practice/assets/129063092/0ebea0c9-3438-40b2-b4fa-3610186d28a1"
      />
    </section>
  );
}

export default CardSection;
