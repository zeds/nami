import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { openModal } from '../features/modal/modalSlice'

const MenuAlign = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	margin-left: 5px;
	font-size: 1.5rem;
	color: white;
`

const MenuLink = styled(Link)`
	color: white;
	font-size: 1.8rem;
`

export const TextLinkIcon = ({
	iconify,	// "mdi:company"
	text,	// "会社概要"
	link	// "/company"
}) => {
	const dispatch = useDispatch();

	function clickLink() {
		dispatch(openModal({name:'menu',open:false}))
	}

	return (
		<MenuAlign>
			<Icon icon={iconify} width="30" color="white" />
			<MenuLink onClick={()=>clickLink()} to={link}>{text}</MenuLink>
		</MenuAlign>
	)
}

export default TextLinkIcon