import sign from "../helpers/createSign";
require('dotenv').config()
const axios = require('axios')
const MOBILE_PUBLIC_KEY = process.env.API_MOBILE_PUBLIC_KEY
const MOBILE_SERVER = process.env.MOBILE_SERVER

async function sanctumRegister({ email, name, password, passwordConfirmation }) {
  const data = {
    email,
    name,
    password,
    password_confirmation: passwordConfirmation
  }

  const config = {
    baseURL: MOBILE_SERVER,
    headers: {
      'X-Mobile-Signature': `${sign(data, 'mobile')}`,
      'X-Mobile-Public-Key': MOBILE_PUBLIC_KEY,
    },
    params: data
  }
  try {
    const res = await axios.post(`/sanctum/register`, {}, config)
    return res.data
  } catch (e) {
    return e.response.data
  }
}

export { sanctumRegister }
