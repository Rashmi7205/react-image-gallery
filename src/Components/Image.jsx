import {Link} from 'react-router-dom'

function Image({src,id}) {
  const imageId = `/image/${id}`;
  return (
    <Link to={imageId}>
        <img 
        src={src}
        className="rounded-2xl w-72 h-72 m-4"
        />
    </Link>
  )
}

export default Image