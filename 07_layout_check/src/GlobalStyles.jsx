import styled, { createGlobalStyle, css } from 'styled-components';
import { Link } from 'react-router-dom';

/**
	https://www.programcreek.com/typescript/?api=styled-components.createGlobalStyle
**/
const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
		/* white-space: pre-wrap; */
	}
	html {
		/* 16pxの62.5%=10px */
		font-size: 62.5%;
	}
	
	body {
		font-size: 1.6rem;
		font-family: 'Noto Sans';
	}
	h1 {
		font-size: 3.5rem;
	}
	h2 {
		font-size: 3rem;
	}
	h3 {
		font-size: 2.5rem;
	}
	h4 {
		font-size: 2rem;
	}
	p {
		font-size: 2rem;
	}
	@media (max-width:580px) {
		html {
			 font-size: 40%;
		}
	}
	
`;

export const Container = styled.div`
	width: 100%;
	text-align: center;
`

export const MainContainer = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	text-align: left;
	padding: 10px;
	height: 100%;
`


//記事のリンク
export const BtnLinkContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const BtnLink = styled(Link)`
	font-size: 18px;
	font-weight: bold;
	border: none;
	padding: 15px 50px;;
	background: red;
	color: white;
	/*指定なしの場合は黒*/
	background: ${props => props.background || "black"};
`

// export const MainContainer = styled.main`
// 	display: grid;
// 	grid-template-columns: 1fr 300px;
// 	background: gray;
// 	padding: 10px;
// 	max-width: 1240px;
// 	height: 2000px;
// 	margin: 0 auto;

// 	@media (max-width: 980px) {
// 		grid-template-columns: 1fr;
// 	}
// `;

export const Main = styled.main`
	background: white;
	padding: 10px;
`;

export const HiroSection = styled.section`
	margin-bottom: 50px;
	padding: 5px;
	img {
		width: 100%;
	}
`;

export const SearchComponent = styled.div`
	display: flex;
`;

export const HeaderSection = styled.section`
	padding: 20px 10px 10px 10px;
	margin-bottom: 20px;
	color: #ff7f00;
	h2{
		border-bottom: 2px solid #ff7f00;
		padding-left: 10px;
		padding-bottom: 10px;
	}
`
export const CategorySection = styled.section`
	display: grid;
	place-items: center;
	grid-template-columns: repeat(5,1fr);
	align-items: start;

	@media (max-width: 2000px) {
		grid-template-columns: repeat(6,1fr);
	}
	@media (max-width: 1240px) {
		grid-template-columns: repeat(5,1fr);
	}
	@media (max-width: 980px) {
		grid-template-columns: repeat(5,1fr);
	}
	@media (max-width: 840px) {
		grid-template-columns: repeat(4,1fr);
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(3,1fr);
	}
	@media (max-width: 580px) {
		grid-template-columns: repeat(2,1fr);
	}
`;
export const CategoryBoxSection = styled(Link)`
	width: 123px;
	height: 159px;
	font-size: 11px;
	margin: 0 auto;
	border-radius: 5px;
	border: 1px solid gray;
	margin-bottom: 10px;
	p {
		margin-top: 5px;
		text-align: center;
	}

	img {
		width: 100%;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		/*display: inline-box;*/
	}
`;
export const CategoryItem = styled.div`
	font-size: 11px;
	margin: 0 auto;
	border-radius: 5px;
	border: 1px solid gray;
  padding: 5px;
	p {
		margin-top: 5px;
		/* text-align: center; */
	}
  button {
    width: 100%;
  }

	img {
    width: 100%;
    height: 123px;
    object-fit: contain;
    /* height: 70%; */
    /* width: 100%; */
    /* height: 60%; */
    
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		/*display: inline-box;*/
	}
`;


export const KijiContainer = styled(Link)`
	display: flex;
	margin: 0 auto;
	border-bottom: 1px solid black;
	max-width: 1500px;
	padding: 20px;

	img {
		height: 100px;
	}
	div {
		display: flex;
		width: 100%;
		padding: 0 20px;
		flex-direction: column;
		justify-content: space-between;
		time {
			text-align: right;
			/*background: yellow;*/
		}
	}
`


export const RightContainer = styled.div`
	background: blue;
`


export const Aside = styled.aside`
	display: flex;
	flex-direction: column;
`;

export const Section2 = styled.div`
	display: flex;
	color: black;
	height: 100px;
	width: ${({ width }) => (width ? width : '100%')};
	background: ${({background}) => (background ? background : 'red')};
`;


export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Heading = styled.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
`;


export const Section = styled.section`
	display: flex;
	/*flex-direction: column;*/
	color: white;
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
	/*position: ${({ position }) => (position ? position : '')};*/
	width: ${({ width }) => (width ? width : 'auto')};
	/*min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};*/
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: black;
	}
`;

export default GlobalStyle;