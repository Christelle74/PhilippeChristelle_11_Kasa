/**
 * Fetch de données externes (datas)
 * @returns le tableau des données de tous les appartements
 */

export const getApparts = async () => {
  try {
    const response = await fetch(
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
    )
    const datas = await response.json()
    //console.log(datas)
    return datas
  } catch (error) {
    console.log(error)
  }
}
getApparts()
