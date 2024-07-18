import Layout from "@components/layout"
import { ReactElement } from "react"

function Page() {

    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our team</h1>
                    <p className="max-w-2xl text-center dark:text-gray-400">Meet the awesome team behind the scenes of the Rotaract Club's blog at Uva Wellassa University. This dedicated group orchestrates the blog's content and meticulously crafts its digital landscape.</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-male--v4.png" />
                            <p className="text-xl font-semibold leadi">Yasith Eranda</p>
                            <p className="dark:text-gray-400"> Co-derector,<br/> Public Relations and Digital Services Avenue</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-male--v4.png" />
                            <p className="text-xl font-semibold leadi">Mihisara Bandara</p>
                            <p className="dark:text-gray-400"> Co-derector,<br/> Public Relations and Digital Services Avenue</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-male--v4.png" />
                            <p className="text-xl font-semibold leadi">Ravindu Kavishka</p>
                            <p className="dark:text-gray-400">Developer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-male--v4.png" />
                            <p className="text-xl font-semibold leadi">Sayuru Sandaru</p>
                            <p className="dark:text-gray-400">Developer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-female--v1.png" />
                            <p className="text-xl font-semibold leadi">Maduja Abhayasundara</p>
                            <p className="dark:text-gray-400">Developer</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-female--v1.png" />
                            <p className="text-xl font-semibold leadi">Dharani samudrika</p>
                            <p className="dark:text-gray-400">Content Manager</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-female--v1.png" />
                            <p className="text-xl font-semibold leadi">Sammani Dias</p>
                            <p className="dark:text-gray-400">Content Manager</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-female--v1.png" />
                            <p className="text-xl font-semibold leadi">Chamodya Perera</p>
                            <p className="dark:text-gray-400">Content Manager</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-male--v4.png" />
                            <p className="text-xl font-semibold leadi">Yeran Lakvindu</p>
                            <p className="dark:text-gray-400">Content Manager</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://img.icons8.com/3d-fluency/94/user-female--v1.png" />
                            <p className="text-xl font-semibold leadi">Piyumi Weerasighe</p>
                            <p className="dark:text-gray-400">Content Manager</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page
