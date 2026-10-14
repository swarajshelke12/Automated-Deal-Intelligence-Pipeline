import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Lock, User, Eye, EyeOff, ArrowRight, AlertCircle, Sparkles, ExternalLink } from 'lucide-react';

export const LoginGateView: React.FC = () => {
  const { login } = useApp();

  const [clientId, setClientId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!clientId.trim()) {
      setError('Please enter your Client ID or authorized email.');
      return;
    }
    if (!password) {
      setError('Please enter your access password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const result = login(clientId, password, rememberMe);
      setIsLoading(false);
      if (!result.success) {
        setError(result.message);
      }
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-center items-center p-4 selection:bg-zinc-800 selection:text-zinc-100 relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-emerald-950/20 via-zinc-900/40 to-cyan-950/20 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-750 shadow-xl shadow-black/40 mb-1 text-emerald-400">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>

          <h1 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
            AI Meeting Prepration automation
          </h1>
          <p className="text-xs text-zinc-400 flex items-center justify-center gap-1.5">
            <span>Client Intelligence Portal</span>
            <span>·</span>
            <span className="text-zinc-300 font-medium">nayva tech industries</span>
          </p>
        </div>

        {/* Login Security Card */}
        <div className="bg-zinc-900/90 border border-zinc-800/90 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/60 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-200">Authorized Client Access</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-750">
              Private Instance
            </span>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-300 flex items-start gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5 flex-1 leading-snug">
                <p className="font-semibold text-red-200">Access Denied</p>
                <p className="text-[11px] text-red-300/90">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Client ID / Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-zinc-400" />
                <span>Client ID or Email</span>
              </label>
              <input
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                placeholder="e.g. client"
                autoComplete="username"
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/80 rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all font-mono"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Access Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/80 rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all font-mono pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 p-1 transition-colors"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-zinc-400 hover:text-zinc-300">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-zinc-750 bg-zinc-950 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-[11px]">Remember this browser</span>
              </label>

              <span className="text-[11px] text-zinc-500">Developer Issued</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 text-xs font-semibold shadow-lg shadow-emerald-950/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              <span>{isLoading ? 'Verifying Credentials...' : 'Sign In to Portal'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Client Notice */}
          <div className="pt-3 border-t border-zinc-800/70 text-[11px] text-zinc-500 leading-relaxed space-y-1.5">
            <div className="flex items-center gap-1.5 text-zinc-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Need your client credentials?</span>
            </div>
            <p>
              This CRM is private to enterprise clients. Your Client ID and Access Key are provisioned directly by the engineering team at{' '}
              <span className="text-zinc-300">nayva tech industries</span>.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-[11px] text-zinc-600 flex items-center justify-center gap-3">
          <span>Engineered by nayva tech industries</span>
          <span>·</span>
          <a
            href="https://www.navyatech.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 flex items-center gap-0.5 transition-colors"
          >
            <span>navyatech.co.in</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
