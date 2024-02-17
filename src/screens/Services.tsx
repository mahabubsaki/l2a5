import { MdDelete, MdEdit } from "react-icons/md";
import useFetcher from "../store/useFetcher";
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

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: {error?.message}</p>;
    }

    return (
        <div>
            <h1 className="text-center font-bold text-4xl mb-6">All Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                {
                    data.map((service) => (
                        <div key={service._id} className="p-6 bg-white shadow-md border border-b-black/10 rounded-lg ">
                            <div className="aspect-video">
                                <img className="w-full h-full rounded-md mb-4" src={service.img} onError={(e) => e.currentTarget.src = "https://via.placeholder.com/400"} alt="Placeholder Image" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                            <ul className="list-disc pl-6 mb-4">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature.feature}</li>
                                ))}
                            </ul>
                            <div className="flex justify-end">
                                <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                                    <span className="mr-2">Edit</span>
                                    <MdEdit />
                                </button>
                                <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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

export default Services;