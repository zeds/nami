import React from 'react'
import GlobalStyle, {MainContainer,
	Main,
	HiroSection,
	HeaderSection,
	CategorySection,
  CategoryItem,
	SearchComponent,
	KijiContainer,
	Aside,
	BtnLinkContainer,
	BtnLink
} from '../GlobalStyles'
import tips from '../assets/tips-1.json'
import Breadcrumb from '../components/Breadcrumb'

const Cosmetics = () => {
  const items = [
    {name:'Home', to:'/'},
    {name:'コスメ&ビューティー', to:'/cosmetics'},
  ]
	return (
    <>
    <Breadcrumb items={items}/>
    <MainContainer>
      <Main>
      <HeaderSection>
        <h2>　コスメ&ビューティー</h2>
      </HeaderSection>
      <CategorySection>
        {tips.map((item) => (
          <CategoryItem to="{`https://google.com`}" target="_blank">
            <img src={item[0]} alt=""/>
            <p>{item[2]}</p>
            <button>
              <a target='_blank' href={`https://amazon.co.jp/${item[1]}`}>
                amazonで見る
              </a>
            </button>
          </CategoryItem>
        ))}

      </CategorySection>


      </Main>
      <Aside>
        けけけ
      </Aside>
    </MainContainer>
    </>
	)
}

export default Cosmetics