import * as React from 'react';
import '../styles/ui.css';

// declare function require(path: string): any;

export default class App extends React.Component {
  constructor(params) {
    super(params);

    // this.htmlInputElement = React.createRef();

    this.htmlInputElement = element => {
      if (element) element.value = '5';
      this.htmlInputElement.current = element;
    };
  }

  componentDidMount() {
    // This is how we read messages sent from the plugin controller
    window.onmessage = event => {
      const {type, message} = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }

  onCreate = () => {
    const count = parseInt(this.htmlInputElement.current.value, 10);
    parent.postMessage({pluginMessage: {type: 'create-rectangles', count}}, '*');
  };

  onCancel = () => {
    parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
  };

  render() {
    return (
      <div>
        <img src="../assets/logo.svg" />
        <h2>Rectangle Creator</h2>
        <p>
          Count: <input ref={this.htmlInputElement} />
        </p>
        <button id="create" onClick={this.onCreate}>
          Create
        </button>
        <button onClick={this.onCancel}>Cancel</button>
      </div>
    );
  }
}
