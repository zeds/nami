import React from 'react';
import { useQuery, useQueryClient } from "react-query"
import { useParams } from 'react-router-dom';
import { ArticleCategory } from "../api/articleApi"
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  // height: 100vh;
  h1 {
    text-align: center;
  }
  img {
    padding: 20px 50px;
   width: 100%;
   height: 400px;
   object-fit: cover;
  }
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(0,0,0,0.03);
  border-radius: 20px;
  img {
    height: 100%;
  }
  p {
    text-align: left;
  }
  @media (max-width: 2000px) {
    p {
      font-size: 20px;
    }
	}
	@media (max-width: 1200px) {
    p {
      font-size: 15px;
    }
  }
`;


const Service = ({
  category
}) => {

  const { markdownText } = "お元気\nですか"
  
  const {
      isLoading,
      isError,
      error,
      data: article
  } = useQuery(category, () => ArticleCategory(category), {

  })


   let loading
   let title
   let url_hero
   let content
   let sp = []
   const numbers = [1,2,3,4,5]

   if (isLoading) {
      loading = <p>Loading...</p>
   } else if (isError) {
      loading = <p>{error.message}</p>
   } else {
      console.log("data=", article.data)
      url_hero = null
      if (article.data[0].attributes.hero.data) {
        url_hero = import.meta.env.VITE_APP_DOMAIN + article.data[0].attributes.hero.data.attributes.url
      }
      title = article.data[0].attributes.title
      content = article.data[0].attributes.body

      //画像を境に、文章を分割する
      let sp_first = content.split('![')

      if ( sp_first.length === 1 ){
        //画像が1つも存在しない
        sp.push({img: false, text: content});
        console.log("写真なし:", sp);
      }else{
        for (let i = 0 ; i < sp_first.length; i++){
          console.log("sp_first=", sp_first[i])
          //jpgが含まれている行の場合、さらに分割
          let col_jpg = sp_first[i].indexOf('.jpg)')
          let col_jpeg = sp_first[i].indexOf('.jpeg)')
          let col = col_jpg === -1 ? (col_jpeg !== -1 ? col_jpeg : -1) : col_jpg;

          let obj = {}
          if (col !== -1) {
            let start = sp_first[i].indexOf('/uploads')
            let url = sp_first[i].slice(start,col)
            if (col_jpg !== -1) {
              obj = {img: true, text: import.meta.env.VITE_APP_DOMAIN+url+'.jpg'}
              sp.push(obj)

              //画像の後ろにもテキストがあるので取り出す
              obj = {img: false, text: sp_first[i].substr(col+5)}
              sp.push(obj)
            }else{
              obj = {img: true, text: import.meta.env.VITE_APP_DOMAIN+url+'.jpeg'}
              sp.push(obj)

              //画像の後ろにもテキストがあるので取り出す
              obj = {img: false, text: sp_first[i].substr(col+6)}
              sp.push(obj)
            }
          }else{
            obj = {img: false, text: sp_first[i]}
            sp.push(sp_first[i])
          }
        }
      }
      console.log("sp=", sp);
      window.scrollTo(0, 0)
   }
  
  return (
    <Container>
      <MainContainer>
        <img src={url_hero} alt="" />
        <p>{title}</p>
        <p>
        {sp.map((item, index) => (
            <div key={index}>
              {item.img?<img src={item.text} alt="" />:<ReactMarkdown children={item.text} />
              }
            </div>
        ))}
        </p>
      </MainContainer>
    </Container>
  )
}

export default Service