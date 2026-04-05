import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  FiUser,
  FiMail,
  FiBook,
  FiUsers,
  FiActivity,
  FiKey,
} from "react-icons/fi";

export default function Register() {
  const navigate = useNavigate();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    "Personal",
    "Contact",
    "Academic",
    "Family",
    "Additional",
    "Account",
  ];

  const icons = [FiUser, FiMail, FiBook, FiUsers, FiActivity, FiKey];

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const filled = Object.values(form).filter(Boolean).length;
    setProgress(Math.floor((filled / Object.keys(form).length) * 100));
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setCurrentStep((s) => s + 1);
  const prevStep = () => setCurrentStep((s) => s - 1);

  const handleRegister = () => {
    if (!mounted) return;
    if (form.password !== form.confirmPassword) return;

    localStorage.setItem("registeredUser", JSON.stringify(form));
    navigate("/login");
  };

  const Icon = icons[currentStep];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">
          Registration
        </h1>

        <div className="w-full bg-gray-200 h-2 rounded mb-4">
          <div
            className="bg-purple-600 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Icon />
          <span>{steps[currentStep]}</span>
        </div>

        {currentStep === 0 && (
          <input name="fullName" className="border p-2 w-full rounded" onChange={handleChange} />
        )}

        {currentStep === 1 && (
          <input name="email" className="border p-2 w-full rounded" onChange={handleChange} />
        )}

        {currentStep === 2 && (
          <input name="username" className="border p-2 w-full rounded" onChange={handleChange} />
        )}

        {currentStep === 3 && (
          <input type="password" name="password" className="border p-2 w-full rounded" onChange={handleChange} />
        )}

        {currentStep === 4 && (
          <input type="password" name="confirmPassword" className="border p-2 w-full rounded" onChange={handleChange} />
        )}

        {currentStep === 5 && (
          <button onClick={handleRegister} className="bg-purple-600 text-white px-4 py-2 rounded">
            Register
          </button>
        )}

        <div className="flex justify-between mt-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Back
          </button>

          {currentStep < 5 && (
            <button
              onClick={nextStep}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}