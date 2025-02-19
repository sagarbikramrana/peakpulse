export default function AdminHeader({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
    </div>
  )
}

