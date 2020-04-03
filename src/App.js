import React from 'react';
import './Bg.css';
import './Header.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      animationClass: 'test',
      text: "Hi, i'm Zain. A mobile development and UI/UX enthusiast.",
      print: ''
    }
  }

  componentWillMount () {
    this.writeText()
  }

  writeText () {
    const formatedText = this.state.text.split('')
    let print = ''

    const loop = setInterval(() => {
      if (formatedText.length >= 1) {
        if (formatedText[0] === '1') {
          print += '<mark>'
          formatedText.shift()
        } else if (formatedText[0] === '2') {
          print += '</mark>'
          formatedText.shift()
        } else {
          print += formatedText.shift()
          this.setState({ print })
        }
      } else { clearInterval(loop) }
    }, 90)
  }
  
  render() {
    return (
      <div style={{flexDirection: 'column'}}>
        <div className={this.state.animationClass}>
          <div className='typing-text'>
            <h2 dangerouslySetInnerHTML={{__html: this.state.print}} />
          </div>
        </div>
        <div>
          <div className='container-footer'>
            <p>About Me</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
