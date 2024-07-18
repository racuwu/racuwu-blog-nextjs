import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllAvenues } from "src/services/avenues";
import { Avenue } from "src/services/types";

export default function AvenueSelector() {
    const [avenues, setAvenues] = useState<Avenue[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    const getAvenues = async () => {
        const data = await getAllAvenues();
        setAvenues(data.data);
    }

    useEffect(() => {
        getAvenues();
    }, []);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div>
            <button className="my-2 mx-8 py-2 hover:border-pink-700 border-b-4 border-white" onClick={openModal}>Avenues 🔽</button>
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="bg-white p-8 max-w-md rounded shadow-lg">
                        <button className="absolute top-2 right-2 bg-white rounded-full p-2" onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="avenue-list">
                            <h2 className="text-xl font-bold mb-4">Avenues</h2>
                            {avenues.map((avenue) => (
                                <Link key={avenue.id} href={`/posts/${encodeURIComponent(avenue.slug)}`}>
                                    <a className="block px-4 py-2 hover:bg-pink-100 hover:text-pink-900">{avenue.name}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
