import React from 'react'
import ThemedButton from './ThemedButton'

const Toolbar = (props) => {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  )
}

export default Toolbar