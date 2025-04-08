import React from 'react'

const UserCard = ({username, email}) => {
  return (
    <div>
        <h1>{username}</h1>
        <h2>{email}</h2>
    </div>
  )
}

export default UserCard;