import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm({
    mode: "onBlur",
    defaultValues: { email: "" },
  });

  const onSubmit = async ({ email }) => {
    setMessage("");
    setStatus("loading");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = data?.message || "Request failed. Try again.";
        throw new Error(msg);
      }

      setStatus("success");
      setMessage(
        "If an account exists for that email, a reset link has been sent."
      );
      reset({ email: "" });
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
      // Also surface the error on the field if useful:
      setError("email", { type: "server", message: err.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-sm rounded-2xl p-8">
          <h1 className="text-2xl font-semibold text-gray-900">Forgot password</h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email and we’ll send you a password reset link.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    // RFC 5322–ish simple pattern (good enough for UI validation)
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
                className={`mt-1 block w-full rounded-xl border bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send reset link"}
            </button>
          </form>

          {message && (
            <div
              className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                status === "success"
                  ? "bg-green-50 text-green-800"
                  : status === "error"
                  ? "bg-red-50 text-red-700"
                  : "bg-gray-50 text-gray-700"
              }`}
            >
              {message}
            </div>
          )}

          <div className="mt-6 text-center">
            <a href="/login" className="text-sm font-medium text-indigo-600 hover:underline">
              Back to sign in
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          For security, we only say an email was sent if the address exists.
        </p>
      </div>
    </div>
  );
}