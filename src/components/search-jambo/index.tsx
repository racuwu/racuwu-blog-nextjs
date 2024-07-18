
export default function SearchJumbo({title}:{title:String}) {
    return <>
        <div className="py-24 bg-pink-800 my-8 rounded-3xl text-center jambo z-0 animate__animated  animate__fadeIn ">
            <h1 className="text-4xl text-white font-extrabold">{title}</h1>
        </div>
        <div className="flex justify-center">
            <div className="md:w-1/2 w-2/3 rounded-3xl bg-white shadow-xl border-2 z-40 absolute animate__animated  animate__fadeInUp" style={{marginTop:'-72px'}}>
                <input className="p-6 rounded-2xl w-full" placeholder="Search.."/>
            </div>
        </div>
    </>
}