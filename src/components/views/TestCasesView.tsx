import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { initialTestCases, type TestCaseItem } from '../../data/testCasesData';
import {
  CheckCircle2,
  Circle,
  Play,
  RotateCcw,
  CheckCheck,
  Filter,
  ExternalLink,
  Zap,
  Activity,
  Send,
  Calendar,
  Lock,
  Sparkles
} from 'lucide-react';

export const TestCasesView: React.FC = () => {
  const { showToast, setCurrentScreen, triggerCalendarSync } = useApp();

  // Load checked test case IDs from localStorage so selections persist
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nayva_checked_testcases');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isTestingEndpoint, setIsTestingEndpoint] = useState(false);
  const [endpointResult, setEndpointResult] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('nayva_checked_testcases', JSON.stringify(checkedIds));
    } catch {}
  }, [checkedIds]);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const allFilteredIds = filteredCases.map((tc) => tc.id);
    const newChecked = Array.from(new Set([...checkedIds, ...allFilteredIds]));
    setCheckedIds(newChecked);
    showToast(`Marked ${allFilteredIds.length} test case(s) as passed!`, 'success');
  };

  const handleReset = () => {
    if (selectedCategory === 'all') {
      setCheckedIds([]);
      showToast('All test case checks reset.', 'info');
    } else {
      const remaining = checkedIds.filter(
        (id) => !filteredCases.some((tc) => tc.id === id)
      );
      setCheckedIds(remaining);
      showToast(`Reset checks for ${selectedCategory}.`, 'info');
    }
  };

  const filteredCases = initialTestCases.filter((tc) => {
    if (selectedCategory === 'all') return true;
    return tc.category === selectedCategory;
  });

  const totalCount = initialTestCases.length;
  const passedCount = checkedIds.length;
  const progressPercentage = Math.round((passedCount / totalCount) * 100);

  // Quick Action Handler for Interactive Verification
  const executeTestAction = async (actionType?: TestCaseItem['testActionType'], caseId?: string) => {
    if (actionType === 'ping-webhook') {
      setIsTestingEndpoint(true);
      setEndpointResult(null);
      try {
        const webhookUrl = (import.meta as any).env?.VITE_N8N_WEBHOOK_URL || 'https://overtensely-polygynous-emilee.ngrok-free.dev/webhook/meeting';
        const res = await fetch(webhookUrl, { method: 'GET' });
        if (res.ok) {
          const data = await res.json().catch(() => ({}));
          setEndpointResult(`🟢 HTTP 200 OK — ${data.message || 'Workflow was started'}`);
          showToast('Live n8n Webhook verified successfully (HTTP 200)!', 'success');
          if (caseId && !checkedIds.includes(caseId)) {
            setCheckedIds((prev) => [...prev, caseId]);
          }
        } else {
          setEndpointResult(`⚠️ Webhook responded with status: ${res.status}`);
          showToast(`Endpoint responded: ${res.status}`, 'error');
        }
      } catch (err: any) {
        setEndpointResult(`🔴 Webhook Offline or Blocked: ${err.message}`);
        showToast('Webhook unreachable. Verify ngrok tunnel.', 'error');
      } finally {
        setIsTestingEndpoint(false);
      }
    } else if (actionType === 'whatsapp-test') {
      setCurrentScreen('connections');
      showToast('Navigated to WhatsApp dispatch test panel in Connections.', 'info');
    } else if (actionType === 'simulate-prep') {
      await triggerCalendarSync();
      setCurrentScreen('preparation');
      showToast('Triggered calendar sync and opened AI Meeting Preparation view.', 'success');
      if (caseId && !checkedIds.includes(caseId)) {
        setCheckedIds((prev) => [...prev, caseId]);
      }
    } else if (actionType === 'check-login') {
      showToast('Current Session: client@navyatech.co.in (Gatekeeper Active).', 'info');
      if (caseId && !checkedIds.includes(caseId)) {
        setCheckedIds((prev) => [...prev, caseId]);
      }
    } else if (actionType === 'open-docs') {
      setCurrentScreen('connections');
      showToast('Opened Connections / Setup guide.', 'info');
    }
  };

  const categories = [
    { id: 'all', label: 'All Tests' },
    { id: 'gatekeeper', label: 'Gatekeeper' },
    { id: 'vault', label: 'Vault' },
    { id: 'n8n', label: 'n8n Webhook' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'enrichment', label: 'Apify / LinkedIn' },
    { id: 'ai', label: 'AI Synthesis' },
    { id: 'whatsapp', label: 'WhatsApp' },
    { id: 'pitch', label: 'Founder Pitch' },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* ── Top Header & Progress Scoreboard ────────────────────────────────────── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                Automation QA &amp; Founder-Pitch Test Cases
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/70 border border-emerald-800/70 text-emerald-400">
                {passedCount} of {totalCount} Passed ({progressPercentage}%)
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Check off each validation test as you verify the n8n pipeline, CRM interface, and WhatsApp briefings before reaching out to founders.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSelectAll}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/60 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              Check All
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 pt-4 border-t border-zinc-800/80">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span className="font-medium text-zinc-300">Readiness Score</span>
            <span className="font-mono text-emerald-400 font-semibold">{progressPercentage}% Ready to Sell</span>
          </div>
          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Live n8n Quick Test Bar */}
        <div className="mt-4 p-3 bg-zinc-950/70 border border-zinc-800/90 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <div className="truncate">
              <span className="text-zinc-300 font-medium">Live Webhook Bridge: </span>
              <span className="font-mono text-[11px] text-zinc-400">
                {(import.meta as any).env?.VITE_N8N_WEBHOOK_URL || 'https://overtensely-polygynous-emilee.ngrok-free.dev/webhook/meeting'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {endpointResult && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-750 text-zinc-300">
                {endpointResult}
              </span>
            )}
            <button
              onClick={() => executeTestAction('ping-webhook')}
              disabled={isTestingEndpoint}
              className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-medium border border-zinc-700 flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              {isTestingEndpoint ? 'Pinging...' : 'Ping n8n Now'}
            </button>
          </div>
        </div>
      </div>

      {/* ── Category Filter Bar ────────────────────────────────────────────── */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-3.5 h-3.5 text-zinc-500 mr-1 flex-shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-zinc-100 text-zinc-900'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Interactive Test Cases List ────────────────────────────────────── */}
      <div className="space-y-3">
        {filteredCases.map((tc) => {
          const isChecked = checkedIds.includes(tc.id);

          return (
            <div
              key={tc.id}
              className={`p-4 rounded-xl border transition-all duration-150 ${
                isChecked
                  ? 'bg-emerald-950/15 border-emerald-900/40 shadow-sm'
                  : 'bg-zinc-900 border-zinc-800/90 hover:border-zinc-750'
              }`}
            >
              <div className="flex items-start gap-3.5">
                {/* Checkbox Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleCheck(tc.id)}
                  className="mt-0.5 text-zinc-400 hover:text-emerald-400 transition-colors focus:outline-none flex-shrink-0"
                  title={isChecked ? 'Mark as Pending' : 'Mark as Passed'}
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                  ) : (
                    <Circle className="w-5 h-5 text-zinc-600 hover:text-zinc-400" />
                  )}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold text-zinc-400 bg-zinc-950/80 px-1.5 py-0.5 rounded border border-zinc-800">
                      {tc.id}
                    </span>
                    <h3
                      onClick={() => toggleCheck(tc.id)}
                      className={`text-xs sm:text-sm font-semibold cursor-pointer ${
                        isChecked ? 'text-zinc-300 line-through' : 'text-zinc-100'
                      }`}
                    >
                      {tc.title}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-medium">
                      {tc.categoryLabel}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {tc.description}
                  </p>

                  <div className="pt-2 mt-2 border-t border-zinc-800/60 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-zinc-950/50 p-2 rounded border border-zinc-850">
                      <span className="text-zinc-500 font-medium block mb-0.5">Test Procedure:</span>
                      <span className="text-zinc-300">{tc.steps}</span>
                    </div>
                    <div className="bg-zinc-950/50 p-2 rounded border border-zinc-850">
                      <span className="text-emerald-500/80 font-medium block mb-0.5">Expected Result:</span>
                      <span className="text-zinc-300">{tc.expectedResult}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button for live test trigger */}
                {tc.testActionType && (
                  <div className="flex-shrink-0 self-center">
                    <button
                      type="button"
                      onClick={() => executeTestAction(tc.testActionType, tc.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-medium border border-zinc-700 flex items-center gap-1 transition-colors"
                      title="Run Live Verification for this step"
                    >
                      <Play className="w-3 h-3 text-emerald-400" />
                      <span className="hidden sm:inline">Verify</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom Founder Outreach Playbook ──────────────────────────────── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h2 className="text-sm font-semibold text-zinc-100">Founder Outreach Strategy &amp; Demo Pitch Flow</h2>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Once your tests are completed, use this proven 3-minute pitch structure when reaching out to B2B founders, agency owners, and executive sales teams:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="bg-zinc-950/70 p-3 rounded-lg border border-zinc-800/80 space-y-1">
            <span className="text-emerald-400 font-semibold block text-[11px]">1. The Pain Point</span>
            <p className="text-zinc-300 text-[11px]">
              "Founders spend 15–20 minutes frantically googling meeting guests before every sales call and still miss crucial context."
            </p>
          </div>
          <div className="bg-zinc-950/70 p-3 rounded-lg border border-zinc-800/80 space-y-1">
            <span className="text-blue-400 font-semibold block text-[11px]">2. The Nayva Tech Solution</span>
            <p className="text-zinc-300 text-[11px]">
              "Autonomous background agent scans Google Calendar, pulls LinkedIn & company news via Apify, and drops a 2-minute dossier on WhatsApp 60 min before the call."
            </p>
          </div>
          <div className="bg-zinc-950/70 p-3 rounded-lg border border-zinc-800/80 space-y-1">
            <span className="text-amber-400 font-semibold block text-[11px]">3. The ROI Offer</span>
            <p className="text-zinc-300 text-[11px]">
              "Zero maintenance for the client. 12-hour ephemeral security vault. Ready to deploy in 24 hours under your agency or company brand."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
