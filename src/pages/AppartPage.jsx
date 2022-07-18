import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Dropdown from '../components/Dropdown';
import Stars from '../components/Rating';
import Tags from '../components/Tags';
// import Star from "../assets/img/star.png";
import { findApparts } from '../service/api';

const AppartPage = () => {
    const id = useParams();
    console.log(id)
    
    const [datas, setDatas] = useState({tags:[], equipments:[], pictures: [], rating:'', host : {"name":'', "picture":''} })
    //const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const allApparts = async()=> {
            const items = await findApparts();
            console.log(items)
        
            const item = items.find(appart=>appart.id === id.id)
            console.log(item)
            setDatas(item) 
         //setIsLoading(false)
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
                    <div className='tags'>{datas.tags.map((tag)=>(
                        <Tags key={tag} name={tag}/>
                    ))}</div>
                </div>

                <div className='hebergerInfo'>
                    <div className='heberger'>
                        <span>{datas.host.name}</span>
                        <img src={datas.host.picture} alt="" />
                    </div>
                    <div className='stars'>
                        <Stars rating={datas.rating} />
                    </div>
                </div>
            </div>
            
            <div className='descriptionSection'>
                <Dropdown  title="Description" text={datas.description}/>
                <Dropdown title="Equipements" text={
                    <ul>
                        {datas.equipments.map((equipment)=><li>{equipment}</li>)}
                    </ul>
                }/>
            </div>    
        </div>
     );
 };

export default AppartPage;




//  import { Component } from 'react';
//  import { useParams} from "react-router-dom"


 
//  class AppartPage extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             appartData:{},
//             dataIsLoading: false
//         };
//     }


//      // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() { 
//         const {id} = this.props.params;
//         console.log(id)

//         fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
//         )
//         .then((response) => response.json())
//         .then((jsonResponse) => {
//             this.setState({ appartData: jsonResponse, dataIsLoading:true}); 
//            //console.log(jsonResponse)
//         }) ;

// }


//     render() {  
       
//         const {appartData} = this.state;
//         //if(!dataIsLoading) return <div><h2>Loading ....</h2></div>
//         const {description, equipements, host,  location, pictures, rating, tags, title} = appartData;
//      console.log(appartData)
        
//      return (
//             <div>

//            <img className="carrousel" src="{pictures}" alt="" /> 
//             <div className='appartHeader'>
//                 <div className='appartTitle'>
//                     <h3>{title}</h3>
//                     <span>{location}</span>
//                 </div>

//                 <div className='heberger'>
//                     <span>{host}</span>
//                     <img src={host} alt="" />
//                 </div>
//             </div>

//             <div>
//                 <div className='tags'>{tags}</div>
//                 <div className='stars'>{rating}</div>
//             </div>            
                 
//             <div>
//                 <div>Description
//                     <p>{description}</p>
//                 </div>
//                 <div>Equipements
//                     <p>{equipements}</p>
//                 </div>
//             </div>   
//             </div>
//         );
//     }
//  }

//  export default (props) => (
//     <AppartPage {...props} params={useParams()} />
//  );

 