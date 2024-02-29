"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NewPage({params}){
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(()=>{
        if(params.id){
            fetch('/api/tasks/' + params.id)
            .then((res)=> res.json())
            .then((data) =>{
                setTitle(data.title)
                setDescription(data.description)
            })
        }
    }, [])

    const onSubmit = async (e)=>{
        e.preventDefault()
        
        if(params.id){
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({title, description}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
        }else{
            
            const res = await fetch("/api/tasks",{
                method: 'POST',
                body: JSON.stringify({title, description}),
                headers: {
                    'Content-Type': 'application/json'
                }
    
            })
            const data = await res.json()
        }
        router.refresh()
        router.push('/')
    }

    return <div className="h-screen flex justify-center items-center">
        <form className="bg-slate-800 p-10 w-1/2" onSubmit={onSubmit}>
            <label htmlFor="title" className="mb-2 text-white">Titulo</label>
            <input type="text" placeholder="titulo" id="title" className="w-full p-2 mb-4"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label htmlFor="description" className="mb-2 text-white">Escribe una descripcion</label>
            <textarea id="description" rows="3" placeholder="Aqui va tu description" className="w-full p-2"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <div className="flex justify-between mt-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded-md text-white p-2"
                onClick={()=>{
                    router.refresh()
                    router.push('/')
                }}
                disabled={title.trim() === '' || description.trim() === ''}
                >
                    Aceptar
                </button>
                {params.id &&
                <button type="button" className="bg-red-500 hover:bg-red-700 rounded-md text-white p-2"
                onClick={async () => {
                    const res = await fetch(`/api/tasks/${params.id}`, {
                        method: 'DELETE',
                    })
                    const data = await res.json()
                    console.log(data)
                    router.refresh()
                    router.push('/')
                }}
                >
                    Delete
                </button>
                }

            </div>
        </form>
    </div>
}

export default NewPage