"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/inquiry";
import { WhatsAppIcon } from "./Icons";

interface WhatsAppChatProps {
  number: string;
  message: string;
  labels: { open: string; close: string; greeting: string; prompt: string };
}

// First click opens the greeting, second click starts the chat.
export function WhatsAppChat({ number, message, labels }: WhatsAppChatProps) {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (!open) return setOpen(true);
    window.open(whatsappUrl(number, message), "_blank", "noopener");
    setOpen(false);
  };

  return (
    <div className={`chat${open ? " is-open" : ""}`}>
      <div className="chat-box" hidden={!open}>
        <button
          className="chat-close"
          type="button"
          aria-label={labels.close}
          onClick={() => setOpen(false)}
        />
        <div className="chat-message">
          {labels.greeting}
          <br />
          {labels.prompt}
        </div>
      </div>
      <button
        className="chat-button"
        type="button"
        aria-label={labels.open}
        onClick={onClick}
      >
        <span className="chat-tooltip">{labels.open}</span>
        <WhatsAppIcon />
      </button>
    </div>
  );
}
