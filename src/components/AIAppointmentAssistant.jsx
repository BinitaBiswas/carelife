import { useState } from "react";
import {
  Sparkles,
  Send,
  X,
  CalendarDays,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function AIAppointmentAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState("start");

  const [appointmentData, setAppointmentData] = useState({
    consultationType: "",
    date: "",
    time: "",
  });

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! I'm CareLife AI. I can help you book an appointment with the doctor.",
    },
    {
      type: "ai",
      text: "How would you like to consult the doctor?",
    },
  ]);

  const navigate = useNavigate();

  const addMessage = (userText, aiText) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userText,
      },
      {
        type: "ai",
        text: aiText,
      },
    ]);
  };

  // Consultation type
  const selectConsultation = (type) => {
    const text =
      type === "online"
        ? "Online Consultation"
        : "Clinic Visit";

    setAppointmentData((prev) => ({
      ...prev,
      consultationType: text,
    }));

    addMessage(
      text,
      "Great! When would you like your appointment?"
    );

    setStep("date");
  };

  // Date
  const selectDate = (date) => {
    setAppointmentData((prev) => ({
      ...prev,
      date,
    }));

    addMessage(
      date,
      "Perfect. What time would you prefer?"
    );

    setStep("time");
  };

  // Time
  const selectTime = (time) => {
    setAppointmentData((prev) => ({
      ...prev,
      time,
    }));

    addMessage(
      time,
      "Perfect! Your appointment preferences are ready. Let's continue with booking."
    );

    setStep("book");
  };

  // Text input
  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    addMessage(
      userMessage,
      "I can help you book an appointment. Please choose one of the available options."
    );

    setMessage("");
  };

  // Go to appointment page
  const goToAppointment = () => {
    navigate("/appointment", {
      state: {
        aiAppointmentData: appointmentData,
      },
    });
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

          {/* Options */}
          <div className="border-t border-[#E5E9E5] bg-white px-4 pt-3">

            {/* Consultation Options */}
            {step === "start" && (
              <div className="flex flex-wrap gap-2 pb-3">

                <button
                  onClick={() => selectConsultation("online")}
                  className="flex items-center gap-1 rounded-full border border-[#DDE5E1] px-3 py-2 text-[10px] font-medium text-[#153D39] transition hover:bg-[#EAF2EE]"
                >
                  Online Consultation
                </button>

                <button
                  onClick={() => selectConsultation("clinic")}
                  className="flex items-center gap-1 rounded-full border border-[#DDE5E1] px-3 py-2 text-[10px] font-medium text-[#153D39] transition hover:bg-[#EAF2EE]"
                >
                  Clinic Visit
                </button>

              </div>
            )}

            {/* Date Options */}
            {step === "date" && (
              <div className="flex flex-wrap gap-2 pb-3">

                <button
                  onClick={() => selectDate("Today")}
                  className="flex items-center gap-1 rounded-full border border-[#DDE5E1] px-3 py-2 text-[10px] font-medium text-[#153D39] transition hover:bg-[#EAF2EE]"
                >
                  <CalendarDays size={12} />
                  Today
                </button>

                <button
                  onClick={() => selectDate("Tomorrow")}
                  className="flex items-center gap-1 rounded-full border border-[#DDE5E1] px-3 py-2 text-[10px] font-medium text-[#153D39] transition hover:bg-[#EAF2EE]"
                >
                  <CalendarDays size={12} />
                  Tomorrow
                </button>

                <button
                  onClick={() => selectDate("Choose a date")}
                  className="flex items-center gap-1 rounded-full border border-[#DDE5E1] px-3 py-2 text-[10px] font-medium text-[#153D39] transition hover:bg-[#EAF2EE]"
                >
                  <CalendarDays size={12} />
                  Choose a date
                </button>

              </div>
            )}

            {/* Time Options */}
            {step === "time" && (
              <div className="flex flex-wrap gap-2 pb-3">

                <button
                  onClick={() => selectTime("Morning")}
                  className="flex items-center gap-1 rounded-full border border-[#DDE5E1] px-3 py-2 text-[10px] font-medium text-[#153D39] transition hover:bg-[#EAF2EE]"
                >
                  <Clock size={12} />
                  Morning
                </button>

                <button
                  onClick={() => selectTime("Afternoon")}
                  className="flex items-center gap-1 rounded-full border border-[#DDE5E1] px-3 py-2 text-[10px] font-medium text-[#153D39] transition hover:bg-[#EAF2EE]"
                >
                  <Clock size={12} />
                  Afternoon
                </button>

                <button
                  onClick={() => selectTime("Evening")}
                  className="flex items-center gap-1 rounded-full border border-[#DDE5E1] px-3 py-2 text-[10px] font-medium text-[#153D39] transition hover:bg-[#EAF2EE]"
                >
                  <Clock size={12} />
                  Evening
                </button>

              </div>
            )}

            {/* Continue */}
            {step === "book" && (
              <div className="pb-3">

                <div className="mb-3 rounded-xl bg-[#F8F6F0] p-3">

                  <p className="text-[9px] uppercase tracking-wider text-[#8A9996]">
                    Appointment Summary
                  </p>

                  <p className="mt-2 text-[11px] text-[#153D39]">
                    {appointmentData.consultationType}
                  </p>

                  <p className="mt-1 text-[11px] text-[#153D39]">
                    {appointmentData.date}
                  </p>

                  <p className="mt-1 text-[11px] text-[#153D39]">
                    {appointmentData.time}
                  </p>

                </div>

                <button
                  onClick={goToAppointment}
                  className="w-full rounded-full bg-[#0F625B] py-2.5 text-[10px] font-semibold text-white transition hover:scale-[1.01]"
                >
                  Continue to Book Appointment
                </button>

              </div>
            )}

            {/* Input */}
            <div className="border-t border-[#E5E9E5] py-3">

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

        </div>
      )}
    </>
  );
}

export default AIAppointmentAssistant;