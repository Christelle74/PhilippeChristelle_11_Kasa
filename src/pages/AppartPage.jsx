//import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
//import { findApparts } from '../service/api';


 import { Component } from 'react';

 class AppartPage extends Component {
    constructor(props){
        super(props)
        this.state={
            appartData:[],
            dataIsLoading: false
        };
    }


     // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
        )
        .then((response) => response.json())
        .then((jsonResponse) => {
            console.log(jsonResponse)
            this.setState({ appartData: jsonResponse, dataIsLoading:true});
        }) ;
  }


    render() {  //const {id} = this.props.match.params
        const {appartData, dataIsLoading} = this.state;
        if(!dataIsLoading) return <div><h2>Loading ....</h2></div>
        const {description, equipements, host,  location, pictures, rating, tags, title} = appartData;
     console.log(appartData)
        
     return (
            <div>

           <img className="carrousel" src="{pictures}" alt="" /> 
            <div className='appartHeader'>
                <div className='appartTitle'>
                    <h3>{title}</h3>
                    <span>{location}</span>
                </div>

                <div className='heberger'>
                    <span>{host}</span>
                    <img src={host} alt="" />
                </div>
            </div>

            <div>
                <div className='tags'>{tags}</div>
                <div className='stars'>{rating}</div>
            </div>            
                 
            <div>
                <div>Description
                    <p>{description}</p>
                </div>
                <div>Equipements
                    <p>{equipements}</p>
                </div>
            </div>   
            </div>
        );
    }
 }

// export default AppartPage;

 //const AppartPage = () => {
//     const allApparts = async()=> {
//       const data = await findApparts();
//       console.log(data)

//       setDatas(data)
//       setIsLoading(false)
     


//     const id = useParams();
//     const appartInfo = allApparts.find(appart=appart.id === id.id)
//     console.log(appartInfo)
//     let [datas, setDatas] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         oneAppart()
//       }, [])


//      }

//     return (
//         <div>hello

//              {/* <img className="carrousel" src="{data.pictures}" alt="" /> 
//              <div className='appartHeader'>
//                 <div className='appartTitle'>
//                     <h3> {isLoading ?  datas.title : "Loading..."}</h3>
//                     <span>{isLoading ? datas.location : "Loading..."}</span>
                
//                 <div className='heberger'>
//                     <span>{isLoading ? datas.host.name : "Loading..."}</span>
//                     <img src={isLoading ? datas.host.picture : "Loading..."} alt="" />
//                 </div>
//                 </div>
//                 <div>
//                     <div className='tags'>{isLoading ? datas.tags : "Loading..."}</div>
//                     <div className='stars'>{isLoading ? datas.rating : "Loading..."}</div>
//                 </div>
//             </div>
//             <div>
//                 <div>Description
//                     <p>{isLoading ? datas.description : "Loading..."}</p>
//                 </div>
//                 <div>Equipements
//                     <p>{isLoading ? datas.equipements : "Loading..."}</p>
//                 </div>
//             </div>   */}
//         </div>
//     );
 //};

export default AppartPage;