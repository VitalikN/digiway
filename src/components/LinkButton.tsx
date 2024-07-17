import React from "react";

interface LinkButtonProps {
  className: string;
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  href,
  children,
}) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default LinkButton;
