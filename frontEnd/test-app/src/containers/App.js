import React from 'react';
import '../styles/App.css';
import ZoomingCard from '../components/ZoomingCard'

class MainPage extends React.Component {

  state = {
    cardTransfrom: 'none'
  };

  componentDidMount() {
    console.log('component mounted');
  };

  componentWillUnmount() {
    console.log('component unmounted');
  };

  _onScrollCard = () => {
    const scrolled = document.getElementById('container').scrollTop;
    if(scrolled > 1) {
      this.setState({
        cardTransfrom: 'scale(0.9, 0.9)',
      });
    }
  };

  render() {
    return (
      <div style={{height: '100%'}}>
        <div id={'container'} onScroll={this._onScrollCard}>
          <ZoomingCard
            cardTransform={this.state.cardTransfrom}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
