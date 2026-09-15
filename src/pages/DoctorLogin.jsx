import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LockKeyhole, Stethoscope } from "lucide-react";
import { useState } from "react";

function DoctorLogin() {
  const navigate = useNavigate();

  const [doctorId, setDoctorId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      doctorId === "doctor@carelife.com" &&
      password === "carelife123"
    ) {
      setError("");
      navigate("/doctor-dashboard");
    } else {
      setError("Invalid Doctor ID or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#153D39]">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#153D39]">
            <span className="text-lg">♡</span>
          </div>

          <span className="text-lg font-semibold">
            CareLife
          </span>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 text-xs font-medium text-[#69807B]"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </header>

      {/* Login */}
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 pb-16">

        <div className="w-full max-w-md">

          <div className="rounded-[24px] border border-[#E2E7E2] bg-white p-7 shadow-[0_15px_45px_rgba(30,60,55,0.06)] md:p-9">

            {/* Icon */}
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F1EC] text-[#0F625B]">
                <Stethoscope size={28} />
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7B908B]">
                Doctor Portal
              </p>

              <h1 className="mt-2 font-serif text-3xl">
                Welcome Back
              </h1>

              <p className="mt-2 text-xs text-[#82918E]">
                Sign in to manage your patients and appointments.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="mt-8 space-y-5">

              <div>
                <label className="text-[11px] font-semibold">
                  Doctor ID / Email
                </label>

                <input
                  type="text"
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                  placeholder="Enter your doctor ID or email"
                  className="mt-2 w-full rounded-xl border border-[#DDE5E1] bg-[#FCFCF9] px-4 py-3.5 text-xs outline-none placeholder:text-[#A5B2AF] focus:border-[#153D39]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold">
                  Password
                </label>

                <div className="relative mt-2">

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-[#DDE5E1] bg-[#FCFCF9] px-4 py-3.5 pr-11 text-xs outline-none placeholder:text-[#A5B2AF] focus:border-[#153D39]"
                  />

                  <LockKeyhole
                    size={15}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#81928E]"
                  />

                </div>
              </div>

              {error && (
                <p className="text-center text-[11px] text-red-500">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-between text-[10px]">

                <label className="flex items-center gap-2 text-[#71827E]">
                  <input
                    type="checkbox"
                    className="accent-[#0F625B]"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="font-semibold text-[#0F625B]"
                >
                  Forgot password?
                </button>

              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#0F625B] py-3.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.2)] transition hover:scale-[1.01]"
              >
                Sign In
              </button>

            </form>

            <p className="mt-6 text-center text-[10px] text-[#9AA6A3]">
              Authorized doctors only
            </p>

          </div>

        </div>

      </main>
    </div>
  );
}

export default DoctorLogin;