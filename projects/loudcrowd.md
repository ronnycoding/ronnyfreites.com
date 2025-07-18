# Project Name: LoudCrowd App

## AI Context rules
always use and include all of the rules in ai_context/rules:
- @ai_context/rules/use-pearl-kb.mdc - this rule reminds you where the docs are and how to use them
- @ai_context/rules/generate-tasks.mdc - this rule describes the prd analysis and task breakdown process
- @ai_context/rules/process-tasks-list.mdc - thie rule describes how to iterate and work on the tasks.

## Project Overview

LoudCrowd is a sophisticated influencer marketing and ambassador platform running on AWS serverless architecture. The codebase is a monorepo containing multiple Python backend services and frontend applications.

**Technology Stack:**
- Backend: Python Flask (serverless on AWS Lambda)
- Brand app: React/TypeScript with Apollo GraphQL
- Ecomm sdk: Lit web components
- Creators app: Lit web components
- Database: PostgreSQL on AWS RDS with Alembic migrations
- Infrastructure: AWS CDK + Serverless Framework
- Package Management: `uv` (Python), `pnpm` (Node.js)

## Best Practices
- Never create un-used variables
- Never leave commented-out code
- Do not use `print` statements in python; use `logging` instead. `print` is fine for debugging and as long as it gets removed before committing changes
- Never use `as any` in typescript
- Always use `pnpm` for Node.js package management
- Always use `uv` for Python package management
- Always import at the top of the file
- Always use vitest for ecomm-sdk testing. do not use jest


## Essential Commands

### Backend Development
```bash
# Install Python dependencies and setup environment
uv sync

# Start local backend server (port 5001)
pnpm start

# Start store API server (port 5002)
pnpm start:store-api

# Run backend tests
pnpm test
# Or with pytest directly:
uv run pytest
# Run specific test file:
uv run pytest tests/test_specific_file.py

# Run single test:
uv run pytest tests/test_file.py::test_function_name

# Run without concurrency (useful for breakpoints in testing)
uv run pytest -n0

# Database migrations
uv run alembic revision --autogenerate -m "description"
uv run alembic upgrade head
uv run alembic downgrade -1
```

### Frontend Development
```bash
# Install all workspace dependencies
pnpm --filter=lc-app install

# Main client app (apps/client/) - use pnpm workspaces instead of cd
pnpm --filter=lc-app start          # Development server
pnpm --filter=lc-app build          # Production build
pnpm --filter=lc-app test           # Run tests
pnpm --filter=lc-app lint           # Lint and fix
pnpm --filter=lc-app gen:types      # Generate GraphQL types

# Other frontend apps follow similar patterns
pnpm --filter=creators-app start
pnpm --filter=members-app start
pnpm --filter=@loudcrowd/ecomm-sdk build
pnpm --filter=ecomm-embed dev
```
## Architecture Overview

