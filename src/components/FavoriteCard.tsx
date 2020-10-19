import React from 'react';
import FavoriteButton from './FavoriteButton'; 

interface FavoriteCardProps {
    id: number; 
    isFavorited: boolean; 
  }

//standin for card component 
//bigger container rendering the cards. will never communicate w/ store
function FavoriteCard (props: FavoriteCardProps) {
    return(<div>
        <FavoriteButton id={props.id} isFavorited={props.isFavorited}></FavoriteButton>
    </div>)
}

export default FavoriteCard; 