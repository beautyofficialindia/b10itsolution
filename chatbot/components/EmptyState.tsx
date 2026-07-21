"use client";

import React from "react";

export const EmptyState: React.FC<{ title?: string; description?: string }> = ({ 
  title = "No conversation found",
  description = "Start a new conversation to get started."
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 h-full text-center space-y-2 opacity-60">
      <h3 className="b10-chatbot-heading text-xl font-medium">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};
