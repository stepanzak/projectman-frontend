import { defineStore } from "pinia";
const API = "http://localhost:8000";
export const useWorkersStore = defineStore("workers", {
  state: () => ({
    workers: [],
    lastFetch: 0,
  }),
  getters: {
    getWorkers() {
      this.fetchWorkers();
      return this.workers;
    },
    getWorkerById(id) {
      return this.workers.find((worker) => worker._id === id);
    },
  },
  actions: {
    async fetchWorkers(isForced) {
      console.log("can I fetch workers?", this.lastFetch);
      const date = new Date();
      const thisFetch = date.getTime();
      if (isForced || thisFetch - this.lastFetch >= 10000) {
        console.log(
          `fetching workers, forced: ${isForced}, thisFetch - this.lastFetch = ${thisFetch - this.lastFetch
          }`,
        );
        const fetchedWorkers = await fetch(`${API}/worker`);
        const newWorkers = await fetchedWorkers.json();
        if (newWorkers !== this.workers) {
          console.log(newWorkers, this.workers);
          this.workers = newWorkers;
        }
        this.lastFetch = thisFetch;
      }
    },
    async addNewWorker(worker) {
      try {
        await fetch(`${API}/worker`, {
          method: "POST",
          body: JSON.stringify(worker),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
        alert("An error occured! Check the console for more info.");
        return error;
      }
      this.fetchWorkers(true);
    },
    async removeWorker(worker) {
      try {
        await fetch(`${API}/worker`, {
          method: "DELETE",
          body: JSON.stringify({ id: worker }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
        alert("An error occured! Check the console for more info.");
        return error;
      }
      this.fetchWorkers(true)
    },
  },
});
