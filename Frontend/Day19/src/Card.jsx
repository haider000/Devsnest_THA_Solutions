import React,{useState} from 'react';

const Card = ()=> {
  let [val,setVal] = useState(0);
  return(
    <div className="">
      <button onClick={()=>setVal(val+1)}>{val}</button>
    </div>
  );

}

export default Card;