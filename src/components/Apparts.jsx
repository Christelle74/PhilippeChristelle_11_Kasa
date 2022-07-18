import React, { useEffect, useState } from 'react' 
//useEffect, useState == hooks
import Card from './Card';
import {findApparts} from "../service/api";




function  Apparts () {
      const [datas, setDatas] = useState(null)
      const [isloading, setIsLoading] = useState(true)

      useEffect(() => {
        const allApparts = async()=> {
          const data = await findApparts();
          //console.log(data)
          setDatas(data)
          setIsLoading(false)
        }  
        allApparts()
      }, [])

  return (
    <div className="appartGallery">
      {isloading ? "Loading..." : datas.map((data) => (
          <Card data={data} key={data.id}/> //composant enfant avec clé unique       
          ))}  
    </div>
  )

}
export default Apparts




