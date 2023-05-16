import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/TD.jpg'
import { Container, MainContainer } from '../GlobalStyles'



const HeaderContainer = styled.div`
    text-align: center;
    img {
        margin-top: 20px;
        width: 50px;
    }
`

const SectionContainer = styled.footer`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    img {
        background: red;
        margin-top: 20px;
        width: 50px;
    }
`

const LinkItem = styled(Link)`
    display: flex;
    flex-direction: row;
    color: black;
    padding: 10px 0;
    justify-content: center;
    font-size: 2rem;
    &:hover {
        background: lightgray;
    }
    @media (max-width: 700px) {
        font-size: 10px;
    }

`

const CopyrightContainer = styled.div`
    width: 100%;
    height: 60px;
    background: rgb(100,100,100);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`


const Footer = () => {
  return (
    <Container>
        <MainContainer>
            <HeaderContainer>
                <img src={logo} />
                <p>Tips Discover</p>
            </HeaderContainer>
            <SectionContainer>
                <div>
                    <LinkItem to="/company">会社概要</LinkItem>
                    <LinkItem to="/business">事業内容</LinkItem>
                </div>
                <div>
                    <LinkItem to="/google.com">全ての商品</LinkItem>
                    <LinkItem to="/contact">お問い合わせ</LinkItem>
                </div>
                <div>
                    <LinkItem to="/privacy">プライバシーポリシー</LinkItem>
                    <LinkItem to="/eclaw">特商法による表示</LinkItem>
                </div>
            </SectionContainer>
            <CopyrightContainer>
            &copy;2020-2023 Tips Discover, All Rights Reserved.
            </CopyrightContainer>
        </MainContainer>
    </Container>
  )
}

export default Footer