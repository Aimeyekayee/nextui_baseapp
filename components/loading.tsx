"use client";
import React, { useEffect } from "react";
import { UxSceneStore } from "@/store/uxscene.store";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = UxSceneStore();

  return (
    <div className="relative flex flex-1 flex-col ">
      {isLoading ? (
        <div className="absolute inset-0 bg-background bg-opacity-50"></div>
      ) : null}
      <div className="flex flex-1">{children}</div>
    </div>
  );
};

export default Loading;
