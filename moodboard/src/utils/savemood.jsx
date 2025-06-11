import React from 'react'

export const savemood = (date, mood) => {
  const data = JSON.parse(localStorage.getItem("moods")) || {};
  data[date] = mood;
  localStorage.setItem("moods", JSON.stringify(data));

}

export const getMoods = () => {
  return JSON.parse(localStorage.getItem("moods")) || {};
};