### Backend Structure
- **`jobs.py`**: Main job handler for running scheduled tasks
- **`config(.*).json`**: Configuration files for different environments (local, dev, prod)
- **`serverless.yml`**: Serverless deployment configuration
- **`package.json`**: Used in project root for serverless deployment, playright, and lint-staged
- **`automations/`**: Automation handlers for triggering actions based on events like social tags, ecomm purchases, attributions, and account decomissioning
- **`challenges`**: Methods and handlers for managing content approval for challenges and challenge state management
- **`direct-messaging.`**: Mehtods for sending direct messages to to users on social platforms
- **`e2e-heartbeat/`**: Playright tests for end-to-end functionality
- **`ecomm/`**: E-commerce DTOs, SQS consumers, run_job handlers, and methods used inside and outside of graphql
- **`infra/`**: AWS infrastructure as code using AWS CDK
- **`migrations/`**: Alembic migration scripts for database schema changes
- **`ml`**: Fashion image retrieval scripts to generate class labels and image embeddings for similar products matching
- **`notifications/`**: Notification handlers for emails sent to brand app users
- **`ops/`**: Operational scripts for database provisioning and other one-off tasks
- **`rewards/`**: Methods to handle reward fulfillment (challenges, program tiers, manual fulfillments, etc)
- **`runtime/`**: Interfaces for database transactions, AWS services, and Flask app factory
- **`store_api/`**: Storefront API endpoints for loudcrowd headless implementations
- **`tests/`**: Unit tests and integration tests for backend functionality
- **`loudcrowd/api/`**: REST endpoints for authentication, registration, and integrations
- **`loudcrowd/graphql/`**: Complete GraphQL API with mutations, queries, and type definitions
- **`loudcrowd/models/`**: SQLAlchemy database models organized by domain
- **`loudcrowd/services/`**: Business logic layer with clean separation of concerns
- **`loudcrowd/webhooks/`**: External webhook handlers (Shopify, Stripe, Facebook, etc.)
- **`loudcrowd/lib/`**: Third-party service integrations (20+ services including Auth0, Instagram, TikTok)
- **`loucrowd/cli/`**: Administrative command-line tools
- **`loudcrowd/jobs/`**: Lots of legacy job handlers for social data enrichment

### Frontend Applications (`/apps/`)
- **`client/`**: Main React admin dashboard (Material-UI, Apollo GraphQL)
- **`creators/`**: Ambassador-facing app (Lit web components)
- **`members-app/`**: Member registration and management
- **`ecomm-embed/`**: Embed app for storefronts and other ecomm components
- **`launch/`**: Signup/launch modals

### Key Entry Points
- **`app.py`**: Main Lambda handler for Flask application
- **`webapp.py`**: Flask app factory and blueprint registration
- **`store_api_handler.py`**: Separate API handler for storefront functionality
- **`runtime/flask.py`**: Base Flask configuration with AWS integrations

### Database & Jobs
- **PostgreSQL**: Primary database with comprehensive schema
- **Alembic**: Database migration management
- **SQS/SNS**: Event-driven job processing architecture
- **Redis**: Caching layer via ElastiCache

## Development Patterns

### Configuration Management
- Environment configs in `config.<env>.json` files
- Secrets stored in AWS Parameter Store
- Local development uses `config.json` (auto-created from `config.local.json.example`)

### Testing Strategy
- **Backend**: pytest with comprehensive factory patterns (`tests/loudcrowd_factory/`)
- **Frontend**: Jest with React Testing Library
- **E2E**: Playwright tests in `e2e-heartbeat/`

### Code Organization
- Domain-driven structure with clear separation of concerns
- GraphQL schema mirrors database models
- Service layer encapsulates business logic
- Job handlers and SQS consumers for async processing

### Key Integrations
- **Social Platforms**: Instagram, TikTok APIs for content monitoring
- **E-commerce**: Shopify, Salesforce Commerce Cloud for order/product sync
- **Payment**: Stripe for transactions, Tremendous for payouts
- **Marketing**: Klaviyo, Braze, Mailchimp for customer communication
- **Analytics**: Multiple customer data platforms

## Local Development Setup

1. **Prerequisites**: `uv`, `nodejs`, `pnpm`, `postgres`, `docker`, `python`
2. **Database**: Use `docker-compose up` for local Postgres
3. **Backend**: `uv sync && pnpm start`
4. **Frontend**: `pnpm --filter=lc-app start`
5. **Configuration**: Copy `config.local.json.example` to `config.json`

## Important Notes

### Development Workflow
- Always generate introspection by starting backend local server first
- Always run type generation (`pnpm gen:types`) before working on brand app and after any GraphQL schema changes

### Testing Principles
- **Test actual production methods**: Tests should always invoke the real production code methods being tested, never copy or replicate the implementation logic within the test itself. This prevents tests and implementation from drifting apart over time.

### Database & Deployment
- Database migrations require careful review before applying to production
- The platform handles multi-tenant architecture with account-based isolation
