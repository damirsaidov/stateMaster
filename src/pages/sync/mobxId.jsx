import React, { useEffect, useState } from "react";
import { counterStore } from "../../stores/sync/mobxTodo";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Tag } from "antd";

const MobxId = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  function getData() {
    let datas = counterStore.data.find((e) => e.id == id);
    setData(datas);
  }
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="center">
      <h1>{data?.name}</h1>
      <Tag color={data?.status ? "green" : "red"}>
        {data?.status ? "active" : "inactive"}
      </Tag>
      <Button type='link' onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
};

export default MobxId;
