import { useState } from "react";
import { useTodos } from "../../context/todoContext";
import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import { Link } from "react-router-dom";
export default function Context() {
  const [name, setText] = useState("");
  const [edit, setEdit] = useState("");
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");
  const [id, setId] = useState(null);
  const { todos, addTodo, toggleTodo, removeTodo, editTodo } = useTodos();
  return (
    <div style={{ maxWidth: "1300px", margin: "auto" }}>
      <div style={{ padding: "16px" }}></div>
      <div>
        <Space>
          <Input
            value={name}
            onChange={(e) => setText(e.target.value)}
            placeholder='Add Todo'
          />
          <Button
            onClick={() => addTodo(name)}
            type='primary'
            htmlType='submit'
          >
            Add
          </Button>
          <Select
            defaultValue='all'
            style={{ width: 120 }}
            onChange={(e) => setSelect(e)}
            options={[
              { value: "all", label: "All" },
              { value: true, label: "Active" },
              { value: false, label: "Inactive" },
            ]}
          />
          <Input
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
          ></Input>
        </Space>
      </div>
      <div>
        {todos
          ?.filter((item) => {
            if (select == "all") return true;
            return item.status == select;
          })
          ?.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          ?.map((e) => (
            <div className='cart' key={e.id}>
              <h1>{e.name}</h1>
              <Space>
                <Tag color={e.status ? "green" : "red"}>
                  {e.status ? "active" : "inactive"}
                </Tag>

                <Button danger onClick={() => removeTodo(e.id)}>
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    setEdit(e.name);
                    setId(e.id);
                    setModal(true);
                  }}
                >
                  Edit
                </Button>
                <Link to={`/about/context/${e.id}`}>Info</Link>
                <Checkbox
                  checked={e.status}
                  onChange={() => toggleTodo(e.id)}
                />
              </Space>
            </div>
          ))}
      </div>
      <Modal
        title='Edit Todo'
        open={modal}
        onCancel={() => setModal(false)}
        onOk={() => {
          editTodo(id, edit);
          setModal(false);
        }}
      >
        <Input value={edit} onChange={(e) => setEdit(e.target.value)} />
      </Modal>
    </div>
  );
}
