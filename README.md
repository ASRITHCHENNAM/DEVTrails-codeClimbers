# AI-Powered Parametric Insurance Platform  
## Guidewire DEVTrails 2026 Hackathon

---

## Overview

This project presents an AI-powered parametric micro-insurance platform designed to protect gig economy delivery workers from income loss caused by external disruptions such as extreme weather, pollution, curfews, and platform outages.

Unlike traditional insurance systems, this platform uses real-time data monitoring and predefined parametric triggers to automatically detect disruptions and initiate payouts without requiring manual claims.

---

## Problem Statement

Gig workers from platforms like Zomato, Swiggy, Amazon, and others rely on daily working hours for income. External disruptions such as heavy rainfall, extreme temperatures, high pollution, and curfews reduce their ability to work, leading to significant income loss.

Existing insurance systems:
- Do not cover income loss
- Require manual claim filing
- Have slow processing times
- Are not designed for gig workers

This creates a need for a real-time automated insurance solution that protects income rather than assets.

---

## Our Solution

We developed a fully automated AI-based parametric insurance platform that:
- Detects real-world disruptions using external data sources
- Validates worker eligibility and activity
- Estimates income loss dynamically
- Triggers automatic claim processing
- Provides instant payouts

This removes the need for paperwork and ensures faster financial support.

---

## Target Users

The platform is designed for delivery partners working with:
- Zomato
- Swiggy
- Amazon
- Flipkart
- Blinkit
- Zepto
- Dunzo

---

## End-to-End Workflow

### Step 1: Worker Onboarding
Users register with:
- Name
- Phone number
- Delivery platform
- City and delivery zone

The system generates a risk score and trust score for each user.

---

### Step 2: Weekly Policy Subscription

| Plan     | Weekly Premium | Coverage |
|----------|----------------|----------|
| Basic    | ₹5             | ₹300     |
| Standard | ₹8             | ₹500     |
| Premium  | ₹12            | ₹800     |

Policies:
- Activate after payment
- Renew weekly
- Expire if payment is not completed

---

### Step 3: Continuous Monitoring

AI agents monitor:
- Weather conditions
- Air pollution levels
- News events (curfews, strikes)
- Traffic conditions
- Delivery platform availability

---

### Step 4: Parametric Trigger Detection

Claims are triggered when predefined conditions are met:

| Event            | Trigger Condition |
|------------------|------------------|
| Heatwave         | Temperature > 48°C |
| Extreme Cold     | Temperature < 10°C |
| Pollution        | AQI > 400 |
| Heavy Rain       | Threshold exceeded |
| Flood            | Official alerts |
| Curfew           | Verified announcements |
| Platform Failure | API downtime |

---

### Step 5: Claim Validation

The system validates:
- Worker location
- Active policy status
- Event authenticity
- Impact on work availability

---

### Step 6: Instant Payout

Compensation is calculated based on:
- Lost working hours
- Selected plan
- Coverage limits

Payments are processed through:
- UPI simulation
- Razorpay sandbox
- Stripe test environment

---

## AI Intelligence Layer

### Risk Prediction Model
Predicts disruption probability based on historical and real-time data.

### Income Loss Estimator
Calculates expected loss using:
- Worker activity history
- Average earnings
- Duration of disruption

### Fraud Detection Model
Detects:
- GPS spoofing
- Duplicate claims
- Abnormal behavior patterns
- Location inconsistencies

---

## Adversarial Defense and Anti-Spoofing Strategy

### Problem

A major vulnerability in parametric systems is GPS spoofing, where users manipulate their location to falsely claim compensation.

---

### Multi-Layer Fraud Detection Approach

#### 1. Device-Level Detection
- Detect mock location using Android APIs:
  location.isFromMockProvider()
- Check developer options status
- Identify suspicious mock location applications

---

#### 2. Multi-Sensor Validation
The system cross-verifies location using:
- GPS vs network location comparison
- Speed and movement consistency
- Accelerometer data
- Route continuity

Example:
If location shows movement but device sensors indicate no motion, the claim is flagged.

---

#### 3. Behavioral Analysis using AI
The system analyzes:
- Historical working patterns
- Daily active hours
- Sudden unusual claim behavior

Example:
A user inactive for long periods suddenly appearing in a high-risk zone will be flagged.

---

#### 4. Crowd-Based Verification
- Nearby workers validate disruption events
- Multiple confirmations increase trust in the event

---

#### 5. External Data Validation
Claims are cross-checked with:
- Weather APIs
- Pollution data
- Traffic conditions
- Verified news sources

If no corresponding disruption is detected, the claim is rejected.

---

### Fraud Risk Scoring

Each claim is assigned a risk score:

| Risk Level | Action |
|------------|--------|
| Low        | Automatically approved |
| Medium     | Additional validation required |
| High       | Rejected |

---

### User Experience Balance

To ensure fairness:
- Genuine users are not immediately penalized
- Flagged claims undergo secondary verification
- Users receive explanations for decisions

---

## Technology Stack

Frontend:
- React.js
- Tailwind CSS

Backend:
- Node.js
- Express.js

Database:
- MongoDB

AI Layer:
- Python
- FastAPI
- Scikit-learn
- OpenAI APIs

Integrations:
- Weather APIs
- News APIs
- Pollution APIs
- Payment gateways (sandbox)

---

## System Architecture

Frontend (React)  
Backend (Node.js / Express)  
Database (MongoDB)  
AI Services (FastAPI)  
External APIs  
Parametric Engine  
Payment System  

---

## Future Enhancements

- Advanced hyperlocal weather prediction models
- Blockchain-based claim transparency
- Integration with delivery platforms
- Mobile application
- Real-time analytics dashboard

---

## Impact

This platform provides:
- Financial stability for gig workers
- Instant and automated payouts
- Reduced fraud through AI validation
- Scalable micro-insurance infrastructure

---

## Conclusion

This solution introduces a new insurance paradigm focused on income protection for gig workers. By combining parametric triggers with AI-driven validation and fraud detection, the platform ensures fast, fair, and transparent insurance delivery.

---
For more detailed policy you can check in https://github.com/ASRITHCHENNAM/DEVTrails-codeClimbers/blob/master/POLICY.md
