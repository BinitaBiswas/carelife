import {
  ArrowRight,
  Play,
  CalendarDays,
  Phone,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Sparkles,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#153D39]">

      {/* ================= NAVBAR ================= */}
      <nav className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-7 py-6 md:px-12 lg:px-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white">
            <HeartPulse size={18} color="white" />
          </div>

          <span className="text-xl font-semibold tracking-tight text-white">
            CareLife
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-[11px] font-medium text-white md:flex">
          <a href="#" className="transition hover:opacity-70">
            Home
          </a>

          <a href="#appointment" className="transition hover:opacity-70">
            Book Appointment
          </a>

          <a href="#about" className="transition hover:opacity-70">
            About
          </a>

          <a href="#contact" className="transition hover:opacity-70">
            Contact
          </a>
        </div>

        {/* Login */}
        <button className="rounded-full bg-white px-7 py-2.5 text-xs font-semibold text-[#153D39] shadow-sm transition hover:scale-105">
          Login
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[600px] overflow-hidden bg-[#0D3935]">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07332F]/95 via-[#07332F]/75 to-[#07332F]/25" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1400px] items-center px-8 pb-20 pt-32 md:px-14 lg:px-20">

          <div className="max-w-xl">

            <p className="mb-5 text-[12px] font-medium tracking-[0.2em] text-[#D8E9D9] uppercase">
              Better care. Better tomorrow.
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[68px]">
              Your Health
              <br />
              <span className="italic">Our Priority</span>
            </h1>

            {/* Decorative heart */}
            <div className="ml-[225px] mt-[-12px] hidden rotate-12 md:block">
              <svg
                width="70"
                height="45"
                viewBox="0 0 70 45"
                fill="none"
              >
                <path
                  d="M5 20C18 3 30 13 33 27C37 43 49 38 64 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/80 md:text-[15px]">
              Get expert medical care from the comfort of your home.
              Book your appointment now and connect with your doctor easily.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex items-center gap-5">

              <button className="group flex items-center gap-4 rounded-full bg-[#F5E8C8] px-6 py-3.5 text-xs font-semibold text-[#153D39] transition hover:scale-105">
                Book Appointment

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#153D39] text-white">
                  <ArrowRight size={14} />
                </span>
              </button>

              <button className="flex items-center gap-3 text-xs font-medium text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60">
                  <Play size={13} fill="white" />
                </span>

                How it works
              </button>

            </div>
          </div>
        </div>

        {/* ================= DECORATIVE MEDICAL OBJECT ================= */}
        <div className="absolute bottom-20 right-[8%] hidden w-[330px] rotate-[-8deg] opacity-90 lg:block">

          <div className="relative">

            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-white/10 blur-xl" />

            <div className="h-5 w-[260px] rounded-full bg-white/90 shadow-2xl" />

            <div className="absolute right-[-15px] top-[-4px] h-14 w-14 rounded-full border-[7px] border-white/90" />

            <div className="absolute left-8 top-[-30px] h-14 w-3 rotate-[35deg] rounded-full bg-white/90" />

          </div>

        </div>

        {/* Floating message */}
        <div className="absolute right-[12%] top-[32%] hidden rounded-xl bg-white/90 px-4 py-3 shadow-xl lg:block">
          <p className="text-[9px] font-medium text-[#153D39]">
            Better Care
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            Brighter Tomorrow ♡
          </p>
        </div>

        {/* Bottom curve */}
        <div className="absolute -bottom-1 left-0 h-20 w-full rounded-t-[50%] bg-[#F7F5EF]" />
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative z-10 mx-auto -mt-2 max-w-[1400px] px-6 md:px-12 lg:px-16">

        <div className="grid overflow-hidden rounded-[18px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] md:grid-cols-3">

          <Feature
            icon={<CalendarDays size={20} />}
            title="Easy Booking"
            description="Choose your slot in minutes"
            iconBg="bg-[#E9F2E8]"
          />

          <Feature
            icon={<Phone size={20} />}
            title="Direct Call"
            description="Connect with your doctor"
            iconBg="bg-[#F8E8C9]"
          />

          <Feature
            icon={<ShieldCheck size={20} />}
            title="Secure & Private"
            description="Your data is safe with us"
            iconBg="bg-[#EDE7FA]"
          />

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="mx-auto max-w-[1200px] px-7 py-24 md:px-12"
      >

        <div className="grid items-center gap-14 md:grid-cols-2">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7B8F78]">
              About CareLife
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#153D39] md:text-5xl">
              Healthcare,
              <br />
              made <span className="italic">simpler.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500">
              CareLife makes it easier for patients to book appointments,
              share their concerns and connect with their doctor without
              unnecessary complications.
            </p>

            <button className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#153D39]">
              Learn more
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative">

            <div className="rounded-[35px] bg-[#E6EEE3] p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Stethoscope size={27} />
              </div>

              <h3 className="mt-8 font-serif text-3xl">
                One place for
                <br />
                better care.
              </h3>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Sparkles size={17} />
                </div>

                <p className="text-sm text-gray-500">
                  Simple appointments
                  <br />
                  and connected consultations
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="appointment"
        className="bg-[#153D39] px-7 py-24 text-white md:px-12"
      >

        <div className="mx-auto max-w-[1200px]">

          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#BFD8C3]">
            How it works
          </p>

          <h2 className="mt-4 max-w-xl font-serif text-4xl md:text-5xl">
            From appointment
            <br />
            to <span className="italic">consultation.</span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <Step
              number="01"
              title="Book Appointment"
              text="Enter your basic information and choose your preferred appointment slot."
            />

            <Step
              number="02"
              title="Share Your Concern"
              text="Tell us about your health concern. Our AI assistant organizes it into a short summary."
            />

            <Step
              number="03"
              title="Connect With Doctor"
              text="Give your consent and connect with your doctor through a consultation call."
            />

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="bg-[#F7F5EF] px-7 py-12 md:px-12"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#153D39] text-white">
              <HeartPulse size={17} />
            </div>

            <span className="font-semibold text-[#153D39]">
              CareLife
            </span>
          </div>

          <p className="text-xs text-gray-400">
            © 2026 CareLife. Better care, simply connected.
          </p>

        </div>
      </footer>
    </div>
  );
}


/* ================= FEATURE CARD ================= */

function Feature({ icon, title, description, iconBg }) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-100 px-7 py-7 last:border-0 md:border-b-0 md:border-r md:last:border-r-0">

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#153D39]">
          {title}
        </h3>

        <p className="mt-1 text-[11px] text-gray-400">
          {description}
        </p>
      </div>

    </div>
  );
}


/* ================= STEP CARD ================= */

function Step({ number, title, text }) {
  return (
    <div className="rounded-[25px] border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:bg-white/[0.1]">

      <span className="text-sm font-semibold text-[#BFD8C3]">
        {number}
      </span>

      <h3 className="mt-8 font-serif text-2xl">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-white/60">
        {text}
      </p>

    </div>
  );
}

export default App;