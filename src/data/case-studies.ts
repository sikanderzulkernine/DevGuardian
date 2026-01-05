export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    client: string;
    services: string[];
    duration: string;
    team: string[];
    situation: string;
    objectives: string[];
    whatWeDid: {
        title: string;
        description: string;
        items?: string[];
    }[];
    difficulties: {
        issue: string;
        solution: string;
    }[];
    outcomes: string[];
    deliverables: string[];
    future?: string;
    image: string;
    tags: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: '1',
        slug: 'fintech-security-audit',
        title: 'FinTech Security Audit',
        subtitle: 'ISO 27001 Readiness Program',
        client: 'Confidential FinTech lender (multi-region)',
        services: ['Security audit', 'Web security', 'Cloud hardening', 'Governance (ISMS)'],
        duration: '8 weeks',
        team: ['Security lead', 'AppSec engineer', 'Cloud engineer', 'Delivery manager'],
        situation: 'The client had grown quickly—new product lines, new integrations, and multiple engineering squads shipping weekly. Security controls existed, but they were inconsistent across teams. Leadership wanted a clear risk picture and a pragmatic path toward an information security management system aligned with ISO/IEC 27001 requirements.',
        objectives: [
            'Establish a "single source of truth" for risk: assets, data flows, and threat exposure',
            'Identify and remediate critical web and API security gaps',
            'Harden cloud baseline configurations and access controls',
            'Build an audit-ready security program foundation (policies, evidence, ownership)'
        ],
        whatWeDid: [
            {
                title: 'Discovery that didn’t waste engineering time',
                description: 'We ran short, structured interviews (Engineering, DevOps, Support, Compliance) and mapped core systems (customer portal, underwriting services, internal admin tools), trust boundaries, and vendor limitations.',
            },
            {
                title: 'Application and API security assessment',
                description: 'We used OWASP Top 10 categories as a common language to communicate risk. Deliverables included reproducible findings, exploit narratives, and patch guidance matching their tech stack.',
            },
            {
                title: 'Cloud hardening baseline',
                description: 'We standardized guardrails using CIS Benchmark-aligned configuration recommendations (identity, logging, storage, network controls) to create a reusable baseline.',
            },
            {
                title: 'Governance + evidence system ("ISMS starter kit")',
                description: 'We created a lightweight security management layer aligned to ISO 27001: ownership, risk register workflow, policy pack, and evidence collection approach.',
            }
        ],
        difficulties: [
            {
                issue: 'Asset sprawl & unknown systems',
                solution: 'Implemented an ownership map and tagging rules—no tag, no deploy.'
            },
            {
                issue: 'Vendor black boxes',
                solution: 'Introduced a vendor risk questionnaire and compensating controls (network segmentation, least privilege, monitoring).'
            },
            {
                issue: 'Fixes competing with roadmap',
                solution: 'Created a severity-based remediation plan with sprint-sized tasks and assigned "security champions" per squad.'
            }
        ],
        outcomes: [
            'Reduced critical web/app findings from 12 to 0 within the engagement window',
            'Achieved full coverage of centralized logging and alerting for 100% of production services',
            'Established a repeatable ISO 27001-aligned risk and policy workflow adopted across all teams'
        ],
        deliverables: [
            'Executive risk report + engineering remediation backlog',
            'Cloud baseline hardening checklist + IaC guardrails',
            'Security policy pack + risk register + evidence plan'
        ],
        future: 'Tabletop incident response exercise, continuous vulnerability management, and quarterly security reviews.',
        image: '/case-study-1.webp',
        tags: ['Security Audit', 'ISO 27001', 'FinTech']
    },
    {
        id: '2',
        slug: 'ai-customer-support-agent',
        title: 'AI Customer Support Agent',
        subtitle: 'Agent for a Subscription SaaS',
        client: 'B2B subscription SaaS (confidential)',
        services: ['AI agent build', 'Knowledge/RAG', 'Support workflow automation', 'Security controls'],
        duration: '6 weeks (MVP → production)',
        team: ['AI engineer', 'Full-stack engineer', 'QA', 'Product lead'],
        situation: 'Support volume had outgrown the team. Response times were slipping, and senior agents were spending too much time answering repeat questions. The client wanted an AI support agent that could resolve common issues safely—without hallucinations, leaking data, or breaking brand voice.',
        objectives: [
            'Deflect repetitive tickets while keeping CSAT stable or improving',
            'Keep humans in control for edge cases and billing-sensitive actions',
            'Add strong privacy and security boundaries (PII-aware handling)',
            'Provide measurable visibility: what the agent answered, why, and with what confidence'
        ],
        whatWeDid: [
            {
                title: 'A knowledge layer the model could trust',
                description: 'Consolidated help center articles and internal macros, added metadata, and created a "single truth" knowledge base with a deprecation process.',
            },
            {
                title: 'Retrieval + grounded responses (RAG)',
                description: 'The agent only answered from approved sources. If it couldn’t find support, it asked clarifying questions or escalated to a human with a structured summary.',
            },
            {
                title: 'Guardrails and human handoff',
                description: 'Implemented confidence scoring, refusal rules, redaction for sensitive fields (tokens, emails), and escalation routes based on intent.',
            },
            {
                title: 'Observability',
                description: 'Every answer logged with source articles used, prompt version, and outcome (resolved, escalated, reopened).',
            }
        ],
        difficulties: [
            {
                issue: 'Hallucination risk',
                solution: 'Required citations in every answer and blocked "free-form" responses when sources were weak.'
            },
            {
                issue: 'Messy historical docs',
                solution: 'Set up weekly doc reviews and ownership rules—support content became a maintained product asset.'
            },
            {
                issue: 'Tone consistency',
                solution: 'Created a small style guide and validated responses with support leads before launch.'
            }
        ],
        outcomes: [
            '60% of incoming tickets handled end-to-end for top categories',
            'Median first response time reduced from 4 hours to 5 minutes',
            'Fewer "ping-pong" follow-ups due to better clarifying questions'
        ],
        deliverables: [
            'AI agent (production) + admin controls',
            'Knowledge ingestion pipeline + approval workflow',
            'Monitoring dashboard for quality, safety, and deflection rate'
        ],
        image: '/case-study-2.webp',
        tags: ['AI Agents', 'Automation', 'SaaS']
    },
    {
        id: '3',
        slug: 'headless-ecommerce-platform',
        title: 'High-Performance Headless E-commerce Platform',
        subtitle: '1M+ Daily Sessions',
        client: 'Retail e-commerce brand (confidential)',
        services: ['Web development', 'Scalability engineering', 'Web security'],
        duration: '12 weeks (rebuild + migration)',
        team: ['Tech lead', 'Frontend dev', 'Backend dev', 'DevOps', 'QA'],
        situation: 'The existing storefront struggled during campaigns: slow pages, cart failures, and brittle integrations. The business wanted a modern headless build that could scale without "emergency deploys" during traffic spikes.',
        objectives: [
            'Improve performance (Core Web Vitals + real conversion impact)',
            'Reduce downtime during promotions',
            'Make integrations resilient (inventory, payments, shipping)',
            'Add security controls suitable for a public, high-traffic target'
        ],
        whatWeDid: [
            {
                title: 'Headless architecture with a performance budget',
                description: 'Rebuilt the frontend with strict budgets for bundle size, render strategy, and caching. Treated performance as a feature.',
            },
            {
                title: 'Integration layer designed for failure',
                description: 'Added retries with backoff, circuit breakers, and queue-based synchronization. Implemented clear user messaging when downstream services degraded.',
            },
            {
                title: 'Security by design',
                description: 'Implemented rate limiting, bot protection, hardened session handling, and separated public storefront from internal admin tools.',
            }
        ],
        difficulties: [
            {
                issue: 'SEO migration risk',
                solution: 'Created redirect maps, tested crawl paths, and staged releases by category.'
            },
            {
                issue: 'Campaign "unknown unknowns"',
                solution: 'Ran load tests on real user journeys and fixed bottlenecks (search, PDP, checkout).'
            },
            {
                issue: 'Vendor outages',
                solution: 'Implemented graceful degradation so the site stayed functional even when third parties degraded.'
            }
        ],
        outcomes: [
            'Uptime improved to 99.99% during peak campaigns',
            'Page load times reduced by 45% on top traffic pages',
            'Conversion rate lift of 15% attributed to speed + stability improvements'
        ],
        deliverables: [
            'Headless storefront + deployment pipeline',
            'Resilient integration services',
            'Security hardening checklist + monitoring'
        ],
        image: '/case-study-3.webp',
        tags: ['E-commerce', 'Headless', 'Performance']
    },
    {
        id: '4',
        slug: 'soc2-readiness-startup',
        title: 'SOC 2 Security & Availability Readiness',
        subtitle: 'Scaling Fast',
        client: 'SaaS platform (confidential)',
        services: ['Security program design', 'Controls implementation', 'Evidence automation'],
        duration: '10 weeks',
        team: ['Security lead', 'Cloud engineer', 'PM'],
        situation: 'Enterprise prospects started asking for SOC 2. The product was solid, but the "proof" wasn’t there—policies were informal and evidence lived in people’s heads. The goal was building real controls that wouldn’t slow delivery.',
        objectives: [
            'Implement controls aligned to SOC 2 trust services categories',
            'Make evidence collection repeatable',
            'Reduce operational risk without freezing engineering velocity'
        ],
        whatWeDid: [
            {
                title: 'Readiness and Standardization',
                description: 'Ran a gap analysis and standardized identity and access processes (joiner/mover/leaver, privileged access).',
            },
            {
                title: 'Monitoring and Incident Response',
                description: 'Implemented logging + monitoring and documented incident workflows.',
            },
            {
                title: 'Evidence Automation',
                description: 'Built an evidence calendar so audits weren’t a panic event, automating collection where possible.',
            }
        ],
        difficulties: [
            {
                issue: 'Speed vs Process',
                solution: 'Embedded controls into existing workflows (PR reviews, CI checks, access provisioning).'
            },
            {
                issue: 'Evidence fatigue',
                solution: 'Automated what we could; created a lightweight monthly checklist for the rest.'
            },
            {
                issue: 'Tool sprawl',
                solution: 'Consolidated to fewer systems and documented what mattered.'
            }
        ],
        outcomes: [
            'Achieved SOC 2 readiness for security + availability scope',
            'Reduced time spent preparing audit evidence from weeks to days'
        ],
        deliverables: [
            'Control matrix + policies + evidence plan',
            'Access review process + incident response workflow',
            'Monitoring and alerting baseline'
        ],
        image: '/case-study-4.webp',
        tags: ['SOC 2', 'Compliance', 'SaaS']
    },
    {
        id: '5',
        slug: 'web-app-hardening-owasp-asvs',
        title: 'Web App Hardening',
        subtitle: 'Using OWASP ASVS for a Regulated Client Portal',
        client: 'Regulated services portal (confidential)',
        services: ['Web security', 'Web Development', 'Secure development guidance', 'Verification testing'],
        duration: '5 weeks',
        team: ['AppSec engineer', 'Full-stack engineer', 'QA'],
        situation: 'A customer portal handled sensitive user data and file uploads. New enterprise customers required deeper assurance: repeatable verification, not one-off fixes.',
        objectives: [
            'Build a measurable security baseline for the app',
            'Fix high-risk vulnerabilities and prevent regressions',
            'Introduce secure development practices that fit the team’s sprint rhythm'
        ],
        whatWeDid: [
            {
                title: 'OWASP ASVS Verification',
                description: 'Used ASVS as the backbone for a structured verification plan—turning "security" into testable requirements.',
            },
            {
                title: 'Key Security Implementations',
                description: 'Improved authentication/session models, verified role + object-level access controls, and secured file uploads (type validation, scanning hooks, storage isolation).',
            },
            {
                title: 'Logging',
                description: 'Enhanced logging improvements for comprehensive audit trails.',
            }
        ],
        difficulties: [
            {
                issue: 'Legacy auth patterns',
                solution: 'Introduced a safer session model incrementally and validated compatibility.'
            },
            {
                issue: 'Developer confidence',
                solution: 'Delivered fixes as PRs with explanations so the team could repeat the patterns.'
            },
            {
                issue: 'Regression risk',
                solution: 'Added CI checks and a short security test checklist tied to ASVS categories.'
            }
        ],
        outcomes: [
            'Closed all critical findings and reduced recurring issues via CI verification',
            'Improved auditability with structured logs and clear access control rules'
        ],
        deliverables: [
            'ASVS-based verification checklist',
            'Remediation PRs + secure coding patterns',
            'CI pipeline security gates'
        ],
        image: '/case-study-5.webp',
        tags: ['OWASP', 'Web Security', 'AppSec']
    },
    {
        id: '6',
        slug: 'ai-sales-ops-agent',
        title: 'AI Sales Ops Agent',
        subtitle: 'Lead Qualification & Meeting Scheduling',
        client: 'B2B services company (confidential)',
        services: ['AI agent', 'Automation', 'CRM integration'],
        duration: '4–6 weeks',
        team: ['AI engineer', 'Integration engineer', 'Product lead'],
        situation: 'Inbound leads arrived from multiple channels. The sales team lost time triaging and scheduling, while qualified leads waited too long for a human response.',
        objectives: [
            'Respond to inbound leads quickly and consistently',
            'Qualify using clear rules (ICP fit, urgency, budget signals)',
            'Push clean data into CRM without creating a mess',
            'Keep a human approval step before any sensitive outbound'
        ],
        whatWeDid: [
            {
                title: 'Lead intake agent',
                description: 'Built an agent to normalize data and detect intent from various channels.',
            },
            {
                title: 'Qualification logic',
                description: 'Implemented explainable reasoning for lead scoring (high/medium/low).',
            },
            {
                title: 'Scheduling workflow',
                description: 'Created a system to offer times, confirm timezones, and create CRM activities, with a handoff summary for reps.',
            }
        ],
        difficulties: [
            {
                issue: 'Data quality',
                solution: 'Built a "confidence and completeness" score and prompted for missing fields.'
            },
            {
                issue: 'Over-automation risk',
                solution: 'Human approval required for sensitive outreach and pricing talk.'
            },
            {
                issue: 'CRM permission complexity',
                solution: 'Scoped access tightly and logged all actions.'
            }
        ],
        outcomes: [
            'First response time reduced from hours to minutes',
            'Higher lead-to-meeting conversion due to consistent follow-up',
            'Reduced admin workload per rep by 10+ hours/week'
        ],
        deliverables: [
            'Agent workflows + CRM integration',
            'Logging + audit trail for actions',
            'KPI dashboard (speed-to-lead, qualification accuracy, meetings created)'
        ],
        image: '/case-study-6.webp',
        tags: ['AI Sales', 'AI Agents', 'Automation', 'CRM']
    },
    {
        id: '7',
        slug: 'incident-response-hardening',
        title: 'Incident Response + Hardening',
        subtitle: 'After Account Takeover Attempts',
        client: 'Consumer web platform (confidential)',
        services: ['Incident response', 'Web security hardening', 'Monitoring'],
        duration: '3 weeks (stabilize), plus follow-on monitoring',
        team: ['Security lead', 'Backend engineer', 'DevOps'],
        situation: 'The client saw a surge in suspicious login traffic and unauthorized access attempts. Engineering lacked the telemetry to confidently answer "What happened?"',
        objectives: [
            'Contain active abuse quickly',
            'Improve detection and response capability',
            'Reduce likelihood of repeat attacks (without harming real user logins)'
        ],
        whatWeDid: [
            {
                title: 'Response Model',
                description: 'Aligned response to NIST incident response guidance (Rev. 3) and mapped behaviors to MITRE ATT&CK techniques.',
            },
            {
                title: 'Containment',
                description: 'Implemented rate limits, IP/ASN anomaly rules, credential stuffing defenses, and forced resets for suspicious accounts.',
            },
            {
                title: 'Stabilization & Hardening',
                description: 'Improved logs (auth events, session anomalies), rolled out MFA plans, better password policies, and safer session invalidation.',
            }
        ],
        difficulties: [
            {
                issue: 'Incomplete logs',
                solution: 'Prioritized "future-proof" telemetry first, then retro analysis.'
            },
            {
                issue: 'False positives',
                solution: 'Staged controls carefully, monitored impact, and tuned with support feedback.'
            },
            {
                issue: 'Coordination',
                solution: 'Set a single incident channel and a short decision log.'
            }
        ],
        outcomes: [
            'Reduced automated login abuse by 95% within days',
            'Restored user trust with clear comms',
            'Built a repeatable incident workflow aligned to NIST guidance'
        ],
        deliverables: [
            'Incident report (timeline, scope, root causes, actions)',
            'Hardened auth controls + monitoring rules',
            'Post-incident playbook'
        ],
        image: '/case-study-7.webp',
        tags: ['Incident Response', 'Security Hardening', 'NIST']
    },
    {
        id: '8',
        slug: 'devsecops-pipeline-upgrade',
        title: 'DevSecOps Pipeline Upgrade',
        subtitle: 'Measured Delivery Improvements',
        client: 'SaaS engineering org (confidential)',
        services: ['DevSecOps', 'AppSec automation', 'Delivery performance'],
        duration: '7 weeks',
        team: ['DevOps engineer', 'AppSec engineer', 'Tech lead'],
        situation: 'Security checks were happening late, releases were stressful. Engineers wanted speed; leadership wanted fewer incidents and clearer risk controls.',
        objectives: [
            'Shift security left with automation',
            'Reduce "surprise" vulnerabilities at release time',
            'Improve delivery stability without slowing deployment cadence'
        ],
        whatWeDid: [
            {
                title: 'CI Security Gates',
                description: 'Implemented SAST, dependency scanning, and IaC scanning.',
            },
            {
                title: 'Secrets Scanning & Branch Protection',
                description: 'Added automated checks and clear exception handling workflows.',
            },
            {
                title: 'Measuring Impact',
                description: 'Tracked DORA metrics (deployment frequency, lead time, failure rate) to measure success objectively.',
            }
        ],
        difficulties: [
            {
                issue: 'Alert noise',
                solution: 'Tuned rules and focused on high-signal findings first.'
            },
            {
                issue: 'Developer pushback',
                solution: 'Shipped incremental improvements and provided "fix patterns".'
            },
            {
                issue: 'Legacy repos',
                solution: 'Created a migration playbook and tackled highest-risk services first.'
            }
        ],
        outcomes: [
            'Lead time reduced by 30% while production regressions dropped',
            'Change failure rate decreased due to earlier detection',
            'Security became part of normal delivery, not a last-minute scramble'
        ],
        deliverables: [
            'Updated CI/CD templates + security gates',
            'Repo standards + exception workflow',
            'Metrics dashboard and monthly review cadence'
        ],
        image: '/case-study-8.webp',
        tags: ['DevSecOps', 'CI/CD', 'Automation']
    },
    {
        id: '9',
        slug: 'cloud-security-posture-hardening',
        title: 'Cloud Security Posture Hardening',
        subtitle: 'Multi-Account Infrastructure',
        client: 'Multi-product tech company (confidential)',
        services: ['Cloud security', 'IAM hardening', 'Monitoring', 'Policy-as-code'],
        duration: '6–9 weeks',
        team: ['Cloud security engineer', 'DevOps', 'Security lead'],
        situation: 'Multiple cloud accounts created by different teams led to inconsistent security posture, drifted IAM permissions, and cost spikes.',
        objectives: [
            'Establish a baseline security posture across environments',
            'Reduce identity and configuration risk (least privilege + guardrails)',
            'Improve visibility and make security repeatable'
        ],
        whatWeDid: [
            {
                title: 'Baseline Controls',
                description: 'Used CIS Benchmarks as a reference for secure configuration.',
            },
            {
                title: 'IAM Cleanup',
                description: 'Inventoried permissions, introduced RBAC, removed broad privileges, and added break-glass access.',
            },
            {
                title: 'Logging and Detection',
                description: 'Centralized security logs and alerts for risky changes (public buckets, firewall rules, etc.).',
            }
        ],
        difficulties: [
            {
                issue: 'Fear of outages',
                solution: 'Used staged rollouts and "monitor-only" periods before enforcing guardrails.'
            },
            {
                issue: 'Ownership gaps',
                solution: 'Created an ownership registry—every account had a named owner.'
            },
            {
                issue: 'Tool fragmentation',
                solution: 'Consolidated controls into standard templates.'
            }
        ],
        outcomes: [
            'Significant reduction in high-risk misconfigurations',
            'Faster root cause analysis due to consistent logging',
            'A repeatable baseline for future environments'
        ],
        deliverables: [
            'Cloud posture report + prioritized backlog',
            'IAM refactor plan',
            'Standard baseline templates and onboarding checklist'
        ],
        image: '/case-study-9.webp',
        tags: ['Cloud Security', 'IAM', 'CIS Benchmarks']
    },
    {
        id: '10',
        slug: 'legal-doc-automation',
        title: 'Enterprise Legal Document Automation',
        subtitle: 'Processing 500+ Contracts Daily',
        client: 'Mid-sized Law Firm (confidential)',
        services: ['AI Agents', 'Automation', 'NLP'],
        duration: '5 weeks',
        team: ['AI Engineer', 'Backend Dev'],
        situation: 'Paralegals were drowning in routine contract reviews. They spent 4-6 hours daily manually checking NDAs and MSAs for standard clauses, creating a massive bottleneck for deal closures.',
        objectives: [
            'Automate the initial review of standard contracts',
            'Flag risky clauses that deviate from the playbook',
            'Reduce turnaround time from days to minutes'
        ],
        whatWeDid: [
            {
                title: 'Custom NLP Agent',
                description: 'We built an agent tuned on their historical contracts to understand legal context, not just keywords.',
            },
            {
                title: 'Risk Flagging System',
                description: 'The system highlights non-standard liability caps and jurisdiction clauses, providing a "risk score" for human review.',
            },
            {
                title: 'Seamless Workflow',
                description: 'Integrated directly into their email workflow. Lawyers forward a PDF, and the agent replies with a summary analysis within 2 minutes.',
            }
        ],
        difficulties: [
            {
                issue: 'PDF Parsing Accuracy',
                solution: 'Implemented advanced OCR with a secondary verification step.'
            },
            {
                issue: 'Lawyer Trust',
                solution: 'We started with a "shadow mode" where the AI only made suggestions, proving 99% accuracy before full rollout.'
            }
        ],
        outcomes: [
            '85% reduction in manual review time for standard NDAs',
            'Zero critical errors missed in the first 3 months',
            'Paralegals shifted focus to high-value billable work'
        ],
        deliverables: [
            'Email-based Contract Analysis Agent',
            'Admin Dashboard for Rule Updates',
            'Risk Scoring Logic'
        ],
        image: '/case-study-10.webp',
        tags: ['AI Agents', 'LegalTech', 'Automation']
    },
    {
        id: '11',
        slug: 'high-freq-trading-dashboard',
        title: 'High-Frequency Trading Dashboard',
        subtitle: 'Real-time Visualization at Millisecond Speed',
        client: 'Proprietary Trading Firm (confidential)',
        services: ['Web Development', 'Performance Engineering', 'Data Visualization'],
        duration: '8 weeks',
        team: ['Senior Frontend Dev', 'Data Engineer'],
        situation: 'Traders were frustrated with a legacy dashboard that lagged during market volatility. When milliseconds equal millions, they needed a UI that could render 50,000+ data points per second without freezing.',
        objectives: [
            'Eliminate UI lag during high-volume trading sessions',
            'Visualize complex order book data in real-time',
            'Ensure zero-latency interaction for trade execution'
        ],
        whatWeDid: [
            {
                title: 'WebGL Rendering Engine',
                description: 'Moved charting from standard DOM-based libraries to a custom WebGL implementation to handle massive data throughput.',
            },
            {
                title: 'WebSockets Optimization',
                description: 'Implemented binary message formats (Protobuf) over WebSockets to reduce huge payload sizes by 70%.',
            },
            {
                title: 'Low-Latency State Management',
                description: 'We bypassed standard React state for high-frequency updates, writing directly to the canvas to avoid re-render overhead.',
            }
        ],
        difficulties: [
            {
                issue: 'Memory Leaks',
                solution: 'Aggressive object pooling and manual garbage collection strategies.'
            },
            {
                issue: 'Data Noise',
                solution: 'Implemented smart throttling that only draws visible frames without losing data precision.'
            }
        ],
        outcomes: [
            'Dashboard renders fluidly at 60fps even during market open',
            'Data latency reduced from 200ms to <15ms',
            'Traders reported a measurable improvement in execution timing'
        ],
        deliverables: [
            'Real-time Trading Terminal UI',
            'Custom Charting Library',
            'Binary WebSocket Gateway'
        ],
        image: '/case-study-11.webp',
        tags: ['Web Development', 'FinTech', 'High-Performance']
    }
];
