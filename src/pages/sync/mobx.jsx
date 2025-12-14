import { observer } from "mobx-react-lite";
import { counterStore } from "../../stores/sync/mobxTodo";
import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const MobxSync = observer(() => {
  const [name, setName] = useState("");
  const [elem, setElem] = useState(null);
  const [edit, setEdit] = useState("");
  const [modal, setmodal] = useState(false);
  return (
    <div style={{ paddingTop: "20px" }}>
      <Space>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <Button type='primary' onClick={() => counterStore.post(name)}>
          Add
        </Button>

        <Select
          defaultValue='all'
          style={{ width: 120 }}
          onChange={(e) => counterStore.sortStatus(e)}
          options={[
            { value: "all", label: "All" },
            { value: true, label: "Active" },
            { value: false, label: "Inactive" },
          ]}
        />
        <Input
          placeholder='Search'
          onChange={(e) => counterStore.searchUser(e.target.value)}
        ></Input>
      </Space>
      <div>
        {counterStore.data.map((e) => (
          <div className="cart" key={e.id}>
            <h1>{e.name}</h1>
            <Space>
              <Tag color={e.status ? "green" : "red"}>
                {e.status ? "active" : "inactive"}
              </Tag>
              <Button onClick={() => counterStore.delete(e.id)} danger>
                Delete
              </Button>
              <Link to={`/about/mobx/${e.id}`}>Info</Link>
              <Button
                onClick={() => [setmodal(true), setElem(e), setEdit(e.name)]}
                type='dashed'
              >
                Edit
              </Button>
              <Checkbox
                checked={e.status}
                onChange={() => counterStore.status(e)}
              />
            </Space>
          </div>
        ))}
        <Modal
          open={modal}
          onCancel={() => setmodal(false)}
          onOk={() => [
            counterStore.editName({ ...elem, name: edit }),
            setmodal(false),
          ]}
        >
          <Input
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
            placeholder='Name'
          />
        </Modal>
      </div>
    </div>
  );
});
export default MobxSync;
