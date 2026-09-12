import { Link } from "react-router-dom";
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Clock,
  LogOut,
  Phone,
  Search,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";

function DoctorDashboard() {
  const appointments = [
    {
      name: "Rahul Sharma",
      age: "32",
      time: "09:30 AM",
      reason: "Fever & headache",
      status: "Confirmed",
    },
    {
      name: "Priya Singh",
      age: "27",
      time: "10:30 AM",
      reason: "Cough & cold",
      status: "Waiting",
    },
    {
      name: "Aman Verma",
      age: "41",
      time: "12:00 PM",
      reason: "Regular checkup",
      status: "Confirmed",
    },
    {
      name: "Neha Gupta",
      age: "35",
      time: "02:30 PM",
      reason: "Stomach pain",
      status: "Confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#153D39]">

      {/* ================= HEADER ================= */}
      <header className="border-b border-[#E4E8E2] bg-[#F8F6F0] px-6 py-5 md:px-10">

        <div className="mx-auto flex max-w-[1250px] items-center justify-between">

          <Link to="/" className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#153D39]">
              <span className="text-lg">♡</span>
            </div>

            <span className="text-lg font-semibold">
              CareLife
            </span>

          </Link>

          <div className="flex items-center gap-4">

            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Bell size={17} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#D67B72]" />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-xs font-semibold">
                Dr. Amit Verma
              </p>

              <p className="mt-0.5 text-[10px] text-[#81928E]">
                General Physician
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDECE5]">
              <Stethoscope size={18} />
            </div>

          </div>

        </div>

      </header>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-[1250px] px-6 py-8 md:px-10">

        {/* Welcome */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7B908B]">
              Doctor Portal
            </p>

            <h1 className="mt-2 font-serif text-4xl md:text-5xl">
              Good morning, Dr. Amit
            </h1>

            <p className="mt-2 text-sm text-[#81928E]">
              Here's what's happening with your patients today.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-full bg-[#0F625B] px-6 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.15)]">
            <CalendarDays size={14} />
            Today's Schedule
          </button>

        </div>

        {/* ================= STATS ================= */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<CalendarDays size={18} />}
            title="Today's Appointments"
            value="8"
            subtitle="2 upcoming"
          />

          <StatCard
            icon={<Users size={18} />}
            title="Total Patients"
            value="124"
            subtitle="+6 this month"
          />

          <StatCard
            icon={<Clock size={18} />}
            title="Waiting"
            value="2"
            subtitle="Need attention"
          />

          <StatCard
            icon={<Phone size={18} />}
            title="Online Consultations"
            value="5"
            subtitle="Today"
          />

        </div>

        {/* ================= APPOINTMENTS ================= */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_330px]">

          {/* Appointment List */}
          <div className="rounded-[20px] border border-[#E3E8E2] bg-white p-6">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-sm font-semibold">
                  Today's Appointments
                </h2>

                <p className="mt-1 text-[10px] text-[#879590]">
                  Manage your scheduled consultations
                </p>
              </div>

              <button className="text-[10px] font-semibold text-[#0F625B]">
                View all
              </button>

            </div>

            {/* Search */}
            <div className="relative mt-5">

              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9996]"
              />

              <input
                placeholder="Search patient..."
                className="w-full rounded-xl border border-[#DDE5E1] bg-[#FCFCF9] py-3 pl-10 pr-4 text-xs outline-none focus:border-[#153D39]"
              />

            </div>

            {/* List */}
            <div className="mt-5 space-y-3">

              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.name}
                  {...appointment}
                />
              ))}

            </div>

          </div>

          {/* Doctor Profile */}
          <div className="rounded-[20px] border border-[#E3E8E2] bg-[#153D39] p-6 text-white">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Stethoscope size={25} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Dr. Amit Verma
                </p>

                <p className="mt-1 text-[10px] text-white/60">
                  General Physician
                </p>
              </div>

            </div>

            <div className="mt-7 h-px bg-white/10" />

            <div className="mt-6 space-y-5">

              <ProfileInfo
                label="Today's patients"
                value="8 patients"
              />

              <ProfileInfo
                label="Experience"
                value="8+ Years"
              />

              <ProfileInfo
                label="Consultation"
                value="Online & Clinic"
              />

            </div>

            <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[10px] font-semibold text-[#153D39]">
              View Profile
              <ChevronRight size={13} />
            </button>

          </div>

        </div>

        {/* ================= QUICK ACTIONS ================= */}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">

          <QuickAction
            icon={<Users size={17} />}
            title="Patient Records"
            subtitle="View patient history"
          />

          <QuickAction
            icon={<CalendarDays size={17} />}
            title="Manage Schedule"
            subtitle="Update your availability"
          />

          <QuickAction
            icon={<LogOut size={17} />}
            title="Logout"
            subtitle="Sign out of doctor portal"
          />

        </div>

      </main>

    </div>
  );
}


