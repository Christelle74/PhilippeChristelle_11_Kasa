import { getApparts } from '../service/api.js'
import AppartDatas from '../utils/AppartDatas.js'

/**
 * Fonction faisant appel à la fonction fetch  getApparts()
 * Récupère les données du fetch (datas)
 * Map des datas pour convertir les données en classe "appartements"
 * @returns les données "appartement"
 */
export default async function appartInfo() {
  let datas = {}

  datas = await getApparts()
  //console.log(datas)

  const appartement = datas.map((info) => new AppartDatas(info))
  //console.log(appartement)

  return appartement
}
