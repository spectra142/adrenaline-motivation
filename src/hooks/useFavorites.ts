import { useCallback, useEffect, useState } from 'react'

const KEY = 'adrenaline-favorites'

function load(): number[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as number[]) : []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(favorites))
    } catch {
      /* storage unavailable */
    }
  }, [favorites])

  const toggle = useCallback((id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }, [])

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites]
  )

  return { favorites, toggle, isFavorite }
}
