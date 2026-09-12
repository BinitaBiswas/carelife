import { Link, useNavigate } from "react-router-dom";
import {
  PhoneOff,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Volume2,
  UserRound,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

function CallScreen() {
 const navigate = useNavigate();
  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);

  return (
    <div className="min-h-screen bg-[#102F2C] text-white">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-10">

        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/70">
            <span className="text-lg">♡</span>
          </div>

          <span className="text-lg font-semibold">
            CareLife
          </span>
        </Link>

        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px]">
          <ShieldCheck size={13} />
          Consent accepted
        </div>

      </header>

      {/* Call Area */}
      <main className="mx-auto max-w-[1100px] px-5 pb-8">

        <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#173B37]">

          {/* Main Video */}
          <div className="flex min-h-[520px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#DDECE5] text-[#153D39]">
                {cameraOff ? (
                  <UserRound size={52} />
                ) : (
                  <Video size={42} />
                )}
              </div>

              <h1 className="mt-6 font-serif text-3xl">
                Dr. Amit Verma
              </h1>

              <p className="mt-2 text-xs text-white/50">
                General Physician
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/60">
                <span className="h-2 w-2 rounded-full bg-[#73C69C]" />
                Connected
              </div>

            </div>

          </div>

          {/* Patient Preview */}
          <div className="absolute right-5 top-5 h-32 w-48 overflow-hidden rounded-2xl border border-white/20 bg-[#254B47] shadow-xl">

            <div className="flex h-full items-center justify-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DDECE5] text-[#153D39]">
                <UserRound size={23} />
              </div>

            </div>

            <div className="absolute bottom-2 left-3 text-[10px] font-medium">
              You
            </div>

          </div>

          {/* Call Info */}
          <div className="absolute left-5 top-5">

            <div className="rounded-xl bg-black/20 px-4 py-3 backdrop-blur-sm">

              <p className="text-[10px] text-white/50">
                Consultation
              </p>

              <p className="mt-1 text-xs font-semibold">
                Online Consultation
              </p>

              <p className="mt-1 text-[10px] text-white/50">
                00:00:42
              </p>

            </div>

          </div>

        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-3">

          <button
            onClick={() => setMuted(!muted)}
            className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
              muted
                ? "bg-white text-[#153D39]"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {muted ? <MicOff size={18} /> : <Mic size={18} />}
          </button>

          <button
            onClick={() => setCameraOff(!cameraOff)}
            className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
              cameraOff
                ? "bg-white text-[#153D39]"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {cameraOff ? (
              <VideoOff size={18} />
            ) : (
              <Video size={18} />
            )}
          </button>

         <button
  onClick={() => navigate("/call-ended")}
  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D65F5F] shadow-lg transition hover:scale-105"
>
  <PhoneOff size={20} />
</button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
            <Volume2 size={18} />
          </button>

        </div>

        <p className="mt-5 text-center text-[10px] text-white/40">
          Your consultation is private and protected.
        </p>

      </main>

    </div>
  );
}

export default CallScreen;