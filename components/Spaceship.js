const React = require('react');

class Spaceship extends React.Component {
  render(){
    debugger;
    return(
      <div>
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;