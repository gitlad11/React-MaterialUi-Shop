
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { Component } from 'react';
import ImagesForSlider from './ImagesForSlider'
import axios from 'axios';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselComponent extends Component {
    constructor(props){
      super(props)
      this.state = { 
        'slides' : [] 
      }
    }
    componentDidMount(){
      const items = axios.get('/slides').then((response) => {
      if(response.data.slides){
        this.setState({ 'slides' : response.data.slides })
        console.log(response.data.slides)
        }
      })
    }
    render() {
        return (
          <div style={{ borderRight : '1px solid lightgrey', borderLeft : '1px solid lightgrey', margin : "auto", width : "60%"}}>
            <Carousel showThumbs={true}
                      showStatus={false} 
                      infiniteLoop={true} 
                      autoPlay={true}
                      interval={3000}
                      transitionTime={400}>
            { this.state.slides.map((slide) =>
              <div style={{ cursor : "pointer" }}>
                    <img src={slide.preview} />
                    <h6 className="legend">{slide.legend}</h6>
              </div>
            )}
            </Carousel>
           </div> 
        );
    }
}
export default CarouselComponent