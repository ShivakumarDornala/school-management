import React from "react";
import { BsThreeDots } from "react-icons/bs";

const events = [
  {
    id: 1,
    title: "React Workshop",
    date: "2025-08-20",
    description: "Learn the basics of React and build your first app.",
  },
  {
    id: 2,
    title: "Team Meeting",
    date: "2025-08-22",
    description: "Discuss project progress and assign new tasks.",
  },
  {
    id: 3,
    title: "Hackathon",
    date: "2025-08-25",
    description: "Collaborate with developers to solve real-world problems.",
  },
  {
    id: 4,
    title: "Product Launch",
    date: "2025-09-01",
    description: "Introducing our new AI-powered productivity tool.",
  },
];

const Events = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="flex justify-between items-center">
          <p className="text-black p-1 font-semibold">Events</p>
          <p>
            <BsThreeDots />
          </p>
        </div>
        {events.map((event) => (
          <div
            key={event.id}
            className="p-1 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-300 even:border-t-purple-300"
          >
            <div className="flex justify-between items-center p-1">
              <p className="text-gray-900 font-semibold">{event.title}</p>
              <p className="text-gray-800">Date: {event.date}</p>
            </div>
            <div>
              <p className="text-gray-600 p-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
