import Button from "../shered/Button";
import Card from "../shered/Card";

const Audio = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card title="You">
          <div className="flex flex-col items-center">
            <img
              src="/images/avatar.webp"
              alt="avatar"
              className="w-40 h-40 object-cover rounded-full"
            />
          </div>
        </Card>

        <Card title="Ram">
          <div className="flex flex-col items-center">
            <img
              src="/images/avatar.webp"
              alt="avatar"
              className="w-40 h-40 object-cover rounded-full"
            />
          </div>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-white cursor-pointer">
            <i className="ri-mic-line text-lg"></i>
          </button>
        </div>

        <Button type="danger" icon="close-circle-fill">
          End
        </Button>
      </div>
    </div>
  );
};

export default Audio;
