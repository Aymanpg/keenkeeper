import { useTimeline } from '../context/TimelineContext'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Stats() {
  const { timeline } = useTimeline()

  // Count interactions
  const callCount = timeline.filter(t => t.type === 'call').length
  const textCount = timeline.filter(t => t.type === 'text').length
  const videoCount = timeline.filter(t => t.type === 'video').length

  const data = [
    { name: 'Call', value: callCount, color: '#1F4D3F' },
    { name: 'Text', value: textCount, color: '#7A3CFF' },
    { name: 'Video', value: videoCount, color: '#36A86B' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-44 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6 sm:mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-left">
          By Interaction Type
        </h3>
        
        <div className="h-72 sm:h-80 lg:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {timeline.length === 0 && (
        <p className="text-center text-text-body mt-8 sm:mt-12 text-base sm:text-lg">
          No data yet. Start making calls, texts, or video calls from any friend’s detail page!
        </p>
      )}
    </div>
  )
}