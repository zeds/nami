import React from 'react'
import styled from 'styled-components';
import Map from '../components/Map'
import Breadcrumb from '../components/Breadcrumb'
import {Container,MainContainer} from '../GlobalStyles'
import Iframe from 'react-iframe'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  text-align: left;
  gap: 10px;
  align-items: first baseline;
  margin-bottom: 10px;

  div {
    display: block;
    align-items: left;
    font-size: 2rem;
  }
  ul {
    display: block;
    align-items: left;
    font-size: 2rem;
    margin-left: 10px;
  }
  p:nth-child(odd){
    text-align: right;
    font-weight: bold;
    font-size: 2.3rem;
    margin-bottom: 10px;
  }
  p:nth-child(odd){
    font-weight: bold;
    text-align: right;
    padding: 0 10px;
  }


  @media (max-width: 700px) {
    font-size: 10px;
		grid-template-columns: 1fr;
		text-align: left;
		gap: 0;
		margin-bottom: 10px;
    p:nth-child(odd){
      text-align: left;
      margin-bottom: 0;
    }
    p:nth-child(even){
      padding-left: 10px;
      margin-left: 10px;
      margin-bottom: 10px;
    }
    div {
      padding-left: 10px;
    }
    ul {
      padding-left: 10px;
    }
  
  }

