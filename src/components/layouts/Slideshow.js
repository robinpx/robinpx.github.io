import React, { useEffect, useState } from 'react';
import './Slideshow.css';

function Slideshow(props) {

  const [images, setImages] = useState(-1);
  const [currentInd, setCurrentInd] = useState(-1);

  const nextSlide = () => {
    if (currentInd+1 < images.length) {
        setCurrentInd(currentInd+1);
    }
    else {
        setCurrentInd(0);
    }
  }

  const prevSlide = () => {
    if (currentInd - 1 > -1) {
        setCurrentInd(currentInd-1);
    }
    else {
        setCurrentInd(images.length-1);
    }
}

  useEffect(()=> {
      if (images === -1 || images !== props.images) {
          setImages(props.images);
          setCurrentInd(0);
      }
  }, [images, setImages, props.images]);

  if (props.isClickable) {
    return images !== -1 ? (
        <div id="slideshow">
            {images.length !== 1 ? 
            <div id="left-arrow" onClick={() => prevSlide()}>
            </div> : <React.Fragment />}
            <div id="slides">
                {images.map((img, i) => {
                    return currentInd === i ? 
                    <div key={i} className='slide show'><img src={img} alt={"slide-"+i} /></div>
                    : <div key={i} className='slide hide'><img src={img} alt={"slide-"+i} /></div>
                })}
            </div>
            {images.length !== 1 ? 
            <div id="right-arrow" onClick={() => nextSlide()}>
            </div> : <React.Fragment/>}
        
            
        </div>
    )  : <React.Fragment />;
  }
  else {
    return images !== -1 ? (
        <div id="slideshow">
            <div id="cards">
            {images.map((img, i) => {
                return <div key={i} className='slide'><img src={img} alt={"slide-"+i} /></div>
            })}
            </div>
        </div>
    )  : <React.Fragment />;
  }
}

export default Slideshow;
