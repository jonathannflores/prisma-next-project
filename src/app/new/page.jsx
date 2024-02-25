"use client"

function NewPage(){

    const onSubmit = async (e)=>{
        e.preventDefault()
        const title = e.target.title.value;
        const description = e.target.description.value;
        const res = await fetch("/api/tasks",{
            method: 'POST',
            body: JSON.stringify({title,description}),
            headers:{
                'Content-Type': 'application/json'
            }

        })
        const data = await res.json()
        console.log(data)
    }

    return <div className="h-screen flex justify-center items-center">
        <form className="bg-slate-800 p-10 w-1/2" onSubmit={onSubmit}>
            <label htmlFor="title" className="mb-2 text-white">Titulo</label>
            <input type="text" placeholder="titulo" id="title" className="w-full p-2" />

            <label htmlFor="description" className="mb-2 text-white">Escribe una descripcion</label>
            <textarea id="description" rows="3" placeholder="Aqui va tu description" className="w-full p-2" ></textarea>
            <button className="bg-blue-400 rounded-md text-white p-2">Crear</button>
        </form>
    </div>
}

export default NewPage