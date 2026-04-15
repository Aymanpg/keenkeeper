import { useNavigate } from 'react-router-dom'

export default function FriendCard({ friend }) {
  const navigate = useNavigate()

  const statusColor = {
    overdue: 'bg-overdue',
    'almost due': 'bg-almost-due',
    'on-track': 'bg-on-track'
  }

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col items-center pt-6 pb-4 px-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-2xl object-cover mb-4"
        />
        <h3 className="font-semibold text-xl text-text-dark">{friend.name}</h3>
        
        <div className="flex gap-1 mt-1">
          {friend.tags.map((tag, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 w-full">
          <div className="flex justify-between items-center text-sm">
            <span className="text-text-body">Last contact</span>
            <span className="font-medium">{friend.days_since_contact} days ago</span>
          </div>
        </div>

        <div className={`mt-4 w-full text-center py-1.5 text-sm font-medium text-white rounded-3xl ${statusColor[friend.status]}`}>
          {friend.status === 'overdue' && 'Overdue'}
          {friend.status === 'almost due' && 'Almost Due'}
          {friend.status === 'on-track' && 'On Track'}
        </div>
      </div>
    </div>
  )
}