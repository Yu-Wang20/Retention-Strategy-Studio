# Lifecycle Engine — Customer Lifecycle Segmentation & Retention Strategy Platform

A production-like, interview-ready SaaS demo for customer lifecycle analytics and retention decisioning:
**RFM segmentation → churn prediction → strategy simulation → A/B test design → explainability → documented metric definitions**.

**Live Demo:** (replace with your link)
- https://lifecycleengine-83zeab8g.manus.space

---

## Why this project

In real growth/CRM teams, “cool dashboards” are not enough. Projects usually fail on:
1) **Metric ambiguity** (GMV/AOV/Churn calculated differently across teams)
2) **No action loop** (insights exist, but no exportable target list / no activation path)
3) **Black-box models** (no clear explanation for “why this user is high risk” or “why this offer”)

**Lifecycle Engine** solves these by pairing analytics with a **Credibility Layer**:
- **Metrics Dictionary** (auditable definitions, windows, filters, dedup keys)
- **Data Lineage** (source → features → models → UI)
- **Mock vs Real disclosure** (what is computed from Olist vs simulated demo data)

---

## Key Features

### 1) Dashboard
- KPI cards: **GMV / Active Customers / Churn Rate / AOV**
- Revenue trend & segment distribution
- **Export Report** for presentation-ready output

### 2) Data Management & Data Health
- Upload datasets (CSV/Excel) and manage imports
- Database & schema validation (Required vs Optional datasets)
- **Data Health checks**: missingness, duplicates, simple outlier detection, training window visibility

### 3) RFM Analysis
- RFM segmentation visualization (scatter)
- Segment breakdown with business descriptions
- **Export Segments** (operational list)
- “View Strategy” entry point for segment-level playbooks

### 4) Churn Prediction
- Model performance: **AUC / Precision / Recall**
- **Calibration curve**
- Explainability:
  - Global feature importance (SHAP)
  - **Per-customer explanation drawer** (top drivers for one user)
- High-risk customer list with action CTA + retrain entry

### 5) Strategy Engine
- **Promotion Simulator**: budget/discount configuration → ROI / incremental revenue / retained users
- **Marginal ROI curve** to visualize diminishing returns
- **A/B Test Designer**: sample size calculator + active experiment dashboard
- **Export Target List**: user-level recommended offer + expected uplift fields
- **Webhook Simulator**: payload preview + success/fail logs (activation loop demo)

### 6) Documentation (Credibility Layer)
- **Metrics Dictionary**: exact definitions, filters, time windows, dedup keys
- **Data Lineage**: which tables feed which metrics/models/components
- **Mock vs Real**: clearly labels simulated demo artifacts vs real aggregation from Olist

---

## Data

Default mainline uses **Olist Brazilian E-Commerce** transactional tables:
- `customers`, `orders`, `order_items`, `payments`, `reviews`, `products`, `sellers` (and optional related tables)

Optional datasets are supported without breaking core pages.

> Note: B2B marketing funnel datasets (e.g., closed deals / MQL) belong to a different domain than consumer lifecycle.
> If included, they should remain an **optional, separate module** and must NOT override the core lifecycle metrics.

---

## Tech Stack (adjust to match your repo)
- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: FastAPI / Node API (depending on implementation)
- Database: PostgreSQL / SQLite
- Modeling: Python (scikit-learn), SHAP
- Deployment: Docker + cloud hosting

---

## Getting Started

### 1) Run locally (Docker)
```bash
git clone <your-repo-url>
cd lifecycle-engine
cp .env.example .env
docker compose up --build
