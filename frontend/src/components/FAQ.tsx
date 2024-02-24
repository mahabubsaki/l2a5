import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { motion } from "framer-motion";

import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
    {
        "question": "What is the purpose of an event website?",
        "answer": "The purpose of an event website is to provide information and promote an upcoming event. It serves as a central hub where attendees can find details such as event dates, location, agenda, speakers, and registration information."
    },
    {
        "question": "What information should be included on an event website?",
        "answer": "An event website should include essential details such as the event name, date, time, location, agenda/schedule, information about speakers or performers, registration or ticketing information, FAQs, contact details, and possibly accommodation and travel information if applicable."
    },
    {
        "question": "How can I create an engaging event website?",
        "answer": "To create an engaging event website, focus on clear and visually appealing design, use high-quality images or videos related to the event, provide concise and informative content, incorporate interactive elements like RSVP forms or social media feeds, and ensure easy navigation."
    },
    {
        "question": "What are some key design elements to consider for an event website?",
        "answer": "Key design elements for an event website include a visually appealing layout, consistent branding, clear typography, high-quality images or videos, intuitive navigation, responsive design for mobile devices, and attention-grabbing calls-to-action for registration or ticket purchase."
    },
    {
        "question": "How can I ensure the usability and accessibility of my event website?",
        "answer": "To ensure usability and accessibility, prioritize clear and intuitive navigation, provide alternative text for images, use high contrast colors for readability, include descriptive headings and labels, ensure keyboard navigation and screen reader compatibility, and conduct usability testing with diverse users."
    },
    {
        "question": "Are there any best practices for promoting an event through a website?",
        "answer": "Best practices for promoting an event through a website include optimizing for search engines (SEO), leveraging social media platforms, creating engaging content such as blog posts or videos, utilizing email marketing campaigns, collaborating with influencers or partners, and offering incentives for early registration."
    },
    {
        "question": "What features should I look for in a platform or CMS for building an event website?",
        "answer": "When choosing a platform or CMS for building an event website, look for features such as customizable templates, event-specific plugins or integrations (e.g., for ticketing, RSVPs), responsive design capabilities, SEO tools, analytics, security features, and ease of use for content management."
    },
    {
        "question": "How can I integrate ticketing and registration functionality into my event website?",
        "answer": "You can integrate ticketing and registration functionality into your event website using dedicated event management platforms or plugins. These tools typically allow you to create customizable registration forms, manage attendee information, sell tickets online, process payments securely, and generate attendee reports."
    },
    {
        "question": "What are some ways to measure the success of an event website?",
        "answer": "You can measure the success of an event website by tracking metrics such as website traffic, unique visitors, time spent on site, bounce rate, conversion rate (e.g., registrations or ticket sales), engagement on social media channels, and post-event feedback or surveys from attendees."
    },
    {
        "question": "How important is mobile responsiveness for an event website?",
        "answer": "Mobile responsiveness is crucial for an event website as an increasing number of users access the internet and browse websites on mobile devices. A mobile-responsive website ensures a seamless user experience across various screen sizes, improves accessibility, and enhances engagement, ultimately leading to higher attendance and satisfaction."
    }
];


const AccordionItem = ({ header, ...rest }: { header: string; }) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                {header}

                <MdKeyboardArrowDown size={30} className={`ml-auto transition-transform duration-200 ease-out ${isEnter && "rotate-180"
                    }`} />
            </>
        )}
        className="border-b"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left hover:bg-slate-100 ${isEnter && "bg-slate-200"
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out"
        }}
        panelProps={{ className: "p-4" }}
    />
);


export default function FAQ() {
    return (
        <div>
            <div id="faq">
                <h1 className='text-6xl faq__section mb-3 text-black font-bold text-center'>FAQS</h1>
                <p className='w-[90%] md:w-2/3 mx-auto text-center mb-14 faq__section '>
                    These questions are always asked by our clients. We have tried to answer them in the best possible way. If you have any other questions, feel free to ask us. Our FAQ section is designed to provide comprehensive answers to common queries.
                </p>
            </div>
            <motion.div initial={{ opacity: 0, scaleY: 0, }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className="mx-2 origin-top my-4 border-t">

                <Accordion transition transitionTimeout={200}>
                    {faqs.map((item, index) => (
                        // @ts-ignore
                        <AccordionItem key={index} header={item.question} >
                            <p>{item.answer}</p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    );
}
