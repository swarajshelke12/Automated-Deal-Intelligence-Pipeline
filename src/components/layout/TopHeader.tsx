import React from 'react';
import { useApp } from '../../context/AppContext';
import { Menu, HelpCircle, LogOut } from 'lucide-react';

interface TopHeaderProps {
  onOpenMobile: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onOpenMobile }) => {
  const { currentScreen, workflowStatus, openGuide, logout, authenticatedClient } = useApp();

  const getScreenDetails = () => {
    switch (currentScreen) {
      case 'dashboard':
        return {
          title: 'Dashboard Overview',
          subtitle: 'Automation health and upcoming calendar sessions'
        };
      case 'meetings':
        return {
          title: 'Upcoming Meetings',
          subtitle: 'Scheduled calls and automated research statuses'
        };
      case 'preparation':
        return {
          title: 'Meeting Preparation',
          subtitle: 'Generated executive brief, email history, LinkedIn insights & talking points'
        };
      case 'connections':
        return {
          title: 'Connections / Setup',
          subtitle: 'Client credentials and integration configuration for AI workflow'
        };
      default:
        return {
          title: 'AI Meeting Preparation CRM',
          subtitle: 'Engineered by Swaraj Shelke'
        };
    }
  };

  const { title, subtitle } = getScreenDetails();

  return (
    <header className="sticky top-0 z-30 h-14 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="p-1.5 -ml-1 text-zinc-400 hover:text-zinc-100 rounded-lg lg:hidden hover:bg-zinc-900 transition-colors"
          aria-label="Open mobile navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-sm font-semibold text-zinc-100 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-[11px] text-zinc-500 hidden sm:block">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        {/* User Guide Button */}
        <button
          onClick={openGuide}
          className="px-2.5 py-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-medium transition-colors flex items-center gap-1.5 shadow-sm active:scale-[0.98]"
          title="Open non-technical guide"
        >
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold">How It Works</span>
        </button>

        {/* Automation Status Pill — driven by actual workflowStatus */}
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs ${
          workflowStatus.isActive
            ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
            : 'bg-zinc-900 border-zinc-800 text-zinc-500'
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            workflowStatus.isActive ? 'bg-emerald-400' : 'bg-zinc-600'
          }`} />
          <span className="text-[11px] font-medium hidden xs:inline">AI Automation:</span>
          <span className={`text-[11px] font-semibold ${
            workflowStatus.isActive ? 'text-emerald-400' : 'text-zinc-500'
          }`}>
            {workflowStatus.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>

        {/* Author Link */}
        <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400 pl-3 border-l border-zinc-850">
          <span>By</span>
          <a
            href="https://github.com/swarajshelke12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white font-medium transition-colors hover:underline"
          >
            Swaraj Shelke
          </a>
        </div>

        {/* Lock / Sign Out */}
        <button
          onClick={logout}
          className="p-1.5 rounded-lg text-zinc-500 hover:text-red-300 hover:bg-red-950/30 border border-transparent hover:border-red-900/40 transition-colors ml-1"
          title={`Sign Out & Lock CRM (${authenticatedClient || 'Client'})`}
          aria-label="Sign Out"
        >
          <LogOut className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
