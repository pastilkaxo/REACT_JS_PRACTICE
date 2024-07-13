import { Jobs } from "./Profs";
import React from "react";
import { useState } from "react";
import "./index.css"

function JobMenu(){

  const [value, setValue] = useState('');
  
let tab = [];
tab.push(
  <option>...</option>
 )
  for(let job of Jobs){
   tab.push(
    <option  value={job.name} id={job.id}>
           {job.name}
          </option>
    
  
   )
  }

  let links = [];

 if (value === "Programmer"){
  links.push(
    <div>
      <a href="https://metanit.com/">Metanit</a><br/>
      <a href="https://github.com/">Github</a>
    </div>
  )
 }
 else if(value === "Artist"){
  links.push(
    <div>
    <a href="https://www.artstation.com/">Artstation.com</a><br/>
    <a href="https://www.deviantart.com/">Deviantart.com</a>
  </div>
  )
 }
 else if(value === "Sportsman"){
  links.push(
    <div>
    <a href="https://www.sports.ru/">Sports.ru</a><br/>
    <a href="https://www.championat.com/">Championat.com</a>
  </div>
  )
 }
 else if(value === "Writer"){
  links.push(
    <div>
    <a href="https://penfox.ru/">Penfox.ru</a><br/>
    <a href="https://pishi.pro/">Pishi.pro</a>
  </div>
  )
 }
 else if(value === "Doctor"){
  links.push(
    <div>
    <a href="https://medvuza.ru/besplatnye-materialy">Medvuza.ru</a><br/>
    <a href="https://www.medznat.ru/">Medznat.xru</a>
  </div>
  )
 }

return (  
 <div>
   <select onChange={(event) => setValue(event.target.value)}>
    {tab}
  </select>
  <p>
			ваш выбор: {value}
		</p>
    {links}
 </div>
  
)

}

export default JobMenu;