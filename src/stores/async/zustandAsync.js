import { create } from "zustand";
const useTodo = create((set, get) => ({
  data: [],
  async getData() {
    try {
      let res = await fetch("https://68c81b295d8d9f51473450f6.mockapi.io/damir/data");
      let data = await res.json();
      set({ data: data });
    } catch (error) {
      console.error(error);
    }
  },
  async searchUser(search) {
    if (!search.trim()) {
      get().getData();
    } else {
      try {
        let res = await fetch(`https://68c81b295d8d9f51473450f6.mockapi.io/damir/data?name=${search}`);
        let data = await res.json();
        set({ data: data });
      } catch (e) {
        console.error(e);
      }
    }
  },
  async sortUsers(sort) {
    if (sort == "all") {
      get().getData();
    } else {
      try {
        let res = await fetch(`https://68c81b295d8d9f51473450f6.mockapi.io/damir/data?status=${sort}`);
        let data = await res.json();
        set({ data: data || [] });
      } catch (e) {
        console.error(e);
      }
    }
  },
  async deleteData(id) {
    try {
      await fetch(`https://68c81b295d8d9f51473450f6.mockapi.io/damir/data/${id}`, { method: "DELETE" });
      get().getData();
    } catch (error) {
      console.error(error);
    }
  },
  async postData(name) {
    try {
      await fetch(`https://68c81b295d8d9f51473450f6.mockapi.io/damir/data`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name: name, status: false }),
      });
      get().getData();
    } catch (error) {
      console.error(error);
    }
  },
  async statusData(e) {
    try {
      await fetch(`https://68c81b295d8d9f51473450f6.mockapi.io/damir/data/${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, status: !e.status }),
      });
      get().getData();
    } catch (error) {
      console.error(error);
    }
  },
  async editData(e) {
    try {
      await fetch(`https://68c81b295d8d9f51473450f6.mockapi.io/damir/data/${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, name: e.name }),
      });
      get().getData();
    } catch (error) {
      console.error(error);
    }
  },
}));
export default useTodo;
