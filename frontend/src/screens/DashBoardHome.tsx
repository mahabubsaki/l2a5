

import { IService } from "./Services";
import useFetcher from "../store/useFetcher";
import { IEvent } from "./Events";



const DashBoardHome = () => {
    const { data } = useFetcher<IService>('services', 'services');
    const { data: data2 } = useFetcher<IEvent>('events', 'events');


    return (
        <div className="w-full">
            <h1 className="text-4xl text-center font-bold">DashBoardHome</h1>
            <div className="flex flex-col text-5xl h-[100dvh] items-center gap-6 justify-center">
                <div >
                    Total Services: {data?.length}
                </div>
                <div>
                    Total Events: {data2?.length}
                </div>
            </div>
        </div>
    );
};

export default DashBoardHome;