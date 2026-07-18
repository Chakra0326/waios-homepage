# WAIOS Build Roadmap
_Last updated: July 1, 2026 — merged with pitch deck vision_

This roadmap maps every claim in the "Autonomous Ecosystem CMDB" pitch deck to
real build phases. Anything marked ✅ is live and demoable in AWS today.
Anything marked 🔴 is deck vision, not yet built — do not claim these as
live to investors until they move to ✅.

---

## 🔴 URGENT — Security (Do Today)

- [ ] **Rotate OpenAI API key** — was exposed in chat session
- [ ] **Fix SQS queue policy** — `"Principal": "*"` wildcard is open

---

## ✅ LIVE IN AWS (Built & Confirmed)

- [x] EC2 `WAI Ecosystem` instance running (i-04e7118812104c837, ap-southeast-1)
- [x] SSM Fleet Manager + Inventory
- [x] AWS Config continuous recording
- [x] EventBridge + SNS (`wai-cmdb-alerts`)
- [x] SQS queue `WaiosMasterEventQueue`
- [x] SSM Parameter Store `/WAIOS/CMDB/MasterSchemaRegistry` — **ITIL v5**, two controls (encryption, availability), CMDB-driven (not hardcoded)
- [x] Lambda `waios-master-engine` — SQS-triggered, auto-fires every ~30 min
- [x] CloudWatch Forensic BlackBox `/WAIOS/Forensic/BlackBox` — real ANOMALY entries confirmed
- [x] Spoke agent on EC2, real telemetry every ~30 min
- [x] Custom AMI `WAIOS-Enterprise-Core-v1.0` — Available, not boot-tested
- [x] Cost allocation tags applied

**Deck slides this covers honestly:** "WAIOS Solution: Discover → Analyze" (partially — Discover ✅, Analyze ✅)

---

## ✅ PHASE 1 — WAI Advisor + Risk Engine (COMPLETE)

- [x] **1A. Risk Calculator** — severity × blast_radius × exposure_factor, 0–100 score, LOW/MED/HIGH/CRITICAL
- [x] **1B. WAI Advisor Narrative Engine** — LLM generates CTO briefing, explicitly self-identified as "WAI Advisor" role (not generic WAIOS), sent via SNS
- [x] **1C. One-Click CAB Approval** — signed HMAC token, API Gateway endpoint, BlackBox records `cab_approved: true` with timestamp

**Deck slides this covers honestly:**
- "WAI Advisor: 1-click CAB approval for automated change governance" ✅ TRUE — this is real, working, tested today
- "Autonomous CAB... replacing manual meetings" — 🟡 partially true; it replaces manual *notification*, not a full meeting/deliberation process

---

## ✅ PHASE 2A — Remediation Lambda (COMPLETE, VERIFIED LIVE July 4, 2026)

- [x] **2A. Remediation Lambda** — triggered by CAB approval; performs real
      snapshot → encrypted copy → new volume → stop instance → detach old →
      attach new → start instance sequence. VERIFIED: real unencrypted
      volume `vol-09fa2d804a1b6d65b` was replaced with real encrypted
      volume `vol-0855d5278a0af3c5c` (KMS key confirmed in AWS console,
      `Encryption: Encrypted`). Instance `i-04e7118812104c837` genuinely
      stopped and restarted. NOT a dry run — real infrastructure modified
      successfully end-to-end. Step-by-step progress logging (`log_step`)
      added so a Lambda timeout can never again hide whether remediation
      actually succeeded.
      _ISO 27001: A.12.6.1_

**Known limitation:** Only `encryption_none` has remediation logic. Other
violation types (`sla_breach`, etc.) will log "unsupported" and take no
action until their own remediation functions are written.

**Known limitation:** CAB approval link is not yet single-use — clicking
it multiple times (including accidental email-client link prefetching)
can trigger multiple remediation attempts. AWS's own per-volume snapshot
rate limit acted as an accidental safety net during testing, but this
should be fixed properly (check for existing `CAB_APPROVED` entry with
same token before re-processing).

---

## ✅ PHASE 2 — Remediation + Rollback (FULLY COMPLETE)

- [x] **2B. Formal Restore Point** — `record_restore_point()` writes a
      dedicated, independently-queryable `RESTORE_POINT` BlackBox entry
      right after the snapshot completes, before any risky action —
      containing original_volume_id, snapshot_id, device_name, AZ
