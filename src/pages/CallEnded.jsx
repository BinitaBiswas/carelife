import { Link } from "react-router-dom";
import {
  Check,
  CalendarDays,
  Home,
  Stethoscope,
} from "lucide-react";

function CallEnded() {
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
          CareLife Consultation
        </span>

      </header>

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-[620px] rounded-[24px] border border-[#E2E7E2] bg-white p-8 text-center shadow-[0_15px_45px_rgba(30,60,55,0.06)] md:p-10">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E2F0E7] text-[#287D68]">
            <Check size={30} strokeWidth={3} />
          </div>

          <h1 className="mt-6 font-serif text-4xl">
            Consultation Completed
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#81928E]">
            Your consultation with Dr. Amit Verma has ended successfully.
          </p>

          {/* Doctor */}
          <div className="mt-8 rounded-2xl bg-[#F6F8F4] p-5">

            <div className="flex items-center justify-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Stethoscope size={18} />
              </div>

              <div className="text-left">

                <p className="text-xs font-semibold">
                  Dr. Amit Verma
                </p>

                <p className="mt-1 text-[10px] text-[#81928E]">
                  General Physician
                </p>

              </div>

            </div>

          </div>

          {/* Summary */}
          <div className="mt-5 grid grid-cols-2 gap-3">

            <div className="rounded-xl bg-[#F6F8F4] p-4">
              <p className="text-[9px] text-[#8A9996]">
                Consultation
              </p>

              <p className="mt-1 text-xs font-semibold">
                Online
              </p>
            </div>

            <div className="rounded-xl bg-[#F6F8F4] p-4">
              <p className="text-[9px] text-[#8A9996]">
                Duration
              </p>

              <p className="mt-1 text-xs font-semibold">
                12 minutes
              </p>
            </div>

          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <Link
              to="/"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0F625B] py-3.5 text-xs font-semibold text-white"
            >
              <Home size={14} />
              Go to Home
            </Link>

            <Link
              to="/appointment"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#D5DEDA] bg-white py-3.5 text-xs font-semibold"
            >
              <CalendarDays size={14} />
              Book Another
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CallEnded;