import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";
import { products } from "./data.json";
import List from "./List";
import { CustomModal } from "./CustomModal";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
    this.showModal = this.showModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  showModal() {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    });
  }
  handleSave() {
    console.log("clickeo en el save del modal iiieeeiii");
    this.setState({
      showModal: false,
    })
  }
  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List products={products} />
        <Button onClick={this.showModal}>
          {" "}
          un boton iiieeeiii, apretame!!{" "}
        </Button>
        {showModal && (
          <CustomModal
            title="HOLUUU"
            body="Soy un modal"
            handleSave={this.handleSave}
          />
        )}
      </div>
    );
  }
}

export default App;