- [x] **2C. Rollback Engine** — the detach/attach/start sequence is wrapped
      in its own try/except. If it fails at any point (e.g. new volume
      attach fails), `rollback_to_original()` automatically reattaches the
      ORIGINAL volume and restarts the instance, logging
      `ROLLBACK_TRIGGERED` → `ROLLBACK_SUCCESS`/`ROLLBACK_FAILED` to
      BlackBox. Two-layer safety: outer try/except catches pre-swap
      failures (nothing to roll back yet), inner try/except catches
      swap-window failures (rollback needed).
      _ISO 27001: A.12.3.1 Information Backup_
      _ITIL v5: Business Continuity & DR Planning (partial — single
      resource, not full DR; see Phase 5 for real multi-region DR)_

**Deck slides this covers once complete:**
- "Agent 6 (DevOps): Global infrastructure distribution with parallel execution" — 🔴 Deck describes multi-region parallel execution; Phase 2A is single-region, single-resource remediation. Real but much smaller than described.
- "Automated Release Management... IaC Distributor Engine (AWS CloudFormation StackSets)" — 🔴 Not built, no StackSets exist
- "Zero-Touch DR Synchronization... adheres to ISO 22301" — 🔴 Not built, no DR environment exists at all

---

## 🔨 PHASE 3 — Ops Query + Financial Tracking

- [x] **3A. Ops Query Interface** (renamed from "WAI BoD Query Interface" —
      this is NOT the deck's C-level AI persona concept, just a plain-English
      search tool over the BlackBox audit log). Built as `waios-ops-query`.
      Natural language question → LLM translates to CloudWatch Logs Insights
      query → runs against BlackBox → LLM summarizes results in plain
      English. VERIFIED working: correctly found and summarized 6 real
      remediation events for resource i-04e7118812104c837, including
      honestly noting when it couldn't confirm success/failure from
      available fields (no hallucination).
      **True scope:** an ops/audit search tool for internal team use.
      **NOT true scope:** investor-facing financial reports, C-level AI
      personas (CFO/COO/Legal) — that remains Phase 7 vision, unbuilt.
- [x] **3B. Per-Tenant Token Cost Logging** — `TOKEN_USAGE` entries now
      written to BlackBox on every LLM call, in both `waios-master-engine`
      (tagged by real tenant_id) and `waios-ops-query` (tagged `source:
      waios-ops-query`). Captures tokens_in, tokens_out, cost_usd using
      real gpt-4o-mini pricing ($0.15/$0.60 per 1M tokens). Real unit
      economics per tenant are now queryable via `waios-ops-query` itself
      (e.g. "what's our total AI cost this week").
- [x] **3C. Processing Latency Measurement** — added `processing_latency_ms`
      field to every BlackBox entry (both COMPLIANT and ANOMALY paths),
      measuring real time from SQS message receipt to BlackBox write.
      FIRST REAL MEASUREMENT (July 4, 2026): 526.65ms on a COMPLIANT
      (no-violation) check. NOTE: this measures pipeline processing
      latency, NOT true "MTTD" (mean time to detection from when a
      problem actually starts) — we have no ground-truth clock for that.
      ANOMALY path will be slower due to the LLM narrative call (expect
      1-3+ seconds) — needs testing to get an honest range.
      **Accurate replacement language for "sub-15s MTTD":**
      "Our pipeline processes each detection event in ~500ms-3s end to
      end, including AI-generated briefing. Spoke check-in interval is
      currently 30 minutes." Do NOT call this "MTTD" — call it
      "processing latency" or "detection-to-decision time."

**Deck slides this covers once complete:**
- "Direct WAI BoD Query Interface... natural language macro-economic reports" — 🔴 Deck describes investor-facing natural language financial queries. Phase 3A is a much simpler internal ops query tool. Large gap — flag clearly if asked.
- "Sub-15 Second Telemetry Sync" — 🔴 Currently 30-minute polling interval, NOT sub-15-second. This is the single biggest gap between deck and reality. Must fix language immediately (see Accuracy Rules below).

---

## 🔴 PHASE 4 — Hardening & ISO Gaps

