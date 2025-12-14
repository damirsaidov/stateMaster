import React from "react";
import { useTodos } from "../../context/todoContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Space, Tag } from "antd";

const ContextId = () => {
  const { todos } = useTodos();
  const { id } = useParams();
  const info = todos.find((e) => e.id == id);
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

export default ContextId;
