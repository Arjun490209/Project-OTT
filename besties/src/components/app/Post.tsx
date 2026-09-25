import Card from "../shered/Card";
import Divider from "../shered/Divider";
import IconButton from "../shered/IconButton";

const Post = () => {
  return (
    <div className="space-y-6">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <Card key={index}>
            <div className="space-y-2">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                dignissimos in accusamus voluptate at quisquam repellendus
                deleniti voluptatum error ad minus laudantium corporis quaerat
                eaque blanditiis quas, optio maiores provident.
              </p>
              <div className="flex justify-between">
                <label className="text-sm font-normal text-black">
                  Jan 2, 2030 10:29 pm
                </label>
                <div className="flex gap-3">
                  <IconButton icon="edit-2-line" size="sm" type="success" />
                  <IconButton
                    icon="delete-bin-6-line"
                    size="sm"
                    type="danger"
                  />
                </div>
              </div>
              <Divider />
              <div className="flex gap-2">
                <IconButton icon="thumb-up-line" type="info">
                  20k
                </IconButton>

                <IconButton icon="thumb-down-line" type="danger">
                  20k
                </IconButton>

                <IconButton icon="chat-ai-3-line" type="secondary">
                  20k
                </IconButton>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default Post;
