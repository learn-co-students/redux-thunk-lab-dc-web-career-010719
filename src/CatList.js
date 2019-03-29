import React from 'react'

const CatList = (props) => {
  return (
    <ul>
      {props.catPics.map((pic) => {
        return <li key={pic.id}><img src={pic.url} alt="cat" /></li>
      })}
    </ul>
  )
}

export default CatList
