import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FriendCard from '../components/FriendCard'
import LoadingSpinner from '../components/LoadingSpinner'
import friendsData from '../data/friends.json'

export default function Home() {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch with loading
    const timer = setTimeout(() => {
      setFriends(friendsData)
      setLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Calculate summary cards
  const totalFriends = friends.length
  const onTrack = friends.filter(f => f.status === 'on-track').length
  const needAttention = friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length
  const interactionsThisMonth = 12 // You can make this dynamic later if you want

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Banner */}
      <div className="bg-white rounded-3xl shadow-sm p-10 text-center mb-12">
        <h1 className="text-5xl font-bold text-text-dark mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-text-body max-w-2xl mx-auto text-lg mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <Link
          to="/timeline"
          className="inline-flex items-center gap-3 bg-primary hover:bg-accent text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all"
        >
          <span>+ Add a Friend</span>
        </Link>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary">{totalFriends}</div>
            <div className="text-text-body text-sm mt-1">Total Friends</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary">{onTrack}</div>
            <div className="text-text-body text-sm mt-1">On Track</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary">{needAttention}</div>
            <div className="text-text-body text-sm mt-1">Need Attention</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-primary">{interactionsThisMonth}</div>
            <div className="text-text-body text-sm mt-1">Interactions This Month</div>
          </div>
        </div>
      </div>

      {/* Your Friends Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-text-dark mb-6">Your Friends</h2>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  )
}