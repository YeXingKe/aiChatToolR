import { useEffect, useState } from 'react'

export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const onResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

export const MOBILE_MAX_WIDTH = 600
/**
 * 判断是否是Mobile屏幕大小
 * @returns
 */
export function useMobileScreen() {
  const { width } = useWindowSize()

  return width <= MOBILE_MAX_WIDTH
}

/**
 * 判断是否是IOS系统
 * @returns
 */
export function isIOS() {
  const userAgent = navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}

export function deepClone<T>(obj: T) {
  return JSON.parse(JSON.stringify(obj))
}

export function ensure<T extends object>(
  obj: T,
  keys: Array<[keyof T][number]>
) {
  return keys.every(
    (k) => obj[k] !== undefined && obj[k] !== null && obj[k] !== ''
  )
}

export function safeLocalStorage(): {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
  clear: () => void
} {
  let storage: Storage | null

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      storage = window.localStorage
    } else {
      storage = null
    }
  } catch (e) {
    console.error('localStorage is not available:', e)
    storage = null
  }

  return {
    getItem(key: string): string | null {
      if (storage) {
        return storage.getItem(key)
      } else {
        console.warn(
          `Attempted to get item "${key}" from localStorage, but localStorage is not available.`
        )
        return null
      }
    },
    setItem(key: string, value: string): void {
      if (storage) {
        storage.setItem(key, value)
      } else {
        console.warn(
          `Attempted to set item "${key}" in localStorage, but localStorage is not available.`
        )
      }
    },
    removeItem(key: string): void {
      if (storage) {
        storage.removeItem(key)
      } else {
        console.warn(
          `Attempted to remove item "${key}" from localStorage, but localStorage is not available.`
        )
      }
    },
    clear(): void {
      if (storage) {
        storage.clear()
      } else {
        console.warn(
          'Attempted to clear localStorage, but localStorage is not available.'
        )
      }
    },
  }
}
