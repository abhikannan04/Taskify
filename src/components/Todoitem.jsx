import React from 'react'
import tick from "../assets/tick.png"
import notTick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"
const Todoitem = ({text ,id , iscompleted ,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}}  className='flex flex-1 items-center cursor pointer'>
        <img src={iscompleted?tick: notTick} alt="" className='w-7'/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${iscompleted?"line-through":""}`}>
            {text}</p>
      </div>
        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-4 cursor-pointer'/>
    </div>
  )
}

export default Todoitem
