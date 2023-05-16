import React, { useState, useEffect, Component } from 'react';
import Iframe from 'react-iframe'

//〒130-0013 東京都墨田区錦糸一丁目2番1号 アルカセントラル14階
//アルカセントラル
//35.697548717962505, 139.81148509979462
// <Map src=""
// Thanh Ha
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7668.288118005709!2d108.23862286362771!3d16.0580125300304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421746b8413f87%3A0xa09c6d9e2130bd5c!2sThanh%20H%C3%A0%20Coffee!5e0!3m2!1sja!2s!4v1684173580601!5m2!1sja!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// 108.23862286362771
// 16.0580125300304
const Map = (props) => {
  return (
    <Iframe src={props.src} width="100%" height="500px" style={{border:"0"}} allowfullscreen="" loading="lazy" ></Iframe>
  );
}

export default Map;
