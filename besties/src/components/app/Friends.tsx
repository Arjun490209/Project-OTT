import Card from "../shered/Card";

const Friends = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {Array(20)
        .fill(0)
        .map((item, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/images/a2.webp"
                alt="avatar"
                className="w-16 h-16 object-cover rounded-full"
              />
              <h2 className="text-base font-medium">Ram Kumar</h2>
              <button className="px-4 py-1 bg-rose-500 text-white hover:bg-rose-600 cursor-pointer rounded-lg">
                <i className="ri-user-minus-line"></i> Unfriend
              </button>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default Friends;
