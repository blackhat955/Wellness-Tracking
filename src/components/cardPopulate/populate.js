import React from 'react';
import Card from '../cards/cards';
import './populate.css';
import user1 from '../../assets/images/user1.jpeg';

const UserContainer = () => {
  const users = [
    {
      name: 'John Doe',
      gender: 'Male',
      speciality: 'Fitness Trainer',
      location: 'City, Country',
      experience: 5,
      imageUrl: user1
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      speciality: 'Yoga Instructor',
      location: 'Town, Country',
      experience: 3,
      imageUrl: user1
    },
    ,
    {
      name: 'Jane Smith',
      gender: 'Female',
      speciality: 'Yoga Instructor',
      location: 'Town, Country',
      experience: 3,
      imageUrl: user1
    },

    ,
    {
      name: 'Jane Smith',
      gender: 'Female',
      speciality: 'Yoga Instructor',
      location: 'Town, Country',
      experience: 3,
      imageUrl: user1
    },
    ,
    {
      name: 'Jane Smith',
      gender: 'Female',
      speciality: 'Yoga Instructor',
      location: 'Town, Country',
      experience: 3,
      imageUrl: user1
    },
    ,
    {
      name: 'Jane Smith',
      gender: 'Female',
      speciality: 'Yoga Instructor',
      location: 'Town, Country',
      experience: 3,
      imageUrl: user1
    },
    ,
    {
      name: 'Jane Smith',
      gender: 'Female',
      speciality: 'Yoga Instructor',
      location: 'Town, Country',
      experience: 3,
      imageUrl: user1
    }
    // Add more user objects as needed
  ];

return (
    < div className='container'>
        {users.map((user, index) => (
            <Card key={index} user={user} />
        ))}
    </div>
);
};

export default UserContainer;
