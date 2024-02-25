import { prisma } from "@/libs/prisma"

async function loadTask(){
  return await prisma.task.findMany()
}

async function HomePage(){
  const tasks = await loadTask()

  return(
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task)=>(
          <div key={task.id} className="bg-slate-800 p-4 hover:bg-slate-700 hover:cursor-pointer">
            <h3 className="font-bolt text-2xl mb-2">{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.CreatedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
    
  )
}

 export default HomePage