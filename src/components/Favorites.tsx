import React from 'react';
import {resourcesSlice} from '../store/resourcesSlice'; 

interface FavoriteProps {
    list: typeof resourcesSlice; 
}

const Favorites: React.FC<FavoriteProps> = () => {
    return <div>props.list</div>
}

export default Favorites;

//confusing: 
//what Resources has type Reducer 
//don't we need a Selector? 