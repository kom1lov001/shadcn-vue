import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {})

interface UserState {}
export const usePollStore = defineStore('poll', {
  state: (): UserState => ({
    access_user: '' as any,
  }),

  actions: {
    async userGet() {},
    async userSet(data: any) {
      // this.access_user = data
    },
  },
  getters: {},
})
