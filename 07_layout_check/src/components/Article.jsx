import React from 'react';
import { useQuery, useQueryClient } from "react-query"
import { useParams } from 'react-router-dom';
import { ArticleDetail } from "../api/articleApi"
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';
import { Container, MainContainer } from '../GlobalStyles'
import Map from '../components/Map'
import Iframe from 'react-iframe'


export const ExtMainContainer = styled(MainContainer)`
  white-space: pre-wrap;
  main {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    img {
      width: 90%;
      margin: 0 auto;
    }
  }
  section {
    img {
      display: block;
      width: 80%;
      margin: 0 auto;
    }
  }
`;

// article/3
const Article = () => {

  // params.id = 3
  const params = useParams()
  
  const {
      isLoading,
      isError,
      error,
      data: article
  } = useQuery('articleDetail', () => ArticleDetail(params.id), {

  })

  let loading
  let title
  let url_hero = ''
  let content

  if (isLoading) {
    loading = <p>Loading...</p>
  } else if (isError) {
    loading = <p>{error.message}</p>
  } else {

    const arr = article.data.attributes.body.split('\n')

    //hero画像
    if (article.data.attributes.hero.data) {
      url_hero = import.meta.env.VITE_APP_DOMAIN + article.data.attributes.hero.data.attributes.url
    }

    //タイトル
    title = article.data.attributes.title

    console.log("arr=", arr)

    content = arr.map((item,index) => {

      // リンク：!link
      const ret_url = item.indexOf('!link')
      if (ret_url >= 0) {
        console.log("### リンク")

        return (
          <div key={index}>
            <a href={arr[index+1]} target="_blank">{arr[index+1]}</a>
          </div>
        )
      }

      // 地図：!map
      //地図は2行で構成されているため、2行目のテキストを描画しないようにする
      const ret_map = item.indexOf('!map')
      if (ret_map >= 0) {
        console.log("### iframe")
        let sp_iframe = arr[index+1].split('src="')
        sp_iframe = sp_iframe[1].split('"')
        return (
          <div key={index}>
            <Iframe src={sp_iframe[0]} width="100%" height="400"></Iframe>
          </div>
        )
      }

      // 画像
      const ret_img = item.indexOf('![')
      if (ret_img >= 0) {
        console.log("### 画像")
        const ret = item.split('/uploads/')
        const img_url = import.meta.env.VITE_APP_DOMAIN + '/uploads/' + ret[1]
        //最後に)がついてるので取り除く
        const img_trim = img_url.slice(0,-1)

        return (
          <div key={index}>
            <img src={img_trim} alt="" />
          </div>
        )
      }

      // 改行
      if ( item.length === 0 ) {
        console.log("### 改行")
        return (
          <div key={index}>
            <br/>
          </div>
        )
      }


      if ( arr[index-1] == '!link'){
        return(
          <div></div>
        )
      }

      if ( arr[index-1] == '!map'){
        return(
          <div></div>
        )
      }


      console.log("### マークダウン")
      //markdown テキスト
      return (
        <div key={index}>
          <ReactMarkdown children={item} />
        </div>
      )
    })
    window.scrollTo(0, 0)
  }
  
  return (
    <Container>
      <ExtMainContainer>
        <br/>
        <h2>{title}</h2>
        <br/>

        <main>
          {url_hero ? <img src={url_hero} alt="" /> : ''}
        </main>

        {/* <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15336.49911259741!2d108.2264846563339!3d16.059013483581214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421746b8413f87%3A0xa09c6d9e2130bd5c!2sThanh%20H%C3%A0%20Coffee!5e0!3m2!1sja!2s!4v1684174040192!5m2!1sja!2s"/> */}

        <section>
          {content}
        </section>
      </ExtMainContainer>


    </Container>
  )
}

export default Article