import type { FC, ReactElement, ReactNode } from "react";

interface cardInterface {
  children?: ReactNode;
  title?: ReactNode;
  footer?: ReactElement;
  divider?: boolean;
}
const Card: FC<cardInterface> = ({
  children,
  title,
  footer,
  divider = false,
}) => {
  return (
    <div className="shadow p-4 border border-gray-100 rounded-lg bg-white space-y-2">
      {title && (
        <h3 className="text-lg font-semibold capitalize">{title && title}</h3>
      )}
      {divider && <div className="border-b border-gray-200 -mx-4" />}
      {children && <div className="text-gray-500">{children}</div>}
      {footer && <div className="pt-3">{footer}</div>}
    </div>
  );
};

export default Card;
