const VueCookies = require('vue-cookies')
const TokenKey = 'Bearer'


export function setUserToken(token:string):any{
  return VueCookies.set(TokenKey,token,'0')
}

export function getUserToken():string {
  return VueCookies.get(TokenKey)
}