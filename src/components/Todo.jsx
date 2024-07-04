import React, { useEffect, useRef, useState } from "react";
import icon from "../assets/todo_icon.png";
import Todoitem from "./Todoitem";
const Todo = () => {
  const [todolist, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);

  const inputRef = useRef();
  const add = () => {
    const inputtext = inputRef.current.value.trim();

    if (!inputtext) {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputtext,
      iscompleted: false,
    };

    setTodoList([...todolist, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id)=>{
      setTodoList((prevtodo)=>{
        return prevtodo.filter((todo)=> todo.id!== id)
      })
  }

  const toggle = (id)=>{
    setTodoList((prevtodo)=>{
      return prevtodo.map((todo)=>{
        if (todo.id===id){
          return {...todo, iscompleted:!todo.iscompleted }
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    // console.log(todolist);
    localStorage.setItem("todos", JSON.stringify(todolist));

  },[todolist])

  return (
    <div className="bg-white place-self-center w-11/12 max-w-medium flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex item-center mt-7 gap-2">
        <img className="w-8" src={icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      {/* input Box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your Task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-blue-600 w-32 h-14 text-white text-large font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* todo-list */}
      <div>
        {todolist.map((item,index)=>{
          return <Todoitem key={index} text ={item.text} id={item.id} 
          iscompleted={item.iscompleted} deleteTodo={deleteTodo} toggle={toggle}/>
        })}
      </div>
    </div>
  );
};

export default Todo;