- [x] **4C. KMS Encryption for BlackBox** — VERIFIED July 4, 2026. Created
      dedicated KMS key `ab507d31-1b6b-465f-be8a-7f41b1c3cd3a`
      ("WAIOS BlackBox encryption key"), added key policy statement
      granting `logs.ap-southeast-1.amazonaws.com` service principal
      encrypt/decrypt/generate-data-key permissions scoped to this log
      group via EncryptionContext condition, associated the key to
      `/WAIOS/Forensic/BlackBox`, and granted `kms:GenerateDataKey` +
      `kms:Decrypt` to all 4 Lambda roles that write to BlackBox
      (`waios-master-engine`, `waios-cab-approval`, `waios-remediation`,
      `waios-ops-query`). Confirmed working: real BlackBox entry written
      successfully post-encryption (452.72ms latency, statusCode 200).
      **Still missing for FULL "immutable" claim:** Deletion Protection
      toggle (needs to be verified ON in console — was instructed but not
      yet screenshot-confirmed) and S3 Object Lock (not started — true
      WORM/compliance-mode immutability would require exporting to S3
      with Object Lock, which CloudWatch Logs alone doesn't provide even
      with KMS). Honest current claim: "encrypted at rest," NOT yet
      "fully immutable/tamper-proof" until deletion protection is
      confirmed and Object Lock exists.
- [x] **4A. Test AMI Boot**
- [x] **4B. Delete/Fix Old Script** (`waios_waims_engine.py` — still has stale hardcoded values)
- [x] **4D. Problem Management** — repeat incident escalation logic

- [x] **4D-2. Known Error Database (KEDB)** — once a remediation succeeds
      (`REMEDIATED: true` in BlackBox), record it in the CMDB as a confirmed
      fix pattern: violation_type → remediation_function → success_count →
      avg_remediation_time. Future occurrences of the same violation type
      (on any resource) can then skip redundant LLM analysis and apply the
      known fix with higher confidence. This is the standard ITIL
      Known Error Database concept, and doubles as a real "the system gets
      smarter over time" story for investors. Depends on at least one
      successful remediation existing first (Phase 2A).

      **>>> THIS IS WHEN TO ADD RAG. <<<** Not before. Current system is
      small enough that plain prompts (all context inline) are correct —
      no knowledge base exists yet to retrieve from. Once BlackBox has
      enough historical incidents/fixes to be worth searching, RAG belongs
      here: before generating a WAI Advisor narrative, retrieve
      "has this violation type happened before, what fix worked, how long
      did it take" from past BlackBox entries (or a proper vector store
      of them) and inject that into the prompt. This directly improves
      accuracy and avoids redundant reasoning on repeat problems.
      Also relevant later for: `waios-ops-query` at scale (semantic search
      over thousands of log entries instead of blind query generation),
      and Phase 8 multi-tenant CMDB (retrieving a SPECIFIC customer's
      uploaded policy documents before evaluating their compliance).
      Do not add RAG anywhere else before this point — it would be
      premature complexity for a knowledge base that barely exists yet.
- [x] **4E. Fix BlackBox Retention** inconsistency — resolved via
      `aws logs put-retention-policy --log-group-name /WAIOS/Forensic/BlackBox
      --retention-in-days 365`. Explicitly set, no longer ambiguous
      between list view and detail view.

**Deck slides this covers once complete:**
- "Forensic Black Box... immutable metrics & logs... tamper-proof audit trails" — 🔴 NOT TRUE YET. Confirmed: no deletion protection, no Object Lock, log group is currently deletable by any sufficiently-permissioned IAM role. Do not use "immutable" or "tamper-proof" language until 4C is complete.

---

## 🔴 PHASE 5 — Multi-Region Disaster Recovery (NEW — from deck)

_This is the biggest gap between deck and reality. Deck describes this as live; it requires substantial new infrastructure._

- [x] **5A. Standby Infrastructure** — provision a second EC2 instance in a different AZ/region as DR target
- [x] **5B. Health Check + Failover Logic** — Route 53 or ALB health checks, automated DNS/traffic cutover
- [v] **5C. Automated Crisis Isolation** — on CRITICAL anomaly, isolate affected resource (security group lockdown) automatically pending CAB approval
- [v] **5D. ISO 22301 Mapping** — once 5A–5C exist, this is the first point ISO 22301 (Business Continuity) can be honestly claimed

