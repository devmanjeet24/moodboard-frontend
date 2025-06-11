import React from 'react'

const Moodselector = ({ selectedMood, setSelectedMood, onSave }) => {
  return (
     <div className="flex gap-4 p-4 justify-center">
      {["Happy", "Neutral", "Sad"].map((mood) => (
        <button
          key={mood}
          className={`px-4 py-2 rounded shadow-md text-white ${
            mood === "Happy"
              ? "bg-green-500"
              : mood === "Neutral"
              ? "bg-yellow-500"
              : "bg-red-500"
          } ${selectedMood === mood ? "ring-4 ring-black" : ""}`}
          onClick={() => setSelectedMood(mood)}
        >
          {mood}
        </button>
      ))}
      <button
        className="ml-4 px-4 py-2 bg-gray-400 text-white rounded"
        onClick={onSave}
      >
        Save
      </button>
    </div>
  )
}

export default Moodselector;