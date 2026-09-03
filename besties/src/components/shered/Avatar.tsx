import type { FC, ReactNode } from "react";

interface AvatarInterface {
  title?: string;
  subTitle?: ReactNode;
  image?: string;
  titleColor?: string;
  subTitleColor?: string;
  size?: "small" | "medium" | "large";
  key?: string | number;
}

const Avatar: FC<AvatarInterface> = ({
  title,
  subTitle = "Subtitle Missing",
  image,
  titleColor = "#000",
  subTitleColor = "#f5f5f5",
  size = "medium",
  key = 0,
}) => {
  return (
    <div className="flex items-center gap-3 " key={key}>
      {image && (
        <img
          src={image}
          alt={title}
          className={`w-12 h-12 object-cover rounded-full border border-white ${size === "small" ? "w-8 h-8" : size === "large" ? "w-16 h-16" : ""}`}
        />
      )}
      {title && subTitle && (
        <div className="flex flex-col">
          <h2
            className={`${size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"} font-semibold capitalize`}
            style={{ color: titleColor }}
          >
            {title}
          </h2>
          <div style={{ color: subTitleColor }}>{subTitle}</div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
