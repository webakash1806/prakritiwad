import React from 'react'

const ViewPost = ({title,description,image}) => {
  return (
    <div>'
       <p>{title}</p> 
       <p>{description}</p>
       <p>{image}</p>
       <button>Delete</button>
       <button>View</button>
    </div>
  )
}

export default ViewPost