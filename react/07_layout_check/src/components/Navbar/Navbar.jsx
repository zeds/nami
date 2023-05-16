import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './Navbar.styled'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MenuData } from '../../data/NavbarData';
import logo from '../../assets/TD.jpg'
import MenuModal from '../MenuModal'
import { openModal } from '../../features/modal/modalSlice'



const Navbar = () => {
	// call action
	const dispatch = useDispatch();

	const [show, setShow] = useState(false);

	// read state
	const { isMenuOpen } = useSelector((store) => store.modal);

	let history = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		// setShow(!show);
		dispatch(openModal({name:'menu', open: !isMenuOpen}))

	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		//if (id && location.pathname === '/') {
		//	scrollTo(id);
		//}

		history.push(to);
		// setShow(false);
		dispatch(openModal({name:'menu', open: false}))
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<NavbarContainer>
				<NavLogo to="/">
					<NavIcon src={logo} />
					Tips Discover
				</NavLogo>
				<MobileIcon onClick={handleClick}>
					{isMenuOpen ? <FaTimes /> : <CgMenuRight />}
				</MobileIcon>
				<MenuModal open={isMenuOpen}>

				</MenuModal>

				<NavMenu>
					{MenuData.map((el, index) => (
						<NavItem key={index}>
							<NavLinks>
								<Link to={el.to}>{el.text}</Link>
							</NavLinks>
						</NavItem>
					))}
				</NavMenu>

				{/* <NavMenu show={isMenuOpen}>
					{MenuData.map((el, index) => (
						<NavItem key={index}>
							<NavLinks>
								<Link to={el.to}>{el.text}</Link>
							</NavLinks>
						</NavItem>
					))}
				</NavMenu> */}
			</NavbarContainer>
		</IconContext.Provider>
	);
};

export default Navbar;