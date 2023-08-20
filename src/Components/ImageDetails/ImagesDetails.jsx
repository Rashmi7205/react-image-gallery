import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Image from '../Image';

function ImagesDetails() {
    const {id} = useParams();
    const [imageData,setImageData] = useState({});

    const getImageDetails = async ()=>{
        const {data} = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        
        setImageData(data.photo);
    }

    useEffect(()=>{
        getImageDetails();
        console.log(imageData) ;  
    },[]);

  return (
    <div 
    className='w-none p-12 flex items-center justify-between bg-sky-400 '>
        <div>
            <Image src={imageData.url} id={imageData.id}/>
        </div>
        <div className='p-10 text-white text-justify'>
          <h1 className='text-5xl m-10 text-bold '>{imageData.title}</h1>
          <p className='text-2xl m-10'>{imageData.description}</p>
        </div>
    </div>
  )
}

export default ImagesDetails