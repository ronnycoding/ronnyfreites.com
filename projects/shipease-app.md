# Project Name: ShipEase App

## Business Overview

ShipEase is a comprehensive shipping and fulfillment management platform that integrates with e-commerce platforms (primarily Shopify) to provide automated order processing, fulfillment management, and customer notifications. The platform enables stores to optimize shipping costs by finding the nearest distribution centers and providing real-time shipping rate calculations.

## Project Architecture

### Project url
- https://shipeasesoftware.com

ShipEase is built as a monorepo using TurboRepo with a microservices architecture:

### **apps/shopify-app** - Core Shopify Integration
**Purpose**: Main Shopify app providing shipping rate calculations and store integration.

**Key Features**:
- **Dynamic Shipping Rates**: Real-time rate calculation using Google Maps API for distance optimization
- **Carrier Service Integration**: Acts as custom carrier service for Shopify stores
- **Checkout Extensions**: Custom UI components for pickup point selection and QR code display
- **Webhook Processing**: Handles orders, fulfillments, locations, and checkout webhooks
- **Multi-center Distribution**: Automatically finds nearest fulfillment centers for optimal shipping

**Tech Stack**: Remix, Shopify App Bridge, Shopify GraphQL API, Google Maps API
**Deployment**: Vercel with Shopify CLI

### **apps/admin-app** - Administrative Dashboard
**Purpose**: Admin interface for managing shipping operations and analytics.

**Key Features**:
- **Order Management**: Comprehensive tracking with filtering and data tables
- **Analytics Dashboard**: Revenue, customer, and sales metrics with charts
- **User Authentication**: Clerk-based authentication with role management
- **Real-time Updates**: Live order status updates and notifications
- **Responsive UI**: Built with Radix UI components and Tailwind CSS

**Tech Stack**: Remix, Clerk Auth, Radix UI, Recharts, Tailwind CSS
**Deployment**: Vercel

### **apps/hasura** - GraphQL Data Layer
**Purpose**: Unified GraphQL API with real-time subscriptions and permissions.

**Key Features**:
- **47+ Database Tables**: Comprehensive schema for orders, fulfillments, users, stores
- **Real-time Subscriptions**: WebSocket-based live data updates
- **Role-based Permissions**: Multi-level access control (store admin, franchise, etc.)
- **Event Triggers**: Database-level automation for workflows
- **Migration Management**: Version-controlled schema evolution

**Tech Stack**: Hasura GraphQL Engine, PostgreSQL
**Deployment**: Docker container

### **apps/service-notification** - Notification Service (Go)
**Purpose**: Microservice handling email and push notifications.

**Key Features**:
- **Multi-channel Delivery**: SendGrid email + Firebase push notifications
- **22+ Email Templates**: HTML templates for all order lifecycle events
- **Internationalization**: Spanish language support with proper formatting
- **Customer & Store Notifications**: Comprehensive coverage for all stakeholders
- **Template Types**: Order updates, API invites, store connection status

**Tech Stack**: Go, SendGrid API, Firebase Admin SDK, Hasura GraphQL client
**Deployment**: Fly.io

### **apps/qr-code** - QR Code Generation (Go)
**Purpose**: QR code generation and cloud storage service.

**Key Features**:
- **Branded QR Codes**: Custom QR codes with ShipEase logo overlay
- **Cloud Storage**: Tigris (S3-compatible) storage integration
- **Database Integration**: Direct PostgreSQL updates for order QR URLs
- **Secure Encoding**: Base64 entity ID encoding for tracking
- **Deduplication**: Prevents duplicate QR generation

**Tech Stack**: Go, Tigris Cloud Storage, PostgreSQL
**Deployment**: Fly.io

### **packages/database** - Shared Data Layer
**Purpose**: Prisma schema and database client for all applications.

**Key Components**:
- **Multi-platform Support**: Shopify, BigCommerce, WooCommerce, Magento, Custom
- **Complex Relationships**: 47+ tables with sophisticated foreign key relationships
- **Status Management**: Comprehensive enums for order/fulfillment states
- **Geographic Data**: Location coordinates for distance-based routing
- **Audit Trails**: Complete order lifecycle tracking

