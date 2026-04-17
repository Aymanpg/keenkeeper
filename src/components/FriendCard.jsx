import { useNavigate } from 'react-router-dom'

export default function FriendCard({ friend }) {
  const navigate = useNavigate()

  const statusColor = {
    overdue: 'bg-red-500',
    'almost due': 'bg-[#EFAD44]',
    'on-track': 'bg-green-700'
  }

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-[#f9fafb] rounded-2xl border border-gray-200 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex flex-col items-center text-center px-6 py-8">

        {/* Avatar */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />

        {/* Name */}
        <h3 className="font-semibold text-lg text-text-dark">
          {friend.name}
        </h3>

        {/* Days ago */}
        <p className="text-sm text-text-body mt-1">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-3 flex-wrap justify-center">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div
          className={`mt-4 px-4 py-1 text-xs font-medium text-white rounded-full ${statusColor[friend.status]}`}
        >
          {friend.status === 'overdue' && 'Overdue'}
          {friend.status === 'almost due' && 'Almost Due'}
          {friend.status === 'on-track' && 'On-Track'}
        </div>

      </div>
    </div>
  )
}