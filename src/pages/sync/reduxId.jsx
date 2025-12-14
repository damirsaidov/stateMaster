import { Button, Space, Tag } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const ReduxId = () => {
  const data = useSelector((state) => state?.todoSync?.data);
  const { id } = useParams();
  const navigate = useNavigate();
  const info = data.find((e) => e.id == id);
  return (
    <div className="center">
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

export default ReduxId;
