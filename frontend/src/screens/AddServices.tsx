import { FaMinus, FaPlus } from 'react-icons/fa';
import Button from '../anim/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../utils/axiosInstance';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';
type ServiceInputs = {
    title: string;
    img: string;
    description: string;
    features: {
        feature: string;
    }[];
};


const AddServices = () => {
    const client = useQueryClient();
    const axios = axiosInstance();
    const mutation = useMutation({
        mutationFn: (newTodo: ServiceInputs) => axios.post('/add-service', newTodo),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['services'] });
        },
        onError: () => {
            return 'Error Adding Service';
        },
        mutationKey: ['addService'],
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm<ServiceInputs>({
        defaultValues: {
            description: '',
            features: [{ feature: '' }],
            img: '',
            title: ''
        }
    });

    const { append, remove, fields } = useFieldArray({
        control: control,
        name: "features",

    });

    const onSubmit: SubmitHandler<ServiceInputs> = (data) => {
        toast.promise(mutation.mutateAsync(data), {
            loading: 'Adding Service...',
            success: () => 'Added Service Successfully',
            error: (err) => err.message,
            finally: () => reset()

        });
    };


    return (
        <div className='w-full p-5'>
            <h1 className='text-center text-3xl font-bold'>Add Services</h1>
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
                        })} className='flex items-center  gap-2 text-purple-500'>
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
                <Button className='bg-blue-500'>
                    Add
                </Button>
            </form>
        </div>
    );
};

export default AddServices;