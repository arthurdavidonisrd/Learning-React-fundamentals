import React from 'react'

const UserDetails = ({name, profession, age}) => {
  return (
    <>

        <p>{name} - {profession} - {age} </p>
       
        {age >= 18 ? (
            <p>Você é maior de idade.</p>

        ) : (
            <p>A idade informada não é válida.</p>
        )}
      
    </>
  )
}

export default UserDetails
