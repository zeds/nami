import { useQuery, useQueryClient } from "react-query"
import { ArticleEcLaw } from "../api/articleApi"
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb'

const Container = styled.div`
  white-space: pre-wrap;

  width: 100%;
  h1 {
    text-align: center;
  }
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;


const EcLaw = () => {
  window.scrollTo(0, 0)

  const items = [
    {name:'Home', to:'/'},
    {name:'特定商取引法', to:'/eclaw'},
  ]


  const {
      isLoading,
      isError,
      error,
      data: article
  } = useQuery('articleEcLaw', () => ArticleEcLaw(), {

  })

  let loading
  let title
  let content
  if (isLoading) {
    loading = <p>Loading...</p>
  } else if (isError) {
    loading = <p>{error.message}</p>
  } else {
    title = article.data[0].attributes.title
    content = article.data[0].attributes.body
  }
  
  return (
    <Container>
      <Breadcrumb items={items}/>

      <h1>{title}</h1>
      <MainContainer>
        <ReactMarkdown children={content} />
      </MainContainer>
    </Container>
  )
}

export default EcLaw