"use client";

import { Modal } from "@/components/ui/modal";
import React from "react";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal
        title="Test"
        description="Test Description"
        isOpen
        onClose={() => {}}
      ></Modal>
    </div>
  );
};

export default SetupPage;
