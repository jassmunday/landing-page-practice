import React from 'react';

function Description() {
  return (
    <>
    <br></br>
    <section className="body">
      <div className="left-section">
        <img src="images/d1.png" alt='background image' width={500}></img>
        
        
      </div>
      <div className="right-section-discription">
      <h2>How You match</h2>
      <ul>
          <li>GPA</li>
          <li>Major</li>
          <li>Apply Year</li>
          <li>College</li>
          <li>Extra-Curricular</li>
        </ul>
      </div>
    </section>
    </>
    
  );
}

export default Description;
