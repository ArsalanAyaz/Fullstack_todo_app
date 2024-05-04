"use client"
import React from 'react'
import { deleteTask } from './actions'
import Link from 'next/link'


const Taskfield = ({taskfield}:{taskfield: any}) => {
  return (
    <div>
            {taskfield && taskfield.map((items: any) => {
            return(
              <div>

                    <div key={items.id} className="flex items-center gap-x-7  bg-gray-300 m-2 p-4">
                        <p>{items.content}</p>

                        <button 
                        className='bg-red-600 rounded-md  text-white hover:bg-red-700 p-1'
                        onClick={() => deleteTask("http://127.0.0.1:8000/delete_todos",items.id)}
                        
                        >
                        
                        Dlelete
                        </button>
                        
                        <Link href={`${items.id}`}>

                          <button 
                                className='bg-blue-400 hover:bg-blue-500 p-1 rounded-md'>
                                  Edit
                          </button>

                        </Link>
                    </div>
                    
                        
                    


                </div>
            )
                })}
        </div>
  )
}

export default Taskfield
