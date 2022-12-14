import React, { useState } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}

const TemperatureInput = (props) => {
  const temperature = props.temperature;
  const scale = props.scale
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value)
  }
  return (
    <fieldset>
      <legend> Enter the temperature in {scaleNames[scale]}</legend>
      <input
        value={temperature}
        onChange={handleChange}
      />
    </fieldset>
  )
}

export default TemperatureInput