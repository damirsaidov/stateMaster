import React, { useState } from "react";
import useBear from "../../stores/sync/zustandTodo";
import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import { Link } from "react-router-dom";
const ZustandSync = () => {
  const data = useBear((state) => state?.data);
  const deleteUser = useBear((state) => state?.deleteUser);
  const statusUser = useBear((state) => state?.statusUser);
  const addUser = useBear((state) => state?.addUser);
  const editUser = useBear((state) => state?.editUser);
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [elem, setElem] = useState(null);
  const [edit, setEdit] = useState("");
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");
  return (
    <>
      <Space>
        <Input
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type='primary' onClick={() => addUser(name)}>
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
      <div>
        {data
          ?.filter((item) => {
            if (select == "all") return true;
            return item.status == select;
          })
          ?.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          ?.map((e) => (
            <div className="cart" key={e.id}>
              <h1>{e.name}</h1>
              <Space>
                <Tag color={e.status ? "green" : "red"}>
                  {e.status ? "active" : "inactive"}
                </Tag>
                <Button danger onClick={() => deleteUser(e.id)}>
                  Delete
                </Button>
                <Button
                  type='dashed'
                  onClick={() => [setEdit(e.name), setElem(e), setModal(true)]}
                >
                  Edit
                </Button>
                <Link to={`/about/zustand/${e.id}`}>Info</Link>
                <Checkbox
                  checked={e.status}
                  onChange={() => statusUser(e)}
                ></Checkbox>
              </Space>
            </div>
          ))}
        <Modal
          open={modal}
          onCancel={() => setModal(false)}
          title='Edit user'
          onOk={() => [
            editUser({ id: elem.id, status: elem.status, name: edit }),
            setModal(false),
          ]}
        >
          <Input
            placeholder='name'
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          />
        </Modal>
      </div>
    </>
  );
};

export default ZustandSync;
