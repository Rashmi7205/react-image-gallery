import { useEffect, useState } from "react"
import Image from "../Image"
import axios from "axios";

function ImageList() {

  const [count,setCount ]=useState({
    limit:20,
    offset:0,
  }) ;

  const [apiUrl,setApiUrl] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${count.offset}&limit=${count.limit}`)

  const [images,setImages] = useState([]);
  const [isLoadding,setIsLoadding] = useState(true);
  

  const getImages = async()=>{
    setIsLoadding(true);
    const {data} = await axios.get(apiUrl);
    setImages(data.photos);
  }

  useEffect(()=>{
   
    getImages();
    setIsLoadding(false);
  },[apiUrl]);

  return (
    <>
      {
        isLoadding?"Images are Loadding...":<h2 className="text-center font-bold text-xl">All Result Fetched</h2>
      }
     <div 
      className="w-none h-screen flex flex-wrap items-center justify-around p-8"
    >
        
        {
            images.length===0?'Loding images':images.map((image)=><Image  src={image.url} id={image.id}/>)
        }
        <div
        className="w-none flex items-center justify-center"
        >
        <button
        className="w-32 h-10 bg-sky-600 m-5 font-bold text-white text-lg rounded-lg cursor-pointer hover:bg-sky-400"
         disabled={count.offset<=0}
         onClick={()=>{
          setCount({...count,offset:count.offset-20})
          setApiUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${count.offset}&limit=${count.limit}`)
        }}
        >Prev</button>
        <button
         className="w-32 h-10 bg-sky-600 m-5 font-bold text-white text-lg rounded-lg cursor-pointer hover:bg-sky-400"
        disabled={count.offset>=132}
         onClick={()=>{
          setCount({...count,offset:count.offset+20})
          setApiUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${count.offset}&limit=${count.limit}`)
        }}
        >Next</button>
        </div>
        
    </div>
    
    </>
   
  )
}

export default ImageList