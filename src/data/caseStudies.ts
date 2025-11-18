import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'telecom-revops-orchestration',
    title: 'Telecom RevOps Orchestration',
    industry: 'Telecommunications',
    companySize: '4,500 employees',
    problem:
      'Territory management and renewals handoffs relied on spreadsheets and manual approvals, delaying responses to enterprise customers.',
    approach:
      'Mapped RevOps processes, unified CRM + billing data via data warehouse automations, and stood up guardrailed agent workflows for renewals.',
    systemDesign:
      'Composed agent layer triggered from Salesforce + BigQuery events with Workspace automations for documentation. Added observability dashboards.',
    results:
      'Renewals team now has live risk scoring, automated contract prep, and guided playbooks reducing escalations.',
    metrics: [
      { label: 'Renewal cycle time', value: '-32%' },
      { label: 'Manual approvals', value: '-45%' },
      { label: 'Expansion pipeline visibility', value: '+3 regions' }
    ],
    quote:
      'MAB translated board-level targets into workflows our operators actually trust. Automations finally match the complexity of our accounts.',
    testimonialName: 'VP Revenue Operations',
    testimonialRole: 'National Telecom Carrier'
  },
  {
    id: 2,
    slug: 'saas-multi-agent-pilot',
    title: 'SaaS Multi-Agent Pilot',
    industry: 'B2B SaaS',
    companySize: 'Series C, 280 employees',
    problem:
      'Marketing qualified leads were stalling because enablement resources could not keep up with personalization requests.',
    approach:
      'Designed a cross-team agent network that drafts outreach, syncs collateral, and routes anomalies to humans with context.',
    systemDesign:
      'Combined Notion knowledge base, HubSpot, and bespoke vector search to power agents with accurate messaging and guardrails.',
    results:
      'Sales teams now run orchestrated, on-brand cadences with measurable controls and governance.',
    metrics: [
      { label: 'Meeting creation', value: '+38%' },
      { label: 'Manual content requests', value: '-60%' },
      { label: 'Ramp time', value: '-2 weeks' }
    ],
    quote:
      'They delivered a multi-agent workflow that our compliance team actually approved. That alone is magic.',
    testimonialName: 'VP Sales',
    testimonialRole: 'Workflow Automation SaaS'
  },
  {
    id: 3,
    slug: 'professional-services-workspace',
    title: 'Professional Services Workspace Automation',
    industry: 'Consulting',
    companySize: '120 consultants',
    problem:
      'Engagement staffing, invoicing, and deliverable reviews were spread across email threads and shared drives.',
    approach:
      'Audited every Zapier workflow, consolidated Sheets trackers into structured databases, and added AI QA assistants for deliverables.',
    systemDesign:
      'Workspace automations trigger from SOW approvals, auto-build project rooms, and sync timesheets to finance.',
    results:
      'Partners now see real-time capacity and finance trusts the data feeding ERP without manual reconciliation.',
    metrics: [
      { label: 'Staffing accuracy', value: '+28%' },
      { label: 'Invoice cycle time', value: '-7 days' },
      { label: 'Manual QA hours', value: '-35%' }
    ],
    quote:
      'Operations finally runs on rails. We have confidence every engagement follows the same automated spine.',
    testimonialName: 'COO',
    testimonialRole: 'Global Consulting Firm'
  }
];