### **packages/config-*** - Shared Configurations
- **config-typescript**: Shared TypeScript configurations for all apps
- **config-eslint**: Unified ESLint rules and presets

## Development Commands

### Main Commands
```bash
# Install dependencies
pnpm install

# Development (all apps)
turbo dev

# Development (specific app)
turbo dev --filter=shopify-app
turbo dev --filter=admin-app

# Build all
turbo build

# Lint all
turbo lint

# Type check all
turbo typecheck

# Test all
turbo test
```

### Database Commands
```bash
# Generate Prisma client
turbo db:generate
# or specifically:
pnpm turbo --filter @shipease/database build

# Push schema to database
turbo db:push
# or specifically:
pnpm turbo --filter @shipease/database release

# Seed Hasura database
pnpm turbo --filter hasura hasura:seed
```

### Docker Environment
```bash
# Start local services (PostgreSQL + Hasura)
docker compose up

# Restart services
pnpm run docker:restart
```

### Shopify App Specific
```bash
# Deploy Shopify app
cd apps/shopify-app && shopify app deploy

# Link Shopify app config
cd apps/shopify-app && shopify app config link
```

## Key Technologies

- **Frontend**: Remix (React framework), Shopify Polaris UI, Tailwind CSS
- **Backend**: Node.js with Remix, Go microservices
- **Database**: PostgreSQL with Prisma ORM
- **GraphQL**: Hasura GraphQL Engine with real-time subscriptions
- **Authentication**: Clerk (admin-app), Shopify OAuth (shopify-app)
- **Infrastructure**: Docker, Vercel deployment
- **Notifications**: SendGrid (email), Firebase (push notifications)

## Core Business Logic

### Order Processing Workflow
```
Checkout → Order → FulfillmentOrder → Fulfillment → FulfillmentEvent → Delivery
```

1. **Checkout Capture**: Customer cart data captured with location and preference details
2. **Order Creation**: Complete order with line items, customer addresses, and QR code generation
3. **Fulfillment Routing**: System assigns optimal fulfillment center based on distance and availability
4. **Fulfillment Execution**: Physical fulfillment with tracking info and carrier integration
5. **Status Tracking**: Real-time status updates through comprehensive event system
6. **Notifications**: Automated email/push notifications to customers and store owners

### Key Business Workflows

**Store Integration**:
- Automatic carrier service setup for rate calculation
- Fulfillment service configuration with callback URLs
- Product catalog synchronization with variants and pricing
- Webhook management for real-time order updates

**Geographic Optimization**:
- Google Maps API integration for distance calculations
- Center proximity analysis for optimal routing
- Real-time shipping rate calculation based on origin/destination
- Support for multiple fulfillment centers per order

**Multi-Platform Support**:
- Platform-agnostic data models (Shopify, BigCommerce, WooCommerce, etc.)
- Platform-specific webhooks and API integrations
- Unified order management across different e-commerce platforms

**Event-Driven Architecture**:
- Comprehensive order state management (CONFIRMED → IN_TRANSIT → DELIVERED)
- Background job processing for webhook handling and sync operations
- Real-time GraphQL subscriptions for live updates
- Notification orchestration for all stakeholders

## Database Schema Architecture

### Core Entity Relationships
The database supports complex e-commerce fulfillment workflows through 47+ interconnected tables:

**Store-Centric Design**:
- **Store**: Multi-platform store configurations with owner relationships
- **UserStoreRole**: Role-based access control (ADMIN/MEMBER)
- **Franchise**: Regional distribution network management
- **Center**: Geographic fulfillment locations with coordinates

**Order Management**:
- **Order**: Complete order data with financial calculations and QR tracking
- **LineItem**: Product-specific order details with variants and quantities
- **FulfillmentOrder**: Individual fulfillment requests with location assignment
- **Fulfillment**: Actual shipment execution with tracking information
- **FulfillmentEvent**: Granular status tracking throughout delivery lifecycle

