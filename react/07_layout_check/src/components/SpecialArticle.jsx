import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from "react-query"
import { BlogDetail } from "../api/blogsApi"
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 400px;
  }

`


const Blog = () => {
  const [newTodo, setNewTodo] = useState('')
  const queryClient = useQueryClient()

  const params = useParams()
  console.log("params=", params.id)


  const {
      isLoading,
      isError,
      error,
      data: blogs
  } = useQuery('blogs', BlogDetail(params.id), {
      // select: data => data.sort((a, b) => b.id - a.id)
  })

  let content
  let title = "あいうえお"
  let url_hero
  if (isLoading) {
      content = <p>Loading...</p>
  } else if (isError) {
      content = <p>{error.message}</p>
  } else {
      console.log("##blogs=", blogs)
      url_hero = import.meta.env.VITE_APP_DOMAIN + blogs.data.attributes.hero.data.attributes.url

      content = blogs.data.map((blog) => {
        console.log("blog=",blog.attributes.title)
        let htmlData = blog.attributes.body
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlData, 'text/html'); // HTML データを DOM ツリーに変換

        // HTML 上の img 要素を取得する
        const imgElement = doc.querySelector('img'); // 抽出したい要素を選択
        const split = imgElement.src.split("/uploads")
        console.log("split=", split);

        // 新しい画像の URL を設定する
        const newSrc = `${import.meta.env.VITE_APP_DOMAIN}/uploads${split[1]}`
        console.log("img url=", newSrc)

        // img 要素の src 属性を新しい URL に変更する
        imgElement.src = newSrc;

// parsedDocument を再び HTML 文字列に変換
const restoredHtmlString = new XMLSerializer().serializeToString(doc);

console.log(restoredHtmlString); // '<div>Hello, World!</div>' という元の HTML 文字列が表示される


          return (
            <>
              <div>{blog.attributes.title}</div>
              {/* {element.innerHTML} */}
              <div dangerouslySetInnerHTML={{ __html: restoredHtmlString }} />
            </>
          )
      })
  }



  
  return (
    <Container>
      <img src={url_hero} alt="" />
      <h1>{title}</h1>

      <MainContainer>
        {content}
      </MainContainer>
    </Container>

  )
}

export default Blog