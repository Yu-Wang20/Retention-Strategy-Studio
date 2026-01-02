# Lifecycle Strategy Engine

A production-grade SaaS demo for **customer lifecycle analytics** and **retention strategy design**.  
This platform walks through the full lifecycle loop:

**Data ingestion → RFM segmentation → churn prediction → strategy simulation → A/B test design → explainability → metric documentation**

## Live Demo
A live demo is available here: https://lifecycleengine-83zeab8g.manus.space

---

## Why This Exists

Modern growth / CRM teams often struggle with:

- **Metric ambiguity**: “GMV”, “AOV”, and “churn” are defined differently across teams and dashboards.
- **Insight-to-action gaps**: analytics live in BI, while activation lives elsewhere (CRM tools, experiments, campaigns).
- **Black-box modeling**: churn models are hard to trust if stakeholders can’t explain risk drivers.
- **Low reproducibility**: strategies and experiments are proposed without consistent assumptions and documented definitions.

**Lifecycle Strategy Engine** turns raw customer purchase data into **auditable metrics**, **actionable segments**, **explainable churn risk**, and **quantified strategy plans**.

---

## What You Can Do in the App

### 1) Dashboard (Business Overview)
A high-level view of lifecycle health and business performance:
- Core KPIs: **GMV**, **active customers**, **churn rate**, **average order value**
- Time-series trends with key events
- Segment distribution snapshot to understand who drives revenue and risk

**Use it for:** fast “what changed?” monitoring and executive-level reporting.

---

### 2) Data Management (Ingestion + Quality + Schema Mapping)
Upload datasets and standardize them into the platform’s schema:
- CSV upload with dataset readiness / health scoring
- Automated checks (e.g., duplicates, missing values, date format issues)
- Field mapping (map CSV columns → system fields)

**Use it for:** making the rest of the analysis credible and repeatable.

---

### 3) RFM Analysis (Segmentation + Playbooks)
Segment customers by **Recency**, **Frequency**, and **Monetary value**:
- Visual segmentation map
- Segment cards with size / revenue contribution
- Export segment lists for downstream targeting
- “View Strategy” entry points for segment-level action ideas (e.g., Champions vs. At Risk)

**Use it for:** building a targeting plan that’s interpretable and operational.

---

### 4) Churn Prediction (Model + Explainability)
Predict churn risk and make it explainable:
- Model performance: **AUC / precision / recall**, plus calibration
- Global feature importance with **SHAP**
- High-risk customer table with risk factors, last purchase, and drill-down entry

**Use it for:** prioritizing outreach and defending model results to non-technical stakeholders.

---

### 5) Strategy Engine (Simulation + A/B Test Design)
Turn insights into quantified retention plans:
- Promotion simulation with controllable parameters (segment, discount type, budget)
- Output metrics such as projected ROI, incremental revenue, retained users
- Marginal ROI curve (diminishing returns) to help pick a rational spend level
- A/B test design workflow (sample sizing / experiment planning)

**Use it for:** choosing strategies that are measurable and testable before rollout.

---

### 6) Insights & Trends (Recommendation + Sentiment + Market Signals)
A lightweight “insight layer” to surface what to do next:
- Recommendation-style cards (fit/match scoring)
- Sentiment trend charts and driver breakdown (what’s improving vs. degrading)

**Use it for:** turning qualitative feedback into structured decision inputs.

---

### 7) Documentation (Credibility Layer)
Built-in documentation so metrics and workflows are explainable:
- Product documentation center
- Feature overview and reference views
- Designed to make outputs **auditable** and **presentation-ready**

**Use it for:** avoiding “trust me” analytics and enabling reproducible evaluation.

---

## Problems This Project Solves

- **Standardized Metrics:** provides consistent definitions and measurement windows.
- **Action Loop:** connects segmentation → targeting → strategy simulation → experiment design.
- **Transparent Modeling:** SHAP-based drivers improve trust and debuggability.
- **Operational Readiness:** exports and structured workflows make the system usable beyond a demo dashboard.

