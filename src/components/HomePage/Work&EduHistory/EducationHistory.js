import React from 'react';
import EducationItem from './EducationItem';

const EducationHistory = () => {
  const educationItems = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Cracow University of Technology',
      duration: '2020 - 2024',
      description: 'Studied computer science with a focus on software development, algorithms and data structures.'
    },
    {
      degree: 'Master of Science in Computer Science with speciality in Data Science',
      institution: 'Cracow University of Technology',
      duration: '2024 - present',
      description: 'Focused on advanced data analysis, machine learning, and big data technologies, preparing me to tackle complex data-driven challenges and innovate in the tech industry.'
    }
    // Add more education items as needed
  ];

  return (
    <section>
      <h2>Education History</h2>
      {educationItems.map((item, index) => (
        <EducationItem key={index} item={item} />
      ))}
    </section>
  );
};

export default EducationHistory;
