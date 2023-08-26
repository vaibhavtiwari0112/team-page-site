import React from 'react';

const MentorCard = ({ name, university, avatar }) => {
  return (
    <div className="MentorCard">
      <img src={`/avatars/${avatar}`} alt={name} />
      <h3>{name}</h3>
      <p>{university}</p>
    </div>
  );
};

export default MentorCard;
