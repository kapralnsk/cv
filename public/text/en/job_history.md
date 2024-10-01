## Work experience

### hoodies: Clarity Value
#### Backend developer (September 2021 - September 2024)
Development of backend for ERP system oriented at US municipal agencies. The project stack consisted of: Python 3.9, pytest, Django 3.2 + DRF, PostgreSQL 11, Celery, Redis 5, Google Cloud Platform, Github Actions. At the start of my work, the project was a Django app with ~50% unit-test coverage, 2 environments (staging & prod) of 1 Google App Engine instance each, a high percentage of incidents, noticeable tech-debt and weak team development processes (i.e. pre-commit hooks, ability to deploy a feature branch, enforcing responsibility areas for code-review). In my 3 years of work on the project, besides working on business features and customer support, unit-test coverage went up to 90%, system had 3 environments (staging, sales demo & prod) deployed in Google Kubernetes Engine with an ability to scale and create feature-branch environments, percentage of incidents declined noticeably due to reduction in tech-debt and strengthening of team development processes (team peaked at 7 engineers where it was previously 2 at most), project was ready for SOC2 certification.
##### Responsibilities
* Development of the platform's backend;
* New team members onboarding;
* Cross code-review with other team members;
* Reduction of tech-debt;
* Direct communication with the business side through setting and execution of tasks;
* Second line of customer support;
* Post-incident investigations.
##### Accomplishments
* Open Records Request functionality: allows government agencies to process requests under FOIA. Implementation includes: accepting state duty payments through Stripe or Shopify; document versioning and the ability to redact them; allowing temporary access to a document package for a requester with subsequent deletion after set TTL (30 days);
* Request review functionality: allows government agencies to give feedback on the request (requesting changes in the data intake, approving or denying the request);
* Electronic request signature functionality (in the form of a signature image with a timestamp and IP address attached), including the ability to 3rd-party sign through an invite by the requester;;
* Preparations for SOC2 certification;
* File handling migration from Google Cloud Storage library to boto3 - allowed to move file handling to S3 protocol;
* Automatic generation of periodical (weekly, quarterly, and yearly) aggregated reports on requests status (number of open, new, and closed requests in a timeframe);
* Integration with SSO providers for auth in the app (using a Microsoft account at first);
* Built infrastructure for stress testing: creation of test environment, test implementation via locust.io platform, conducted testing up until a report could be formed for the business side with results and recommendations;
* Reduction of tech-debt in Developer Experience area: implemented checks in pre-commit hooks, fixed and improved CI based on Github Actions. Helped DevOps in app migration to k8s and in the implementation of Feature-branch deployment

### 360bound: gather.gg project
#### Backend developer (December 2020 - June 2021)
Backend development for cybersports tournaments platform. Project stack consisted of: Python 3.9, pytest, Django 4.2 + DRF; PostgreSQL 11, Celery, Redis 5.
##### Responsibilities
* Development of platform's backend;
* New team members onboarding;
* Cross code-review with other team members;
* Post-incident investigations.
##### Accomplishments
* New tournmanet participation system, which allowed for: temporary teams (needed only for the duration of a tournament), invitations to a team for a tournament, and tournament joining requests system.
* Refactoring of bracket tournaments mechanisms (Single/Double elimination): implementation of manual seeding algorithm;
* Migration from Github + CircleCI to Gitlab + GitlabCI: helped DevOps team to debug and resolve a number of issues with building and deployment.

### Freelance projects (October 2020):
* Initial infrastructure services deployment for an outsorcing software developer. Included LDAP, source code repository, task tracker, and a VPN server as an entry point to mentioned services.

### Digital Ecosystems (Цифровые экосистемы): Backend development department
#### Software Development Team Lead (February 2017 - June 2020):
##### Responsibilities
* Architecture & development of mobile app backends, and web-dashboards for backends;
* Management of fullstack development team;
* DevOps tasks:
  * Gitlab CI configuration (project pipelines, gitlab-runner on servers);
  * Third-party services deployment for internal usage (i. e. Sentry, devpi, verdaccio, Tabix);
  * Deployment of Python, Node.JS and PHP 7 services;
* Administrative tasks: department’s task management, growth planning, performance review, job interviews.
##### Accomplishments
* As a senior developer, took part in designing, development and integration of CDN system for ad banners and app configurations (CDN service and management service). System was successfully shipped, continuously evolved through 2-year period, and still in use to this day;
* Managed development of React-based web client for in-house corporate messenger;
* As a senior developer, designed and managed development of mobile game store backend. Store succesfully passed test launch, and integration with two client apps (Android and Windows);
* As a Devops specialist, took part in designing, external communications, deployment and compiling technical documentation of 3 Bitrix-based websites. Project was succesfully shiped and handed over to a customer - Russian insurance company;
* Managed and took a small part in development of GraphQL-based backend for a diet adjustment app. App was successfully launched on both major markets;
* Integrated Docker & Docker Swarm into deployment process of all corporate backend services;
* Afterwards, migrated most of backend services from isolated virtual machines to a corporate Kubernetes cluster.
### Academ Media: System development department
#### Software Development Team Lead (November 2015 - February 2017):
##### Responsibilities
* Architecture & development of backends for mobile apps and web-dashboards for backends on Python3.5/aiohttp and Node.js/ExpressJS/React stacks;
* Frontend and backend teams management (2-7 people): task distribution, internal QA, communications with other departments;
* DevOps tasks: Gitlab CI integration, service environment configuration on Debian 8+ & CentOS 7 (configuration of nginx, DBMS, service deployment; deployment automation via Ansible).
##### Accomplishments
* As a developer, took part in development of payment gateway aggregator for corporate use. System was succesfully launched and integrated into applications;
* As a senior developer, took part in designing, developemnt and launch of mobile Push-notification system. It remained in use for over 1.5 years, until eventual migration to OneSignal service;
* Integrated CD practices into development process through use of Gitlab CI;
* Integrated Gitlab Flow and wide usage of testing environments into development process.  
### Academ Media: System development department
#### Python developer (April 2015 - November 2015):
* Corporate system maintenance on Python2.7/Django/MySQL stack;
* Corporate system and mobile app backend development on Python3.5/Tornado/PostgreSQL & MongoDB stack. 
