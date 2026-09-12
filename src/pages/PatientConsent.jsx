import { Link } from "react-router-dom";
import {
  Phone,
  Video,
  ShieldCheck,
  UserRound,
  Clock,
} from "lucide-react";

function PatientConsent() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#153D39]">

      <header className="flex items-center justify-between border-b border-[#E4E8E2] px-6 py-5 md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#153D39]">
            <span className="text-lg">♡</span>
          </div>

          <span className="text-lg font-semibold">
            CareLife
          </span>
        </Link>

        <span className="text-xs font-semibold">
          Patient Portal
        </span>
      </header>

      <main className="mx-auto flex max-w-[700px] flex-col items-center px-6 py-12">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5F0EA] text-[#0F625B]">
          <Phone size={25} />
        </div>

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7B908B]">
          Incoming Consultation
        </p>

        <h1 className="mt-3 text-center font-serif text-4xl md:text-5xl">
          Doctor wants to connect
        </h1>

        <p className="mt-3 max-w-md text-center text-sm leading-6 text-[#81928E]">
          Dr. Amit Verma has requested permission to start your
          consultation.
        </p>

        {/* Doctor */}
        <div className="mt-9 w-full rounded-[22px] border border-[#E3E8E2] bg-white p-6 shadow-[0_12px_35px_rgba(30,60,55,0.05)]">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DDECE5]">
              <UserRound size={23} />
            </div>

            <div>
              <p className="text-lg font-semibold">
                Dr. Amit Verma
              </p>

              <p className="mt-1 text-xs text-[#81928E]">
                General Physician
              </p>
            </div>

          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            <Info
              icon={<Clock size={15} />}
              label="Appointment"
              value="09:30 AM"
            />

            <Info
              icon={<Video size={15} />}
              label="Consultation"
              value="Video Call"
            />

          </div>

        </div>

        {/* Consent */}
        <div className="mt-5 w-full rounded-[22px] border border-[#DDE8E2] bg-[#EAF3EE] p-6">

          <div className="flex gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0F625B]">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h2 className="text-sm font-semibold">
                Your Consent
              </h2>

              <p className="mt-2 text-xs leading-5 text-[#71827E]">
                By accepting, you agree to connect with the doctor
                for this consultation. You can decline the request
                if you do not want to start the call.
              </p>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">

          <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#D5DEDA] bg-white py-3.5 text-xs font-semibold text-[#153D39]">
            Decline
          </button>

         <Link
  to="/call-screen"
  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0F625B] py-3.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.18)] transition hover:scale-[1.01]"
>
  <Phone size={15} />
  Accept & Connect
</Link>

        </div>

        <p className="mt-5 text-center text-[9px] text-[#96A39F]">
          Your consent is required before the consultation can begin.
        </p>

      </main>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#F7F8F4] p-4">

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0F625B]">
        {icon}
      </div>

      <div>
        <p className="text-[9px] text-[#8A9996]">
          {label}
        </p>

        <p className="mt-1 text-xs font-semibold">
          {value}
        </p>
      </div>

    </div>
  );
}

export default PatientConsent;