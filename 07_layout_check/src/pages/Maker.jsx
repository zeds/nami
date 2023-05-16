import React from 'react'
import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb'
import { Container, MainContainer } from '../GlobalStyles'


// const Container = styled.div`
//   white-space: pre-wrap;
//   width: 100%;
//   h1 {
//     text-align: center;
//   }
// `;

// const MainContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   p {
//     margin-bottom: 20px;
//   }
// `
const Section = styled.section`
  header {
    color: gray;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 8px 0;
  }
  p {
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px;
  }

`

const Maker = () => {

  const items = [
    {name:'Home', to:'/'},
    {name:'メーカー代行', to:'/maker'},
  ]

  return (
    <Container>
      <Breadcrumb items={items}/>
      <h1>【メーカー代行販売事業】</h1>
      <MainContainer>
        <p>
          当社は、メーカー代行販売事業を行っており、以下に当社の事業内容を説明します。
        </p>
        <Section>
          <header>
            1. メーカー代理販売
          </header>
          <p>
          Amazonといった大手ECモールを利用して消費者に商品を販売する小売業を営んでいる。
取り扱い商品、ジャンルについては、食品、美容品、日用品といった消耗品を取り扱っており、このショップを見れば全ての買い物が解決すると思われるような品揃えと満足良く価格帯、御社の商品のような高品質な商品の品揃え、ラインナップを目指しています。
          </p>
        </Section>
        <Section>
          <header>
            2. 市場調査
          </header>
          <p>
            当社では、取り扱う商品について、市場調査を行っています。市場リサーチの結果から、最適な販促方針を打ち立て、より効果的な販売促進活動を行っています
          </p>
        </Section>
        <br/>
        <br/>
      </MainContainer>
        <h1>【大手ECにおけるネット販売事業】</h1>
      <MainContainer>

        <p>弊社では、インターネットを通じた商品の販売事業を行っています。以下に、弊社の事業内容を説明します。</p>
        <Section>
          <header>
            1. 商品の販売
          </header>
          <p>
            弊社では、インターネット上に設置したオンラインショップにて、多種多様な商品の販売を行っています。取り扱う商品の一例としては、化粧品、食品や家電製品などがあります。顧客の多様なニーズに対応するため、幅広いジャンルの商品を揃えています。
          </p>
        </Section>
        <Section>
          <header>
            2. 商品の発送と配送
          </header>
          <p>
            弊社では、顧客からの注文を受け付けた商品の発送・配送作業を行っています。注文内容に応じて、配達先までの最適な配送手段を検討し、顧客に迅速かつ正確な配送を行っています。
          </p>
        </Section>
      </MainContainer>

    </Container>
  )
}

export default Maker