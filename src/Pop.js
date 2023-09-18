import React from 'react';

const Pop = ({ data, onClose }) => {
    const {title,category,price,description} = data;
    return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} />
        <p>{data.description}</p>
       
      </div>
    </div>
  );
};

export default Pop;

