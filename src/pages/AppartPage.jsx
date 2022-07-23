import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Dropdown from '../components/Dropdown';
import Stars from '../components/Rating';
import Tags from '../components/Tags';
import appartInfo from '../service/appartService.js';



/**
 * Creation de la page d'information de l'appartement selon son ID
 * 
 * @returns {JSX.Element} Composant AppartPage
 */

const AppartPage = () => {
    const {id} = useParams();
    //console.log(id)
    
    const [datas, setDatas] = useState({tags:[], equipments:[], pictures:[], rating:'', host : {"name":'', "picture":''} })


    useEffect(() => {
        const allApparts = async()=> {
            const items =  await appartInfo();
             //console.log(items)
             const item = items.find((appart) => appart.id === id)
             //console.log(item)
            
            setDatas(item) 
        }
        
        allApparts()
    }, [])


    return (
        <div className='appartContainer'>
            <div className="carrousel"> <Carrousel images={datas.pictures}/> </div>
            <div className='appartHeader'>
                <div className='appartInfo'>
                    <h3 className='appartTitle'> {datas.title}</h3>
                    <h4 className='location'>{datas.location}</h4>
                    <div className='tags'>
                        {/* {datas.tags.map((tag, index)=>(  */}
                        <Tags name={<ul>{datas.tags}</ul>}/> 
                        {/* // key={index} name={tag}/>))}  */}
                    </div>
                </div>

                <div className='hebergerInfo'>
                    <div className='heberger'>
                        <span>{datas.host.name}</span>
                        <img src={datas.host.picture} alt="" />
                    </div>
                    <div className='stars'>
                        <Stars  rating={datas.rating} />
                    </div>
                </div>
            </div>
            
            <div className='descriptionSection'>
                <Dropdown  title="Description" text={datas.description}/>
                <Dropdown title="Equipements" text={
                    <ul className='equipmentsList'>{datas.equipments}
                    </ul>
                }/>
            </div>    
        </div>
    );
};

export default AppartPage;




//  import { Component } from 'react';
//   //import { useParams} from "react-router-dom"


 
// class AppartPage extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             tags:[], equipments:[], pictures: [], rating:'', host : {"name":'', "picture":''} 
//         };
//     }


//   // ComponentDidMount is used to
//       //execute the code 
//     componentDidMount() { 
//         const {id} = this.props.params;
//         console.log(id)

//         const allApparts = async()=> {
//         const items = await findApparts();
//         //console.log(items)

//         const item = items.find(appart=>appart.id === id.id)
//         console.log(item)
//         setDatas(item) 
//         }

//         allApparts()
//     }
     
//     render() {  
//         return (
//             <>
//             <div className="carrousel"> <Carrousel images={this.state.datas.pictures}/> </div>
//             <div className='appartHeader'>
//                 <div className='appartInfo'>
//                     <h3 className='appartTitle'> {datas.title}</h3>
//                     <h4 className='location'>{datas.location}</h4>
//                     <div className='tags'>{datas.tags.map((tag)=>(
//                         <Tags key={tag} name={tag}/>
//                     ))}</div>
//                 </div>

//                 <div className='hebergerInfo'>
//                     <div className='heberger'>
//                         <span>{datas.host.name}</span>
//                         <img src={datas.host.picture} alt="" />
//                     </div>
//                     <div className='stars'>
//                         <Stars  rating={datas.rating} />
//                     </div>
//                 </div>
//             </div>
            
//              <div className='descriptionSection'>
//                  <Dropdown  title="Description" text={datas.description}/>
//                  <Dropdown title="Equipements" text={
//                      <ul>
//                          {datas.equipments.map((equipment)=><li key={equipment}>{equipment}</li>)}
//                      </ul>
//                  }/>
//              </div>    
         
//          </>
//          );
//      }
//   }
 
//   export default (props) => (
//      <AppartPage {...props} params={useParams()} />
//   );

