export interface TestCaseItem {
  id: string;
  title: string;
  category: 'gatekeeper' | 'vault' | 'n8n' | 'calendar' | 'enrichment' | 'ai' | 'whatsapp' | 'pitch';
  categoryLabel: string;
  description: string;
  steps: string;
  expectedResult: string;
  testActionType?: 'ping-webhook' | 'whatsapp-test' | 'simulate-prep' | 'check-login' | 'open-docs';
}

export const initialTestCases: TestCaseItem[] = [
  // 1. Client Gatekeeper
  {
    id: 'TC-01',
    category: 'gatekeeper',
    categoryLabel: 'Gatekeeper & Auth',
    title: 'Developer-Issued Client Login',
    description: 'Verify login with developer credentials client@navyatech.co.in and NayvaTech2026.',
    steps: 'Enter email and password in the login gatekeeper and submit.',
    expectedResult: 'Grants access to CRM dashboard; session saved securely.',
    testActionType: 'check-login'
  },
  {
    id: 'TC-02',
    category: 'gatekeeper',
    categoryLabel: 'Gatekeeper & Auth',
    title: 'Developer Admin Fallback Access',
    description: 'Verify admin fallback access using admin and admin123.',
    steps: 'Enter admin / admin123 on login screen.',
    expectedResult: 'Grants administrative oversight access.',
    testActionType: 'check-login'
  },
  {
    id: 'TC-03',
    category: 'gatekeeper',
    categoryLabel: 'Gatekeeper & Auth',
    title: 'Unauthorized Access Rejection',
    description: 'Ensure invalid passwords do not grant access to sensitive client dossiers.',
    steps: 'Enter random email or password and submit.',
    expectedResult: 'Access strictly blocked; red alert shown; CRM remains protected.',
    testActionType: 'check-login'
  },
  {
    id: 'TC-04',
    category: 'gatekeeper',
    categoryLabel: 'Gatekeeper & Auth',
    title: 'Session Logout & Back-Button Protection',
    description: 'Ensure clicking Log Out immediately revokes active browser view.',
    steps: 'Click Log Out in bottom sidebar and attempt to navigate back.',
    expectedResult: 'Locks screen back to gatekeeper login.',
    testActionType: 'check-login'
  },

  // 2. Ephemeral Vault & Integration Keys
  {
    id: 'TC-05',
    category: 'vault',
    categoryLabel: 'Ephemeral Vault & Setup',
    title: 'Direct Google Cloud Console Link',
    description: 'Ensure client can click out to Google Cloud credentials in 1 click.',
    steps: 'Go to Connections / Setup and click "Open Google Cloud ↗".',
    expectedResult: 'Opens console.cloud.google.com/apis/credentials in secure tab.',
    testActionType: 'open-docs'
  },
  {
    id: 'TC-06',
    category: 'vault',
    categoryLabel: 'Ephemeral Vault & Setup',
    title: 'Direct Groq / OpenAI Key Link',
    description: 'Ensure client can click out directly to Groq Console or OpenAI Keys.',
    steps: 'Click "Open Groq Console ↗" in the AI card.',
    expectedResult: 'Opens console.groq.com/keys directly.',
    testActionType: 'open-docs'
  },
  {
    id: 'TC-07',
    category: 'vault',
    categoryLabel: 'Ephemeral Vault & Setup',
    title: 'Direct Apify Integrations Link',
    description: 'Ensure client can reach Apify Console without searching or confusion.',
    steps: 'Click "Open Apify Console ↗" in the Web Intelligence card.',
    expectedResult: 'Opens console.apify.com/account/integrations directly.',
    testActionType: 'open-docs'
  },
  {
    id: 'TC-08',
    category: 'vault',
    categoryLabel: 'Ephemeral Vault & Setup',
    title: 'Direct Meta WhatsApp Dev Portal Link',
    description: 'Ensure client can access Meta Developer Portal WhatsApp setup.',
    steps: 'Click "Open Meta Dev Portal ↗" in WhatsApp card.',
    expectedResult: 'Opens developers.facebook.com/apps/ directly.',
    testActionType: 'open-docs'
  },
  {
    id: 'TC-09',
    category: 'vault',
    categoryLabel: 'Ephemeral Vault & Setup',
    title: '12-Hour Ephemeral Memory Auto-Purge',
    description: 'Verify sensitive keys are held in memory only and auto-expire after 12 hours.',
    steps: 'Lock credentials and inspect active countdown timer in setup view.',
    expectedResult: 'Shows auto-purge countdown; no raw secrets stored in external DB.',
    testActionType: 'open-docs'
  },

  // 3. n8n Automation Engine & Webhook
  {
    id: 'TC-10',
    category: 'n8n',
    categoryLabel: 'n8n Automation Engine',
    title: 'Live n8n Webhook Ping (GET /webhook/meeting)',
    description: 'Test direct connectivity to the live n8n ngrok endpoint.',
    steps: 'Click "Test Live n8n Endpoint" below or Sync Calendar.',
    expectedResult: 'Returns HTTP 200 with {"message":"Workflow was started"}.',
    testActionType: 'ping-webhook'
  },
  {
    id: 'TC-11',
    category: 'n8n',
    categoryLabel: 'n8n Automation Engine',
    title: 'CRM On-Demand Calendar Sync Trigger',
    description: 'Verify clicking "Sync with n8n" in the header invokes background check.',
    steps: 'Click "Sync with n8n" button in top navigation.',
    expectedResult: 'Dispatches trigger without UI lag; shows confirmation toast.',
    testActionType: 'ping-webhook'
  },
  {
    id: 'TC-12',
    category: 'n8n',
    categoryLabel: 'n8n Automation Engine',
    title: 'Autonomous 1-2 Hour Scheduled Execution',
    description: 'Verify n8n Schedule Trigger wakes up every 1-2 hours automatically.',
    steps: 'Review n8n workflow Schedule Trigger configuration.',
    expectedResult: 'Autonomous background trigger executes without manual intervention.',
    testActionType: 'open-docs'
  },

  // 4. Meeting Discovery & Calendar Ingestion
  {
    id: 'TC-13',
    category: 'calendar',
    categoryLabel: 'Calendar Ingestion',
    title: 'Next 60–120 Minute Meeting Discovery Window',
    description: 'Verify workflow filters upcoming Google Calendar events inside the prep window.',
    steps: 'Review Google Calendar node filter conditions (start time >= now && <= now + 2h).',
    expectedResult: 'Flags eligible meetings and queues them for intelligence processing.',
    testActionType: 'simulate-prep'
  },
  {
    id: 'TC-14',
    category: 'calendar',
    categoryLabel: 'Calendar Ingestion',
    title: 'External vs Internal Attendee Detection',
    description: 'Verify external prospective clients are differentiated from internal teammates.',
    steps: 'Check attendee email domain against agency/company domain.',
    expectedResult: 'External prospects prioritized for deep web and LinkedIn extraction.',
    testActionType: 'simulate-prep'
  },

  // 5. Web Scraping & LinkedIn Enrichment
  {
    id: 'TC-15',
    category: 'enrichment',
    categoryLabel: 'Apify & Web Enrichment',
    title: 'Prospect LinkedIn Profile Resolution',
    description: 'Verify Apify searches Google for attendee LinkedIn and company URL.',
    steps: 'Provide attendee name + company name to Apify actor.',
    expectedResult: 'Extracts headline, current title, past roles, and company domain.',
    testActionType: 'simulate-prep'
  },
  {
    id: 'TC-16',
    category: 'enrichment',
    categoryLabel: 'Apify & Web Enrichment',
    title: 'Company News & Funding Intel Extraction',
    description: 'Verify recent press releases or company updates are gathered.',
    steps: 'Query company domain through web scraper.',
    expectedResult: 'Extracts strategic milestones, funding, or product launches.',
    testActionType: 'simulate-prep'
  },

  // 6. AI Intelligence Synthesis
  {
    id: 'TC-17',
    category: 'ai',
    categoryLabel: 'AI Intelligence (Groq/OpenAI)',
    title: 'Executive Objective Summary Synthesis',
    description: 'Verify AI generates a crisp 2-sentence meeting objective.',
    steps: 'Process calendar invite title and attendee context through LLM node.',
    expectedResult: 'Generates concise, non-fluff strategic executive summary.',
    testActionType: 'simulate-prep'
  },
  {
    id: 'TC-18',
    category: 'ai',
    categoryLabel: 'AI Intelligence (Groq/OpenAI)',
    title: 'Contextual Talking Points & Objection Pre-emption',
    description: 'Verify AI synthesizes 3-4 targeted discussion topics for the founder.',
    steps: 'Inspect generated brief talking points.',
    expectedResult: 'Tailored points aligned with attendee career background and pain points.',
    testActionType: 'simulate-prep'
  },

  // 7. WhatsApp Executive Mobile Dispatch
  {
    id: 'TC-19',
    category: 'whatsapp',
    categoryLabel: 'WhatsApp Mobile Dispatch',
    title: 'Meta Cloud API Pre-Approved Template Dispatch',
    description: 'Send approved Meta hello_world template to ensure 24h window bypass.',
    steps: 'Trigger WhatsApp test in Connections with recipient phone number.',
    expectedResult: 'Delivered directly to WhatsApp phone number with Meta Message ID.',
    testActionType: 'whatsapp-test'
  },
  {
    id: 'TC-20',
    category: 'whatsapp',
    categoryLabel: 'WhatsApp Mobile Dispatch',
    title: 'Mobile Briefing Visual Hierarchy & Formatting',
    description: 'Verify executive briefing readability on phone screens.',
    steps: 'Inspect sample WhatsApp briefing text block.',
    expectedResult: 'Clean bold markdown, bulleted talking points, under 300 words.',
    testActionType: 'whatsapp-test'
  },

  // 8. Founder Outreach & Pitch Readiness
  {
    id: 'TC-21',
    category: 'pitch',
    categoryLabel: 'Founder Pitch Readiness',
    title: 'White-Label Branding Verification',
    description: 'Ensure 100% consistent branding: AI Meeting Prepration automation by nayva tech industries.',
    steps: 'Audit header, sidebar, footer, login gate, and metadata.',
    expectedResult: 'Zero generic placeholders or unbranded traces visible.',
    testActionType: 'open-docs'
  },
  {
    id: 'TC-22',
    category: 'pitch',
    categoryLabel: 'Founder Pitch Readiness',
    title: '3-Minute Live Founder Pitch Walkthrough',
    description: 'Verify smooth demo flow from Login -> Dashboard -> Meeting Dossier -> WhatsApp -> Setup.',
    steps: 'Perform continuous navigation test without reloading.',
    expectedResult: 'Fast, glitch-free interactive walkthrough ready for founder calls.',
    testActionType: 'open-docs'
  }
];
