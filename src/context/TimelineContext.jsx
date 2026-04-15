import { createContext, useContext, useState, useEffect } from 'react'

const TimelineContext = createContext()

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState(() => {
    const saved = localStorage.getItem('keenkeeper-timeline')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('keenkeeper-timeline', JSON.stringify(timeline))
  }, [timeline])

  const addInteraction = (friendName, type) => {
    const entry = {
      id: Date.now(),
      date: new Date().toISOString(),
      title: `${type} with ${friendName}`,
      type: type.toLowerCase(), // call, text, video
    }
    setTimeline(prev => [entry, ...prev])
  }

  return (
    <TimelineContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => useContext(TimelineContext)