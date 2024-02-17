import React from 'react';
import Button from '../anim/Button';

const AddEvents = () => {
    return (
        <div className='w-full '>
            <h1 className='text-center text-3xl font-bold'>Add Event</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }} className='max-w-[500px] mx-auto flex gap-5 flex-col mt-10'>
                <div className="relative">
                    <input
                        type="text"
                        name='title'
                        required
                        className="bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-4 w-full text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                        placeholder="Enter Event Title"
                    />

                </div>
                <div className="relative">
                    <input
                        type="url"
                        required
                        name='img'
                        className="bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-4 w-full text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                        placeholder="Enter Event Image Link"
                    />

                </div>

                <Button className='bg-blue-500'>
                    Add
                </Button>
            </form>
        </div>
    );
};

export default AddEvents;