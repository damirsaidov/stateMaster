import React, { useEffect, useState } from "react";
import useTodo from "../../stores/async/zustandAsync";
import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import { Link } from "react-router-dom";
const ZustandAsync = () => {
  const data = useTodo((state) => state.data);
  const getData = useTodo((state) => state?.getData);
  const deleteUser = useTodo((state) => state?.deleteData);
  const addUser = useTodo((state) => state?.postData);
  const statusData = useTodo((state) => state?.statusData);
  const editData = useTodo((state) => state?.editData);
  const searchs = useTodo((state) => state?.searchUser);
  const sortSelect = useTodo((state) => state?.sortUsers);
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [elem, setElem] = useState(null);
  const [edit, setEdit] = useState("");
  useEffect(() => {
    getData();
  }, []);
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
          onChange={(e) => sortSelect(e)}
          options={[
            { value: "all", label: "All" },
            { value: true, label: "Active" },
            { value: false, label: "Inactive" },
          ]}
        />
        <Input
          placeholder='Search'
          onChange={(e) => searchs(e.target.value)}
        ></Input>
      </Space>
      <div>
        {data?.map((e) => (
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
              <Link to={`/about/${e.id}`}>Info</Link>

              <Checkbox
                checked={e.status}
                onChange={() => statusData(e)}
              ></Checkbox>
            </Space>
          </div>
        ))}
        <Modal
          open={modal}
          onOk={() => [editData({ ...elem, name: edit }), setModal(false)]}
          onCancel={() => setModal(false)}
          title='Edit user'
        >
          <Input
            placeholder='Name'
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          ></Input>
        </Modal>
      </div>
    </>
  );
};

export default ZustandAsync;
