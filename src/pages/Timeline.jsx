import { useState } from 'react'
import { useTimeline } from '../context/TimelineContext'
import { Phone, MessageCircle, Video } from 'lucide-react'

export default function Timeline() {
  const { timeline } = useTimeline()
  const [filter, setFilter] = useState('all') // default = all

  const filteredTimeline = timeline.filter(entry => {
    if (filter === 'all') return true
    return entry.type === filter
  })

  const getIcon = (type) => {
    if (type === 'call') return <Phone className="w-5 h-5 text-primary" />
    if (type === 'text') return <MessageCircle className="w-5 h-5 text-primary" />
    if (type === 'video') return <Video className="w-5 h-5 text-primary" />
    return null
  }

  return (
    <div className="max-w-7xl mx-auto px-44 py-8">
      <h1 className="text-4xl font-bold text-text-dark mb-2">Timeline</h1>

      {/* Dropdown Filter */}
<div className="pt-6 mb-8 border-b pb-4">
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="w-[347px] h-[55px] px-6 rounded-2xl text-sm font-medium bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <option value="all">All</option>
    <option value="call">Call</option>
    <option value="text">Text</option>
    <option value="video">Video</option>
  </select>
</div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <p className="text-center text-text-body py-12">
            No interactions yet.
            <br />
            Select Call/Text/Video from dropdown to filter!
          </p>
        ) : (
          filteredTimeline.map(entry => (
            <div
              key={entry.id}
              className="bg-white rounded-3xl p-5 flex items-center gap-5 border border-gray-100"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                {getIcon(entry.type)}
              </div>

              <div className="flex-1">
                <p className="font-medium text-text-dark">{entry.title}</p>
                <p className="text-sm text-text-body">
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}