import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import daikou from '../assets/daikou.jpg'


const LinkItem = styled(Link)`
	width: 100%;
	height: 100vh;
	padding: 10px;
	img {
		width: 100%;

	}
`


const Banner = () => {
  return (
		<LinkItem to="maker">
			<img src={daikou} alt="daikou" />
		</LinkItem>
  )
}

export default Banner