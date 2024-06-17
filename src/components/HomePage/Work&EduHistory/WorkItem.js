import React from 'react';
import "../../css/workitem.css"

const WorkItem = ({ item }) => {
  return (
    <div className="work-item">
      <h3>{item.title}</h3>
      <h4>{item.company}</h4>
      <p>{item.duration}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default WorkItem;
