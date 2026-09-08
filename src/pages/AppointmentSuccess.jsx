import { Link } from "react-router-dom";
import {
  Check,
  CalendarDays,
  Phone,
  UserRound,
  Stethoscope,
  Home,
} from "lucide-react";

function AppointmentSuccess() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#153D39]">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-5 md:px-12">

        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#153D39]">
            <span className="text-lg">♡</span>
          </div>

          <span className="text-lg font-semibold">
            CareLife
          </span>
        </Link>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs shadow-sm">
          👤
        </div>

      </header>

      {/* SUCCESS */}
      <main className="mx-auto flex max-w-[900px] flex-col items-center px-6 pb-16 pt-12">

        {/* CHECK */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#DDEFE5]">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#287D68] text-white shadow-lg">
            <Check size={30} strokeWidth={3} />
          </div>

        </div>

        <h1 className="mt-7 text-center font-serif text-4xl font-medium md:text-5xl">
          Appointment Booked Successfully!
        </h1>

        <p className="mt-3 max-w-lg text-center text-sm leading-6 text-[#78908B]">
          Your appointment has been scheduled. The details have been
          sent to your doctor. You will also receive a confirmation
          message on your phone and email.
        </p>

        {/* APPOINTMENT CARD */}
        <div className="mt-9 w-full rounded-[18px] border border-[#E2E7E2] bg-white p-6 shadow-[0_10px_35px_rgba(30,60,55,0.05)]">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-sm font-semibold">
              Appointment Details
            </h2>

            <button className="text-[10px] font-medium text-[#17665F]">
              View in Calendar
            </button>

          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            {/* PATIENT */}
            <Info
              icon={<UserRound size={16} />}
              label="Patient Name"
              value="Priya Sharma"
            />

            {/* PHONE */}
            <Info
              icon={<Phone size={16} />}
              label="Phone"
              value="+91 98765 43210"
            />

            {/* DOCTOR */}
            <Info
              icon={<Stethoscope size={16} />}
              label="Doctor Name"
              value="Dr. Amit Verma"
            />

            {/* REASON */}
            <Info
              icon={<UserRound size={16} />}
              label="Reason"
              value="Fever and cough"
            />

            {/* DATE */}
            <Info
              icon={<CalendarDays size={16} />}
              label="Date & Time"
              value="10 Apr 2025, 10:00 AM"
            />

            {/* TYPE */}
            <Info
              icon={<Phone size={16} />}
              label="Type"
              value="Online Consultation"
            />

          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-full bg-[#0F625B] px-8 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.2)]"
          >
            Go to Home
          </Link>

          <Link
            to="/appointment"
            className="flex items-center justify-center gap-2 rounded-full border border-[#CBD8D3] bg-white px-7 py-3 text-xs font-semibold"
          >
            <Home size={14} />
            Book Another
          </Link>

        </div>

      </main>

    </div>
  );
}


/* INFO */

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF4F0] text-[#17665F]">
        {icon}
      </div>

      <div>
        <p className="text-[10px] text-[#8A9996]">
          {label}
        </p>

        <p className="mt-1 text-xs font-semibold">
          {value}
        </p>
      </div>

    </div>
  );
}

export default AppointmentSuccess;