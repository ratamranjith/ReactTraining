import { useReducer } from "react";
import { FaRocket, FaSatellite, FaSpaceShuttle, FaGlobe } from "react-icons/fa";

// Timeline Event Components
function Event({ icon, title, description, time, isActive, dispatch }) {
  return (
    <div className="relative mb-8">
      {/* Event Circle Icon */}
      <div className="flex items-center">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex justify-center items-center shadow-lg ${
            isActive ? "animate-bounce" : ""
          }`}
        >
          {icon}
        </div>
        {/* Vertical Line */}
        <div className="absolute top-0 left-4 w-0.5 h-full bg-gray-300"></div>
      </div>
      {/* Event Content */}
      <div
        className={`ml-16 ${isActive ? "text-indigo-500" : "text-gray-600"}`}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
        <span className="text-xs">{time}</span>
        {isActive && (
          <div className="mt-2">
            <button
              onClick={() => dispatch({ type: "NEXT_EVENT" })}
              className="px-4 py-1 mt-3 text-sm bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Next
            </button>
            <button
              onClick={() => dispatch({ type: "PREV_EVENT" })}
              className="ml-4 px-4 py-1 mt-3 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-700 transition"
              disabled={isActive === 0}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Reducer Function
const initialState = {
  currentEvent: 0,
  events: [
    {
      title: "Launch",
      description: "Spacecraft has launched",
      time: "09:00 AM",
      icon: <FaRocket />,
    },
    {
      title: "Orbit",
      description: "Spacecraft reached orbit",
      time: "10:30 AM",
      icon: <FaSatellite />,
    },
    {
      title: "Docking",
      description: "Spacecraft docked with ISS",
      time: "12:00 PM",
      icon: <FaSpaceShuttle />,
    },
    {
      title: "Landing",
      description: "Spacecraft landed safely",
      time: "03:00 PM",
      icon: <FaGlobe />,
    },
  ],
  timelineCompleted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_EVENT":
      return {
        ...state,
        currentEvent: Math.min(state.currentEvent + 1, state.events.length - 1),
      };
    case "PREV_EVENT":
      return {
        ...state,
        currentEvent: Math.max(state.currentEvent - 1, 0),
      };
    case "COMPLETE_TIMELINE":
      return { ...state, timelineCompleted: true };
    default:
      return state;
  }
}

// Main Timeline Component
function SpaceMissionTimeline() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.timelineCompleted) {
    return (
      <h2 className="text-center text-xl text-green-500 font-bold">
        Mission Timeline Completed!
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black py-10 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10 text-indigo-400">
        Space Mission Timeline
      </h1>
      <div className="relative flex flex-col space-y-12 w-2/3">
        {state.events.map((event, index) => (
          <Event
            key={index}
            icon={event.icon}
            title={event.title}
            description={event.description}
            time={event.time}
            isActive={state.currentEvent === index}
            dispatch={dispatch}
          />
        ))}
      </div>
      {state.currentEvent === state.events.length - 1 && (
        <button
          onClick={() => dispatch({ type: "COMPLETE_TIMELINE" })}
          className="mt-6 px-8 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
        >
          Complete Mission
        </button>
      )}
    </div>
  );
}

export default SpaceMissionTimeline;
