import React from 'react';

const BoilingVeredict = (props) => {
  if (props.celsius >= 100) {
    return <p> The water would boil.</p>
  }

  return <p> the water would not boil.</p>
}

export default BoilingVeredict