import nookies from 'nookies';

const checkAuthAndRedirect = async (url, ctx) => {

  if(ctx.req && !ctx.req.cookies.login)
  {
    ctx.res.writeHead(302, { 
      Location: '/sign-in'
    })
    ctx.res.end()
  }
  else if(!ctx.req && !nookies.get(ctx).login){
    window.location.replace('/sign-in')
  }

  const authInfo =  JSON.parse(nookies.get(ctx).login)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: authInfo.token
     },
  })

  const data = await response.json()

  if(!data.isAuth && !ctx.req){
    window.location.replace('/sign-in')
  }
  
  if(!data.isAuth && ctx.req){
       ctx.res.writeHead(302, { 
         Location: '/sign-in'
       })
       ctx.res.end()
  }

  return data

}

export default checkAuthAndRedirect