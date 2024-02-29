import EmptyTasks from "@/components/EmptyTasks"
import TaskCard from "@/components/TaskCard"
import { prisma } from "@/libs/prisma"

async function loadTask(){
  return await prisma.task.findMany()
}

export const dynamic = 'force-dynamic'

async function HomePage(){
  const tasks = await loadTask()
  console.log(tasks)

  return(
    <section className="container mx-auto">
      {tasks.length === 0  ? (
        <EmptyTasks />
          ) : (
            <div className="grid grid-cols-3 gap-3 mt-10 mx-20">
            {tasks.map((task) => <TaskCard task={task} key={task.id} />)}
          </div>
        )}
        
        
    </section>
    
  )
}

 export default HomePage