import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  UserRound,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  Clock,
  Video,
  Stethoscope,
} from "lucide-react";
import { useState ,useEffect} from "react";
import { useNavigate, useLocation  } from "react-router-dom";

function BookAppointment() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

const aiData = location.state?.aiAppointmentData;
  const [formData, setFormData] = useState({
  name: "",
  age: "",
  gender: "",
  phone: "",
  email: "",
  reason: "",
  patientType: "new",
  previousDate: "",
  appointmentDate: aiData?.date || "",
  appointmentTime: aiData?.time || "",
  consultation:
    aiData?.consultationType === "Clinic Visit"
      ? "clinic"
      : "online",
});

useEffect(() => {
  if (!aiData) return;

  setFormData((prev) => ({
    ...prev,

    appointmentDate:
      aiData.date === "Today"
        ? new Date().toISOString().split("T")[0]
        : aiData.date === "Tomorrow"
        ? new Date(Date.now() + 86400000)
            .toISOString()
            .split("T")[0]
        : prev.appointmentDate,

    appointmentTime:
      aiData.time === "Morning"
        ? "09:00 AM"
        : aiData.time === "Afternoon"
        ? "02:00 PM"
        : aiData.time === "Evening"
        ? "05:00 PM"
        : prev.appointmentTime,

    consultation:
      aiData.consultationType === "Clinic Visit"
        ? "clinic"
        : "online",
  }));
}, []);


  const updateField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };


  const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      navigate("/appointment-success");
    }
  } catch (error) {
    console.error("Appointment booking failed:", error);
    alert("Unable to book appointment. Please try again.");
  }
};




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

        <button className="rounded-full bg-white px-7 py-2.5 text-xs font-semibold shadow-sm">
          Login
        </button>

      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1120px] px-6 pb-16 pt-4 md:px-10">

        <Link
          to="/"
          className="flex w-fit items-center gap-2 text-[11px] font-medium text-[#69807B] hover:text-[#153D39]"
        >
          <ArrowLeft size={13} />
          Back to Home
        </Link>

        {/* TITLE */}
        <div className="mt-7">

          <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Book Your Appointment
          </h1>

          <p className="mt-2 text-sm text-[#78908B]">
            Fill in your details and we'll get back to you.
          </p>

        </div>

        {/* STEPS */}
        <div className="mt-9 flex items-center">

          <Step
            number="1"
            title="Personal Info"
            active={step === 1}
            completed={step > 1}
          />

          <div className="h-px flex-1 bg-[#D9E1DD]" />

          <Step
            number="2"
            title="Appointment Details"
            active={step === 2}
          />

          <div className="h-px flex-1 bg-[#D9E1DD]" />

          <Step
            number="3"
            title="Review & Confirm"
            active={step === 3}
          />

        </div>

        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <>
            <div className="mt-7 grid gap-5 lg:grid-cols-2">

              {/* PATIENT INFORMATION */}
              <div className="rounded-[18px] border border-[#E5E8E2] bg-white p-6 shadow-[0_8px_30px_rgba(30,60,55,0.04)]">

                <h2 className="text-sm font-semibold">
                  Patient Information
                </h2>

                <div className="mt-5 space-y-4">

                  <Field
                    label="Full Name"
                    required
                    icon={<UserRound size={15} />}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(value) => updateField("name", value)}
                  />

                  <Field
                    label="Age"
                    required
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(value) => updateField("age", value)}
                  />

                  <div>
                    <label className="text-[11px] font-semibold">
                      Gender <span className="text-[#D67B72]">*</span>
                    </label>

                    <div className="relative mt-1.5">

                      <select
                        value={formData.gender}
                        onChange={(e) =>
                          updateField("gender", e.target.value)
                        }
                        className="w-full appearance-none rounded-lg border border-[#DDE5E1] bg-[#FCFCF9] px-3.5 py-3 text-xs text-[#718782] outline-none focus:border-[#153D39]"
                      >
                        <option value="">Select gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>

                      <ChevronDown
                        size={14}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#81928E]"
                      />

                    </div>
                  </div>

                  <Field
                    label="Phone Number"
                    required
                    icon={<Phone size={14} />}
                    placeholder="+91  Enter your mobile number"
                    value={formData.phone}
                    onChange={(value) => updateField("phone", value)}
                  />

                  <Field
                    label="Email"
                    icon={<Mail size={14} />}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(value) => updateField("email", value)}
                  />

                </div>
              </div>

              {/* REASON */}
              <div className="rounded-[18px] border border-[#E5E8E2] bg-white p-6 shadow-[0_8px_30px_rgba(30,60,55,0.04)]">

                <div className="flex items-center justify-between">

                  <h2 className="text-sm font-semibold">
                    Reason for Visit
                  </h2>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEE9FA]">
                    <Sparkles size={15} />
                  </div>

                </div>

                <div className="mt-5">

                  <label className="text-[11px] font-semibold">
                    Describe your problem / symptoms{" "}
                    <span className="text-[#D67B72]">*</span>
                  </label>

                  <textarea
                    rows={5}
                    value={formData.reason}
                    onChange={(e) =>
                      updateField("reason", e.target.value)
                    }
                    placeholder="e.g. Fever, cough, headache..."
                    className="mt-1.5 w-full resize-none rounded-lg border border-[#DDE5E1] bg-[#FCFCF9] px-3.5 py-3 text-xs outline-none placeholder:text-[#A5B2AF] focus:border-[#153D39]"
                  />

                </div>

                {/* PATIENT TYPE */}
                <div className="mt-5">

                  <div className="flex gap-7 text-xs">

                    <label className="flex cursor-pointer items-center gap-2">

                      <input
                        type="radio"
                        name="patientType"
                        checked={formData.patientType === "new"}
                        onChange={() =>
                          updateField("patientType", "new")
                        }
                        className="accent-[#153D39]"
                      />

                      <span>New Patient</span>

                    </label>

                    <label className="flex cursor-pointer items-center gap-2 text-[#82918E]">

                      <input
                        type="radio"
                        name="patientType"
                        checked={formData.patientType === "old"}
                        onChange={() =>
                          updateField("patientType", "old")
                        }
                        className="accent-[#153D39]"
                      />

                      <span>Old Patient</span>

                    </label>

                  </div>

                </div>

                {/* PREVIOUS DATE */}
                <div className="mt-5">

                  <label className="text-[11px] font-semibold">
                    Previous Appointment Date{" "}
                    <span className="text-[#9AA7A4]">
                      (if any)
                    </span>
                  </label>

                  <div className="relative mt-1.5">

                    <input
                      type="date"
                      value={formData.previousDate}
                      onChange={(e) =>
                        updateField("previousDate", e.target.value)
                      }
                      className="w-full rounded-lg border border-[#DDE5E1] bg-[#FCFCF9] px-3.5 py-3 text-xs text-[#718782] outline-none focus:border-[#153D39]"
                    />

                    <CalendarDays
                      size={14}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#81928E]"
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* NEXT */}
            <div className="mt-6 flex justify-end">

              <button
                onClick={() => setStep(2)}
                className="group flex items-center gap-3 rounded-full bg-[#0F625B] px-8 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.2)] transition hover:scale-[1.03]"
              >
                Next

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight size={13} />
                </span>
              </button>

            </div>
          </>
        )}

        {/* ================= STEP 2 ================= */}

        {step === 2 && (
          <div className="mt-7">

            <div className="grid gap-5 lg:grid-cols-2">

              {/* DATE & TIME */}
              <div className="rounded-[18px] border border-[#E5E8E2] bg-white p-6 shadow-[0_8px_30px_rgba(30,60,55,0.04)]">

                <h2 className="text-sm font-semibold">
                  Select Date & Time
                </h2>

                <p className="mt-2 text-xs text-[#82918E]">
                  Choose a convenient time for your consultation.
                </p>

                <div className="mt-6">

                  <label className="text-[11px] font-semibold">
                    Appointment Date
                  </label>

                  <div className="relative mt-1.5">

                    <input
                      type="date"
                      value={formData.appointmentDate}
                      onChange={(e) =>
                        updateField(
                          "appointmentDate",
                          e.target.value
                        )
                      }
                      className="w-full rounded-lg border border-[#DDE5E1] bg-[#FCFCF9] px-3.5 py-3 text-xs outline-none focus:border-[#153D39]"
                    />

                    <CalendarDays
                      size={14}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#81928E]"
                    />

                  </div>

                </div>

                <div className="mt-6">

                  <label className="text-[11px] font-semibold">
                    Available Time
                  </label>

                  <div className="mt-3 grid grid-cols-2 gap-3">

                    {[
                      "09:00 AM",
                      "10:00 AM",
                      "11:30 AM",
                      "02:00 PM",
                      "03:30 PM",
                      "05:00 PM",
                    ].map((time) => (

                      <button
                        key={time}
                        onClick={() =>
                          updateField("appointmentTime", time)
                        }
                        className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-3 text-xs transition ${
                          formData.appointmentTime === time
                            ? "border-[#0F625B] bg-[#E9F3EF] font-semibold text-[#0F625B]"
                            : "border-[#DDE5E1] bg-[#FCFCF9] hover:border-[#0F625B]"
                        }`}
                      >
                        <Clock size={13} />
                        {time}
                      </button>

                    ))}

                  </div>

                </div>

              </div>

              {/* CONSULTATION */}
              <div className="rounded-[18px] border border-[#E5E8E2] bg-white p-6 shadow-[0_8px_30px_rgba(30,60,55,0.04)]">

                <h2 className="text-sm font-semibold">
                  Consultation Type
                </h2>

                <p className="mt-2 text-xs text-[#82918E]">
                  How would you like to connect with the doctor?
                </p>

                <div className="mt-6 space-y-3">

                  <ConsultationCard
                    active={formData.consultation === "online"}
                    icon={<Video size={19} />}
                    title="Online Consultation"
                    description="Connect with your doctor through a call"
                    onClick={() =>
                      updateField("consultation", "online")
                    }
                  />

                  <ConsultationCard
                    active={formData.consultation === "clinic"}
                    icon={<Stethoscope size={19} />}
                    title="Clinic Visit"
                    description="Visit the doctor at the clinic"
                    onClick={() =>
                      updateField("consultation", "clinic")
                    }
                  />

                </div>

                {/* DOCTOR */}
                <div className="mt-6 rounded-xl bg-[#F3F6F1] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                      <Stethoscope size={19} />
                    </div>

                    <div>
                      <p className="text-[11px] text-[#81928E]">
                        Your Doctor
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        Dr. Amit Verma
                      </p>

                      <p className="mt-1 text-[10px] text-[#81928E]">
                        General Physician
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex justify-between">

              <button
                onClick={() => setStep(1)}
                className="rounded-full border border-[#D5DEDA] bg-white px-7 py-3 text-xs font-semibold text-[#153D39]"
              >
                ← Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="flex items-center gap-3 rounded-full bg-[#0F625B] px-8 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.2)]"
              >
                Next
                <ArrowRight size={13} />
              </button>

            </div>

          </div>
        )}

        {/* ================= STEP 3 ================= */}

        {step === 3 && (
          <div className="mt-7 rounded-[20px] border border-[#E5E8E2] bg-white p-8 shadow-sm">

            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E5F1E8] text-[#0F625B]">
                ✓
              </div>

              <h2 className="mt-5 font-serif text-3xl">
                Review & Confirm
              </h2>

              <p className="mt-2 text-sm text-[#82918E]">
                Please review your appointment details.
              </p>

            </div>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-[#F7F8F4] p-6">

              <div className="grid gap-5 sm:grid-cols-2">

                <Review label="Patient" value={formData.name || "Not provided"} />

                <Review label="Phone" value={formData.phone || "Not provided"} />

                <Review label="Date" value={formData.appointmentDate || "Not selected"} />

                <Review label="Time" value={formData.appointmentTime || "Not selected"} />

                <Review
                  label="Consultation"
                  value={
                    formData.consultation === "online"
                      ? "Online Consultation"
                      : "Clinic Visit"
                  }
                />

                <Review
                  label="Patient Type"
                  value={
                    formData.patientType === "new"
                      ? "New Patient"
                      : "Old Patient"
                  }
                />

              </div>

            </div>

            <div className="mt-7 flex justify-between">

              <button
                onClick={() => setStep(2)}
                className="rounded-full border border-[#D5DEDA] bg-white px-7 py-3 text-xs font-semibold"
              >
                ← Back
              </button>

             <button
 onClick={handleSubmit}
  className="rounded-full bg-[#0F625B] px-8 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,98,91,0.2)] transition hover:scale-[1.03]"
>
  Confirm Appointment
</button>

            </div>

          </div>
        )}

      </main>

    </div>
  );
}


/* STEP */

function Step({ number, title, active, completed }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5">

      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
          active || completed
            ? "bg-[#17665F] text-white"
            : "border border-[#D5DEDA] bg-white text-[#71827E]"
        }`}
      >
        {completed ? "✓" : number}
      </div>

      <span
        className={`hidden text-[10px] sm:block ${
          active
            ? "font-semibold text-[#153D39]"
            : "text-[#8A9996]"
        }`}
      >
        {title}
      </span>

    </div>
  );
}


/* FIELD */

function Field({
  label,
  required,
  icon,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="text-[11px] font-semibold">
        {label}{" "}
        {required && (
          <span className="text-[#D67B72]">*</span>
        )}
      </label>

      <div className="relative mt-1.5">

        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#81928E]">
            {icon}
          </span>
        )}

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-[#DDE5E1] bg-[#FCFCF9] py-3 text-xs outline-none placeholder:text-[#A5B2AF] focus:border-[#153D39] ${
            icon ? "pl-10 pr-3.5" : "px-3.5"
          }`}
        />

      </div>

    </div>
  );
}


/* CONSULTATION CARD */

function ConsultationCard({
  active,
  icon,
  title,
  description,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
        active
          ? "border-[#0F625B] bg-[#E9F3EF]"
          : "border-[#DDE5E1] bg-[#FCFCF9] hover:border-[#0F625B]"
      }`}
    >

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${
          active
            ? "bg-[#0F625B] text-white"
            : "bg-[#EAF0EC] text-[#153D39]"
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs font-semibold">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-[#82918E]">
          {description}
        </p>
      </div>

    </button>
  );
}


/* REVIEW */

function Review({ label, value }) {
  return (
    <div>
      <p className="text-[10px] text-[#82918E]">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold text-[#153D39]">
        {value}
      </p>
    </div>
  );
}

export default BookAppointment;