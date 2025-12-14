import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import {
  addData,
  deleteData,
  editData,
  statusData,
} from "../../stores/sync/reduxTodo";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ReduxSync() {
  const data = useSelector((state) => state?.todoSync?.data);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState("");
  return (
    <div>
      <Space>
        <Input
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type='primary' onClick={() => dispatch(addData(name))}>
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
                <Button danger onClick={() => dispatch(deleteData(e.id))}>
                  Delete
                </Button>
                <Button
                  type='dashed'
                  onClick={() => [setEdit(e.name), setId(e.id), setModal(true)]}
                >
                  Edit
                </Button>
                <Link to={`/about/redux/${e.id}`}>Info</Link>
                <Checkbox
                  checked={e.status}
                  onChange={() => dispatch(statusData(e.id))}
                />
              </Space>
            </div>
          ))}
        <Modal
          open={modal}
          title='Edit user'
          onCancel={() => setModal(false)}
          onOk={() => [
            dispatch(editData({ name: edit, id: id })),
            setModal(false),
          ]}
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
}
