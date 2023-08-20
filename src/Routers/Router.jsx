import { Routes,Route } from "react-router-dom"
import ImageList from "../Components/ImageList/ImageList"
import ImagesDetails from "../Components/ImageDetails/ImagesDetails"
function Router() {
  return (
    <Routes>
        <Route path="/" element={<ImageList/>}/>
        <Route path="/image/:id" element={<ImagesDetails/>}/>
    </Routes>
  )
}

export default Router