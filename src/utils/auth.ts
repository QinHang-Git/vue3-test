const VueCookies = require('vue-cookies')

export function setUserToken(token:string):any{
  console.log(VueCookies.set('token',token,'0'));
  
  return VueCookies.set('token',token,'0')
}

export function getUserToken():string {
  return VueCookies.get('token')
}