import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>`
        <ArrowFunctionComponent />
        <FunctionalComponent />
        <ClassComponent />
      </React.Fragment>
    );
  }
}

const ArrowFunctionComponent = () => <h1>Soy un componente en funcion flecha</h1>

function FunctionalComponent() {
  const [text, setText] = React.useState("soy un componente funcional")
  React.useEffect(() => {
    setTimeout(() => { setText("el componente cambio a los 3 segundos") }, 3000)
  })
  return <h1> {text} </h1>
}

class ClassComponent extends React.Component {
  state = { text: "Soy un componente de clase" }
  //componentDidMount, se ejecuta la primera vez que el componente se monta
  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: "el component cambio luego de 3 segundo" })
    }, 3000);
  }
  //componentWillUnmount, se ejecuta cuando el componente va desparecer del DOM
  render() {
    return (
      <h1 >{this.state.text}</h1>
    );
  }
}
export default App;
