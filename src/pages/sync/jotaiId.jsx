import React from "react";
import { data } from "../../stores/sync/jotaiTodo";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Space, Tag } from "antd";
import { useAtom } from "jotai";
const JotaiId = () => {
  const [res, setRes] = useAtom(data);
  const { id } = useParams();
  const info = res.find((e) => e.id == id);
  const navigate = useNavigate()
  return (
    <div className="center">
      <h1>{info?.name}</h1>
      <Space>
      <Tag color={info?.status ? "green" : "red"}>
        {info?.status ? "active" : "inactive"}
      </Tag>
      <Button type="primary" onClick={() => navigate(-1)}>Go back</Button>
      </Space>
    </div>
  );
};

export default JotaiId;
