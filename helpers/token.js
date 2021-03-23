import cookies from 'js-cookie'

const token = cookies.get('login') ? JSON.parse(cookies.get('login')).token : undefined

export default token