---

## Where It Can Be Improved (Roadmap Ideas)

### Product & Workflow
- Add **CRM activation integrations** (e.g., webhook to Braze/Salesforce/HubSpot) + delivery logs
- Add **segment history** and cohort comparisons (segment drift, win-back effectiveness)
- Add “**playbook outcomes**”: track whether recommended actions improved retention

### Data & Governance
- Add a full **metrics dictionary** page with lineage (source tables → transforms → KPI)
- Add **unit tests** for metric definitions + data contracts
- Add incremental ingestion and **backfill** controls for large datasets

### Modeling & Experimentation
- Add time-aware churn features and survival analysis (hazard / time-to-churn)
- Add uplift modeling for “who to target” (not just who will churn)
- Add sequential testing / CUPED / guardrails for experiment quality

### Reliability & Engineering
- Add role-based access control (RBAC) and audit logs
- Add observability: model monitoring, data freshness monitoring, alerting
- Add caching and async jobs for heavier modeling pipelines

---

## Repository Structure (Typical)
This repo is organized as a monorepo (common pattern):
- `client/` – front-end UI
- `server/` – API / backend services
- `shared/` – shared types/utilities (if applicable)

> Note: exact commands depend on your implementation. Use the package manager and scripts defined in `package.json` and/or `server/` docs.

---

Example：

Dashboard Overview — A KPI cockpit that summarizes revenue, customer activity, churn, and segment mix to spot performance shifts at a glance.
<img width="1564" height="873" alt="Screenshot 2026-01-02 at 09 59 50" src="https://github.com/user-attachments/assets/5fc98bf4-e3df-4dec-82db-f3952a2d0134" />


Data Management — Uploads lifecycle datasets, runs basic data-quality checks, and maps raw columns to a consistent analytics schema.
<img width="1566" height="878" alt="Screenshot 2026-01-02 at 10 00 03" src="https://github.com/user-attachments/assets/5af8df1b-25a0-4643-a62b-4571576cebe3" />


RFM Analysis — Segments customers by Recency/Frequency/Monetary value and produces exportable target lists with segment-level playbooks.
<img width="1521" height="875" alt="Screenshot 2026-01-02 at 10 00 13" src="https://github.com/user-attachments/assets/c0a2b550-3608-456d-99d9-0061e66ff0b1" />


Churn Prediction — Scores churn risk, shows model performance, and explains key drivers (e.g., via SHAP) to support intervention decisions.
<img width="1524" height="875" alt="Screenshot 2026-01-02 at 10 00 29" src="https://github.com/user-attachments/assets/0fe864ac-6768-4248-a4bf-bba4e2300d2f" />


Strategy Engine — Simulates retention/promotion tactics and supports A/B test planning with a sample-size calculator and experiment monitoring.
<img width="1562" height="875" alt="Screenshot 2026-01-02 at 10 00 38" src="https://github.com/user-attachments/assets/68aaee38-58fb-497d-869a-7f55206adef8" />


Insights & Trends — Surfaces recommendation, sentiment, and trend signals to explain “why” performance changes and what to do next.
<img width="1564" height="875" alt="Screenshot 2026-01-02 at 10 00 55" src="https://github.com/user-attachments/assets/8a81e8f9-0c1f-4e52-9268-c1bd6b30be9d" />


Project Documentation — Centralizes the PRD-style overview, architecture notes, feature specs, and data schema so metrics and logic are auditable.
<img width="1521" height="875" alt="Screenshot 2026-01-02 at 10 01 09" src="https://github.com/user-attachments/assets/e3da7aaf-fead-4971-9e36-fb13aea5d5ed" />



## License
Choose a license appropriate for your portfolio goals (MIT is common for demos).  
If you haven’t added one yet, create `LICENSE` and reference it here.
