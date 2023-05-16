import { useQuery, useQueryClient } from "react-query"
import { ArticleDetail } from "../api/articleApi"
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';


const Container = styled.div`
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


const MDApi = ({
  id
}) => {
  const {
      isLoading,
      isError,
      error,
      data: article
  } = useQuery('articleDetail', () => ArticleDetail(id), {

  })

  let loading
  let title
  let content
  if (isLoading) {
    loading = <p>Loading...</p>
  } else if (isError) {
    loading = <p>{error.message}</p>
  } else {
    console.log(article.data[0])
    // title = article.data[0].attributes.title
    // content = article.data[0].attributes.body
  }
  
  return (
    <Container>
      <h1>{title}</h1>
      <MainContainer>
        <ReactMarkdown children={content} />
      </MainContainer>
    </Container>
  )
}

export default MDApi