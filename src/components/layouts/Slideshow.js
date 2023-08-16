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

  useEffect(()=> {
      if (images === -1 || images !== props.images) {
          setImages(props.images);
          setCurrentInd(0);
      }
  }, [images, setImages, props.images]);

  if (images !== null && props.layout !== "visible" && images.length > 1) {
    return images !== -1 ? (
        <div id="slideshow" className={"multi " + props.layout}>
            <div id="slides" onClick={nextSlide}>
                {images ? images.map((img, i) => {
                    return currentInd === i ? 
                    <div key={i} className='slide show'><img src={img} alt={"slide-"+i} /></div>
                    : <div key={i} className='slide hide'><img src={img} alt={"slide-"+i} /></div>
                }) : <></>}
            </div>
        </div>
    )  : <React.Fragment />;
  }
  else {
    return images !== null && images !== -1 ? (
        <div id="slideshow" className={props.layout}>
            <div id="slides">
            {images.map((img, i) => {
                return <div key={i} className='slide'><img src={img} alt={"slide-"+i} /></div>
            })}
            </div>
        </div>
    )  : <React.Fragment />;
  }
}

export default Slideshow;
