import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTimeline } from '../context/TimelineContext'
import friendsData from '../data/friends.json'
import Toast from '../components/Toast'

export default function FriendDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addInteraction } = useTimeline()
  const [toast, setToast] = useState(null)

  const friend = friendsData.find(f => f.id === parseInt(id))

  if (!friend) {
    return <div className="text-center py-20">Friend not found</div>
  }

  const statusColor = {
    overdue: 'bg-overdue',
    'almost due': 'bg-almost-due',
    'on-track': 'bg-on-track'
  }

  const handleQuickCheckIn = (type) => {
    addInteraction(friend.name, type)
    setToast(`${type} with ${friend.name} logged!`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-44 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column - Friend Info */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover mb-6"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-dark">{friend.name}</h2>
            
            <div className={`mt-4 px-6 py-1.5 text-white text-sm font-medium rounded-3xl ${statusColor[friend.status]}`}>
              {friend.status.toUpperCase()}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {friend.tags.map((tag, i) => (
                <span key={i} className="px-5 py-1 bg-accent/10 text-primary text-sm rounded-3xl">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-8 text-text-body leading-relaxed text-base">{friend.bio}</p>
            <p className="mt-6 text-sm text-text-body">
              <span className="font-medium">Email:</span> {friend.email}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-12 space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-accent py-4 rounded-2xl font-medium text-sm sm:text-base">
              ⏰ Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-accent py-4 rounded-2xl font-medium text-sm sm:text-base">
              📦 Archive
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center justify-center gap-3 text-overdue hover:bg-red-50 py-4 rounded-2xl font-medium text-sm sm:text-base"
            >
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-4">
            <div className="bg-white rounded-3xl p-5 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-text-dark">{friend.days_since_contact}</div>
              <div className="text-text-body text-sm mt-1">Days Since Contact</div>
            </div>
            <div className="bg-white rounded-3xl p-5 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-text-dark">{friend.goal}</div>
              <div className="text-text-body text-sm mt-1">Goal (Days)</div>
            </div>
            <div className="bg-white rounded-3xl p-5 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-text-dark whitespace-nowrap">{friend.next_due_date}</div>
              <div className="text-text-body text-sm mt-1">Next Due</div>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-3xl p-6 sm:p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-xl">Relationship Goal</h3>
              <button className="text-sm px-6 py-2 bg-primary text-white rounded-2xl">Edit</button>
            </div>
            <p className="text-text-body">Connect every {friend.goal} days</p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-3xl p-6 sm:p-8">
            <h3 className="font-semibold text-xl mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleQuickCheckIn('Call')}
                className="flex flex-col items-center gap-3 bg-white border-2 border-gray-100 hover:border-primary hover:bg-[#f0f7f4] py-8 rounded-3xl transition-all"
              >
                <img src="/assets/call.png" alt="Call" className="w-8 h-8" />
                <span className="font-medium">Call</span>
              </button>
              <button
                onClick={() => handleQuickCheckIn('Text')}
                className="flex flex-col items-center gap-3 bg-white border-2 border-gray-100 hover:border-primary hover:bg-[#f0f7f4] py-8 rounded-3xl transition-all"
              >
                <img src="/assets/text.png" alt="Text" className="w-8 h-8" />
                <span className="font-medium">Text</span>
              </button>
              <button
                onClick={() => handleQuickCheckIn('Video')}
                className="flex flex-col items-center gap-3 bg-white border-2 border-gray-100 hover:border-primary hover:bg-[#f0f7f4] py-8 rounded-3xl transition-all"
              >
                <img src="/assets/video.png" alt="Video" className="w-8 h-8" />
                <span className="font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  )
}