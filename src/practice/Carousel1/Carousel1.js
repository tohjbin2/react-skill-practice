import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { carouselData } from '../../../public/data/carousel';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function RecordCarousel2({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Slider className="slider">
      {/* <PrevBtn className="left-arrow" onClick={prevSlide} /> */}
      <PrevBtn>
        <ArrowBackIosNewIcon
          className="left-arrow"
          onClick={prevSlide}
          sx={{
            fontSize: 100,
            color: '#bba171',
          }}
        />
      </PrevBtn>

      {/* <NextBtn className="right-arrow" onClick={nextSlide} /> */}
      <NextBtn>
        <ArrowForwardIosIcon
          className="right-arrow"
          onClick={nextSlide}
          sx={{
            fontSize: 100,
            color: '#bba171',
          }}
        />
      </NextBtn>

      {SliderData.map((slide, index) => {
        return (
          <DataList
            // className={index === current ? 'slide active' : 'slide'}
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <SlideImg
                src={slide.imgSrc}
                alt="travel image"
                className="image"
              />
            )}
          </DataList>
        );
      })}
    </Slider>
  );
}

export default RecordCarousel2;

// -----start
const boxFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-15%);
  }
  70% {
    opacity: 1;
    transform: translateX(0);
  }
  `;

const DataList = styled.div`
  &.slide {
    opacity: 1;
    transition-duration: 1s ease;
  }
  &.slide.active {
    opacity: 1;
    transition-duration: 1s;
    /* transform: scale(1.08); */

    transition: all 0.5s;
    animation: ${boxFade} 1s;
  }
`;
// -----end

const Slider = styled.section`
  position: relative;
  /* height: 100vh; 원본*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* 원본
const NextBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
*/

const NextBtn = styled.span`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

/* 원본
const PrevBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
*/

const PrevBtn = styled.span`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const SlideImg = styled.img`
  /* width: 1000px; 원본 */
  /* height: 600px; 원본 */
  width: 450px;
  height: 600px;
  border-radius: 10px;
`;
