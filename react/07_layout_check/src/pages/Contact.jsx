import React, { useRef } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from 'react-hook-form'
import { schema } from './ContactSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components';
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb'

import { Container, MainContainer } from '../GlobalStyles'


const Frame = styled.div`
  max-width: 540px;
  margin: 0 auto;
  padding: 10px;

`;

const SectionHeader = styled.section`
  width: 100%;
  text-align: center;
  p {
    font-size: 12px;
    padding: 10px;

  }
  div {
    color: red;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  label {
    padding: 5px 0;
  }
  input {
    width: 100%;
    font-size: 2.5rem;
    padding: 5px;
  }
`

const Error = styled.span`
  color: red;
  font-size: 13px;
  padding-left: 4px;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
`;


const Contact = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  window.scrollTo(0, 0)

  const items = [
    {name:'Home', to:'/'},
    {name:'お問い合わせ', to:'/contact'},
  ]


  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      body: messageRef.current.value,
      title: 'お問い合わせ'
    };
    console.log(formData);
    axios.post(`${import.meta.env.VITE_APP_DOMAIN}/api/send-emails`, {"data":formData})
      .then(response => {
        console.log(response.data)
        alert("お問い合わせを受付ました")
      }).catch(error => {
        console.log(error)
        alert("エラーが発生しました。")
      })
  };

  return (
    <Container>
      <Breadcrumb items={items}/>
      <h1>お問い合わせ</h1>
      <Frame>
        <SectionHeader>
          <p>弊社 WEBサイトにご関心をお持ちいただきありがとうございます。</p>
          <p>弊社に対するお問い合わせは、以下のフォームよりお願いいたします。</p>
          <p>お問い合わせの内容を確認のうえ、担当者よりご連絡させていただきます。</p>
          <div>Capchaを登録予定：https://www.npmjs.com/package/react-google-recaptcha</div>
        </SectionHeader>
    
        <form onSubmit={handleSubmit}>
          <Section>
            <label htmlFor='onamae'>お名前</label>
            <div>
              <input type='text' ref={nameRef} placeholder='お名前' />
              <Error>{errors.onamae?.message}</Error>
            </div>
          </Section>
          <Section>
            <label htmlFor='email'>メールアドレス</label>
            <div>
              <input type='text' ref={emailRef} placeholder='email' />
              <Error>{errors.email?.message}</Error>
            </div>
          </Section>
          <br/>
          <br/>
          <label htmlFor='otoiawase' >お問い合わせ内容</label>
          <div>
            <Textarea ref={messageRef} />
            <p>{errors.otoiawase?.message}</p>
          </div>
          <Section>
            {/* <ReCAPTCHA sitekey={import.meta.env.VITE_APP_SITE_KEY} onChange={onChange}/> */}
            <input type='submit' />
          </Section>
        </form>
      </Frame>
    </Container>
  )
}

export default Contact