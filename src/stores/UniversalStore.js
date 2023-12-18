//itemsName is expense, task, work, etc.
import { defineStore } from "pinia";
const API = "http://localhost:8000"; //temporary
export const useUniversalStore = defineStore("universal", {
  state: () => ({
    items: {
      expense: [],
      task: [],
      worker: [],
      work: [],
      project: [],
      customer: [],
    },
    lastFetch: {
      expense: 0,
      task: 0,
      worker: 0,
      work: 0,
      project: 0,
      customer: 0,
    },
  }),
  // getters: {
  //   getItemById(itemsName, id) {
  //     return this.items[itemsName].find((item) => item._id === id);
  //   },
  // },
  actions: {
    async fetchItems(itemsName, isForced) {
      console.log(`can I fetch ${itemsName}s?`, this.lastFetch[itemsName]);
      const date = new Date();
      const thisFetch = date.getTime();
      //fetch only if it's forced or if last fetch was more than 10000 ms ago:
      if (isForced || thisFetch - this.lastFetch[itemsName] >= 10000) {
        console.log(
          `fetching ${itemsName}s, forced: ${isForced}, thisFetch - this.lastFetch[itemsName] = ${thisFetch - this.lastFetch[itemsName]
          }`,
        );
        const fetchedItems = await fetch(`${API}/${itemsName}`);
        const newItems = await fetchedItems.json();
        if (newItems !== this.items[itemsName]) {
          console.log(newItems, this.items[itemsName]);
          this.items[itemsName] = newItems;
        }
        this.lastFetch[itemsName] = thisFetch;
      }
    },

    async addNewItem(itemsName, item) {
      console.log('item:')
      console.log(item)
      console.log(item.value)
      try {
        await fetch(`${API}/${itemsName}`, {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
        alert("An error occured! Check the console for more info.");
        return error;
      }
      this.fetchItems(itemsName, true);
    },
    async removeItem(itemsName, itemId) {
      try {
        await fetch(`${API}/${itemsName}`, {
          method: "DELETE",
          body: JSON.stringify({ id: itemId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
        alert("An error occured! Check the console for more info.");
        return error;
      }
      this.fetchItems(itemsName, true);
    },
  },
});
