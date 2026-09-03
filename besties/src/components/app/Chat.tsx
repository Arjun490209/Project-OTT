import Avatar from "../shered/Avatar";
import Button from "../shered/Button";
import Input from "../shered/Input";

const Chat = () => {
  return (
    <div>
      <div className="h-125 overflow-auto space-y-12 pb-10 ">
        {Array(20)
          .fill(0)
          .map((item, index) => (
            <div className="space-y-12" key={index}>
              <div className="flex items-start gap-4">
                <Avatar image="/images/avatar.webp" size="medium" />
                <div className="flex-1 relative bg-rose-50 text-pink-500 border border-rose-100 px-4 py-2 rounded-lg">
                  <h1 className="font-bold text-black">You</h1>
                  <label>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo in sed labore voluptatem vero reprehenderit.
                  </label>
                  <i className="ri-arrow-left-s-fill text-2xl absolute top-0 -left-4 text-red-50"></i>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-1 relative bg-violet-50 text-blue-500 border border-violet-100 px-4 py-2 rounded-lg">
                  <h1 className="font-bold text-black text-right">Friend</h1>
                  <label>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo in sed labore voluptatem vero reprehenderit.
                  </label>
                  <i className="ri-arrow-right-s-fill text-2xl absolute top-0 -right-4 text-violet-50"></i>
                </div>
                <Avatar image="/images/avatar.webp" size="medium" />
              </div>
            </div>
          ))}
      </div>

      <div>
        <div className="flex gap-3 items-center">
          <form className="flex gap-2 flex-1">
            <Input name="message" placeholder="Type your massage here... " />
            <Button type="success" icon="send-plane-line">
              Send
            </Button>
          </form>
          <button className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-500 hover:text-white cursor-pointer">
            <i className="ri-attachment-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
