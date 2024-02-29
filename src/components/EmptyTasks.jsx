import Link from "next/link"

function EmptyTasks(){
    return(
        <section className="mx-auto text-center mt-20">
            <h2 className="text-4xl font-bold text-white">No hay tareas, crea una:</h2>
            <Link href='/new'>
                <button className="p-2 mt-4 bg-blue-500 text-white rounded-md">
                    New Task
                </button>
            </Link>
        </section>
    )
}

export default EmptyTasks