**Customer & Product Data**:
- **Customer**: End customer information linked to platform users
- **Product/ProductVariant**: Catalog management with SKU-level details
- **Location**: Multi-purpose address management (billing, shipping, pickup, warehouse)

**Status Management**:
- **Order States**: OPEN → IN_PROGRESS → FULFILLED → DELIVERED
- **Fulfillment States**: SUBMITTED → ACCEPTED → IN_TRANSIT → DELIVERED
- **Event Types**: LABEL_PURCHASED → PICKED_UP → OUT_FOR_DELIVERY → DELIVERED

**Geographic & Logistics**:
- Center coordinates for distance-based routing
- Postal code and province indexing for rate calculations
- Delivery method management (LOCAL, PICKUP, SHIPPING)
- Shipping rate storage and calculation

## System Integration Points

### External API Integrations
- **Shopify GraphQL/REST APIs**: Store, order, product, and fulfillment management
- **Google Maps API**: Geocoding and distance calculations for shipping optimization
- **SendGrid API**: Transactional email delivery for notifications
- **Firebase Admin SDK**: Push notifications for mobile apps
- **Tigris Cloud Storage**: QR code file storage and delivery

### Inter-Service Communication
- **Database**: Shared PostgreSQL database across all services
- **Hasura GraphQL**: Unified API layer with real-time subscriptions
- **Background Jobs**: Queue-based processing for webhooks and async operations
- **Event System**: Real-time status updates through GraphQL subscriptions

## Environment Setup

### Required Environment Variables
**Database & Core Services**:
- `POSTGRES_PRISMA_URL`: PostgreSQL connection string (with pooling)
- `POSTGRES_URL_NON_POOLING`: Direct PostgreSQL connection
- `HASURA_GRAPHQL_ADMIN_SECRET`: Hasura admin access
- `PG_DATABASE_URL`: Database URL for Hasura

**Shopify Integration**:
- `SHOPIFY_API_KEY`: Shopify app public key
- `SHOPIFY_API_SECRET`: Shopify app secret key
- `SHOPIFY_APP_URL`: Public URL for Shopify webhooks
- `SCOPES`: Shopify API permission scopes

**Authentication & External Services**:
- `CLERK_PUBLISHABLE_KEY/SECRET_KEY`: Clerk authentication (admin-app)
- `SENDGRID_API_KEY`: Email service for notifications
- `TRIGGERS_TOKEN/SECRET`: Webhook validation tokens

**Development Setup**:
```bash
# 1. Start local database and Hasura
docker compose up

# 2. Install dependencies
pnpm install

# 3. Generate database client
pnpm turbo --filter @shipease/database build

# 4. Seed development data
pnpm turbo --filter hasura hasura:seed
```

Access Points:
- **Hasura Console**: `http://localhost:8080` (admin secret: 'secret')
- **Local Database**: `postgresql://postgres:postgres@localhost:5435/neondb`

## Testing

Run tests using:
```bash
turbo test
```

For single test files, check individual app package.json for specific test commands.

## Deployment Architecture

### Production Deployments
- **Shopify App**: Vercel deployment with Shopify CLI integration
- **Admin App**: Vercel with Clerk authentication
- **Hasura**: Docker container with Neon PostgreSQL database
- **Notification Service**: Fly.io with Go runtime
- **QR Code Service**: Fly.io with Tigris storage integration

### Database Management
- **Migrations**: Managed through Prisma with environment-specific configs
- **Schema Generation**: `prisma generate` for client updates
- **Seeding**: Hasura-specific seed files for development data

### Key Configuration Files
- `fly.toml`: Fly.io deployment configurations for Go services
- `shopify.app.toml`: Shopify app configuration and scopes
- `docker-compose.yml`: Local development environment setup
- `turbo.json`: Monorepo build pipeline and caching

### Monitoring and Observability
- Hasura provides GraphQL query analytics and performance metrics
- Background job processing with retry mechanisms and error handling
- Comprehensive logging across all services for troubleshooting
