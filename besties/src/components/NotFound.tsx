import { Button, Typography } from "antd";
import { HomeOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center">
        {/* Large 404 Header */}
        <h1 className="text-9xl font-extrabold tracking-widest text-indigo-600">
          404
        </h1>

        {/* Visual Badge/Banner */}
        <div className="absolute rotate-12 rounded bg-indigo-500 px-2 text-sm text-white">
          Page Not Found
        </div>

        {/* Text Content */}
        <div className="mt-8">
          <Title level={2} className="!text-gray-900">
            Oops! You're lost in space.
          </Title>
          <Paragraph className="text-gray-500">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Paragraph>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            type="default"
            icon={<ArrowLeftOutlined />}
            size="large"
            onClick={() => navigate(-1)}
            className="flex items-center justify-center"
          >
            Go Back
          </Button>

          <Button
            type="primary"
            icon={<HomeOutlined />}
            size="large"
            onClick={() => navigate("/")}
            className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
