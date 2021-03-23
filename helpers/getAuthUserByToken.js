const getAuthUserByToken = async (url, token) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: token
         },
      })
    const data = await response.json()

    return data
}

export default getAuthUserByToken