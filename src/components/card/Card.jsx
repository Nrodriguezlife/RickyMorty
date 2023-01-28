import s from './Card.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 

import { addFavorite, deleteFavorite } from '../actions';
import { connect, Connect } from 'react-redux';
import { useEffect, useState } from 'react';

export  function Card(props) {
   conste [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(prop.id);

      }else{
         setIsFav(true);
         props.addFavorite(props)
      }
   }
   useEffect(()=>{
      props.myFavorites.length?.forEach((fav) => {
         if (fav.id === props.id){
            setIsFav(true);
         }
      }),
   },[props.myFavorites]);

   return (
//{
//   isFav ? (
 //     <button onClick={handleFavorite}//>❤️</button>
 //  ) : (
 //     <button onClick={handleFavorite}//>🤍</button>
 //  );
//}      
      <div className={s.div}> 
      <button onClick={()=>props.onClose()} className={s.close}>X</button>   
      <img className={s.imgRedonda} src={props.image} alt=" " />
      
      
       <Link to={`/detail/${props.id}`}>
         <h2 className={s.name}>{props.name}</h2>
         </Link>
      
        <div  className={s.divH2} >
          <h2 className={s.h2}>{props.species} </h2>
          <h2 className={s.h2}>{props.gender}</h2>
          </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },
      deleteFavorite: function(id){
         dispatch (deleteFavorite(id))
      }
   }   

}
export function mapStateToProps(){
   return {
      myFavorites: State.myFavorites 
   }

}

export default connect(mapStateToProps, mapDispatchToProps) (Card)