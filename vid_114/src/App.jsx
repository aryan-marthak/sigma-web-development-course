import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";




function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString){

      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  
  const toggleFinished = (e)=>{
    setshowFinished(!showFinished) 
  }
  
  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleEdit = (e, id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()
  }
  
  const handleAdd = ()=>{
    setTodos([...todos,  {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
    saveToLS()
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  

  return (
    <>
      <Navbar/>
      <div className='mx-auto mt-7 md:w-[48%] w-11/12 bg-darkBlue-200 rounded-lg h-screen '>
            <div>
                <div className='flex justify-center'>
                    <h1 className='text-xl font-extrabold mt-4 px-2 text-center'>TaskItUp - Manage your todos at one place</h1>
                </div>
                <div className='ml-4 font-bold mt-6'>
                    <h2>Add a Todo</h2>
                </div>
                <div className='flex gap-6 justify-center pt-3'>
                    <input onChange={handleChange} value={todo} className=' min-w-[70%] md:w-[40vw] rounded-2xl border-black border px-3' type="text" />
                    <button onClick={handleAdd} disabled={todo.length<3} className=' disabled:border-x-gray-700 bg-darkBlue-600 hover:bg-darkBlue-900 rounded-2xl px-3.5 font-semibold text-sm text-white py-1.5' >Save</button>
                </div>
                <input onChange={toggleFinished} className='ml-4 mt-5 text-sm' type="checkbox" checked={showFinished} name="finished" id="finished" />
                <label htmlFor="finished"> Show finished</label>
                <hr className='border-0.5 border-black w-10/12 mx-auto mt-5' />
            </div>
            <div className="todos">
            {todos.length === 0 && <div className='m-5'>No todos to display</div>}
            {todos.map(item=>{
                    
              return(showFinished || !item.isCompleted) && <div key={item.id} className="todo flex m-4 justify-between items-center ">
                <div className='flex gap-5 items-center'>
                <input className=' items-center' name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCCompleted} id="" />
                    <div className='w-40'><div className={item.isCompleted?"line-through":""}>{item.todo}</div></div>
                </div>
                    <div className="buttons">
                        <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-darkBlue-600 hover:bg-darkBlue-900 rounded-2xl px-3.5 font-semibold text-sm text-white py-1.5 mx-1' ><FaEdit />
</button>
                        <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-darkBlue-600 hover:bg-darkBlue-900 rounded-2xl px-3.5 font-semibold text-sm text-white py-1.5 mx-1' ><MdDeleteForever />
</button>
                    </div>
                </div>
                })}
            </div>

        </div>
    </>
  )
}

export default App
