import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from 'react';
import img1 from "../../../assets/img1.jpg";
import "./Slider.css";

const AdaptiveHeight = (slider) => {
    function updateHeight() {
        slider.container.style.height =
            slider.slides[slider.track.details.rel].offsetHeight + "px"
    }
    slider.on("created", updateHeight)
    slider.on("slideChanged", updateHeight)
}

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        },
        [AdaptiveHeight]
    )


    return (
        <>
        <div className="navigation-wrapper relative">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
            <img src={img1} alt="" className='' />
            </div>
            <div className="keen-slider__slide number-slide2"> 
              <img src={img1} alt="" className='w-1/2' />
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div className='flex justify-between absolute top-1/2 -translate-y-1/2 w-full'>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
  
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
      </>
    );
};

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={25}
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }
  

export default Slider;