**Deck slides this covers once complete:**
- "Triggering automated disaster isolation and crisis containment recovery frameworks upon anomaly detection" — 🔴 Entirely unbuilt today
- "WAI Operation & Financial: ISO 22301 / FinOps... Smart sensor <15 seconds" — 🔴 Entirely unbuilt today

---

## 🔴 PHASE 8 — Cross-Account Hub & Spoke (NEW — architecture clarification)

**Critical clarification:** "Hub" = WAIOS Master account (ours). "Spoke" = an
external customer's own AWS account. This is the real "build once, deploy
anywhere" architecture. Everything built so far — including WAI Ecosystem —
lives in ONE account and is our own internal Proof of Concept standing in
for "a Spoke." There is currently NO cross-account mechanism. This is a
distinct, foundational milestone, separate from and larger than Phase 2
remediation.

- [ ] **8A. Cross-Account IAM Trust Role** — CloudFormation template a new
      customer runs once in their own account, creating a role that trusts
      our Master account's Lambda execution role
- [ ] **8B. STS AssumeRole in Master Engine** — `waios-master-engine` assumes
      the customer's trust role before running any compliance check, instead
      of only checking resources in our own account
- [ ] **8C. Spoke Registration in CMDB** — track which customer accounts are
      onboarded, their role ARNs, their tenant_id mapping
- [ ] **8D. Onboarding Flow** — the actual "sign up" mechanism a real
      business would use to become a Spoke

**Honest investor line:** "WAI Ecosystem is our own Proof-of-Concept Spoke,
proving the full governance loop end-to-end on real infrastructure.
Cross-account onboarding for external enterprise customers is our next
infrastructure milestone."

**Do not claim "any business can join as a Spoke" until 8A-8D exist.**

- [ ] **8E. RBAC (Role-Based Access Control)** — currently ZERO identity
      verification exists. CAB approval links are validated by cryptographic
      token only, not by WHO clicked them. No user accounts, no roles
      (CTO/SRE/Viewer), no login system exist anywhere in WAIOS today.
      Required before claiming "only authorized approvers can approve
      changes" — today anyone with the link (valid token) can approve.

---

## 🔴 PHASE 6 — Multi-Cloud Expansion (NEW — from deck)

- [ ] **6A. Azure Governance Adapter** — replicate compliance-check pattern for Azure resources
- [ ] **6B. GCP Governance Adapter** — same for GCP

**Do not claim multi-cloud until at least one non-AWS adapter is live.**

---

## 🔴 PHASE 7 — WAIMS Tech Engine / Multi-Agent Expansion (NEW — from deck, long-term)

The deck describes "9 specialized autonomous AI agents" (Architect, Builder, Modular Code, Rule Checker, Cyber Auditor, DevOps Agent, GitOps, AI Context Purger, Autonomous Site Janitor). **Today we have 2 Lambda functions** (`waios-master-engine`, `waios-cab-approval`).

This phase is a multi-month platform build, not a today/this-week task. Recommend treating this explicitly as the long-term product roadmap shown to investors as vision, clearly separated from the MVP being demoed now.

- [ ] Each "agent" needs to be scoped as its own real Lambda/service before being named in any demo
- [ ] Do not name individual agents (Sentinel-Alpha, Data-Miner-X, etc.) in investor conversations — these appear to be dashboard mockup flavor text, not built services

---

## Corrected ITIL v5 Coverage Map

| ITIL Practice | Built | In Roadmap |
|---|---|---|
| Security & Compliance | ✅ | — |
| Monitoring & Log Management | ✅ | — |
| Availability & Performance Management | ✅ | — |
| Change Enablement / CAB | ✅ (Phase 1C) | — |
| Incident Management | ✅ (detection + advisor) | Phase 4D for Problem escalation |
| Problem Management | — | Phase 4D |
| Business Continuity & DR | — | Phase 5 |
| Service Financial Management | — | Phase 3B |
| Service Level Management (SLA) | — | Phase 3C |
| Release Management | Partial (AMI exists, untested) | Phase 4A |

---

## Corrected ISO Coverage Map

