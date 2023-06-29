export const useTestStore = defineStore("test", {
  state: () => ({
    num: 1
  }),
  getters: {
    total: state => state.num * 2
  }
})
