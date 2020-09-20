import React from 'react';
 const Card =(props) =>{
   const  {id,name,email}=props;
return (

<div>
<img alt="robots"src="https://robohash.org/${props.name}?200*200" />
  <div>
  <h2>{id}</h2>
  <p>{name}</p>
  </div>
  </div>
);
 }

 export default Card;
