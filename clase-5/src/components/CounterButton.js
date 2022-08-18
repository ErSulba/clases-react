// React arrow function component
const CounterButton = (props) => (<button onClick={() => props.setState(props.count + 1)} >
  Click me
</button>)

export default CounterButton