import { useState } from "react";
import { Sparkles, Send, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AIAppointmentAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! I'm CareLife AI. I can help you book an appointment with the doctor.",
    },
    {
      type: "ai",
      text: "Tell me your preferred date, time, or consultation type.",
    },
  ]);

  const navigate = useNavigate();

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMessage,
      },
      {
        type: "ai",
        text: "Got it! Let's book your appointment. I'll take you to the appointment form.",
      },
    ]);

    setMessage("");

    setTimeout(() => {
      navigate("/appointment");
    }, 1200);
  };

  return (
    <>
      {/* Floating AI Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#0F625B] px-5 py-3 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(15,98,91,0.25)] transition hover:scale-105"
        >
          <Sparkles size={16} />
          CareLife AI
        </button>
      )}

      {/* AI Assistant */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] overflow-hidden rounded-[24px] border border-[#DDE5E1] bg-white shadow-[0_20px_60px_rgba(21,61,57,0.18)]">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#0F625B] px-5 py-4 text-white">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Sparkles size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  CareLife AI
                </p>

                <p className="text-[9px] text-white/65">
                  Appointment Assistant
                </p>
              </div>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="transition hover:opacity-70"
            >
              <X size={17} />
            </button>

          </div>

          {/* Messages */}
          <div className="h-[280px] overflow-y-auto bg-[#F8F6F0] p-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[270px] rounded-2xl px-4 py-3 text-xs leading-5 ${
                    msg.type === "user"
                      ? "rounded-br-sm bg-[#0F625B] text-white"
                      : "rounded-bl-sm bg-white text-[#536A65] shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

          </div>

          {/* Input */}
          <div className="border-t border-[#E5E9E5] bg-white p-4">

            <div className="flex items-center gap-2 rounded-full border border-[#DDE5E1] px-4 py-2">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Tell me about your appointment..."
                className="w-full bg-transparent text-xs text-[#153D39] outline-none placeholder:text-[#9AA7A3]"
              />

              <button
                onClick={handleSend}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F625B] text-white transition hover:scale-105"
              >
                <Send size={14} />
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default AIAppointmentAssistant;