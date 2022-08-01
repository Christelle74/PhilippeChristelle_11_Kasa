/**
 * Fetch de données externes (datas)
 * @returns le tableau des données de tous les appartements
 */

export const getApparts = async () => {
  try {
    const response = await fetch('/apparts.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const datas = await response.json()
    //console.log(datas)
    return datas.data
  } catch (error) {
    console.log(error)
  }
}
