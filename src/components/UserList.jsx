import React from 'react'
import UserCard from './UserCard'

const UserList = ({user}) => {
  return (
    <div>
       {user.map((user, value)=>(
        <UserCard
        key={value}
        username={user.username}
        email={user.email}
        />
       ))}
    </div>
  )
}

export default UserList;