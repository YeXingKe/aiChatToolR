/* eslint-disable @typescript-eslint/no-unused-vars */

import type { StateStorage } from 'zustand/middleware'
import { get, set, del, clear } from 'idb-keyval'
import { safeLocalStorage } from '.'

/**
 * idb-keyval
 * 一个轻量级（约 600B）的 JavaScript 库
 * 它提供了对 IndexedDB 的简单键值存储(key-value)封装，
 * 让你能够更方便地在浏览器中使用 IndexedDB 进行数据持久化存储
 */
const localStorage = safeLocalStorage()

class IndexedDBStorage implements StateStorage {
  public async getItem(name: string): Promise<string | null> {
    try {
      const value = (await get(name)) || localStorage.getItem(name)
      return value
    } catch (error) {
      return localStorage.getItem(name)
    }
  }

  public async setItem(name: string, value: string): Promise<void> {
    try {
      const _value = JSON.parse(value)
      if (!_value?.state?._hasHydrated) {
        console.warn('skip setItem', name)
        return
      }
      await set(name, value)
    } catch (error) {
      localStorage.setItem(name, value)
    }
  }

  public async removeItem(name: string): Promise<void> {
    try {
      await del(name)
    } catch (error) {
      localStorage.removeItem(name)
    }
  }

  public async clear(): Promise<void> {
    try {
      await clear()
    } catch (error) {
      localStorage.clear()
    }
  }
}

export const indexedDBStorage = new IndexedDBStorage()
