interface BrandMemeProps {
  id: string
  title: string
  brand: string
  engagementRate: string
  description: string
}

export default function BrandMemeCard({ id, title, brand, engagementRate, description }: BrandMemeProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">{brand}</span>
      </div>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>Engagement</span>
        <span className="font-bold text-green-600">{engagementRate}</span>
      </div>
    </div>
  )
}