/* ================= STAT CARD ================= */

function StatCard({ icon, title, value, subtitle }) {
  return (
    <div className="rounded-[18px] border border-[#E3E8E2] bg-white p-5">

      <div className="flex items-center justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F1EC] text-[#0F625B]">
          {icon}
        </div>

      </div>

      <p className="mt-5 text-[10px] text-[#879590]">
        {title}
      </p>

      <div className="mt-1 flex items-end gap-2">

        <span className="text-2xl font-semibold">
          {value}
        </span>

        <span className="mb-1 text-[9px] text-[#879590]">
          {subtitle}
        </span>

      </div>

    </div>
  );
}


/* ================= APPOINTMENT ================= */

function AppointmentCard({
  name,
  age,
  time,
  reason,
  status,
}) {
  return (
    <div className="group flex flex-col gap-4 rounded-xl border border-[#E5E9E4] bg-[#FCFCF9] p-4 transition hover:border-[#BFD0C9] sm:flex-row sm:items-center sm:justify-between">

      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E4EFE9]">
          <UserRound size={17} />
        </div>

        <div>

          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold">
              {name}
            </p>

            <span className="text-[9px] text-[#899793]">
              {age} yrs
            </span>
          </div>

          <p className="mt-1 text-[10px] text-[#879590]">
            {reason}
          </p>

        </div>

      </div>

      <div className="flex items-center justify-between gap-5 sm:justify-end">

        <div className="flex items-center gap-2 text-[10px] font-medium">
          <Clock size={13} />
          {time}
        </div>

        <span
          className={`rounded-full px-3 py-1 text-[9px] font-semibold ${
            status === "Waiting"
              ? "bg-[#FFF1D9] text-[#A36B16]"
              : "bg-[#E4F1E9] text-[#28735F]"
          }`}
        >
          {status}
        </span>
<Link
  to="/call-patient"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F625B] text-white transition hover:scale-105"
>
  <Phone size={13} />
</Link>

      </div>

    </div>
  );
}


/* ================= PROFILE ================= */

function ProfileInfo({ label, value }) {
  return (
    <div>
      <p className="text-[9px] text-white/50">
        {label}
      </p>

      <p className="mt-1 text-xs font-medium">
        {value}
      </p>
    </div>
  );
}


/* ================= QUICK ACTION ================= */

function QuickAction({ icon, title, subtitle }) {
  return (
    <button className="flex items-center gap-4 rounded-[16px] border border-[#E3E8E2] bg-white p-5 text-left transition hover:-translate-y-0.5">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F1EC] text-[#0F625B]">
        {icon}
      </div>

      <div>

        <p className="text-xs font-semibold">
          {title}
        </p>

        <p className="mt-1 text-[9px] text-[#879590]">
          {subtitle}
        </p>

      </div>

      <ChevronRight
        size={14}
        className="ml-auto text-[#91A09C]"
      />

    </button>
  );
}

export default DoctorDashboard;