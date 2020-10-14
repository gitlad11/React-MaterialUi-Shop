import React from 'react'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Tooltip from '@material-ui/core/Tooltip';

class ScrollButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return (
        <Tooltip title='Верх'>
          <Fab onClick={() => { this.scrollToTop() }}
      					style={{margin : '3px'}} 
						 variant="default"
						 aria-label="Верх"
						 variant="extended">
        				<NavigationIcon />
      		</Fab>
        </Tooltip>
          );
   }
} 
export default ScrollButton