import React from 'react'
import styled from 'styled-components';
// import image from './assets';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: gray;
`
const ThumbSection = styled.div`
  width: 100px;
  height: 400px;
  background: pink;
`
const MainSection = styled.div`
  width: 500px;
  height: 400px;
  background: blue;
`
const InfoSection = styled.div`
  width: 350px;
  height: 400px;
  background: green;
`

const p = document.querySelector('p');
const Mainpicture = document.querySelector('MainSection');
const thumbBar = document.querySelector('ThumbSection');


/* Declaring the array of image filenames */
const images = ['image1.jpg', `image2.jpg`, `image3.jpg`];

/* Declaring the alternative text for each image file */
const alts = {
  'image1.jpg' : 'image 1',
  'image2.jpg' : 'image 2',
  'image3.jpg' : 'image 3',
}
/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `assets/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
      p.textContent = e.target.alt;
    });
  }

  ReactDOM.render(
    <ActionButton />,
    document.getElementById('member')
  );


const ProductDetail = () => {
  return (
    <Container>
      <ThumbSection>
        <p></p>
      </ThumbSection>
      <MainSection></MainSection>
      <InfoSection></InfoSection>
    </Container>
  )
}
export default  ProductDetail

