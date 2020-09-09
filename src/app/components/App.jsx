import * as React from 'react';
import '../styles/ui.css';

export default class App extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      fonts: [],
    };

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

      if (type === 'get-font-list') {
        console.log('message inside componentDidMount', message);

        this.setState({
          fonts: message,
        });
      }
    };

    parent.postMessage({pluginMessage: {type: 'get-font-list'}}, '*');
  }

  onCreate = () => {
    const count = parseInt(this.htmlInputElement.current.value, 10);
    parent.postMessage({pluginMessage: {type: 'create-rectangles', count}}, '*');
  };

  onCancel = () => {
    parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
  };

  render() {
    let fontElements = [];
    let matchItalic = /\b(\w*italic\w*)\b/;
    let matchWeight = /\b\w*\b/;

    this.state.fonts.forEach((font, i) => {
      const {style} = font.fontName;
      const fontFamily = font.fontName.family;
      let fontWeight = style;
      let fontStyle = 'normal';

      const basicWeights = ['light', 'regular', 'medium', 'semibold', 'bold'];

      if (style.toLowerCase().includes(basicWeights)) {
        fontWeight = style.toLowerCase();
      }

      if (style.toLowerCase().match(matchItalic)) {
        fontStyle = 'italic';
        fontWeight = style.toLowerCase().match(matchWeight)[0];
        console.log(style.toLowerCase().match(matchWeight)[0]);
      }

      const styles = {
        fontFamily,
        fontWeight,
        fontStyle,
      };

      fontElements.push(
        <div style={styles} key={i}>
          {font.fontName.family} {font.fontName.style}
        </div>
      );
    });

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
        {fontElements}
      </div>
    );
  }
}
