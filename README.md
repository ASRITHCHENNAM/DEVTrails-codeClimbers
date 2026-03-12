

# AI-Powered Parametric Insurance Platform for Gig Economy Workers

## Guidewire DEVTrails 2026 Project

An AI-powered parametric insurance platform that protects gig economy delivery partners from **income loss caused by external disruptions** such as extreme weather, pollution, curfews, and other environmental or social conditions.

The system uses **AI monitoring agents, parametric triggers, automated claims, and instant payouts** to ensure gig workers receive compensation when they cannot work due to uncontrollable external factors.

---

# Table of Contents

* Project Overview
* Problem Statement
* Solution Overview
* Target Users
* Key Features
* Parametric Insurance Model
* System Architecture
* AI Agent Framework
* Workflow
* Technology Stack
* Database Design
* API Architecture
* Fraud Detection System
* Installation Guide
* Development Setup
* Production Deployment
* Developer Guide
* AI/GenAI Integration
* Future Enhancements
* License

---

# Project Overview

Gig economy delivery workers depend on **daily deliveries for income**. However, external disruptions such as:

* Extreme heat
* Heavy rain
* Flooding
* Air pollution
* Curfews
* Platform outages
* Strikes or local restrictions

can stop them from working.

Currently, gig workers **lose 20–30% of their monthly income** due to these disruptions with **no protection mechanism**.

This project builds an **AI-powered parametric insurance platform** where:

* Workers subscribe to **weekly insurance policies**
* AI agents monitor external conditions
* Parametric triggers detect disruption events
* Claims are automatically validated
* Workers receive **instant compensation**

---

# Problem Statement

Gig workers lack financial protection when external disruptions prevent them from working.

Existing insurance solutions focus on:

* Health
* Vehicle damage
* Life insurance

But they do **not cover income loss due to environmental or social disruptions**.

Our solution introduces **automated parametric insurance** designed specifically for gig workers.

---

# Target Users

Primary users include delivery partners working for:

* Zomato
* Swiggy
* Amazon
* Flipkart
* Zepto
* Blinkit
* Dunzo

These workers typically operate on **daily or weekly income cycles** and are vulnerable to disruptions.

---

# Key Features

## 1 Worker Onboarding

Simple registration system where workers provide:

* Name
* Phone number
* Delivery platform
* Work city
* Work zone

The system generates a **risk profile** for each worker.

---

## 2 Weekly Insurance Model

Workers subscribe to **weekly insurance plans**.

| Plan     | Weekly Premium | Coverage        |
| -------- | -------------- | --------------- |
| Basic    | ₹5             | ₹300 protection |
| Standard | ₹8             | ₹500 protection |
| Premium  | ₹12            | ₹800 protection |

---

## 3 AI Risk Assessment

AI models evaluate:

* Weather history
* Environmental risk
* City disruption patterns
* Worker location

The model determines **dynamic premium pricing**.

---

## 4 Parametric Trigger System

Claims are triggered automatically when predefined parameters are crossed.

| Disruption      | Trigger                     |
| --------------- | --------------------------- |
| Extreme heat    | Temperature > 48°C          |
| Extreme cold    | Temperature < 10°C          |
| Heavy rain      | Rainfall threshold exceeded |
| Flooding        | Water level alert           |
| Pollution       | AQI > 400                   |
| Curfew          | Verified via news           |
| Platform outage | API downtime                |

---

## 5 AI Monitoring Agents

The platform deploys multiple AI agents that continuously monitor external signals.

### Weather Agent

Tracks:

* Temperature
* Rainfall
* Storm alerts
* Flood warnings

### Environmental Agent

Tracks:

* Air Quality Index
* Pollution alerts
* Hazard warnings

### News Intelligence Agent

Uses NLP to detect:

* Curfews
* Strikes
* Zone closures
* Emergency restrictions

### Platform Monitoring Agent

Detects:

* Delivery platform outages
* Order assignment failures

---

## 6 Automated Claims

When a trigger event occurs:

1. System verifies worker location
2. Validates disruption event
3. Confirms active policy
4. Automatically generates claim

No manual claim filing required.

---

## 7 Instant Payout Simulation

Once a claim is approved:

* Payment is processed using mock payment gateways

Supported integrations:

* Razorpay Test Mode
* Stripe Sandbox
* UPI simulation

---

## 8 Fraud Detection

AI models detect suspicious activities such as:

* GPS spoofing
* Duplicate claims
* False event reporting
* Location mismatch

---

# System Architecture

```
Frontend (React)
      |
Node.js Backend (Express)
      |
MongoDB Database
      |
Python AI Services
      |
AI Monitoring Agents
      |
External APIs (Weather / News / Pollution)
      |
Parametric Claim Engine
      |
Payment Gateway Simulation
```

---

# Technology Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

## Backend

* Node.js
* Express.js
* JWT Authentication

## Database

* MongoDB
* Mongoose ORM

## AI & GenAI

* Python
* FastAPI
* LangChain
* OpenAI / LLM APIs
* NLP for news classification
* Scikit-Learn for risk models

## APIs

* Weather API
* News API
* Pollution API
* Mock traffic APIs

## Payments

* Razorpay Sandbox
* Stripe Test Mode

---

# Database Design

## Users Collection

```
userId
name
phone
platform
city
zone
riskScore
activePolicy
```

## Policies Collection

```
policyId
userId
planType
weeklyPremium
coverageAmount
startDate
endDate
status
```

## Claims Collection

```
claimId
userId
eventType
triggerSource
claimAmount
status
timestamp
```

---

# Workflow

## Step 1 Worker Registration

User registers and creates an account.

AI engine performs **risk profiling**.

---

## Step 2 Policy Creation

Worker selects weekly coverage.

The system calculates premium dynamically.

Policy becomes active.

---

## Step 3 Continuous Monitoring

AI agents monitor disruption signals from:

* Weather APIs
* News feeds
* Environmental APIs

---

## Step 4 Parametric Trigger Detection

If parameters exceed defined limits, the system triggers a disruption event.

Example:

```
Temperature > 48°C
AQI > 400
Rainfall > flood threshold
```

---

## Step 5 Claim Validation

The system verifies:

* Worker location
* Active insurance policy
* Event authenticity

---

## Step 6 Instant Payout

Claim amount is transferred to worker.

Example:

```
Lost Work Duration: 5 hours
Compensation: ₹350
```

---

# AI / GenAI Integration

The platform uses **Generative AI and machine learning** for:

### Risk Assessment Model

Predicts disruption probability.

### NLP News Analysis

Identifies disruption-related news events.

### Fraud Detection Model

Detects abnormal claim behavior.

### Predictive Analytics

Predicts next week’s disruption risk.

---

# Installation Guide

## Clone Repository

```
git clone https://github.com/your-repo/parametric-insurance.git
cd parametric-insurance
```

---

# Backend Setup

```
cd backend
npm install
npm run dev
```

---

# Frontend Setup

```
cd frontend
npm install
npm start
```

---

# Python AI Service Setup

```
cd ai-services
pip install -r requirements.txt
uvicorn main:app --reload
```

---

# Environment Variables

Create `.env` file

```
MONGO_URI=
JWT_SECRET=
WEATHER_API_KEY=
NEWS_API_KEY=
OPENAI_API_KEY=
RAZORPAY_KEY=
```

---

# Production Deployment

### Frontend

* Vercel
* Netlify

### Backend

* AWS EC2
* Render
* Railway

### AI Services

* Docker container
* FastAPI server

### Database

* MongoDB Atlas

---

# Developer Guide

## Project Structure

```
project-root
|
frontend
|
backend
|
ai-services
|
docs
|
README.md
```

---

# Coding Standards

* Use ESLint for JavaScript
* Use PEP8 for Python
* Follow REST API conventions

---

# Testing

Run backend tests

```
npm test
```

Run AI tests

```
pytest
```

---

# Future Enhancements

* Hyperlocal weather prediction
* Blockchain-based claim transparency
* Integration with delivery platforms
* AI-based disruption forecasting
* Mobile application

---

# Impact

This platform can protect **millions of gig workers** by providing:

* Income security
* Automated insurance claims
* Fair compensation
* Fast payouts

---

# License

MIT License

---

# Contributors

DEVTrails 2026 Team

AI Parametric Insurance Platform

