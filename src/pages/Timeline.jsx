import { useState } from 'react'
import { useTimeline } from '../context/TimelineContext'
import { Phone, MessageCircle, Video } from 'lucide-react'

export default function Timeline() {
  const { timeline } = useTimeline()
  const [filter, setFilter] = useState('all') // all, call, text, video

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
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-text-dark mb-2">Timeline</h1>
      <p className="text-text-body mb-8">All your interactions in one place</p>

      {/* Filter */}
      <div className="flex gap-2 mb-8 border-b pb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-2xl text-sm font-medium transition-all ${filter === 'all' ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('call')}
          className={`px-6 py-2 rounded-2xl text-sm font-medium transition-all ${filter === 'call' ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'}`}
        >
          Call
        </button>
        <button
          onClick={() => setFilter('text')}
          className={`px-6 py-2 rounded-2xl text-sm font-medium transition-all ${filter === 'text' ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'}`}
        >
          Text
        </button>
        <button
          onClick={() => setFilter('video')}
          className={`px-6 py-2 rounded-2xl text-sm font-medium transition-all ${filter === 'video' ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'}`}
        >
          Video
        </button>
      </div>

      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <p className="text-center text-text-body py-12">No interactions yet.<br />Click Call/Text/Video on any friend to start logging!</p>
        ) : (
          filteredTimeline.map(entry => (
            <div key={entry.id} className="bg-white rounded-3xl p-5 flex items-center gap-5 border border-gray-100">
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