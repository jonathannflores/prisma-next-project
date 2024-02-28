"use client"
import { useRouter } from "next/navigation"

function TaskCard({task}){

    const router = useRouter()

    return(
        <div key={task.id} className="bg-slate-800 p-4 text-white hover:bg-slate-700 hover:cursor-pointer"
        onClick={()=>
        router.push('tasks/edit/'+task.id)
        }>
            <h3 className="font-bolt text-2xl mb-2">{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.CreatedAt).toLocaleDateString()}</p>
          </div>
    )
}

export default TaskCard