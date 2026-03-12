

# AI-Powered Parametric Insurance Platform for Gig Economy Workers

## Guidewire DEVTrails 2026 Hackathon Project

An **AI-powered parametric micro-insurance platform** designed to protect gig economy delivery workers from **income loss caused by environmental, social, and platform disruptions**.

The system uses **AI monitoring agents, predictive risk intelligence, automated claims, and instant payouts** to compensate workers when external conditions prevent them from working.

---

# Table of Contents

* Project Overview
* Problem Statement
* Our Innovation
* Why This Solution Matters
* Target Users
* Key Features
* Parametric Insurance Model
* AI Intelligence Layer
* System Architecture
* AI Agent Framework
* Workflow
* Technology Stack
* Database Design
* API Architecture
* Fraud Detection System
* Installation Guide
* Development Setup
* Deployment
* Future Enhancements
* Impact

---

# Project Overview

Gig economy delivery workers rely on **daily work hours to earn income**.

However, external disruptions frequently prevent them from working:

* Extreme heat
* Heavy rainfall
* Flooding
* High air pollution
* Curfews
* Delivery platform outages
* Traffic restrictions

These disruptions can reduce worker income by **20–30% every month**.

Despite this risk, **there is no insurance product designed specifically to protect gig worker income.**

Our platform introduces an **AI-driven parametric insurance system** that automatically compensates workers when disruption events occur.

---

# Problem Statement

Gig workers have **no financial protection against income loss caused by external disruptions**.

Traditional insurance solutions:

* Cover vehicle damage
* Cover health incidents
* Cover accidents

But **do not cover lost income caused by environmental conditions or operational disruptions.**

Additionally:

* Claim processes are slow
* Manual verification delays payouts
* Fraud risks are high
* Policies are not tailored to gig workers

We need a **real-time automated insurance system** that can:

* Detect disruption events
* Validate worker eligibility
* Trigger claims automatically
* Deliver instant compensation

---

# Our Innovation

Our platform introduces a **fully automated AI-powered parametric insurance ecosystem**.

Key innovations include:

### Hyperlocal AI Risk Prediction

Predicts disruption risk before it occurs using weather, pollution, and historical city data.

### AI Monitoring Agents

Autonomous AI agents continuously monitor disruption signals.

### Digital Twin Risk Model

Each worker has a **dynamic digital profile** representing risk exposure.

### Dynamic Micro-Policies

Insurance policies adjust weekly based on AI risk forecasts.

### Automated Claims

Claims are triggered automatically using parametric triggers.

### Crowd-Verified Events

Workers nearby help validate disruption events to reduce false claims.

### Explainable AI

The platform explains **why a payout occurred**, increasing trust.

---

# Why This Solution Matters

This platform enables **inclusive financial protection** for gig workers.

Benefits:

* Protects daily income
* Eliminates claim paperwork
* Provides instant payouts
* Reduces fraud
* Creates new micro-insurance products

---

# Target Users

Primary users include gig workers from:

* Zomato
* Swiggy
* Amazon
* Flipkart
* Blinkit
* Zepto
* Dunzo

These workers typically rely on **daily delivery earnings**.

---

# Key Features

## Worker Onboarding

Workers register with:

* Name
* Phone number
* Delivery platform
* Work city
* Delivery zone

The system generates a **risk profile** for the worker.

---

# Weekly Micro-Insurance Plans

| Plan     | Weekly Premium | Coverage |
| -------- | -------------- | -------- |
| Basic    | ₹5             | ₹300     |
| Standard | ₹8             | ₹500     |
| Premium  | ₹12            | ₹800     |

Policies automatically renew weekly.

---

# AI Risk Intelligence Engine

AI models analyze:

* Weather history
* Pollution levels
* Traffic patterns
* City disruption events
* Worker activity patterns

The system calculates a **dynamic risk score**.

Example:

```
Worker Location: Hyderabad
Rain Risk: High
Weekly Premium: ₹6
Coverage: ₹350
```

---

# Parametric Insurance Model

Claims are triggered when **predefined conditions are exceeded**.

| Event           | Trigger              |
| --------------- | -------------------- |
| Heatwave        | Temperature > 48°C   |
| Extreme cold    | Temperature < 10°C   |
| Heavy rain      | Rainfall > threshold |
| Flooding        | Water level alerts   |
| Pollution       | AQI > 400            |
| Curfew          | Verified via news    |
| Platform outage | Delivery API failure |

This removes the need for manual claim submission.

---

# AI Intelligence Layer

The system includes multiple AI models.

### Disruption Prediction Model

Predicts probability of disruption events in the next 24 hours.

### Income Loss Estimator

Estimates expected income loss based on:

* Worker delivery history
* Average hourly earnings
* Disruption duration

### Fraud Detection Model

Detects suspicious patterns such as:

* GPS spoofing
* Fake location reporting
* Repeated claims
* Unusual activity patterns

### News Intelligence Model

Uses NLP to detect disruption-related news such as:

* Curfews
* City lockdowns
* Road closures
* Strikes

---

# AI Monitoring Agents

Multiple AI agents monitor external signals.

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

### News Intelligence Agent

Uses NLP to detect disruptions from news feeds.

### Traffic Agent

Monitors road closures and congestion.

### Platform Monitoring Agent

Detects outages of delivery platforms.

---

# System Architecture

```
Frontend (React)
      |
Node.js Backend (Express)
      |
MongoDB Database
      |
Python AI Services (FastAPI)
      |
AI Monitoring Agents
      |
External Data APIs
      |
Parametric Claim Engine
      |
Payment Gateway Simulation
```

---

# Workflow

## Step 1 Worker Registration

Worker registers and creates account.

AI generates **risk profile**.

---

## Step 2 Policy Subscription

Worker selects a weekly insurance plan.

AI calculates premium dynamically.

Policy becomes active.

---

## Step 3 Continuous Monitoring

AI agents monitor disruption signals from:

* Weather APIs
* Pollution APIs
* News feeds
* Traffic data

---

## Step 4 Disruption Detection

When conditions exceed thresholds, the system identifies a **parametric event**.

Example:

```
AQI > 400
Temperature > 48°C
Heavy rainfall detected
```

---

## Step 5 Claim Validation

The platform verifies:

* Worker location
* Active policy
* Disruption authenticity

---

## Step 6 Instant Payout

Compensation is automatically transferred.

Example:

```
Lost Work Duration: 5 hours
Compensation: ₹350
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
* Mongoose

## AI Layer

* Python
* FastAPI
* LangChain
* OpenAI / LLM APIs
* Scikit-Learn

## APIs

* Weather APIs
* News APIs
* Pollution APIs
* Traffic APIs

## Payments

* Razorpay Sandbox
* Stripe Test Mode
* UPI Simulation

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
trustScore
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

## Events Collection

```
eventId
eventType
city
triggerSource
severity
timestamp
```

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

# Deployment

### Frontend

* Vercel
* Netlify

### Backend

* Render
* Railway
* AWS EC2

### AI Services

* Docker
* FastAPI

### Database

* MongoDB Atlas

---

# Future Enhancements

* Hyperlocal weather prediction models
* Blockchain-based transparent claims
* Integration with delivery platforms
* Mobile application
* AI disruption forecasting dashboard

---

# Impact

This platform can protect **millions of gig workers worldwide**.

Benefits include:

* Financial stability
* Instant insurance payouts
* Reduced fraud
* Automated claims
* Scalable insurance infrastructure

---

# Hackathon Team

Guidewire DEVTrails 2026

AI Parametric Insurance Platform

---
