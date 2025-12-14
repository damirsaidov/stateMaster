import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { data } from "../../stores/sync/jotaiTodo";
import { Link } from "react-router-dom";

const JotaiSync = () => {
  const [res, setRes] = useAtom(data);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState("");
  const [modal, setModal] = useState(false);
  const [elem, setElem] = useState(null);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");
  return (
    <div>
      <Space>
        <Input
          value={name}
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type='primary'
          onClick={() =>
            setRes((prev) => [
              ...prev,
              { name: name, status: false, id: Date.now() },
            ])
          }
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
      <>
        {res
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
                <Button
                  danger
                  onClick={() =>
                    setRes((prev) => prev.filter((elem) => elem.id != e.id))
                  }
                >
                  Delete
                </Button>
                <Button
                  type='dashed'
                  onClick={() => [setEdit(e.name), setElem(e), setModal(true)]}
                >
                  Edit
                </Button>
                <Link to={`/about/jotai/${e.id}`}>Info</Link>
                <Checkbox
                  checked={e.status}
                  onChange={() =>
                    setRes((prev) =>
                      prev.map((elem) =>
                        elem.id == e.id ? { ...e, status: !e.status } : elem
                      )
                    )
                  }
                ></Checkbox>
              </Space>
            </div>
          ))}
        <Modal
          title='Edit user'
          open={modal}
          onCancel={() => setModal(false)}
          onOk={() => [
            setRes((prev) =>
              prev.map((e) =>
                elem.id == e.id ? { ...elem, name: edit } : elem
              )
            ),
            setModal(false),
          ]}
        >
          <Input
            placeholder='Name'
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          ></Input>
        </Modal>
      </>
    </div>
  );
};

export default JotaiSync;
