
import Button from '../anim/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../utils/axiosInstance';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type RecentEventInputs = {
    title: string;
    img: string;
};

const AddRecentEvents = () => {
    const client = useQueryClient();
    const axios = axiosInstance();

    const mutation = useMutation({
        mutationFn: async (newEvent: RecentEventInputs) => {
            return axios.post('/add-recent-event', newEvent);
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['recentEvents'] });
        },
        onError: () => {
            return 'Error Adding Recent Event';
        },
        mutationKey: ['addRecentEvent'],

    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<RecentEventInputs>();

    const onSubmit: SubmitHandler<RecentEventInputs> = (data) => {
        toast.promise(mutation.mutateAsync(data), {
            loading: 'Adding Recent Event...',
            success: () => 'Added Recent Event Successfully',
            error: (err) => err.message,
            finally: () => reset()

        });
    };

    return (
        <div className='w-full p-5'>
            <h1 className='text-center text-3xl font-bold'>Add Recent Event</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-[500px] mx-auto flex gap-5 flex-col mt-10'>

                <div className="relative">
                    <label>
                        <p className='text-sm text-gray-700 mb-2'>Image</p>
                        <input
                            autoComplete='off'
                            {...register('img', { required: 'Image Link is required', })}
                            type='url'
                            className="bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-4 w-full text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                            placeholder="Enter Event Image Link"
                        />
                    </label>
                    <p className='text-red-500'>{errors.img?.message}</p>
                </div>
                <Button className='bg-blue-500'>
                    Add
                </Button>
            </form>
        </div>
    );
};

export default AddRecentEvents;
