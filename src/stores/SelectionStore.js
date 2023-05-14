import { defineStore } from "pinia";

export const useSelectionStore = defineStore('selection', {
  state: () => ({
    currentSelectionId: null
  })
})
