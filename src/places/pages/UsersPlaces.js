import React from 'react';
import { useParams } from 'react-router-dom';
import PlacesList from '../components/PlacesList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/mern-ce5b2.appspot.com/o/Empire_State_Building_(aerial_view).jpeg?alt=media&token=2b33313f-5e22-4a40-a583-8ce05682e739',
        address: '20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.748817,
            lng: -73.985428
        },
        creator:'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/mern-ce5b2.appspot.com/o/Empire_State_Building_(aerial_view).jpeg?alt=media&token=2b33313f-5e22-4a40-a583-8ce05682e739',
        address: '20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.748817,
            lng: -73.985428
        },
        creator:'u2'
    },
];

const UsersPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter((place)=> place.creator === userId);
    return <PlacesList items={loadedPlaces} />
};

export default UsersPlaces;