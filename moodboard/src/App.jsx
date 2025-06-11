import './App.css'
import { useState, useEffect } from 'react'
import { getMoods, savemood } from './utils/savemood';
import CalendarView from './components/CalendarView';
import Moodselector from './components/Moodselector';
import Moodsummary from './components/Moodsummary';
import Quoteoftheday from './components/Quoteoftheday';
import { moodLevels } from './utils/Moodutils';

function App() {

  const [moods, setMoods] = useState(getMoods());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMood, setSelectedMood] = useState("");

  const handleSelectDay = (date) => {
    setSelectedDate(date);
    setSelectedMood(moods[date] || "");
  };

  const handleSaveMood = () => {
    if (selectedDate && selectedMood) {
      savemood(selectedDate, selectedMood);
      const updated = { ...moods, [selectedDate]: selectedMood };
      setMoods(updated);
      setSelectedDate(null);
      setSelectedMood("");
    }
  };

  const score = Object.values(moods).reduce(
    (sum, mood) => sum + moodLevels[mood],
    0
  );
  const bgColor = score >= 5 ? "bg-green-100" : score <= -1 ? "bg-red-100" : "bg-yellow-100";

  return (
    <>
      <div className={`min-h-screen bg-[#eee] transition-all duration-500 flex flex-col justify-center items-center`}>
        <h1 className="text-[45px] font-bold text-center py-4 ">MoodBoard</h1>
        <Quoteoftheday />
        <CalendarView moods={moods} onSelectDay={handleSelectDay} />
        {selectedDate && (
          <Moodselector
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            onSave={handleSaveMood}
          />
        )}
        <Moodsummary moods={moods} />
      </div>
    </>
  )
}

export default App;
