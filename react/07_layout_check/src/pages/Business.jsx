import React from 'react'
import styled from 'styled-components';
import Service from '../components/Service'
import Breadcrumb from '../components/Breadcrumb'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
	white-space: pre-wrap;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  img {
    width: 100%;
    padding: 50px 50px 10px 50px;
    object-fit: contain;
  }
	@media (max-width: 2000px) {
    grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 800px) {
    grid-template-columns: 1fr;
	}
`

const Business = () => {

  const items = [
    {name:'Home', to:'/'},
    {name:'事業内容', to:'/business'},
  ]

  return (
    <Container>
      <Breadcrumb items={items}/>

      <h1>事業内容</h1>
      <GridContainer>
        <Service category="business-1" />
        <Service category="business-2" />
        <Service category="business-3" />
        <Service category="business-4" />
        <Service category="business-5" />
        <Service category="business-6" />
      </GridContainer>
    </Container>
  )
}

export default Business