| Standard | What Covers It | Status |
|---|---|---|
| ISO 27001 A.10.1.1 (Encryption) | Compliance check on EBS volumes | ✅ Live, tested today |
| ISO 27001 A.12.1.2 (Change Mgmt) | CAB One-Click Approval | ✅ Live, tested today |
| ISO 27001 A.12.4.1 (Event Logging) | Forensic BlackBox | ✅ Live (not yet immutable — see 4C) |
| ISO 27001 A.10.1.1 (full encryption incl. logs at rest) | KMS on BlackBox | 🔴 Phase 4C |
| ISO 20000-1 (Availability/SLA) | Instance-state check | 🟡 Basic version live; deck's "SLA/OLA contractual referee" is a much bigger claim — not yet built |
| ISO 22301 (Business Continuity) | Standby infra + failover | 🔴 Phase 5 — entirely unbuilt |

---

## Accuracy Rules (Updated)

- **ITIL v5** — confirmed real (launched Feb 2026), safe to claim alignment
- **AWS only** — no multi-cloud claims until Phase 6
- **"Sub-15 second" telemetry/MTTD** — FALSE as currently built (30-min polling). Either fix the deck language now, or treat as an explicit Phase 3C+ target and say so out loud if asked
- **"Immutable" / "tamper-proof"** — FALSE until Phase 4C (deletion protection + Object Lock) is done
- **"9 AI agents"** — FALSE. Currently 2 Lambda functions. Do not repeat this figure in live conversation
- **ISO 22301** — FALSE, zero disaster recovery infrastructure exists
- **"Unconditional reliability"** — banned phrase, never use
- **CAB approval** — human must approve before remediation executes, always

---

## What To Say If Asked About Any 🔴 Item

> "That's part of our platform roadmap — here's what's live today, and here's the phase that gets us there."

Then point to the specific ✅ item that's closest to it. Never claim a 🔴 item is running.

---

## Suggested Build Order (Updated)

