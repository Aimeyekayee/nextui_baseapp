import { Button, ButtonProps } from "@nextui-org/button";
import React from "react";
import { useRouter } from "@/navigation";

interface ButtonRouterProps extends ButtonProps {
  route: string; // Additional parameter for the route
}

const ButtonRouter: React.FC<ButtonRouterProps> = ({
  children,
  route,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route); // Navigate to the specified route
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

export default ButtonRouter;
