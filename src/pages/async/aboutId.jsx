import { Button, Space, Tag } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const AboutId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  async function getData() {
    try {
      let res = await fetch(`http://localhost:3000/data/${id}`);
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="center">
      <h1>{data?.name}</h1>
      <Space>
        <Tag color={data?.status ? "green" : "red"}>
          {data?.status ? "active" : "inactive"}
        </Tag>
        <Button type='primary' onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Space>
    </div>
  );
};
export default AboutId;
