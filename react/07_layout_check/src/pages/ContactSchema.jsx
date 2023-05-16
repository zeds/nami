import * as yup from 'yup'
 
export const schema = yup
  .object({
    onamae: yup
      .string()
      .required('お名前が入力されていません'),
    username: yup
      .string()
      .required('Username is required')
      .min(4, 'Username must be at least 4 letters long')
      .max(10, 'Username must not be 10 letters long'),
    email: yup
      .string()
      .email('Email address is wrong')
      .required('Email is required'),
    otoiawase: yup
      .string()
  })
  .required()