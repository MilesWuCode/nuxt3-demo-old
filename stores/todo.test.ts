import { setActivePinia, createPinia } from 'pinia'
import { describe, test, expect, beforeEach } from 'vitest'
import { useTodoStore } from './todo'

describe('useTodoStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('create,changeState,remove', () => {
    const store = useTodoStore()

    expect(store.list.length).toBe(0)

    expect(store.total).toBe(0)

    store.create({
      id: 1,
      content: 'test',
      state: 'active',
    })

    expect(store.list.length).toBe(1)

    expect(store.total).toBe(1)

    expect(store.completedTotal).toBe(0)

    store.changeState(1, 'completed')

    expect(store.completedTotal).toBe(1)

    store.remove(1)

    expect(store.list.length).toBe(0)

    expect(store.total).toBe(0)

    expect(store.completedTotal).toBe(0)
  })

  test('filterByState', () => {
    const store = useTodoStore()

    store.create({
      id: 1,
      content: 'test',
      state: 'active',
    })

    store.create({
      id: 2,
      content: 'test',
      state: 'completed',
    })

    const filterAll = store.filterByState('all')

    expect(filterAll.length).toBe(2)

    const filterActive = store.filterByState('active')

    expect(filterActive.length).toBe(1)

    const filterCompleted = store.filterByState('completed')

    expect(filterCompleted.length).toBe(1)
  })
})
