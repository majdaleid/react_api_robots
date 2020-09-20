import React  from 'react';
import Card from './Card';
//import {robots} from './Robots';

const Cardlist= ({ robots }) =>{
  return (
    <div>
    {
robots.map((user, i)=>{
return (

 <Card
 key={i}
  id={robots[i].id}
  name={robots[i].name}
  />
);
})
}

</div>

);
}
export default Cardlist;



/*
  return (
  <div className="App">


   <Card  id={robots[0].id} name={robots[0].name}  />
  <Card  id={robots[1].id} name={robots[1].name} />
  <Card  id={robots[2].id} name={robots[2].name} />
  </div>
);

}

export  default Cardlist;
*/
