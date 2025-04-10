import { useStore } from '../store/useStore'

export function Counter() {
  const { count, increment, decrement } = useStore()

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={decrement}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        -
      </button>
      <span className="text-xl">{count}</span>
      <button 
        onClick={increment}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        +
      </button>
    </div>
  )
} 