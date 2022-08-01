import React, { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
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
    const navigate = useNavigate()
    const [datas, setDatas] = useState({tags:[], equipments:[], pictures:[], rating:'', host : {"name":'', "picture":''} })


    useEffect(() => {
        const allApparts = async()=> {
            const items =  await appartInfo();
            //console.log(items)
            const item = items.find((appart) => appart.id === id)
            // console.log(item) 
             if (!item) {
                navigate ("/ErrorPage");
        }
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
                        <Tags name={<ul>{datas.tags}</ul>}/> 
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


