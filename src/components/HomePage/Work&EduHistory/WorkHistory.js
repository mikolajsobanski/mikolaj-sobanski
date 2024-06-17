import React from 'react';
import WorkItem from './WorkItem';

const WorkHistory = () => {
  const workItems = [
    {
      title: 'Data Management Consultant',
      company: 'Informatica',
      duration: 'July 2022 - Present',
      description: 'Specialized in optimizing data processes, ensuring data integrity, and implementing efficient data management solutions to support business objectives.'
    }
  ];

  return (
    <section>
      <h2>Work History</h2>
      {workItems.map((item, index) => (
        <WorkItem key={index} item={item} />
      ))}
    </section>
  );
};

export default WorkHistory;
