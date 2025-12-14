import { makeAutoObservable } from "mobx";

class CounterStore {
  data = [
    { name: "Ali", status: false, id: 1 },
    { name: "Shodmon", status: true, id: 2 },
  ];
  backUp = [
    { name: "Ali", status: false, id: 1 },
    { name: "Shodmon", status: true, id: 2 },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  sortStatus(e) {
    e != "all"
      ? (this.data = this.backUp.filter((elem) => elem.status == e))
      : (this.data = this.backUp);
  }
  searchUser(e) {
    e.trim()
      ? (this.data = this.backUp.filter((elem) =>
          elem.name.toLowerCase().includes(e.toLowerCase())
        ))
      : (this.data = this.backUp);
  }
  post(e) {
    this.data = [...this.data, { name: e, status: false, id: Date.now() }];
    this.backUp = this.data;
  }
  delete(id) {
    this.data = this.data.filter((e) => e.id != id);
    this.backUp = this.data;
  }
  status(e) {
    this.data = this.data.map((elem) =>
      e.id == elem.id ? { ...e, status: !e.status } : elem
    );
    this.backUp = this.data;
  }
  editName(e) {
    this.data = this.data.map((elem) =>
      e.id == elem.id ? { ...e, name: e.name } : elem
    );
    this.backUp = this.data;
  }
}

export const counterStore = new CounterStore();
