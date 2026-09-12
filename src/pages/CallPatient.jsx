import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Phone,
  Video,
  UserRound,
  ShieldCheck,
  Clock,
} from "lucide-react";

function CallPatient() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#153D39]">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#E4E8E2] px-6 py-5 md:px-12">
        <Link to="/doctor-dashboard" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#153D39]">
            <span className="text-lg">♡</span>
          </div>

          <span className="text-lg font-semibold">
            CareLife
          </span>
        </Link>

        <span className="text-xs font-semibold">
          Doctor Portal
        </span>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-[850px] px-6 py-10 md:px-10">

        <Link
          to="/doctor-dashboard"
          className="flex w-fit items-center gap-2 text-xs text-[#718782] hover:text-[#153D39]"
        >
          <ArrowLeft size={14} />
          Back to Dashboard
        </Link>

        <div className="mt-8 text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7B908B]">
            Patient Consultation
          </p>

          <h1 className="mt-3 font-serif text-4xl md:text-5xl">
            Connect with Patient
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm text-[#81928E]">
            Review the patient information and request permission
            before starting the consultation.
          </p>

        </div>

        {/* Patient Card */}
        <div className="mt-9 rounded-[22px] border border-[#E3E8E2] bg-white p-6 shadow-[0_12px_35px_rgba(30,60,55,0.05)]">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E5F0EA]">
              <UserRound size={23} />
            </div>

            <div>
              <p className="text-lg font-semibold">
                Rahul Sharma
              </p>

              <p className="mt-1 text-xs text-[#81928E]">
                32 years • New Patient
              </p>
            </div>

          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <Info
              label="Appointment"
              value="09:30 AM"
              icon={<Clock size={15} />}
            />

            <Info
              label="Reason for Visit"
              value="Fever & headache"
              icon={<UserRound size={15} />}
            />

          </div>

        </div>

        {/* Consent */}
        <div className="mt-5 rounded-[22px] border border-[#DDE8E2] bg-[#EAF3EE] p-6">

          <div className="flex gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0F625B]">
              <ShieldCheck size={20} />
            </div>

            <div>

              <h2 className="text-sm font-semibold">
                Patient Consent
              </h2>

              <p className="mt-2 text-xs leading-5 text-[#71827E]">
                Before starting the consultation, the patient must
                accept the call request. The patient can choose to
                accept or decline the consultation.
              </p>

            </div>

          </div>

        </div>

        {/* Call Options */}
        <div className="mt-5 rounded-[22px] border border-[#E3E8E2] bg-white p-6">

          <h2 className="text-sm font-semibold">
            Choose consultation method
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <button className="group rounded-2xl border border-[#DDE5E1] bg-[#FCFCF9] p-5 text-left transition hover:border-[#0F625B]">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7F1EC] text-[#0F625B]">
                <Phone size={19} />
              </div>

              <p className="mt-4 text-xs font-semibold">
                Voice Call
              </p>

              <p className="mt-1 text-[10px] text-[#81928E]">
                Talk to the patient through an audio call.
              </p>

            </button>

            <button className="group rounded-2xl border border-[#DDE5E1] bg-[#FCFCF9] p-5 text-left transition hover:border-[#0F625B]">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7F1EC] text-[#0F625B]">
                <Video size={19} />
              </div>

              <p className="mt-4 text-xs font-semibold">
                Video Call
              </p>

              <p className="mt-1 text-[10px] text-[#81928E]">
                Have a face-to-face consultation with the patient.
              </p>

            </button>

          </div>

          {/* Request Button */}
          <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#0F625B] py-3.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.18)] transition hover:scale-[1.01]">

            <Phone size={15} />

            Request Patient Consent

          </button>

          <p className="mt-3 text-center text-[9px] text-[#96A39F]">
            The call will begin only after the patient accepts.
          </p>

        </div>

      </main>

    </div>
  );
}

function Info({ label, value, icon }) {
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

export default CallPatient;