import { StateCreator } from "zustand";
import { IUserState } from "../interface/user.interface";
import { onlyCapitalizeFirstLetter } from "@/functions/text-handle";
import { User } from "@/types/user.type";
import { USER_STORAGE_KEY } from "@/constant/user";

export const UserSlice: StateCreator<IUserState> = (set, get) => ({
  user: null,
  avatarImage: undefined,

  username() {
    const user = get().user;
    return user ? `${user.first_primary} ${user.last_primary?.[0]}.` : "Guest";
  },

  shortname() {
    const user = get().user;
    return user
      ? `${onlyCapitalizeFirstLetter(
          user.first_primary || "D"
        )} ${onlyCapitalizeFirstLetter(user.last_primary || "S")}`
      : "Guest";
  },

  isAdmin() {
    return get().user?.is_admin || false;
  },

  isLoggedIn() {
    return get().user != null;
  },

  setUser(user: User) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    set({ user });
  },

  loadUser() {
    const userStr = localStorage.getItem(USER_STORAGE_KEY) ?? null;
    const user = userStr ? JSON.parse(userStr) : null;
    console.log(user);
    set({ user });
  },

  clearUser() {
    localStorage.removeItem(USER_STORAGE_KEY);
    set({ user: null });
  },
});
