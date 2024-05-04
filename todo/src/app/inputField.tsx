"use client"
import React from 'react'
import { useState } from 'react'
import { addTask, updateTask } from './actions'

const InputField = ({text,id}:{text:string, id?:number}) => {
    const [val, setVal] = useState("")
  return (
    <div>
        <div className="flex items-center justify-center gap-x-2 mt-10">
            <input

            type="text" 
            // placeholder="Add your task" 
            value={val}
            required
            onChange={((e) => setVal(e.target.value))}
            className="border border-teal-400 rounded-md p-2"
            
            /> 
            {val && text == "Add" && <button 
 
                onClick={() => {
                addTask("http://127.0.0.1:8000/todos",{content:val})
                  setVal("")
                }} 
                className="bg-blue-400 p-1 rounded-md text-white">  

                {text}

            </button>
            }
            {val && text == "Update" && <button 
 
                onClick={() => {
                updateTask("http://127.0.0.1:8000/update_todos",{content:val, id:id})
                  setVal("")
                }} 
                className="bg-blue-400 p-1 rounded-md text-white">  

                {text}

            </button>
            }
        
        </div>
    </div>
  )
}

export default InputField
