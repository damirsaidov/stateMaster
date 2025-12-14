import React from "react";
import useBear from "../../stores/sync/zustandTodo";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Space, Tag } from "antd";
const ZustandId = () => {
  const data = useBear((state) => state?.data);
  const { id } = useParams();
  const info = data.find((e) => e.id == id);
  const navigate = useNavigate();
  return (
    <div className='center'>
      <h1>{info?.name}</h1>
      <Space>
        <Tag color={info?.status ? "green" : "red"}>
          {info?.status ? "active" : "inactive"}
        </Tag>
        <Button type='primary' onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Space>
    </div>
  );
};

export default ZustandId;
