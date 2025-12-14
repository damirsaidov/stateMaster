import React, { useEffect, useState } from "react";
import { asyncStore } from "../../stores/async/mobxAsync";
import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Mobx = observer(() => {
  const [name, setName] = useState("");
  const [edit, setEdit] = useState("");
  const [modal, setModal] = useState(false);
  const [elem, setElem] = useState(null);
  useEffect(() => {
    asyncStore.getData();
  }, []);
  return (
    <>
      <Space>
        <Input
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type='primary' onClick={() => asyncStore.postData(name)}>
          Add
        </Button>
        <Select
          defaultValue='all'
          style={{ width: 120 }}
          onChange={(e) => asyncStore.sortData(e)}
          options={[
            { value: "all", label: "All" },
            { value: true, label: "Active" },
            { value: false, label: "Inactive" },
          ]}
        />
        <Input
          placeholder='Search'
          onChange={(e) => asyncStore.searchData(e.target.value)}
        ></Input>
      </Space>
      <div>
        {asyncStore.data.map((e) => (
          <div key={e.id} className="cart">
            <h1>{e.name}</h1>
            <Space>
              <Tag color={e.status ? "green" : "red"}>
                {e.status ? "active" : "inactive"}
              </Tag>
              <Button onClick={() => asyncStore.deleteData(e.id)} danger>
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
                onClick={() => asyncStore.statusData(e)}
                checked={e.status}
              ></Checkbox>
            </Space>
          </div>
        ))}
        <Modal
          open={modal}
          onCancel={() => setModal(false)}
          title='Edit user'
          onOk={() => [
            asyncStore.editData({ ...elem, name: edit }),
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
});

export default Mobx;
