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
    <div className="max-w-7xl mx-auto px-44 py-8">
      <h1 className="text-4xl font-bold text-text-dark mb-8">Friendship Analytics</h1>

      <div className="bg-white rounded-3xl p-10 shadow-sm">
        <h3 className="text-xl font-semibold mb-8 text-left">By Interaction Type</h3>
        
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={130}
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
        <p className="text-center text-text-body mt-12">
          No data yet. Start making calls, texts, or video calls from any friend’s detail page!
        </p>
      )}
    </div>
  )
}