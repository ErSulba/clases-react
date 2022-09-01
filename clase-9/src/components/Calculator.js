import React, { useState } from 'react';
import { toCelsius, toFahrenheit, tryConvert } from '../utils';
import BoilingVeredict from './BoilingVeredict';
import TemperatureInput from './TemperatureInput';

const Calculator = props => {
  const [state, setState] = useState({
    temperature: '37',
    scale: 'c'
  })

  const handleCelsiusChange = (temperature) => {
    setState({
      temperature: temperature,
      scale: 'c'
    })
  }

  const handleFahrenheitChange = (temperature) => {
    setState({
      temperature: temperature,
      scale: 'f'
    })
  }

  const celsius = state.scale === "f" ? tryConvert(state.temperature, toCelsius) : state.temperature;

  const fahrenheit = state.scale === 'c' ? tryConvert(state.temperature, toFahrenheit) : state.temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale='f'
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVeredict celsius={parseFloat(celsius)} />
    </div>
  )
}

export default Calculator