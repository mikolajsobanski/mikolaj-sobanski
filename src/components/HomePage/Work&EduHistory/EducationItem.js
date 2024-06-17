import React from 'react';
import "../../css/educationitem.css"

const EducationItem = ({ item }) => {
  return (
    <div className="education-item">
      <h3>{item.degree}</h3>
      <h4>{item.institution}</h4>
      <p>{item.duration}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default EducationItem;
