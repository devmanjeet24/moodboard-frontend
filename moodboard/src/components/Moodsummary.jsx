import React from 'react'
import { moodLevels } from '../utils/Moodutils';

const Moodsummary = ({ moods }) => {

   const moodArray = Object.values(moods || {}); 
    if (moodArray.length === 0) {
        return <p className="text-center p-4">No mood data available</p>;
    }

    const moodCount = moodArray.reduce(
        (acc, mood) => {
            acc[mood] = (acc[mood] || 0) + 1;
            return acc;
        },
        {}
    );

    const mostCommonMood = Object.keys(moodCount).reduce((a, b) =>
        moodCount[a] > moodCount[b] ? a : b
    );

    const score = moodArray.reduce((sum, mood) => sum + moodLevels[mood], 0);

    return (
        <div className="p-4 text-center">
            <p>Most common mood: <strong>{mostCommonMood}</strong></p>
            <p>Good days: {moodCount.Happy || 0}</p>
            <p>Bad days: {moodCount.Sad || 0}</p>
            <p>Score: {score}</p>
        </div>
    )
}

export default Moodsummary;