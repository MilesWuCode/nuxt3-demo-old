import { createPinia, setActivePinia } from 'pinia'
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from 'vitest'
import { v4 as uuid } from 'uuid'
import { useTodoStore } from './todo'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('useTodoStore', () => {
  let store: ReturnType<typeof useTodoStore>

  beforeEach(() => {
    store = useTodoStore()
  })

  afterEach(() => {
    store.$reset()
  })

  test('create,changeState,remove', () => {
    expect(store.list.length).toBe(0)

    expect(store.total).toBe(0)

    const id = uuid()

    store.create({
      id,
      content: 'test',
      state: 'active',
    })

    expect(store.list.length).toBe(1)

    expect(store.total).toBe(1)

    expect(store.completedTotal).toBe(0)

    store.changeState(id, 'completed')

    expect(store.completedTotal).toBe(1)

    store.remove(id)

    expect(store.list.length).toBe(0)

    expect(store.total).toBe(0)

    expect(store.completedTotal).toBe(0)
  })

  test('filterByState', () => {
    store.create({
      id: uuid(),
      content: 'test',
      state: 'active',
    })

    store.create({
      id: uuid(),
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
