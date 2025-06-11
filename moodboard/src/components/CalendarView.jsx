import React from 'react'
import { moodColors } from '../utils/Moodutils';
import { format, subDays } from "date-fns";

const CalendarView = ({ moods, onSelectDay }) => {

    const days = Array.from({ length: 7 }, (_, i) => {
        const date = subDays(new Date(), i);
        return format(date, "yyyy-MM-dd");
    }).reverse();

    return (
        // <div className="grid grid-cols-7 gap-2 p-4 ">
        <div className="flex justify-center items-center flex-wrap gap-2">
      {days.map((date) => (
        <div
          key={date}
          className={`h-20 w-[120px] rounded cursor-pointer flex items-center justify-center text-white text-sm font-semibold shadow ${
            moodColors[moods[date]] || "bg-pink-600 text-black"
          }`}
          onClick={() => onSelectDay(date)}
        >
          {date.slice(5)}
        </div>
      ))}
    </div>
    )
}

export default CalendarView;