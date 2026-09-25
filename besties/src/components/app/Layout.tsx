import { Link, Outlet, useLocation } from "react-router-dom";
import { BellOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Avatar from "../shered/Avatar";
import Card from "../shered/Card";
import { useContext, useEffect, useState } from "react";
import Context from "../Context";
import HttpInterceptor from "../../lib/HttpInterceptor";

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

const getWindowWidth = () =>
  typeof window !== "undefined" ? window.innerWidth : 1200;

const Layout = () => {
  const { session } = useContext(Context);
  const [leftAsideSize, setLeftAsideSize] = useState(350);
  const [viewportWidth, setViewportWidth] = useState(() => getWindowWidth());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rightAsideSize = 380;
  const collapse = 130;

  const isMobile = viewportWidth < 768;
  const showRightPanel = viewportWidth >= 1100;

  useEffect(() => {
    const handleResize = () => {
      const width = getWindowWidth();
      setViewportWidth(width);

      if (width >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { pathname } = useLocation();

  const mainLayoutStyle = {
    width: isMobile ? "100%" : "100%",
    paddingLeft: isMobile ? 0 : leftAsideSize,
    paddingRight: isMobile || !showRightPanel ? 0 : rightAsideSize,
    transition: "all 0.3s ease-in-out",
  };

  const getPathName = (path: string) => {
    const firstPath = path.split("/").pop();
    const finalPath = firstPath?.split("-").join(" ");
    return finalPath || "";
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen((prev) => !prev);
      return;
    }

    setLeftAsideSize((prev) => (prev === collapse ? 350 : collapse));
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const uploadImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = async () => {
      if (!input.files) return;
      const file = input.files[0];
      const payload = {
        path: "demo/hello.png",
        type: file.type,
      };

      try {
        const options = {
          headers: {
            "Content-Type": file.type,
          },
        };
        const { data } = await HttpInterceptor.post("/storage/upload", payload);

        HttpInterceptor.put(data.url, file, options);
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {isMobile && (
        <Drawer
          open={mobileMenuOpen}
          placement="left"
          onClose={closeMobileMenu}
          width={viewportWidth < 480 ? 280 : 320}
          closable={false}
          bodyStyle={{ padding: 0, background: "transparent" }}
          style={{ background: "transparent" }}
          destroyOnClose
        >
          <aside
            className="h-full border-r border-slate-200 bg-white shadow-lg shadow-slate-200/60"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="flex h-full flex-col overflow-hidden rounded-r-3xl py-5"
              style={sideBarStyle}
            >
              <div className="px-3 pb-4">
                {session && (
                  <div className="flex items-center justify-center">
                    <Avatar size="small" image="/images/avatar.webp" />
                  </div>
                )}
              </div>

              <nav className="mt-4 flex-1 px-3 space-y-2">
                {menus.map((menu, index) => (
                  <Link
                    key={index}
                    to={menu.href}
                    onClick={closeMobileMenu}
                    className="group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                  >
                    <i className={`${menu.icon} text-lg`}></i>
                    <span className="capitalize">{menu.label}</span>
                  </Link>
                ))}

                <button
                  type="button"
                  className="mt-3 flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-red-500/80 hover:text-white"
                >
                  <i className="ri-logout-circle-r-line text-lg"></i>
                  <span className="capitalize">Logout</span>
                </button>
              </nav>
            </div>
          </aside>
        </Drawer>
      )}

      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:px-6">
            <div className="flex items-center gap-3">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={toggleSidebar}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 lg:hidden"
              />

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
                  B
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-slate-500">
                    Workspace
                  </p>
                  <h1 className="text-base font-bold text-slate-900">
                    Besties
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                className="hidden sm:inline-flex"
                type="default"
                icon={<i className="ri-calendar-event-line text-base" />}
              >
                Schedule
              </Button>
              <Button
                type="text"
                shape="circle"
                icon={<BellOutlined />}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              />
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {!isMobile && (
            <aside
              className="fixed left-0 top-[64px] z-40 h-[calc(100vh-64px)] overflow-hidden border-r border-slate-200 bg-white shadow-lg shadow-slate-200/60"
              style={{
                width: `${leftAsideSize}px`,
                transition: "width 0.3s ease-in-out",
              }}
            >
              <div
                className="flex h-full flex-col overflow-hidden rounded-r-3xl py-5"
                style={sideBarStyle}
              >
                <div className="px-3 pb-4">
                  {session && (
                    <div className="flex items-center justify-center">
                      {leftAsideSize === collapse ? (
                        <Avatar size="small" image="/images/avatar.webp" />
                      ) : (
                        <Avatar
                          title={session.fullName}
                          subTitle={session.email}
                          image="/images/avatar.webp"
                          titleColor="#fff"
                          subTitleColor="#ddd"
                          onClick={uploadImage}
                        />
                      )}
                    </div>
                  )}
                </div>

                <nav className="mt-4 flex-1 px-3 space-y-2">
                  {menus.map((menu, index) => (
                    <Link
                      key={index}
                      to={menu.href}
                      onClick={closeMobileMenu}
                      className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white ${leftAsideSize === collapse ? "justify-center" : ""}`}
                    >
                      <i className={`${menu.icon} text-lg`}></i>
                      {leftAsideSize !== collapse && (
                        <span className="capitalize">{menu.label}</span>
                      )}
                    </Link>
                  ))}

                  <button
                    type="button"
                    className={`mt-3 flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-red-500/80 hover:text-white ${leftAsideSize === collapse ? "justify-center" : ""}`}
                  >
                    <i className="ri-logout-circle-r-line text-lg"></i>
                    {leftAsideSize !== collapse && (
                      <span className="capitalize">Logout</span>
                    )}
                  </button>
                </nav>

                <div className="px-3 pb-2">
                  <button
                    type="button"
                    onClick={toggleSidebar}
                    className="hidden w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 lg:flex"
                  >
                    <i
                      className={`mr-2 ${leftAsideSize === collapse ? "ri-arrow-right-s-line" : "ri-arrow-left-s-line"}`}
                    ></i>
                    {leftAsideSize === collapse ? "Expand" : "Collapse"}
                  </button>
                </div>
              </div>
            </aside>
          )}

          <main
            className="flex-1 overflow-y-auto bg-slate-100 px-3 py-4 sm:px-4 lg:px-6"
            style={mainLayoutStyle}
          >
            <div className="mx-auto max-w-6xl">
              <Card
                title={
                  <div className="flex items-center gap-2">
                    <Button
                      type="text"
                      icon={<MenuOutlined />}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 lg:hidden"
                      onClick={toggleSidebar}
                    />
                    <span className="text-lg font-semibold capitalize text-slate-800">
                      {getPathName(pathname)}
                    </span>
                  </div>
                }
                divider
              >
                <Outlet />
              </Card>
            </div>
          </main>

          {!isMobile && showRightPanel && (
            <aside
              className="fixed right-0 top-[64px] z-20 h-[calc(100vh-64px)] w-[380px] overflow-auto border-l border-slate-200 bg-white px-4 py-5"
              style={{
                transition: "all 0.3s ease-in-out",
              }}
            >
              <div className="space-y-6">
                <Card title="Suggested" divider>
                  <div className="space-y-5">
                    {Array(8)
                      .fill(0)
                      .map((_, index) => (
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

                <Card title="My friends" divider>
                  <div className="space-y-3 py-2">
                    {Array(12)
                      .fill(0)
                      .map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-3 rounded-xl bg-slate-100 p-2.5"
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
                          <div className="flex items-center gap-2">
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
              </div>
            </aside>
          )}
        </div>
      </div>

      {isMobile && (
        <div className="px-3 pb-5 pt-2">
          <div className="space-y-4">
            <Card title="Suggested" divider>
              <div className="space-y-4">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="border-b border-slate-100 pb-2 last:border-0 last:pb-0"
                    >
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

            <Card title="My friends" divider>
              <div className="space-y-3">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-2 rounded-xl bg-slate-100 p-2"
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
                      <div className="flex items-center gap-2">
                        <Link
                          to={"/app/chat"}
                          className="text-blue-500"
                          title="Chat"
                        >
                          <i className="ri-chat-ai-line text-lg"></i>
                        </Link>
                        <Link
                          to={"/app/audio-chat"}
                          className="text-green-500"
                          title="Call"
                        >
                          <i className="ri-phone-line text-lg"></i>
                        </Link>
                        <Link
                          to={"/app/video-chat"}
                          className="text-amber-500"
                          title="Video Call"
                        >
                          <i className="ri-video-on-ai-line text-lg"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
