import React, { useEffect, useState } from 'react';
//useEffect, useState == hooks
import Card from './Card';
import appartInfo from "../service/appartService.js";



/**
 * Fonction mise en place de la galerie d'appartements
 * @returns {JSX.Element} composant AppartsGallery
 */

export default function  AppartsGallery () {
      const [datas, setDatas] = useState(null)
      const [isloading, setIsLoading] = useState(true)

      useEffect(() => {
        const getAllApparts = async()=> {
          const gallery = await appartInfo();
          setDatas(gallery)
          //console.log(appart)
          setIsLoading(false)
        }  
        getAllApparts()
      }, [])

  return (
    <div className="appartGallery">
      {isloading ? "Loading..." : datas.map((data) => ( 
          <Card data={data} key={data.id}/> //composant enfant avec clé unique       
      ))}
    </div>
  )
}




