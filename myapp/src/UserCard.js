import React from 'react'

function UserCard (props) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px' }}>
      <h2>{props.idname}{props.id}</h2>
      <h2>Name : {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  )
}
export  default UserCard
