import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Responsive, WidthProvider } from "react-grid-layout";
import { motion } from 'framer-motion';
import useFetcher from '../store/useFetcher';
import { IEvent } from '../screens/Events';


const generateLayout = (length: number) => {

    const large = [];
    const medium = [];
    const small = [];

    for (let i = 1; i <= length; i++) {
        const limit = Math.ceil(i / 6) - 1;
        const serial = i % 6;
        if (serial === 1) {
            large.push({ i: `${i - 1}`, x: 0, y: (0 + (2 * limit)), w: 2, h: 1 });
            medium.push({ i: `${i - 1}`, x: 0, y: (0 + (2 * limit)), w: 2, h: 1 });
            small.push({ i: `${i - 1}`, x: 0, y: (0 + (2 * limit)), w: 2, h: 1 });
        }
        else if (serial === 2) {
            large.push({ i: `${i - 1}`, x: 2, y: (0 + (2 * limit)), w: 2, h: 1 });
            medium.push({ i: `${i - 1}`, x: 2, y: (0 + (2 * limit)), w: 2, h: 1 });
            small.push({ i: `${i - 1}`, x: 0, y: (1 + (2 * limit)), w: 2, h: 1 });
        }
        else if (serial === 3) {
            large.push({ i: `${i - 1}`, x: 4, y: (1 + (2 * limit)), w: 2, h: 2 });
            medium.push({ i: `${i - 1}`, x: 0, y: (1 + (2 * limit)), w: 2, h: 2 });
            small.push({ i: `${i - 1}`, x: 0, y: (2 + (2 * limit)), w: 2, h: 2 });
        }
        else if (serial === 4) {
            large.push({ i: `${i - 1}`, x: 0, y: (1 + (2 * limit)), w: 1, h: 1 });
            medium.push({ i: `${i - 1}`, x: 2, y: (1 + (2 * limit)), w: 2, h: 1 });
            small.push({ i: `${i - 1}`, x: 0, y: (3 + (2 * limit)), w: 2, h: 1 });

        }
        else if (serial === 5) {
            large.push({ i: `${i - 1}`, x: 1, y: (1 + (2 * limit)), w: 1, h: 1 });
            medium.push({ i: `${i - 1}`, x: 2, y: (2 + (2 * limit)), w: 2, h: 1 });
            small.push({ i: `${i - 1}`, x: 0, y: (4 + (2 * limit)), w: 2, h: 1 });
        }
        else if (serial === 0) {
            large.push({ i: `${i - 1}`, x: 2, y: (1 + (2 * limit)), w: 2, h: 1 });
            medium.push({ i: `${i - 1}`, x: 1, y: (3 + (2 * limit)), w: 2, h: 1 });
            small.push({ i: `${i - 1}`, x: 0, y: (5 + (2 * limit)), w: 2, h: 1 });
        }
    }

    return { lg: large, md: medium, sm: small };

};



const ResponsiveGridLayout = WidthProvider(Responsive);
const Events = () => {

    const { data } = useFetcher<IEvent>('events', 'events');
    const layout = generateLayout(data.length);



    return (
        <div>
            <div id='events'>
                <h1 className='text-6xl my__heading3 mb-3 text-black font-bold text-center'>Event Items</h1>
                <p className='w-[90%] md:w-2/3 lg:w-1/2 mx-auto text-center mb-14 events__description '>
                    At the top of our events, which we organize very severely, we prioritize creating memorable experiences. Our meticulous planning, attention to detail, and high standards of service have set us apart in the event management industry.
                </p>
            </div>
            <div id='event-container'>

                <ResponsiveGridLayout
                    isResizable={false}
                    className="layout"
                    layouts={layout}

                    isDraggable={false}
                    breakpoints={{ lg: 1200, md: 650, sm: 0 }}
                    cols={{ lg: 6, md: 4, sm: 2 }}
                    rowHeight={270}
                    margin={[20, 20]}
                >

                    {data.map((event, index) => (
                        <div key={index} className='rounded-md event__card p-7 bg-[rgba(134,130,176,0.12)]'>
                            <motion.div className='h-[calc(100%-30px)]  rounded-lg overflow-hidden mb-3  group'>
                                <motion.img src={event.img
                                } alt="" className='w-full clickable duration-1000 rounded-md invert-0 h-full group-hover:invert group-hover:scale-125 scale-100 ' />
                            </motion.div>
                            <p className='text-2xl font-semibold'>{event.title}</p>
                        </div>
                    ))}

                </ResponsiveGridLayout>
            </div>
        </div>
    );
};


export default Events;