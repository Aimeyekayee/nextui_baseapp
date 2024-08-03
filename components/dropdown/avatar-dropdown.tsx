import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Badge,
  Avatar,
  DropdownMenu,
} from "@nextui-org/react";
import { UserStore } from "@/store/user.store";
import { useRouter } from "@/navigation";

interface IUserProps {
  email: string | null;
  username?: string;
  employee_no: number;
}

const AvatarDropdown: React.FC<IUserProps> = ({ email, username }) => {
  const router = useRouter();
  const clearUser = UserStore((state) => state.clearUser);

  const handleLogOut = () => {
    clearUser();
    router.push("/");
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <button className="mt-1 h-8 w-8 outline-none transition-transform">
          <Badge
            className="border-transparent"
            color="success"
            content=""
            placement="bottom-right"
            shape="circle"
            size="sm"
          >
            <Avatar
              size="sm"
              src="http://10.122.77.1:3001/emp_img/1005848.JPG"
            />
          </Badge>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{email}</p>
        </DropdownItem>
        <DropdownItem key="settings">User Settings</DropdownItem>
        <DropdownItem key="feedback">Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={handleLogOut}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AvatarDropdown;
