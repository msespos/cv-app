import React from 'react';

const DisplayedEducation = (props) => {
  return (
    <div>
      {props.education.school} &#x2022; {props.education.major} &#x2022; {props.education.degree}
    </div>
  )
}

export default DisplayedEducation
