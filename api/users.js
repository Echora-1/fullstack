require('dotenv').config()
const axios = require('axios')
const MOBILE_SERVER = process.env.MOBILE_SERVER
const SERVER = process.env.SERVER
const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY

async function user({token}) {

  const config = {
    baseURL: MOBILE_SERVER,
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }

  try {
    const res = await axios.get(
      `/v1/user`,
      config
    )

    return res.data

  } catch (e) {
    return e.response.data
  }

}

async function  balances({id}) {

  const config = {
    baseURL: SERVER,
    headers: {
      'Authorization': `Bearer ${API_PUBLIC_KEY}`,
    },
    params: {
      trader: id
    }
  }

  try {
    const res = await axios.get(
      `/v1/balances`,
      config
    )

    return res.data

  } catch (e) {
    return e.response.data
  }

}

async function jwtToken({id}) {
  const config = {
    baseURL: SERVER,
    headers: {
      'Authorization': `Bearer ${API_PUBLIC_KEY}`,
    },
    params: {
      trader: id
    }
  }

  try {
    const res = await axios.get(
      `v1/get_own_jwt_token`,
      config
    )

    return res.data

  } catch (e) {
    return e.response.data
  }
}


async function csrfToken() {
  const config = {
    baseURL: MOBILE_SERVER,
  }

  try {
    const res = await axios.get(`/sanctum/csrf-cookie`, config)

    return res.data

  } catch (e) {
    return e.response.data
  }
}


export { user, balances, jwtToken, csrfToken }
