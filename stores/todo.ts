import { defineStore } from 'pinia'

export type Todo = {
  id: number
  content: string
  state: 'active' | 'completed'
}

export type Filter = 'all' | 'active' | 'completed'

const play = {
  id: 1,
  content: 'play',
  state: 'active',
}

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      list: [play] as Todo[],
    }
  },
  getters: {
    total: (state) => state.list.length,
    completedTotal: (state) =>
      state.list.reduce(
        (counter, { state }) =>
          state === 'completed' ? (counter += 1) : counter,
        0
      ),
    filterByState: (state) => {
      return (filter: Filter) =>
        filter === 'all'
          ? state.list
          : state.list.filter((item) => item.state === filter)
    },
  },
  actions: {
    create(todo: Todo) {
      this.list.push(todo)
    },
    remove(id: number) {
      this.list = this.list.filter((item) => item.id !== id)
    },
    changeState(id: number, state: Todo['state']) {
      for (const item of this.list) {
        if (item.id === id) {
          item.state = state
          break
        }
      }
    },
  },
})
