import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useFetcher from "../store/useFetcher";
import axiosInstance from "../utils/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { MdDelete, MdEdit } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

export interface IEvent {
    title: string;
    _id: string;
    img: string;
}

const Events = () => {
    const { data, error, isError, isLoading } = useFetcher<IEvent>('events', 'events');
    const [isOpen, setIsOpen] = useState(false);
    const [dataToEdit, setDataToEdit] = useState<IEvent | null>(null);

    const axios = axiosInstance();
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: ({ _id }: IEvent) => axios.delete(`/event/delete/${_id}`),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['events'] });

        },
        onError: () => {
            return 'Error Deleting Events';
        },

        mutationKey: ['deleteEvent'],
    });
    useEffect(() => {
        if (!isOpen) {
            setDataToEdit(null);
        }

    }, [isOpen]);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: {error?.message}</p>;
    }
    return (
        <div className="p-5 ">
            <h1 className="text-center font-bold text-4xl mb-6">All Events</h1>
            {dataToEdit && <EditModal event={dataToEdit} isOpen={isOpen} setIsOpen={setIsOpen} />}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4">
                {
                    data.map((event) => (
                        <div key={event._id} className="p-6 bg-white shadow-md border border-b-black/10 rounded-lg ">
                            <div className="aspect-video">
                                <img className="w-full h-full rounded-md mb-4" src={event.img} onError={(e) => e.currentTarget.src = "https://via.placeholder.com/400"} alt="Placeholder Image" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">{event.title}</h2>



                            <div className="flex justify-end">
                                <button onClick={() => {
                                    setDataToEdit(event);
                                    setIsOpen(true);
                                }} className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                                    <span className="mr-2">Edit</span>
                                    <MdEdit />
                                </button>
                                <button onClick={() => {
                                    toast.promise(mutation.mutateAsync(event), {
                                        loading: 'Deleting Service...',
                                        success: () => 'Deleted Service Successfully',
                                        error: (err) => err.message,
                                    });
                                }} className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                    <span className="mr-2">Delete</span>
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );

};

const EditModal = ({ isOpen, setIsOpen, event }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>; event: IEvent; }) => {
    const axios = axiosInstance();
    const client = useQueryClient();

    const { register,
        handleSubmit,
        formState: { errors }, } = useForm({ defaultValues: event });
    const mutation = useMutation({
        mutationFn: ({ _id, ...editEvent }: IEvent) => axios.put(`/event/edit/${_id}`, editEvent),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['events'] });

        },
        onError: () => {
            return 'Error Editing Event';
        },

        mutationKey: ['editEvents'],
    });
    const onSubmit: SubmitHandler<IEvent> = (data) => {
        toast.promise(mutation.mutateAsync(data), {
            loading: 'Editing Event...',
            success: () => 'Edited Event Successfully',
            error: (err) => err.message,
            finally: () => setIsOpen(false)
        });
    };

    return (<AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer"
            >
                <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default"
                >



                    <MdEdit className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-12 -left-12" />
                    <div className="relative z-10">
                        <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                            <MdEdit />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[500px] mx-auto flex gap-5 flex-col mt-10'>
                            <div className="relative">
                                <label>
                                    <p className='text-sm text-gray-700 mb-2'>Title</p>
                                    <input
                                        autoComplete='off'
                                        {...register('title', { required: 'Title is required' })}
                                        className="bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-4 w-full text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                                        placeholder="Enter Service Title"
                                    />
                                </label>
                                <p className='text-red-500'>{errors.title?.message}</p>
                            </div>
                            <div className="relative">
                                <label>
                                    <p className='text-sm text-gray-700 mb-2'>Image</p>
                                    <input
                                        autoComplete='off'
                                        {...register('img', { required: 'Image Link is required' })}
                                        type='url'
                                        className="bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-4 w-full text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                                        placeholder="Enter Service Image Link"
                                    />
                                </label>
                                <p className='text-red-500'>{errors.img?.message}</p>

                            </div>


                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"

                                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                                >
                                    Complete
                                </button>
                            </div>
                        </form>

                    </div>

                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>);
};


export default Events;