import { create } from "zustand";
const useBear = create((set) => ({
  data: [
    { name: "Ali", status: false, id: 1 },
    { name: "SAli", status: false, id: 2 },
  ],

  deleteUser: (id) =>
    set((state) => ({ data: state.data.filter((e) => e.id != id) })),
  addUser: (name) =>
    set((state) => ({
      data: [...state.data, { status: false, id: Date.now(), name }],
    })),

  statusUser: (e) =>
    set((state) => ({
      data: state.data.map((elem) =>
        elem.id == e.id ? { ...e, status: !e.status } : elem
      ),
    })),
  editUser: (e) =>
    set((state) => ({
      data: state.data.map((elem) =>
        elem.id == e.id ? { ...e, name: e.name } : elem
      ),
    })),
}));
export default useBear;