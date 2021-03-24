import nookies from 'nookies';

const checkAuthAndRedirect = async (url, ctx) => {

  console.log('checkAuth step 1')

  if(ctx.req && !ctx.req.cookies.login)
  {
    console.log('checkAuth step 2')

    ctx.res.writeHead(302, { 
      Location: '/sign-in'
    })
    return ctx.res.end() 
  }
  
  else if(!ctx.req && !nookies.get(ctx).login){
    console.log('checkAuth step 3')
    return window.location.href = '/account' 
  }
  console.log('checkAuth step 4')
  const authInfo =  JSON.parse(nookies.get(ctx).login)

  console.log('checkAuth step 5')

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: authInfo.token
     },
  })

  console.log('checkAuth step 6')
  const data = await response.json()
  console.log('checkAuth step 7: ', data)

  if(!data.isAuth && !ctx.req){
    return window.location.href = '/account'
  }
  
  if(!data.isAuth && ctx.req){
       ctx.res.writeHead(302, { 
         Location: '/sign-in'
       })
       return ctx.res.end()
        
  }

  return data

}

export default checkAuthAndRedirect