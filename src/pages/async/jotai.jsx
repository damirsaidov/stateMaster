import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { data } from "../../stores/async/jotaiAsync";
import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import { Link } from "react-router-dom";

const JotaiAsync = () => {
  const [res, setRes] = useAtom(data);
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [elem, setElem] = useState(null);
  const [edit, setEdit] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");

  async function getData() {
    try {
      let res = await fetch(`http://localhost:3000/data`);
      let data = await res.json();
      setRes(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteData(id) {
    try {
      await fetch(`http://localhost:3000/data/${id}`, { method: "DELETE" });
      getData();
    } catch (error) {
      console.error(error);
    }
  }
  async function statusData(e) {
    try {
      await fetch(`http://localhost:3000/data/${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, status: !e.status }),
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  }
  async function editData(e) {
    try {
      await fetch(`http://localhost:3000/data/${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, name: e.name }),
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  }
  async function postData(name) {
    try {
      await fetch(`http://localhost:3000/data`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name: name, status: false }),
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Space>
        <Input
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type='primary' onClick={() => postData(name)}>
          Add
        </Button>
        <Select
            defaultValue='all'
            style={{ width: 120 }}
            onChange={(e) => setSelected(e)}
            options={[
              { value: "all", label: "All" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
          />
        <Input
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
      </Space>
      <>
        {res
          .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
          .filter((e) => {
            if (selected == "active") return e.status == true;
            if (selected == "inactive") return e.status == false;
            return true;
          })
          ?.map((e) => (
            <div key={e.id} className="cart">
              <h1>{e.name}</h1>
              <Space>
                <Tag color={e.status ? "green" : "red"}>
                  {e.status ? "active" : "inactive"}
                </Tag>
                <Button danger onClick={() => deleteData(e.id)}>
                  Delete
                </Button>
                <Link to={`/about/${e.id}`}>Info</Link>
                <Button
                  type='dashed'
                  onClick={() => [setEdit(e.name), setElem(e), setModal(true)]}
                >
                  Edit
                </Button>
                <Checkbox
                  checked={e.status}
                  onClick={() => statusData(e)}
                ></Checkbox>
              </Space>
            </div>
          ))}
        <Modal
          open={modal}
          onCancel={() => setModal(false)}
          onOk={() => [editData({ ...elem, name: edit }), setModal(false)]}
          title='Edit user'
        >
          <Input
            placeholder='name'
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          ></Input>
        </Modal>
      </>
    </div>
  );
};

export default JotaiAsync;
