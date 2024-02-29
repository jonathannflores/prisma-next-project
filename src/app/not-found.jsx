import Link from "next/link"

function NotFound(){
    return(
        <section className="flex justify-center items-center h-[calc(100vh-7rem)]">
            <div className="text-center">
                <h3 className="text-white font-bold text-3xl my-5">NotFound</h3>
                <Link href='/' className="text-slate-200">Volver al inicio</Link>
            </div>
        </section>
    )
}

export default NotFound