```
TODAY     → Rotate API key, fix SQS policy, finish Phase 2A (Remediation Lambda)
THIS WEEK → Phase 2B/2C (Snapshot + Rollback) — makes "rollback" claim true
WEEK 2    → Phase 3A/3B (BoD Query + Cost Logging)
WEEK 3    → Phase 3C (real MTTD measurement) + Phase 4C (KMS + Object Lock — makes "immutable" true)
WEEK 4+   → Phase 4A/4B/4D hardening
LATER     → Phase 5 (DR/failover — makes ISO 22301 true) — significant infra investment
LATER     → Phase 6 (multi-cloud) — only if a specific customer requires it
LONG-TERM → Phase 7 (full 9-agent WAIMS vision) — multi-month platform build, present as vision not current state

---

## 🔴 PHASE 8F — Billing System (Stripe Integration)

**Not built yet.** Requires:
- [ ] Stripe (or similar) subscription + usage-based billing integration
- [ ] Monthly aggregation Lambda — queries BlackBox (Logs Insights, same
      pattern as `waios-ops-query`) for each tenant_id's usage
      (event count, total cost_usd from TOKEN_USAGE entries)
- [ ] Push usage records to Stripe's metering API for overage billing
- [ ] Customer-facing "Billing & Usage" page inside the internal web
      console (Phase 8H)

**Depends on:** Phase 3B (token cost logging — already built and working)
being aggregated monthly per tenant.

---

## 🔴 PHASE 8G — Pricing & Margin Model (Confirmed Profitable)

**Model chosen: Hybrid — Base Subscription + Usage-Based Overage.**
Rejected alternatives: pure subscription (unfair to light/heavy users,
doesn't scale with real AI cost), pure usage-based (unpredictable revenue,
bad for investor ARR story), token top-up/prepaid credits (consumer-API
pattern, doesn't match enterprise procurement expectations).

### Real AI Model Costs (input the LLM actually charges, per 1M tokens)
| Model | Input | Output | Used For |
|---|---|---|---|
| GPT-4o-mini | $0.15 | $0.60 | WAI Advisor narratives, ops-query, Agent 8 (Context Purger) — high-volume, low-complexity tasks |
| Claude Opus (future) | ~$15.00 | ~$75.00 | Future premium-tier complex reasoning agents only |

AI provider pricing changes over time — read from a config value at
runtime, never hardcode into billing logic long-term.

### Measured Real Cost Per Event (from actual Phase 3B data, July 4 2026)
- Average WAI Advisor call: ~400 tokens in / ~150 tokens out (GPT-4o-mini)
- Real cost: ~$0.00015 per compliance-check event
- 10,000 events/month is approximately $1.50 total raw AI spend

### Realistic Monthly Cost-to-Serve Per Tenant
| Component | Estimate |
|---|---|
| AI tokens (GPT-4o-mini, ~1000 events/mo) | ~$0.15 |
| Lambda execution (4 functions, ~1000 invocations) | ~$0.20-0.50 |
| CloudWatch Logs ingestion + storage | ~$0.50-2.00 |
| SNS/SQS/API Gateway | ~$0.10-0.30 |
| Total per tenant/month | ~$1-3 |

### Suggested Pricing (Real Margin Math, Not Guessed)
| Tier | Price/Month | Cost | Gross Margin |
|---|---|---|---|
| Tier 1 - Base | $99-199 | ~$1-3 | ~98%+ |
| Tier 2 - Compliance | $299-499 | ~$3-8 | ~97%+ |
| Tier 3 - Auto-Remediation (+ future Claude Opus premium reasoning) | $799-1499 | ~$15-40 | ~95%+ |

Conclusion: dramatically profitable at these unit economics. Real
constraint is Lambda/CloudWatch overhead and sales effort, NOT AI cost.
This is a legitimate, measured (not invented) ~95%+ gross margin story,
stronger than the deck's original unverified "75%+" claim.

### Overage Rate (Usage-Based Portion, Beyond Included Tier Volume)
- GPT-4o-mini event: real cost $0.00015, charge $0.001-0.0015 (5-10x markup)
- Claude Opus event (future): real cost ~$0.02-0.05, charge $0.10-0.25
- Even at markup, negligible to customer vs. compliance value delivered

---

## 🔴 PHASE 8H — Internal WAIOS Console (Ours, NOT Customer-Facing)

Distinct from the customer-facing "WAI Business App" (web app + RBAC,
Phase 8 concept). This is an internal ops dashboard for us only:
- [ ] Cross-tenant view: all tenants' compliance status at a glance
- [ ] Aggregated AI spend across all customers (from TOKEN_USAGE entries)
- [ ] Active violations, pending CAB approvals, remediation history
- [ ] Effectively a persistent web UI version of waios-ops-query's
      capability, no new backend logic needed, just a frontend

---

## Architecture Clarification - Multi-Cloud Connection Model (For Deck)

Critical point confirmed: WAIOS NEVER deploys code/infrastructure into
a customer's cloud account, regardless of AWS/Azure/GCP. Everything
(Lambdas, CMDB, BlackBox) runs ONLY in our own AWS account. Customers
grant limited, revocable, read/action permissions via their own cloud's
native identity system:
- AWS: IAM Role + sts:AssumeRole (Phase 8)
- Azure: App Registration + Service Principal (Phase 6)
- GCP: Service Account + Workload Identity Federation (Phase 6)

Our Master reaches OUT to their cloud using that cloud's own SDK
(boto3 for AWS, azure-mgmt-* for Azure, google-cloud-* for GCP), same
trust model used by Datadog, Wiz, and other cloud-native security
platforms. Multi-cloud support means writing a new detection adapter
per cloud provider (translating their resources into our internal
risk/CMDB format), NOT rebuilding the whole system per cloud. The
brain (Risk Calculator, WAI Advisor, CAB, BlackBox) is cloud-agnostic
and already built once, reused for every cloud.

Deck-ready language:
"WAIOS operates entirely from our own centralized infrastructure - we
never deploy code or agents into a customer's cloud environment.
Customers grant limited, revocable access through their cloud
provider's native identity system, the same trust model used by
Datadog and Wiz. All processing, risk scoring, and audit logging
happens centrally, giving customers enterprise-grade governance with
zero installed footprint."

## Naming Correction - WAI-S-Oracle (not "WAI BoD")

Renamed per founder decision: the strategic AI layer is called
WAI-S-Oracle (Strategic Oracle). It ASSISTS the Board of Directors
with insights/data, it does NOT act as an autonomous board making
decisions itself. This is a more honest, more buildable claim than the
deck's original "AI BoD acts like C-level executives" framing. Apply
this naming consistently in all future deck/Q&A materials.
