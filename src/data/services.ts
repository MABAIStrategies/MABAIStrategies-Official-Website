import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    slug: 'ai-automation-architecture',
    name: 'AI Automation & Systems Architecture',
    description:
      'End-to-end design of AI-enabled workflows, governance, and observability for mission-critical teams.',
    category: 'Architecture',
    deliverables: [
      'Automation roadmap & governance',
      'Systems blueprint + integration diagrams',
      'Implementation backlog with ROI stack rank'
    ],
    outcomes: ['Unified automation stack', 'Weeks to launch not months', 'Provable ROI targeting'],
    idealCustomer: 'COOs, RevOps, and IT leaders modernizing fragmented processes.',
    priority: 1
  },
  {
    id: 2,
    slug: 'multi-agent-workflows',
    name: 'Multi-Agent Workflow Engineering',
    description:
      'Composable agent teams that coordinate across sales, marketing, operations, and HR in real time.',
    category: 'Agents',
    deliverables: [
      'Agent orchestration maps',
      'Playbooks + guardrails',
      'Pilot deployment with live telemetry'
    ],
    outcomes: ['+30% qualified meetings', 'Faster handoffs across ops', 'Lower manual review hours'],
    idealCustomer: 'GTM, CX, and Operations leaders scaling cross-functional work.',
    priority: 2
  },
  {
    id: 3,
    slug: 'workspace-zapier-automation',
    name: 'Google Workspace + Zapier Automation',
    description:
      'Structured automations across Docs, Sheets, Gmail, and third-party stacks anchored by Zapier.',
    category: 'Automation',
    deliverables: [
      'Automation audit + inventory',
      'Zapier workflow builds & QA',
      'Workspace governance + runbooks'
    ],
    outcomes: ['-40% manual admin', 'Error-resistant workflows', 'Automated reporting cadence'],
    idealCustomer: 'BizOps, HR, and Finance teams with spreadsheet-heavy operations.',
    priority: 3
  },
  {
    id: 4,
    slug: 'ai-strategy-advisory',
    name: 'AI Strategy & Advisory',
    description:
      'Fractional leadership and advisory to align AI investments with board-level outcomes.',
    category: 'Advisory',
    deliverables: [
      'Quarterly strategy sprints',
      'Exec enablement sessions',
      'Vendor + stack selection guidance'
    ],
    outcomes: ['Clarity on AI roadmap', 'Faster procurement', 'Executive-ready communications'],
    idealCustomer: 'Founders, CEOs, and Boards needing objective guidance.',
    priority: 4
  }
];
