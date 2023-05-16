import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	justify-content: start;
	background: black;
	padding: 0 10px;

	@media (max-width: 580px) {
		height: 60px;
	}
`;

export const NavLogo = styled(Link)`
	color: white;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	width: 250px;
	z-index: 10;
	img {
		margin: 0 1 0 0;
		border: 1px solid gray;
		background: white;
	}
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 4rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 30%);
		font-size: 4rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		display: none;
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;

	&:hover {
		background: red;
		color: #c8c9d8;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.span`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	a {
		color: white;
	}

	@media screen and (max-width: 960px) {
		// visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		visibility: true;
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;


