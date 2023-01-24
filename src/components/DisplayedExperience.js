import React from 'react';

const DisplayedExperience = (props) => {
  return (
    <div>
      {props.experience.position} &#x2022; {props.experience.employer}<br></br>
      {props.experience.duties} &#x2022; {props.experience.dates}
    </div>
  )
}

export default DisplayedExperience
