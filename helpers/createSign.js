require('dotenv').config()
const crypto = require('crypto')
const utf8 = require('utf8')
const SECRET_KEY = process.env.API_SECRET_KEY
const MOBILE_SECRET_KEY = process.env.API_MOBILE_SECRET_KEY

function bodyToString(body) {
  return Object.entries(body)
    .map((field) => field.join('='))
    .join('&')
}

function replaceCharacters(string) {
  return string
    .replaceAll(' ', '+')
    .replaceAll('*', '%2A')
    .replaceAll('!', '%21')
    .replaceAll('?', '%3F')
    .replaceAll('#', '%23')
    .replaceAll(':', '%3A')
    .replaceAll('@', '%40')
}

export default function sign(body, type = 'default') {
  const secret = type === 'default' ? utf8.encode(SECRET_KEY)  : utf8.encode(MOBILE_SECRET_KEY)
  const hash = crypto.createHmac('sha256', secret)
  const data = replaceCharacters(bodyToString(body))
  return hash.update(data).digest('hex').toString().toUpperCase()
}
