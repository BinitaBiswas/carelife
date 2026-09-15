import { Link, useNavigate } from "react-router-dom";
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
  X,
} from "lucide-react";
import { useState } from "react";

function DoctorDashboard() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [notificationOpen, setNotificationOpen] = useState(false);

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
    {
      name: "Riya Kapoor",
      age: "29",
      time: "04:00 PM",
      reason: "Fever",
      status: "Confirmed",
    },
    {
      name: "Arjun Singh",
      age: "38",
      time: "05:00 PM",
      reason: "Back pain",
      status: "Waiting",
    },
  ];

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(search.toLowerCase())
  );

  const visibleAppointments = showAll
    ? filteredAppointments
    : filteredAppointments.slice(0, 4);

  const handleLogout = () => {
    navigate("/");
  };

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

          <div className="relative flex items-center gap-4">

            {/* Notification */}
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-105"
            >
              <Bell size={17} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#D67B72]" />
            </button>

            {/* Notification popup */}
            {notificationOpen && (
              <div className="absolute right-16 top-12 z-40 w-64 rounded-2xl border border-[#E3E8E2] bg-white p-4 shadow-[0_15px_40px_rgba(30,60,55,0.12)]">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold">
                    Notifications
                  </p>

                  <button
                    onClick={() => setNotificationOpen(false)}
                    className="text-[#81928E] hover:text-[#153D39]"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="mt-4 rounded-xl bg-[#F8F6F0] p-3">
                  <p className="text-[10px] font-semibold">
                    New appointment
                  </p>

                  <p className="mt-1 text-[9px] text-[#81928E]">
                    Rahul Sharma has an appointment today at 09:30 AM.
                  </p>
                </div>

                <div className="mt-2 rounded-xl bg-[#F8F6F0] p-3">
                  <p className="text-[10px] font-semibold">
                    Patient waiting
                  </p>

                  <p className="mt-1 text-[9px] text-[#81928E]">
                    Priya Singh is waiting for consultation.
                  </p>
                </div>
              </div>
            )}

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

          <button
            onClick={() =>
              document
                .getElementById("appointments")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex w-fit items-center gap-2 rounded-full bg-[#0F625B] px-6 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.15)] transition hover:scale-[1.02]"
          >
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
            onClick={() =>
              document
                .getElementById("appointments")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />

          <StatCard
            icon={<Users size={18} />}
            title="Total Patients"
            value="124"
            subtitle="+6 this month"
            onClick={() => setActiveModal("records")}
          />

          <StatCard
            icon={<Clock size={18} />}
            title="Waiting"
            value="2"
            subtitle="Need attention"
            onClick={() => setActiveModal("waiting")}
          />

          <StatCard
            icon={<Phone size={18} />}
            title="Online Consultations"
            value="5"
            subtitle="Today"
            onClick={() =>
              document
                .getElementById("appointments")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />

        </div>

        {/* ================= APPOINTMENTS ================= */}

        <div
          id="appointments"
          className="mt-7 grid gap-5 lg:grid-cols-[1fr_330px]"
        >

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

              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[10px] font-semibold text-[#0F625B]"
              >
                {showAll ? "Show less" : "View all"}
              </button>

            </div>

            {/* Search */}

            <div className="relative mt-5">

              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9996]"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search patient..."
                className="w-full rounded-xl border border-[#DDE5E1] bg-[#FCFCF9] py-3 pl-10 pr-4 text-xs outline-none focus:border-[#153D39]"
              />

            </div>

            {/* List */}

            <div className="mt-5 space-y-3">

              {visibleAppointments.length > 0 ? (
                visibleAppointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.name}
                    {...appointment}
                  />
                ))
              ) : (
                <div className="rounded-xl bg-[#F8F6F0] py-8 text-center">
                  <p className="text-xs font-medium">
                    No patient found
                  </p>

                  <p className="mt-1 text-[10px] text-[#879590]">
                    Try searching with another name.
                  </p>
                </div>
              )}

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

            <button
              onClick={() => setActiveModal("profile")}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[10px] font-semibold text-[#153D39] transition hover:scale-[1.01]"
            >
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
            onClick={() => setActiveModal("records")}
          />

          <QuickAction
            icon={<CalendarDays size={17} />}
            title="Manage Schedule"
            subtitle="Update your availability"
            onClick={() => setActiveModal("schedule")}
          />

          <QuickAction
            icon={<LogOut size={17} />}
            title="Logout"
            subtitle="Sign out of doctor portal"
            onClick={handleLogout}
          />

        </div>

      </main>

      {/* ================= MODALS ================= */}

      {activeModal && (
        <Modal onClose={() => setActiveModal(null)}>

          {/* Profile */}

          {activeModal === "profile" && (
            <>
              <ModalHeader
                title="Doctor Profile"
                onClose={() => setActiveModal(null)}
              />

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F1EC] text-[#0F625B]">
                  <Stethoscope size={24} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Dr. Amit Verma
                  </p>

                  <p className="mt-1 text-[10px] text-[#81928E]">
                    General Physician
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <InfoRow label="Experience" value="8+ Years" />
                <InfoRow label="Consultation" value="Online & Clinic" />
                <InfoRow label="Today's Patients" value="8 patients" />
                <InfoRow label="Specialization" value="General Medicine" />
              </div>
            </>
          )}

          {/* Patient Records */}

          {activeModal === "records" && (
            <>
              <ModalHeader
                title="Patient Records"
                onClose={() => setActiveModal(null)}
              />

              <p className="mt-1 text-[10px] text-[#879590]">
                Recent patient records
              </p>

              <div className="mt-5 space-y-3">
                {appointments.slice(0, 4).map((patient) => (
                  <div
                    key={patient.name}
                    className="flex items-center justify-between rounded-xl bg-[#F8F6F0] p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4EFE9]">
                        <UserRound size={15} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold">
                          {patient.name}
                        </p>

                        <p className="mt-1 text-[9px] text-[#879590]">
                          {patient.age} yrs • {patient.reason}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      size={14}
                      className="text-[#91A09C]"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Schedule */}

          {activeModal === "schedule" && (
            <>
              <ModalHeader
                title="Manage Schedule"
                onClose={() => setActiveModal(null)}
              />

              <p className="mt-1 text-[10px] text-[#879590]">
                Today's available consultation slots
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  "09:30 AM",
                  "10:30 AM",
                  "12:00 PM",
                  "02:30 PM",
                  "04:00 PM",
                  "05:00 PM",
                ].map((time) => (
                  <button
                    key={time}
                    onClick={() => setActiveModal(null)}
                    className="rounded-xl border border-[#DDE5E1] bg-[#FCFCF9] px-3 py-3 text-[10px] font-medium transition hover:border-[#0F625B] hover:bg-[#EAF2EE]"
                  >
                    <Clock
                      size={13}
                      className="mx-auto mb-1 text-[#0F625B]"
                    />
                    {time}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Waiting */}

          {activeModal === "waiting" && (
            <>
              <ModalHeader
                title="Waiting Patients"
                onClose={() => setActiveModal(null)}
              />

              <div className="mt-5 space-y-3">
                {appointments
                  .filter((patient) => patient.status === "Waiting")
                  .map((patient) => (
                    <div
                      key={patient.name}
                      className="rounded-xl bg-[#FFF7E8] p-4"
                    >
                      <p className="text-xs font-semibold">
                        {patient.name}
                      </p>

                      <p className="mt-1 text-[10px] text-[#879590]">
                        {patient.reason}
                      </p>

                      <p className="mt-2 text-[10px] font-medium text-[#A36B16]">
                        Appointment: {patient.time}
                      </p>
                    </div>
                  ))}
              </div>
            </>
          )}

        </Modal>
      )}

    </div>
  );
}


/* ================= STAT CARD ================= */

function StatCard({
  icon,
  title,
  value,
  subtitle,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-[18px] border border-[#E3E8E2] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(30,60,55,0.06)]"
    >
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
    </button>
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
          title={`Call ${name}`}
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

function QuickAction({
  icon,
  title,
  subtitle,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 rounded-[16px] border border-[#E3E8E2] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(30,60,55,0.06)]"
    >

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


/* ================= MODAL ================= */

function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#153D39]/30 px-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-[24px] border border-[#E3E8E2] bg-white p-6 shadow-[0_25px_70px_rgba(21,61,57,0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}


/* ================= MODAL HEADER ================= */

function ModalHeader({ title, onClose }) {
  return (
    <div className="flex items-center justify-between">

      <h3 className="font-serif text-2xl">
        {title}
      </h3>

      <button
        onClick={onClose}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F6F0] text-[#81928E] transition hover:bg-[#EAF2EE]"
      >
        <X size={15} />
      </button>

    </div>
  );
}


/* ================= INFO ROW ================= */

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#F8F6F0] px-4 py-3">
      <span className="text-[10px] text-[#879590]">
        {label}
      </span>

      <span className="text-[10px] font-semibold">
        {value}
      </span>
    </div>
  );
}


export default DoctorDashboard;