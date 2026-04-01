# System Specification (SSOT): CFO Bot

## 1. Project Overview
[cite_start]The CFO Bot is a specialized calculator agent designed to estimate monthly cloud infrastructure costs[cite: 4]. [cite_start]It provides users with transparency regarding potential expenditures based on usage assumptions[cite: 4].

## 2. Supported Cloud Components
[cite_start]The bot must support calculations for the following services[cite: 10]:
* [cite_start]**Compute**: Virtual Machine instances billed by the hour[cite: 10].
* [cite_start]**Storage**: Persistent disk space billed per GB/Month[cite: 10].
* [cite_start]**Bandwidth**: Outbound data transfer (Egress) billed per GB[cite: 10].
* [cite_start]**Database**: Fixed monthly tiers (Basic, Standard, Premium)[cite: 10].

## 3. Mathematical Cost Model
[cite_start]The bot will apply the following logic to guarantee accuracy[cite: 11]:
$$Total Monthly Cost = C_{compute} + C_{storage} + C_{bandwidth} + C_{database}$$

* **Compute Cost**: $Hours \times Unit Price$
* **Storage Cost**: $GB \times Unit Price$
* **Bandwidth Cost**: $GB \times Unit Price$
* **Database**: Static Tier Price

## 4. Architectural Constraints
* [cite_start]**Platform**: Web application deployed via Google Firebase[cite: 16].
* [cite_start]**Methodology**: Spec-Driven Development using Antigravity.
* [cite_start]**UI/UX**: Chat-based interface for user inputs and a summary dashboard for cost breakdowns[cite: 12].