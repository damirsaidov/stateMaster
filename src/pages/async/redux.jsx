import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  deleteData,
  editData,
  getData,
  searchData,
  sortData,
  statusData,
} from "../../stores/async/reduxAsync";
import { Button, Checkbox, Input, Modal, Select, Space, Tag } from "antd";
import { Link } from "react-router-dom";
const ReduxAsync = () => {
  const [edit, setEdit] = useState("");
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [elem, setElem] = useState(null);
  const data = useSelector((state) => state?.todoAsync?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
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
          onChange={(e) => dispatch(sortData(e))}
          options={[
            { value: "all", label: "All" },
            { value: true, label: "Active" },
            { value: false, label: "Inactive" },
          ]}
        />
        <Input
          placeholder='Search'
          onChange={(e) => dispatch(searchData(e.target.value))}
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
              <Button danger onClick={() => dispatch(deleteData(e.id))}>
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
                onChange={() => dispatch(statusData(e))}
              />
            </Space>
          </div>
        ))}
        <Modal
          open={modal}
          title='Edit user'
          onCancel={() => setModal(false)}
          onOk={() => [
            dispatch(editData({ ...elem, name: edit })),
            setModal(false),
          ]}
        >
          <Input
            placeholder='name'
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          ></Input>
        </Modal>
      </div>
    </>
  );
};

export default ReduxAsync;
