'use client'
import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";

type DataPiece = Date | null;

type DateVal = DataPiece | [DataPiece, DataPiece];

const EventCalender = () => {

    const [date, setDate] = useState<DateVal>(new Date())

    const eventData = [
        {
            name: "Music Competition",
            startTime: "11:00 AM",
            endTime: "12:30 PM",
            description: "Get ready for the music competition",
        },
        {
            name: "Art Exhibition",
            startTime: "1:00 PM",
            endTime: "3:00 PM",
            description: "Explore a wide range of artworks from talented artists",
        },
        {
            name: "Tech Conference",
            startTime: "2:00 PM",
            endTime: "5:00 PM",
            description: "Join industry leaders to discuss the latest in technology",
        },
    ]

    const announcementData = [
        {
            name: "Library Renovation",
            startTime: "9:00 AM",
            endTime: "5:00 PM",
            description: "The library renovation from September 15 to September 30.",
        },
        {
            name: "Career Fair",
            startTime: "11:00 AM",
            endTime: "3:00 PM",
            description: "Explore job opportunities and network with top employers at the annual career fair.",
        },
        {
            name: "Annual Sports Day",
            startTime: "8:00 AM",
            endTime: "4:00 PM",
            description: "Participate in various sports events and activities during our annual sports day.",
        },
        {
            name: "Blood Donation Camp",
            startTime: "9:00 AM",
            endTime: "2:00 PM",
            description: "Contribute to the community by participating in our blood donation camp.",
        },
    ]

    return (
        <>
            <div className="text-black w-full h-full flex flex-col items-center gap-3 justify-evenly">
                {/* CALENDAR */}
                <div className="block max-w-full px-2 h-[340px]">
                    <Calendar onChange={setDate} value={date} />
                </div>
                {/* EVENTS */}
                <div className="mt-8 block px-4 w-full">
                    <div className="flex flex-row items-center justify-between px-4 py-1 w-full border-b-2 border-b-gray-400">
                        <h2 className="font-extrabold text-sm md:text-base">Events</h2>
                        <span>
                            <Image
                                src="/more.png"
                                alt="More Options"
                                width={17}
                                height={7}
                                style={{ filter: 'invert(100%)' }}
                            />
                        </span>
                    </div>
                    <div>
                        {eventData.map((i, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-full border-b-2 py-4 border-b-gray-400">
                                <div className="flex items-center justify-between py-2 w-full">
                                    <h5 className="text-xs font-bold">{i.name}</h5>
                                    <span className="text-[8px] text-gray-500  md:text-[10px]">
                                        {i.startTime} - {i.endTime}
                                    </span>
                                </div>
                                <p className="text-[8px] text-gray-500 md:text-[10px] ">
                                    {i.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* ANNOUNCEMENTS */}
                <div className="mt-8 block px-4 w-full">
                    <div className="flex flex-row items-center justify-between px-4 py-1 w-full border-b-2 border-b-gray-400">
                        <h2 className="font-extrabold text-sm md:text-base">Announcements</h2>
                        <span>
                            <Image
                                src="/more.png"
                                alt="More Options"
                                width={17}
                                height={7}
                                style={{ filter: 'invert(100%)' }}
                            />
                        </span>
                    </div>
                    <div>
                        {announcementData.map((i, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-full border-b-2 py-4 border-b-gray-400">
                                <div className="flex items-center justify-between py-2 w-full">
                                    <h5 className="text-xs font-bold">{i.name}</h5>
                                    <span className="text-[8px] text-gray-500  md:text-[10px]">
                                        {i.startTime} - {i.endTime}
                                    </span>
                                </div>
                                <p className="text-[8px] text-gray-500  md:text-[10px]">
                                    {i.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCalender;