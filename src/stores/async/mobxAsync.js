import { makeAutoObservable } from "mobx";

class CounterStore {
  data = [];
  API = "https://68c81b295d8d9f51473450f6.mockapi.io/damir/data";
  constructor() {
    makeAutoObservable(this);
  }
  async getData() {
    try {
      let res = await fetch(this.API);
      let data = await res.json();
      this.data = data;
    } catch (error) {
      console.error(error);
    }
  }
  async sortData(sort) {
    if (sort != "all") {
      try {
        let res = await fetch(`${this.API}?status=${sort}`);
        let data = await res.json();
        this.data = data;
      } catch (error) {
        console.error(error);
      }
    } else {
      this.getData();
    }
  }
  async searchData(inp) {
    if (inp.trim()) {
      try {
        let res = await fetch(`${this.API}?name=${sort}`);
        let data = await res.json();
        this.data = data;
      } catch (error) {
        console.error(error);
      }
    } else {
      this.getData();
    }
  }
  async deleteData(id) {
    try {
      await fetch(`${this.API}/${id}`, { method: "DELETE" });
      this.getData();
    } catch (error) {
      console.error(error);
    }
  }
  async statusData(e) {
    try {
      await fetch(`${this.API}/${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, status: !e.status }),
      });
      this.getData();
    } catch (error) {
      console.error(error);
    }
  }
  async editData(e) {
    try {
      await fetch(`${this.API}/${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, name: e.name }),
      });
      this.getData();
    } catch (error) {
      console.error(error);
    }
  }
  async postData(e) {
    try {
      await fetch(`${this.API}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name: e, status: false }),
      });
      this.getData();
    } catch (error) {
      console.error(error);
    }
  }
}

export const asyncStore = new CounterStore();
