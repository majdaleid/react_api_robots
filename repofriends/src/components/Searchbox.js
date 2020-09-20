import React from 'react';
/*
markComplete(e){
  console.log("aaaaa");
//  with bind
}
*/
 const Searchbox =({searchChange} ) =>{
 return (
   <div>
<input
 type="search"
  placeholder="search robots"
  onChange={searchChange}
/*  onChange={this.markcomplete.bind(this)}*/
  />
</div>
);
 }

 export default Searchbox;
