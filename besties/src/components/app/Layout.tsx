import { Link, Outlet, useLocation } from "react-router-dom";
import Avatar from "../shered/Avatar";
import Card from "../shered/Card";
import { useState } from "react";

const sideBarStyle = {
  background: `radial-gradient( circle farthest-corner at 17.6% 50.7%,  rgba(25,0,184,1) 0%, rgba(0,0,0,1) 90% )`,
};

const menus = [
  {
    label: "desktop",
    icon: "ri-home-9-line",
    href: "/app/desktop",
  },
  {
    label: "my posts",
    icon: "ri-message-2-line",
    href: "/app/my-posts",
  },
  {
    label: "friends",
    icon: "ri-group-line",
    href: "/app/friends",
  },
];

const Layout = () => {
  const [leftAsideSize, setLeftAsideSize] = useState(350);
  const rightAsideSize = 380;
  const collapse = 130;
  const sectionDimension = {
    width: `calc(100% - ${leftAsideSize}px - ${rightAsideSize}px)`,
    marginLeft: leftAsideSize,
    transition: "width 0.3s ease-in-out",
  };

  const { pathname } = useLocation();

  const getPathName = (path: string) => {
    const firstPath = path.split("/").pop();
    const finalPath = firstPath?.split("-").join(" ");
    return finalPath || "";
  };

  return (
    <div className="min-h-screen">
      <aside
        className="bg-white h-full p-8 fixed top-0 left-0 overflow-auto"
        style={{
          width: `${leftAsideSize}px`,
          transition: "width 0.3s ease-in-out",
        }}
      >
        <div
          className="h-full bg-blue-500 rounded-2xl py-6"
          style={sideBarStyle}
        >
          <div className="flex items-center justify-center">
            {leftAsideSize === collapse ? (
              <Avatar size="small" image="/images/avatar.webp" />
            ) : (
              <Avatar
                title="Arjun Prajapati"
                subTitle="Software Engineer"
                image="/images/avatar.webp"
                titleColor="#fff"
                subTitleColor="#ddd"
              />
            )}
          </div>
          <div className="px-4 pt-6">
            {menus.map((menu, index) => (
              <Link
                key={index}
                to={menu.href}
                className={`flex items-center gap-4  py-2 text-gray-300 hover:bg-gray-500 hover:text-white rounded-lg mt-2 cursor-pointer ${leftAsideSize === collapse ? "overflow-hidden px-2" : "px-4"} `}
              >
                <i className={`${menu.icon} text-lg`}></i>
                <label className="capitalize">{menu.label}</label>
              </Link>
            ))}

            <button
              className={`flex w-full items-center gap-4  py-2 text-gray-300 hover:bg-red-500 hover:text-white rounded-lg mt-2 cursor-pointer ${leftAsideSize === collapse ? "overflow-hidden px-2" : "px-4"} `}
            >
              <i className="ri-logout-circle-r-line text-lg"></i>
              <label className="capitalize">Logout</label>
            </button>
          </div>
        </div>
      </aside>

      <section className="h-full py-8" style={sectionDimension}>
        <Card
          title={
            <div>
              <button
                className="hover:text-blue-600 text-blue-400 cursor-pointer"
                onClick={() =>
                  setLeftAsideSize(leftAsideSize === collapse ? 350 : 130)
                }
              >
                <i className="ri-arrow-left-fill text-lg"></i>
              </button>
              <span className="capitalize ml-2">{getPathName(pathname)}</span>
            </div>
          }
          divider
        >
          <Outlet />
        </Card>
      </section>

      <aside
        className="bg-white h-full px-4 py-8 fixed top-0 right-0 overflow-auto space-y-6"
        style={{ width: `${rightAsideSize}px` }}
      >
        <div className="h-64 overflow-auto">
          <Card title="Suggested" divider>
            <div className="space-y-6">
              {Array(10)
                .fill(0)
                .map((item, index) => (
                  <div key={index}>
                    <Avatar
                      image="/images/avatar.webp"
                      title="Mr. Ram"
                      subTitle={
                        <button className="bg-green-500 text-white px-2 rounded py-0.5 text-sm">
                          <i className="ri-user-add-line mr-1"></i>
                          Add Friend
                        </button>
                      }
                    />
                  </div>
                ))}
            </div>
          </Card>
        </div>

        <Card title="My friends" divider>
          <div className="space-y-4 py-3">
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-2 rounded-lg flex items-center justify-between"
                >
                  <Avatar
                    size="small"
                    title="Arjun Prajapati"
                    image="/images/avatar.webp"
                    subTitle={
                      <small
                        className={`${index % 2 === 0 ? "text-green-500" : "text-red-500"} font-medium`}
                      >
                        {index % 2 === 0 ? "Online" : "Offline"}
                      </small>
                    }
                  />
                  <div className="space-x-2">
                    <Link
                      to={"/app/chat"}
                      className="hover:text-blue-600 text-blue-400 cursor-pointer"
                      title="Chat"
                    >
                      <i className="ri-chat-ai-line text-lg"></i>
                    </Link>

                    <Link
                      to={"/app/audio-chat"}
                      className="hover:text-green-600 text-green-400 cursor-pointer"
                      title="Call"
                    >
                      <i className="ri-phone-line text-lg"></i>
                    </Link>

                    <Link
                      to={"/app/video-chat"}
                      className="hover:text-amber-600 text-amber-400 cursor-pointer"
                      title="Video Call"
                    >
                      <i className="ri-video-on-ai-line text-lg"></i>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      </aside>
    </div>
  );
};

export default Layout;
