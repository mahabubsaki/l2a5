import { MdDelete, MdEdit } from "react-icons/md";
import useFetcher from "../store/useFetcher";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "sonner";
export interface IService {
    _id: string;
    title: string;
    img: string;
    description: string;
    features: {
        feature: string;
    }[];
}

const Services = () => {
    const { data, error, isError, isLoading } = useFetcher<IService>('services', 'services');
    const [isOpen, setIsOpen] = useState(false);
    const [dataToEdit, setDataToEdit] = useState<IService | null>(null);

    const axios = axiosInstance();
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: ({ _id }: IService) => axios.delete(`/service/delete/${_id}`),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['services'] });

        },
        onError: () => {
            return 'Error Deleting Service';
        },

        mutationKey: ['deleteService'],
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
        <div className="p-5">
            <h1 className="text-center font-bold text-4xl mb-6">All Services</h1>
            {dataToEdit && <EditModal service={dataToEdit} isOpen={isOpen} setIsOpen={setIsOpen} />}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4">
                {
                    data.map((service) => (
                        <div key={service._id} className="p-6 bg-white shadow-md border border-b-black/10 rounded-lg ">
                            <div className="aspect-video">
                                <img className="w-full h-full rounded-md mb-4" src={service.img} onError={(e) => e.currentTarget.src = "https://via.placeholder.com/400"} alt="Placeholder Image" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                            <p className="my-2">{service.description}</p>
                            <ul className="list-disc pl-6 mb-4">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature.feature}</li>
                                ))}
                            </ul>

                            <div className="flex justify-end">
                                <button onClick={() => {
                                    setDataToEdit(service);
                                    setIsOpen(true);
                                }} className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                                    <span className="mr-2">Edit</span>
                                    <MdEdit />
                                </button>
                                <button onClick={() => {
                                    toast.promise(mutation.mutateAsync(service), {
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


const EditModal = ({ isOpen, setIsOpen, service }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>; service: IService; }) => {
    const axios = axiosInstance();
    const client = useQueryClient();

    const { register,
        handleSubmit,
        control,
        formState: { errors }, } = useForm({ defaultValues: service });
    const { append, remove, fields } = useFieldArray({
        control: control,
        name: "features",

    });
    const mutation = useMutation({
        mutationFn: ({ _id, ...editService }: IService) => axios.put(`/service/edit/${_id}`, editService),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['services'] });

        },
        onError: () => {
            return 'Error Editing Service';
        },

        mutationKey: ['editService'],
    });
    const onSubmit: SubmitHandler<IService> = (data) => {
        toast.promise(mutation.mutateAsync(data), {
            loading: 'Editing Service...',
            success: () => 'Edited Service Successfully',
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
                className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer  overflow-auto "
            >
                <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative"
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
                            <div className='relative flex gap-5 flex-col'>

                                {fields.map((_, index) => (
                                    <div key={index} className='relative'>
                                        <label>
                                            <p className='text-sm text-gray-700 mb-2'>Feature {index + 1}</p>
                                            <input
                                                autoComplete='off'
                                                {...register(`features.${index}.feature`, { required: `Feature ${index + 1} is Required` })}
                                                className="bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-4 w-full text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                                                placeholder={`Enter Service Feature ${index + 1}`}
                                            />
                                        </label>
                                        <p className='text-red-500'>{errors.features?.[index]?.feature?.message}</p>
                                    </div>
                                ))}
                                <div className='flex justify-between'>
                                    {fields.length < 5 && <button type='button' onClick={() => append({
                                        feature: ''
                                    })} className='flex items-center  gap-2 text-blue-500'>
                                        <FaPlus />
                                        Add
                                    </button>}
                                    {fields.length > 1 && <button type='button' onClick={() => remove(fields.length - 1)} className='flex items-center  gap-2 text-red-500'>
                                        <FaMinus />
                                        Remove
                                    </button>}
                                </div>
                            </div>
                            <div className="relative">
                                <label>
                                    <p className='text-sm text-gray-700 mb-2'>Description</p>

                                    <textarea
                                        {...register('description', { required: 'Description is required' })}
                                        className="bg-gray-100 border-2 resize-none h-[200px] border-gray-300 rounded-md py-2 px-4 w-full text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                                        placeholder="Enter Service Image Link"
                                    />
                                </label>
                                <p className='text-red-500'>{errors.description?.message}</p>

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

export default Services;