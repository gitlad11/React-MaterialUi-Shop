
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { Component } from 'react';
import ImagesForSlider from './ImagesForSlider'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselComponent extends Component {
    render() {
        return (
          <div style={{ borderRight : '1px solid lightgrey', borderLeft : '1px solid lightgrey', margin : "auto", width : "60%"}}>
            <Carousel 
                      showStatus={false} 
                      infiniteLoop={true} 
                      autoPlay={true}
                      interval={3000}
                      transitionTime={400}>
            { ImagesForSlider.map((slide) =>
              <div style={{ cursor : "pointer" }}>
                    <img src={slide.url} />
                    <h6 className="legend">{slide.heading}</h6>
              </div>
            )}
            </Carousel>
           </div> 
        );
    }
}
export default CarouselComponent