import { defineStore } from 'pinia'

export type Todo = {
  id: number | string
  content: string
  state: 'active' | 'completed'
}

export type Filter = 'all' | 'active' | 'completed'

const play = {
  id: 1,
  content: 'play',
  state: 'active',
}

type TodoState = {
  list: Todo[]
}

export const useTodoStore = defineStore('todo', {
  state: (): TodoState => {
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
      // console.time('TestSpeed #1')
      for (const item of this.list) {
        if (item.id === id) {
          item.state = state
          break
        }
      }
      // console.timeEnd('TestSpeed #1')

      // console.time('TestSpeed #2')
      // this.list = this.list.map((item) =>
      //   item.id === id ? { ...item, state } : item
      // )
      // console.timeEnd('TestSpeed #2')
    },
  },
})
