"use client";

import React from "react";
import { ChatbotWidget } from "@chatbot/components/ChatbotWidget";

export default function ChatbotPlayground() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Chatbot Playground</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          This page is strictly for testing the isolated Chatbot UI in development. 
          It will not be included in production.
        </p>
        
        {/* Dummy layout to simulate website content */}
        <div className="space-y-8 opacity-50">
          <div className="h-64 bg-gray-200 dark:bg-neutral-800 rounded-2xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-48 bg-gray-200 dark:bg-neutral-800 rounded-2xl" />
            <div className="h-48 bg-gray-200 dark:bg-neutral-800 rounded-2xl" />
          </div>
          <div className="h-96 bg-gray-200 dark:bg-neutral-800 rounded-2xl" />
        </div>
      </div>

      {/* The isolated widget */}
      <ChatbotWidget />
    </div>
  );
}