`


const MapContainer = styled.div`
  display: flex;
  padding: 10px;
  p {
    width: 350px;
  }
  div {
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Company = () => {
  window.scrollTo(0, 0)

  const items = [
    {name:'Home', to:'/'},
    {name:'会社概要', to:'/company'},
  ]

  return (
    <Container>
      <Breadcrumb items={items}/>
      <h1>会社概要</h1>
      <MainContainer>
        <GridContainer>
            <p>社名</p>
            <p>（合）TipsDiscover</p>
        </GridContainer>
        <GridContainer>
            <p>所在地</p>
            <p>〒130-0013　東京都墨田区錦糸一丁目2番1号　アルカセントラル14階</p>
        </GridContainer>
        <GridContainer>
            <p>本社</p>
            <p>〒130-0013　東京都墨田区錦糸一丁目2番1号　アルカセントラル14階</p>
        </GridContainer>
        <GridContainer>
            <p>設立</p>
            <p>2020年10月14日</p>
        </GridContainer>
        <GridContainer>
            <p>代表者</p>
            <p>塚中大造(tsukanaka daizoh)</p>
        </GridContainer>
        <GridContainer>
            <p>TEL&FAX</p>
            <p>042-312-3472</p>
        </GridContainer>
        <GridContainer>
            <p>決算期</p>
            <p>7月</p>
        </GridContainer>
        <GridContainer>
            <p>取引先</p>
            <ul>
                <li><a target='_blank' href='http://marushok.jp/'>株式会社 丸将木曽路家</a></li>
                <li><a target='_blank' href='https://glocal.bz/'>株式会社GLOCAL</a></li>
                <li><a target='_blank' href='https://www.takedasangyo.net/'>武田産業株式会社</a></li>
                <li><a target='_blank' href='https://www.maruwaseimen.co.jp/'>株式会社マルワ製麺</a></li>
                <li><a target='_blank' href='https://www.amazon.co.jp/'>Amazon</a></li>
                <li><a target='_blank' href='https://www.rakuten.co.jp/'>楽天</a></li>
                <li><a target='_blank' href='https://shopping.yahoo.co.jp/'>Yahoo</a></li>
                <li><a target='_blank' href='https://defytime.jp/contents/contents.html'>defytime Science Japan 株式会社</a></li>
                <li><a target='_blank' href='https://nebraska.jp/'>株式会社ネブラスカ</a></li>
                <li><a target='_blank' href='https://www.johokubank.jp/index.html'>取引銀行</a></li>
            </ul>
        </GridContainer>
        <GridContainer>
            <p>顧問</p>
            <div>
                <div>菊池総合法律事務所（霞が関）</div>
                <div>阿部税務会計事務所</div>
            </div>
        </GridContainer>
        <GridContainer>
            <p>沿革</p>
            <div>
                <div>2019年6月　埼玉にあるスーパーマーケット株式会社ヤオコーに在籍中、物販に興味を持ち始め個人事業主としてAmazonで販売を開始。</div>
                <br/>
                <div>2020年7月　売り上げが拡大するとともに会社を退職し法人化を決意し、合同会社Tips Discoverを設立。</div>
            </div>
        </GridContainer>
        <GridContainer>
            <p>事業内容</p>
            <p>Amazonといった大手ECモールを利用して消費者に商品を販売する小売業を営んでいる。 取り扱い商品、ジャンルについては、食品、美容品、日用品といった消耗品を取り扱っており、このショップを見れば全ての買い物が解決すると思われるような品揃えと満足良く価格帯、御社の商品のような高品質な商品の品揃え、ラインナップを目指しています。</p>
        </GridContainer>
        <GridContainer>
            <p>経営理念</p>
            <div>
              <div>１、【販売を通じお客様、お取引先の企業様、従業員一同の三方良しを実現させる】</div>
              <br/>

              <div>２、【地方創成に向けた取り組みを実現させる】
                  私達「Tips Discover」はお取引させて頂くメーカー様、全てのお客 様に満足や喜びを提供出来るように努力するのはもちろん、従業員が働きやすい環境作り、安定した事業体制を整える事で、お取引させて頂いた企業様の商品の流通と購入されたお客様との関係の構築をお手伝いをします。 それにより「三方良し」を実現に向けて日夜奮闘しております。 また、お届けする商品の質やお値段の面で満足して頂くのはもちろんの事 生産者保護とブランド維持の為の価格厳守。販路徹底、二次流通品の排除を揚げています。</div>
                  <br/>
              <div>３、ネットショッピングが蔓延になった今の時代、よりストアの運営とお客様の繋がりを大切に考えます。
                  私達「Tips Discover」はお取引させて頂く地方の生産者様、全てのお客様に満足や喜びを提供出来るようの努力をします。 個人の生産者様が年々数が無くなる中、お取引させて頂く生産者様の流通と購入されたお客様との関係の構築をお手伝いをします。 地方創成に向けた努力していきます。</div>
            </div>
        </GridContainer>


        {/* <div style="width: 100%">
      		<iframe width="770" height="510" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ja&amp;q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%A2%A8%E7%94%B0%E5%8C%BA%E9%8C%A6%E7%B3%B8%E4%B8%80%E4%B8%81%E7%9B%AE2%E7%95%AA1%E5%8F%B7+(hoge)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
          </iframe>
        </div> */}

{/* <Iframe url="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ja&amp;q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%A2%A8%E7%94%B0%E5%8C%BA%E9%8C%A6%E7%B3%B8%E4%B8%80%E4%B8%81%E7%9B%AE2%E7%95%AA1%E5%8F%B7+(hoge)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    width="770px" height="510px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
        id=""
        className=""
        display="block"
        position="relative">
          <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
        </Iframe> */}

        <MapContainer>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.1743666443194!2d139.8088350755108!3d35.697326529090084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188929ab1d928d%3A0x44b257fbff00c6f7!2z5pel5pys44CB44CSMTMwLTAwMTMg5p2x5Lqs6YO95aKo55Sw5Yy66Yym57O477yR5LiB55uu77yS4oiS77yRIOOCouODq-OCq-OCu-ODs-ODiOODqeODqyAxNOmajg!5e0!3m2!1sja!2s!4v1684173952937!5m2!1sja!2s"></Map>
          <div>
            <p>〒130-0013</p>
            <p>東京都墨田区錦糸一丁目2番1号</p>
            <p>アルカセントラル14階</p>
          </div>
        </MapContainer>

      </MainContainer>


    </Container>
  )
}

export default Company