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
        imageUrl="images/p1.png"
      />
      <Card
        title="Get Academic results and certificates"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fgraduation_5956912&psig=AOvVaw1Ehnl6GUeBYfErrhahEMZm&ust=1707048381533000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCR9fSQj4QDFQAAAAAdAAAAABAE"
      />
      <Card
        title="Apply For Scholarships"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        imageUrl="images/s1.png"
      />
    </section>
  );
}

export default CardSection;
