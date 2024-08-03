"use client";
import { useAuthRedirect } from "@/hook/useAuthRedirect";

import React from "react";

const ELearning = () => {
  useAuthRedirect();

  return (
    <div>
      <p>This is E-learning</p>
    </div>
  );
};

export default ELearning;
