"use client";

import React, { useState } from "react";
import { X, Lock, Mail, KeyRound, Shield, CheckCircle, ArrowRight, Eye, EyeOff } from "lucide-react";

interface ManagerPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManagerPortalModal({ isOpen, onClose }: ManagerPortalModalProps) {
  const [role, setRole] = useState<"gm" | "host" | "admin">("gm");
  const [email, setEmail] = useState("alex.vance@resvorlounge.com");
  const [password, setPassword] = useState("••••••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"login" | "mfa" | "success">("login");
  const [mfaCode, setMfaCode] = useState(["4", "8", "1", "9", "2", "7"]);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("mfa");
  };

  const handleMfaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    setTimeout(() => {
      onClose();
      setStep("login");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#091238] via-[#060D2C] to-[#020514] border border-blue-500/30 p-8 shadow-2xl shadow-blue-950/60 text-slate-100 overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/30 border border-blue-400/40">
            R
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            Plan Better. Party Smarter.
          </h3>
          <p className="text-xs text-blue-200/80">
            Specialized Lounge Manager & Host Portal
          </p>
        </div>

        {step === "login" && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Role Selector Tabs */}
            <div className="grid grid-cols-3 gap-1 p-1 bg-slate-900/80 rounded-xl border border-white/10 text-xs font-medium">
              <button
                type="button"
                onClick={() => setRole("gm")}
                className={`py-1.5 rounded-lg transition-all ${
                  role === "gm"
                    ? "bg-blue-600 text-white font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Manager
              </button>
              <button
                type="button"
                onClick={() => setRole("host")}
                className={`py-1.5 rounded-lg transition-all ${
                  role === "host"
                    ? "bg-blue-600 text-white font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Floor Host
              </button>
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`py-1.5 rounded-lg transition-all ${
                  role === "admin"
                    ? "bg-blue-600 text-white font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Super Admin
              </button>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Work Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-white/15 focus:border-blue-400 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-300">Access Key / Password</label>
                <a href="#forgot" className="text-blue-400 hover:text-blue-300">
                  Forgot key?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-900/90 border border-white/15 focus:border-blue-400 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/20 text-[11px] text-blue-200">
              <Shield className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Multi-Factor Authentication (MFA) & Role-Based Access Control (RBAC) enabled</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Continue to Secure Verification</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {step === "mfa" && (
          <form onSubmit={handleMfaSubmit} className="space-y-5 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
              <KeyRound className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Enter 6-Digit MFA Passcode</h4>
              <p className="text-xs text-slate-400 mt-1">
                Sent to your authenticated mobile device registered for {email}
              </p>
            </div>

            <div className="flex justify-center gap-2 my-4">
              {mfaCode.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newCode = [...mfaCode];
                    newCode[idx] = e.target.value;
                    setMfaCode(newCode);
                  }}
                  className="w-10 h-12 text-center font-mono font-bold text-lg bg-slate-900 border border-blue-400/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Verify & Launch Dashboard</span>
              <CheckCircle className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setStep("login")}
              className="text-xs text-slate-400 hover:text-white underline"
            >
              Back to email login
            </button>
          </form>
        )}

        {step === "success" && (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center animate-bounce">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-lg font-bold text-white">Identity Verified</h4>
            <p className="text-xs text-slate-300">
              Launching ResVor Lounge Management Console...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

