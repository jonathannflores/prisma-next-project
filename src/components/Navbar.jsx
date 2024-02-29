import Link from "next/link"

function Navbar(){
    return(
        <nav className="bg-slate-900">
            <div className="container mx-auto flex items-center justify-between py-3">
                <Link href='/'>
                <h3 className="text-white font-bold text-2xl">NexTask</h3>
                </Link>
                <ul className="flex gap-x-2 text-lg font-bold">
                    <li className="text-slate-300 hover:text-slate-200">
                        <Link href='/new'>New</Link>
                    </li>
                    <li className="text-slate-300 hover:text-slate-200">
                        <Link href='/about'>About</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar