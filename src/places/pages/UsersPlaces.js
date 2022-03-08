import React from 'react';
import PlacesList from '../components/PlacesList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://pt.wikipedia.org/wiki/Empire_State_Building#/media/Ficheiro:Empire_State_Building_(aerial_view).jpg',
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
        imageUrl: 'https://pt.wikipedia.org/wiki/Empire_State_Building#/media/Ficheiro:Empire_State_Building_(aerial_view).jpg',
        address: '20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.748817,
            lng: -73.985428
        },
        creator:'u2'
    },
];

const UsersPlaces = () => {

    return <PlacesList items={DUMMY_PLACES} />

};

export default UsersPlaces;