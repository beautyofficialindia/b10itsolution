"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useBusinessContext } from "@chatbot/business";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { Calendar, Mail, MessageSquareText } from "lucide-react";

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

const escalationCards = [
  {
    title: "Book a Consultation",
    desc: "Talk directly with our experts.",
    icon: <Calendar size={14} className="text-white/60 group-hover:text-white transition-colors" />
  },
  {
    title: "Contact Our Team",
    desc: "Share your requirements.",
    icon: <MessageSquareText size={14} className="text-white/60 group-hover:text-white transition-colors" />
  },
  {
    title: "Email Support",
    desc: "Get assistance via email.",
    icon: <Mail size={14} className="text-white/60 group-hover:text-white transition-colors" />
  }
];

export const WelcomeScreen: React.FC<{ onStart: (msg?: string) => Promise<boolean> | void }> = ({ onStart }) => {
  const { company } = useBusinessContext();

  const companyName = company?.name ? company.name : "B10";

  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col p-4 md:p-5 space-y-4 h-full"
    >
      <div className="space-y-2 pt-2">
        <h1 className="b10-chatbot-heading text-3xl font-bold tracking-tight text-white leading-tight">
          {companyName} AI Assistant
        </h1>
        <div className="space-y-1.5">
          <p className="text-[14px] font-semibold text-white/90">
            Your AI Business Consultant.
          </p>
          <p className="text-[14px] font-medium leading-snug text-[#A1A1AA] max-w-[320px]">
            Helping founders and businesses discover technology solutions, validate ideas and connect with the {companyName} team.
          </p>
        </div>
        <p className="text-[14px] font-medium leading-snug text-[#A1A1AA] pt-1 italic">
          Let&apos;s build something amazing together.
        </p>
      </div>

      <div className="pt-1">
        <SuggestedQuestions onSelect={(q) => onStart(q)} />
      </div>

      <div className="mt-auto pt-6 pb-2">
        <div className="w-full h-px bg-white/5 mb-4" />
        <div className="space-y-2">
          {escalationCards.map((card, i) => (
            <button
              key={i}
              className="group flex items-center justify-between w-full p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 text-left"
            >
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-white/90 mb-0.5">{card.title}</span>
                <span className="text-[11px] font-medium text-[#A1A1AA]">{card.desc}</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {card.icon}
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
