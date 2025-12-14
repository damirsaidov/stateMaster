import { Space, Switch } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : "white"} style={{ height: "100vh" }}>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div>
          <Space
            style={{
              display: "flex",
              justifySelf: "center",
              gap: "20px",
              padding: "20px",
              borderBottom: "1px solid #999",
            }}
          >
            <Space>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/"}
              >
                Sync Redux
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/async/redux"}
              >
                Async Redux
              </NavLink>
            </Space>
            <hr className="hr" style={{ border: "1px solid #999", height: "20px" }} />
            <Space>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/sync/zustand"}
              >
                Sync Zustand
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/async/zustand"}
              >
                Async Zustand
              </NavLink>
            </Space>
            <hr className="hr" style={{ border: "1px solid #999", height: "20px" }} />
            <Space>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/sync/jotai"}
              >
                Sync Jotai
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/async/jotai"}
              >
                Async Jotai
              </NavLink>
            </Space>
            <hr className="hr" style={{ border: "1px solid #999", height: "20px" }} />
            <Space>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/sync/mobx"}
              >
                Sync Mobx
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/async/mobx"}
              >
                Async Mobx
              </NavLink>
            </Space>
            <hr className="hr" style={{ border: "1px solid #999", height: "20px" }} />
            <Space>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                to={"/sync/context"}
              >
                Sync Context
              </NavLink>
              <Switch checked={darkMode} onChange={setDarkMode} />
            </Space>
          </Space>
        </div>
        <div className="comp" style={{ paddingTop: "20px", paddingLeft: "100px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
