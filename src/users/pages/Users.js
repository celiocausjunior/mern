import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Celio Caus',
      image:
        'https://firebasestorage.googleapis.com/v0/b/dialogflow2tn.appspot.com/o/fotos%2FB352E8DA-6B19-4963-854C-CDD3A0B16558.jpeg?alt=media&token=f638146b-586e-4382-b474-c3db5fbe1af9',
        places:3
    },
  ]

  return <UsersList items={USERS} />
}

export default Users;
