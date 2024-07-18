import { Tag } from "src/services/types";
import React from 'react';

export default function TagList({ setSelectedTag, selectedTag, tags }: { setSelectedTag: (tag: number | null) => void, selectedTag: number | null, tags: Tag[] }) {

    return (
        <div className="flex flex-wrap justify-center mt-8">
            <div className="flex flex-wrap">
                {tags.map(tag => (
                    <div className=" p-2" key={tag.id}>
                        <button
                            className={`py-2 px-6 rounded-full inline-flex items-center ${selectedTag === tag.id ? 'bg-pink-700 hover:bg-pink-700 text-white' : 'hover:bg-pink-100 text-pink-800'
                                }`}
                            onClick={() => setSelectedTag(tag.id)}
                        >
                            {tag.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
