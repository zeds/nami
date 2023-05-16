import { format, compareAsc } from 'date-fns'
import { useQuery } from "react-query"
import { ArticleLists } from "../api/articleApi"
import styled, { createGlobalStyle, css } from 'styled-components';
import {
	HiroSection,
	HeaderSection,
	CategorySection,
	CategoryBoxSection,
	KijiContainer
} from '../GlobalStyles'
import Footer from '../components/Footer'
// import img_hero from '../assets/takeo_hero.jpg'
import img_hero from '../assets/03s.jpg'

import cate_1 from '../assets/cate_1.jpg'
import cate_2 from '../assets/category-2.jpeg'
import cate_3 from '../assets/category-3.jpeg'
import cate_4 from '../assets/category-4.jpeg'
import cate_5 from '../assets/category-5.jpeg'
import cate_6 from '../assets/category-6.jpeg'
import kiji_1 from '../assets/kiji_1.jpg'
import ohotsuku from '../assets/ohotsuku.png'

import Calendar from '../components/Calendar'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import { useQueryClient } from 'react-query'
import { useEffect } from "react";


export const Container = styled.div`
	width: 100%;
	height: 100vh;
`

export const MainContainer = styled.main`
	max-width: 1240px;
	margin: 0 auto;
	display: flex;

	@media (max-width: 980px) {
		flex-direction: column;
	}

`

export const Main = styled.main`
	flex: 1;

`

export const LinkSection = styled(Link)`
	p {
		padding: 5px;
		font-size: 1.2rem;
	}
	@media (max-width: 580px) {
		p {
			font-size: 0.8rem;
		}
	}
`

export const LinkButton = styled(Link)`
	display: flex;
	justify-content: center;
	p {
		background: white;
		border-radius: 5px;
		border: 2px solid palevioletred;
		color: palevioletred;
		margin: 10px 1em;
		padding: 0.25em 1em;
	}
	@media (max-width: 580px) {
		p {
			font-size: 0.8rem;
		}
	}

`

export const Aside = styled.aside`
	width: 300px;

	@media (max-width: 980px) {
		width: 100%;
		padding: 0 10%;
		margin: 0 auto;
	}
`



const Home = () => {


	//useQuery、他のページから戻った時に呼ばれなくなった。
	// Query Invalidation
	// https://tanstack.com/query/v4/docs/react/guides/query-invalidation
	// queryClient.invalidateQueries()
	//※原因はこれではなく、useQueryのqueryKeyがarticleとなっていて、他でも使われていたため。

	const {
      isLoading,
      isError,
      error,
      data: data
//   } = useQuery('article', () => MarkDownLists("blog"), {
  } = useQuery('articleList', () => ArticleLists(),{
	select: data => data.sort((a,b) => b.id - a.id)
  })



  let loading
  let items = []

  let news
  let kiji
  let img_url

  if (isLoading) {
    loading = <p>Loading...</p>
  } else if (isError) {
    loading = <p>{error.message}</p>
  } else {
	kiji = data.map((item,index) => {
		if (item.attributes.category != 'blog') return
		if (item.attributes.hero.data){
			img_url = import.meta.env.VITE_APP_DOMAIN + item.attributes.hero.data.attributes.formats.thumbnail.url
		}else{
			img_url = null
		}
		let updatedAt = format(new Date(item.attributes.updatedAt),'yyyy/MM/dd')

		return (
			<KijiContainer to={`/article/${item.id}`} key={index}>
				<img src={img_url} alt=""/>
				<div>
					<p>{item.attributes.title}</p>
					<time>{updatedAt}</time>
				</div>
			</KijiContainer>
		)
	})
	news = data.map((item,index) => {
		if (item.attributes.category != 'news') return
		if (item.attributes.hero.data){
			img_url = import.meta.env.VITE_APP_DOMAIN + item.attributes.hero.data.attributes.formats.thumbnail.url
		}else{
			img_url = null
		}
		let updatedAt = format(new Date(item.attributes.updatedAt),'yyyy/MM/dd')

		return (
			<KijiContainer to={`/article/${item.id}`} key={index}>
				<img src={img_url} alt=""/>
				<div>
					<p>{item.attributes.title}</p>
					<time>{updatedAt}</time>
				</div>
			</KijiContainer>
		)
	})

  }



	return (
		<MainContainer>
			<Main>
				<HiroSection>
					<img src={img_hero} alt="takel" />
				</HiroSection>
				<HeaderSection>
					<h2>Tips ニュース</h2>
				</HeaderSection>
				{news}
				{/* <LinkSection to="https://google.com">
					<p>【 2023.04.23（日）開催】🏮春の糞祭り🏮</p>
				</LinkSection>
				<LinkSection to="https://google.com">
					<p>【 2023.04.08（土）- 04.09（土）開催】🏮第6回ホヤ祭り🏮</p>
				</LinkSection> */}


				<LinkButton>
					<p>イベント一覧を見る</p>
				</LinkButton>
				<HeaderSection>
					<h2>商品カテゴリー</h2>
				</HeaderSection>
				<CategorySection>
					<CategoryBoxSection to="/categories/cosmetics">
						<img src={cate_2} alt=""/>
						<p>コスメ&ビューティー</p>
					</CategoryBoxSection>
					<CategoryBoxSection>
						<img src={cate_3} alt=""/>
						<p>家電製品</p>
					</CategoryBoxSection>
					<CategoryBoxSection>
						<img src={cate_4} alt=""/>
						<p>おもちゃ</p>
					</CategoryBoxSection>
					<CategoryBoxSection>
						<img src={cate_5} alt=""/>
						<p>ペットの餌</p>
					</CategoryBoxSection>
					<CategoryBoxSection>
						<img src={cate_1} alt=""/>
						<p>食料品</p>
					</CategoryBoxSection>
				</CategorySection>
				<HeaderSection>
					<h2>商品一覧から探す</h2>
				</HeaderSection>
				<LinkButton>
					<p>全ての商品を見る</p>
				</LinkButton>
				
				<HeaderSection>
					<h2>特集</h2>
				</HeaderSection>


				<HeaderSection>
					<h2>最近の記事</h2>
				</HeaderSection>
				{kiji}

			</Main>
			<Aside>
				<Calendar></Calendar>
				<Banner></Banner>
			</Aside>
		</MainContainer>
	)
}

export default Home