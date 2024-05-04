

import Taskfield from "./Taskfield";
import {getallTask} from "./actions";
import InputField from "./inputField";


export interface Task  {id:number, content:string}

export default async function Home() {
  

      const get_allTasks : Task[] = await getallTask("http://127.0.0.1:8000/alltodos")
      

  return (
    <div>
          <div>
            <InputField text="Add"/>
          </div>
          <div>
            <Taskfield taskfield={get_allTasks}/>
          </div>
          
        
        

      
    </div>
  );
}
