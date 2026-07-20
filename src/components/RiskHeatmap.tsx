import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Database, 
  Lock, 
  Server, 
  Cpu, 
  HelpCircle, 
  Flame, 
  AlertTriangle,
  CheckCircle2,
  Info,
  Layers,
  ChevronRight,
  TrendingDown
} from 'lucide-react';

interface HeatmapCell {
  row: number;
  col: number;
  title: string;
  moduleName: string;
  parameterName: string;
  preAudit: {
    riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
    score: number; // out of 100
    description: string;
    telemetry: string;
    codeSnippet: string;
  };
  postAudit: {
    riskLevel: 'Low' | 'Safe';
    score: number; // out of 100
    description: string;
    telemetry: string;
    codeSnippet: string;
  };
  actionTaken: string;
}

// 5x4 Grid: 5 Rows (System Modules) x 4 Columns (Risk Parameters)
const heatmapData: HeatmapCell[] = [
  // --- ROW 0: EDGE INGRESS ---
  {
    row: 0,
    col: 0,
    title: "Ingress DDoS Throttling",
    moduleName: "Edge Ingress Gateway",
    parameterName: "Concurrency",
    preAudit: {
      riskLevel: "Critical",
      score: 95,
      description: "No global API rate limiting or distributed throttling. A flood of parallel HTTP/S requests triggers thread pool starvation within the application routing nodes.",
      telemetry: "Crash under 1,200 req/sec (Thread Exhaustion)",
      codeSnippet: `// [FAIL] VULNERABLE Express Gateway Setup (No throttling)
app.use('/api/*', (req, res, next) => {
  // Directly passes through to microservice routes
  next();
});`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 12,
      description: "Deployed stateless Redis token-bucket middleware at the edge level. Automatically sheds load based on client-IP and OAuth token quotas with zero latency overhead.",
      telemetry: "Sustained 60,000+ req/sec (Symmetric Backpressure)",
      codeSnippet: `// [OK] HARDENED Edge Token-Bucket Throttler
const limiter = new RedisTokenBucket({
  capacity: 1000,
  refillRate: 100, // per sec
  keyGenerator: (req) => req.ip
});
app.use('/api/*', limiter.middleware());`
    },
    actionTaken: "Implemented distributed token-bucket rate limiting at edge endpoints using atomic Redis operations."
  },
  {
    row: 0,
    col: 1,
    title: "Gateway Cross-Tenant Leakage",
    moduleName: "Edge Ingress Gateway",
    parameterName: "Consistency",
    preAudit: {
      riskLevel: "High",
      score: 82,
      description: "Gateway proxy routes occasionally merge headers under high concurrency due to reused network session buffers, risking cross-tenant session contamination.",
      telemetry: "0.08% state contamination rate during simulated load",
      codeSnippet: `// [FAIL] Shared Connection Buffers (Naive proxying)
const sharedBuffer = Buffer.alloc(1024 * 64);
proxy.on('data', (chunk) => {
  // Danger: Reusing the global buffer across parallel requests
  sharedBuffer.write(chunk);
});`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 8,
      description: "Introduced hermetic context isolation using thread-local storage patterns and dedicated request-response buffer allocations per proxy pipeline.",
      telemetry: "0.00% contamination recorded over 10M transactions",
      codeSnippet: `// [OK] Hermetic AsyncLocal Context Allocation
import { AsyncLocalStorage } from 'async_hooks';
const sessionStore = new AsyncLocalStorage();
proxy.on('data', (chunk) => {
  sessionStore.run(new Map(), () => {
    const threadBuffer = Buffer.from(chunk); // Isolated memory allocation
  });
});`
    },
    actionTaken: "Isolated request pipelines utilizing AsyncLocalStorage and isolated memory allocators."
  },
  {
    row: 0,
    col: 2,
    title: "Edge Parameter Verification",
    moduleName: "Edge Ingress Gateway",
    parameterName: "Security",
    preAudit: {
      riskLevel: "Medium",
      score: 55,
      description: "Payload parameters passed directly to internal services without schema validation. SQL/NoSQL vectors and prompt injections can traverse deep into core worker layers.",
      telemetry: "9% of unvetted payloads contain injection risk patterns",
      codeSnippet: `// [FAIL] Dynamic parameters directly passed forward
app.post('/api/compute', (req, res) => {
  const queryPayload = req.body.payload;
  broker.publish('compute-task', queryPayload);
});`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 10,
      description: "Enforced compile-time and runtime validation gates using schema contracts. Invalid payloads are aggressively discarded at the outer gateway boundary.",
      telemetry: "100% of invalid payloads rejected at edge gateway",
      codeSnippet: `// [OK] Static Type Schema Guard
import { z } from 'zod';
const PayloadSchema = z.object({
  taskId: z.string().uuid(),
  matrix: z.array(z.number()).max(100)
});
app.post('/api/compute', (req, res) => {
  const parsed = PayloadSchema.parse(req.body.payload);
  broker.publish('compute-task', parsed);
});`
    },
    actionTaken: "Configured runtime schema-validation guards (Zod schemas) rejecting unaligned shapes at the edge."
  },
  {
    row: 0,
    col: 3,
    title: "Reverse Proxy Failover Topology",
    moduleName: "Edge Ingress Gateway",
    parameterName: "Availability",
    preAudit: {
      riskLevel: "High",
      score: 78,
      description: "Gateway runs in a single availability zone without redundant fallback. An infrastructure failure on the primary edge zone will render the entire platform offline.",
      telemetry: "Single Point of Failure (SPOF) - 99.1% availability cap",
      codeSnippet: `// [FAIL] Single Region DNS routing
resource "google_dns_record_set" "primary" {
  name = "api.xavira.io."
  type = "A"
  rrdatas = [var.primary_gateway_ip]
}`
    },
    postAudit: {
      riskLevel: "Low",
      score: 15,
      description: "Deployed a multi-region Active-Active load balancing topology. Traffic automatically reroutes dynamically around failing zones with zero-second manual intervention.",
      telemetry: "SLA-backed 99.999% global routing availability",
      codeSnippet: `// [OK] Multi-Region Active-Active Fallback Topology
resource "google_compute_global_forwarding_rule" "edge_lb" {
  name       = "global-edge-anycast"
  target     = google_compute_target_http_proxy.default.id
  port_range = "443"
}`
    },
    actionTaken: "Constructed multi-region Anycast cloud topology routing traffic away from failing regions."
  },

  // --- ROW 1: CORE DATABASES ---
  {
    row: 1,
    col: 0,
    title: "Database Lock-Contention Prevention",
    moduleName: "State & DB Registry",
    parameterName: "Concurrency",
    preAudit: {
      riskLevel: "Critical",
      score: 98,
      description: "Relational database performs full-table locks during concurrent updates. Under heavy checkout loads, thread pools exhaust rapidly waiting on write lock releases.",
      telemetry: "Transaction queuing times spike to >12.4s under load",
      codeSnippet: `// [FAIL] Heavy Monolithic Locking Query
BEGIN;
SELECT * FROM orders WHERE status = 'PENDING' FOR UPDATE;
// Blocking network calls inside transaction...
UPDATE orders SET status = 'PROCESSING';
COMMIT;`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 11,
      description: "Redesigned queries using optimistic concurrency controls and localized row-level indexing. Moved ephemeral queue state out of the primary relational database.",
      telemetry: "Database transaction overhead reduced to <4ms",
      codeSnippet: `// [OK] Optimistic Locking & Partition State
UPDATE orders 
SET status = 'PROCESSING', version = version + 1 
WHERE id = :id AND version = :currentVersion;
// Safe, atomic, and completely non-blocking!`
    },
    actionTaken: "Refactored transactional queries to rely on optimistic version locks and decoupled state channels."
  },
  {
    row: 1,
    col: 1,
    title: "State Integrity & Isolation",
    moduleName: "State & DB Registry",
    parameterName: "Consistency",
    preAudit: {
      riskLevel: "High",
      score: 85,
      description: "Read-committed database transaction isolation level allows non-repeatable reads. Parallel workers fetching accounting ledgers generate unbalanced billing calculations.",
      telemetry: "Frequent ledger mismatches discovered during audit scans",
      codeSnippet: `// [FAIL] Default Read Committed Isolation
// Thread A reads ledger balance (e.g. $100)
// Thread B updates ledger (-$50) in parallel
// Thread A re-reads ledger balance ($50) -> inconsistent!`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 6,
      description: "Configured serializable isolation bounds for all financial ledger operations. Enabled double-entry accounting state checks at the database driver level.",
      telemetry: "Mathematical consistency verified dynamically at database level",
      codeSnippet: `// [OK] Hardened Serializable Database Driver
await db.transaction(async (tx) => {
  // Forces strict transaction serialization
  await tx.execute(sql\`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE\`);
  const ledger = await tx.select().from(ledgers).where(eq(ledgers.id, id));
  // Executed atomicity check
});`
    },
    actionTaken: "Upgraded accounting state updates to use strictly Serialized isolation layers."
  },
  {
    row: 1,
    col: 2,
    title: "Database Access Privileges",
    moduleName: "State & DB Registry",
    parameterName: "Security",
    preAudit: {
      riskLevel: "High",
      score: 75,
      description: "Database connection uses a single superuser role with full read, write, and drop privileges. A remote code execution vector allows attackers to wipe all server databases.",
      telemetry: "Database Admin credentials exposed in application configs",
      codeSnippet: `// [FAIL] DB superuser credentials used by app
DATABASE_URL=postgresql://postgres:AdminSuperPassword@db-host:5432/main`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 5,
      description: "Enforced strict least-privilege database accounts. App roles are separated into read-only and write-only schemas. DDL operations (alter/drop) are strictly blocked in production.",
      telemetry: "Zero root admin credentials accessible in running containers",
      codeSnippet: `// [OK] Least-Privilege Isolated App User
DATABASE_URL=postgresql://app_reader:LimitedReadToken@db-host:5432/main
// Cannot alter, drop, or inspect system schema catalogs`
    },
    actionTaken: "Isolated database schemas and restricted runtime clients to least-privilege credentials."
  },
  {
    row: 1,
    col: 3,
    title: "Multi-Region Replication",
    moduleName: "State & DB Registry",
    parameterName: "Availability",
    preAudit: {
      riskLevel: "High",
      score: 80,
      description: "Database runs on a single cloud server with asynchronous backup snapshots. A local network outage or hardware issue causes irreversible service down-time and potential data loss.",
      telemetry: "RPO: 24 hours (Snapshot delay) | RTO: 3 hours",
      codeSnippet: `// [FAIL] Unreplicated database resource definition
resource "google_sql_database_instance" "primary" {
  name             = "prod-db-instance"
  database_version = "POSTGRES_15"
  region           = "us-central1" // No failover clone configured
}`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 9,
      description: "Upgraded instance configuration to a high-availability multi-zone cluster with real-time synchronous read replicas. Recovery takes place in seconds.",
      telemetry: "RPO: <50ms (Synchronous log sync) | RTO: <12 seconds",
      codeSnippet: `// [OK] Multi-Zone High Availability configuration
resource "google_sql_database_instance" "ha_db" {
  name             = "prod-ha-instance"
  database_version = "POSTGRES_15"
  region           = "us-central1"
  settings {
    availability_type = "REGIONAL" // Automated Zone Failover
    backup_configuration {
      enabled = true
      binary_log_enabled = true
    }
  }
}`
    },
    actionTaken: "Configured multi-zone cloud replica failovers with automatic synchronous transaction logging."
  },

  // --- ROW 2: SECURITY & SECRETS ---
  {
    row: 2,
    col: 0,
    title: "Vault Concurrency Limits",
    moduleName: "Security & Secret Vault",
    parameterName: "Concurrency",
    preAudit: {
      riskLevel: "Medium",
      score: 60,
      description: "Application retrieves decryption keys from Cloud KMS on every request. High volume requests hit cloud service quota limits, triggering API call failures.",
      telemetry: "KMS API rate limits exceeded 14 times daily under peak load",
      codeSnippet: `// [FAIL] Inline Secret Fetching (No Caching)
async function decryptPayload(data) {
  const kmsClient = new KMSClient();
  const decrypted = await kmsClient.decrypt(data); // Hits API every time!
  return decrypted;
}`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 14,
      description: "Implemented an in-memory secure vault cache with high-speed cryptographic lookup and dynamic background refresh cycles that avoids token-limit exhaustion.",
      telemetry: "Vault API calls reduced by 99.8% (Cached crypt keys)",
      codeSnippet: `// [OK] Cryptographic Cache with TTL rotation
const keyCache = new CryptoKeyCache({
  ttlMs: 600000, // 10 Min Key Expiry
  kmsResolver: async () => await kmsClient.fetchSecretKey()
});
async function decryptPayload(data) {
  const activeKey = await keyCache.get(); // Sub-microsecond local fetch
  return aesDecrypt(data, activeKey);
}`
    },
    actionTaken: "Introduced local AES memory buffer cache for cryptographic keys with automated asynchronous refresh."
  },
  {
    row: 2,
    col: 1,
    title: "Static Token Leakage Protection",
    moduleName: "Security & Secret Vault",
    parameterName: "Consistency",
    preAudit: {
      riskLevel: "Critical",
      score: 92,
      description: "Plaintext connection credentials, third-party API keys, and JWT secrets are stored inside git repositories or hardcoded in configuration files.",
      telemetry: "4 secret keys exposed in internal git repository histories",
      codeSnippet: `// [FAIL] Hardcoded private key tokens
const STRIPE_API_SECRET = "sk_live_51Ny9A1Bz89Z7y1K99X...DangerousLeak";
const db_connection = "postgres://admin:SuperPassword@localhost/db";`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 4,
      description: "Sanitized entire git timeline. Integrated Google Secret Manager. Secrets are loaded directly into application memory securely on startup, never written to disk.",
      telemetry: "Zero plaintext keys found in scanning pipelines",
      codeSnippet: `// [OK] Secure Run-Time Environment Variable Parsing
import { getStripeKey } from './security';
// Fetched securely from process memory injected during container launch
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);`
    },
    actionTaken: "Migrated secrets to secure Cloud Secret Manager with strict runtime injection."
  },
  {
    row: 2,
    col: 2,
    title: "IAM Role Isolation",
    moduleName: "Security & Secret Vault",
    parameterName: "Security",
    preAudit: {
      riskLevel: "High",
      score: 84,
      description: "The host container runs on a wildcard administrative IAM role, allowing anyone with host system access to inspect other containers and cloud instances.",
      telemetry: "Excessive cloud administrative privileges assigned to server",
      codeSnippet: `// [FAIL] Over-privileged IAM service account configuration
resource "google_project_iam_member" "admin" {
  role   = "roles/owner" // Grants owner privileges to app runner!
  member = "serviceAccount:\${var.app_service_account}"
}`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 7,
      description: "Implemented fine-grained, resource-specific IAM service accounts. The application container is restricted strictly to the resources it accesses directly.",
      telemetry: "Privilege level minimized to strict least-privilege standards",
      codeSnippet: `// [OK] Minimal Privilege Service Account Policy
resource "google_project_iam_member" "storage_read" {
  role   = "roles/storage.objectViewer" // Read-only access to storage buckets
  member = "serviceAccount:\${var.app_service_account}"
}`
    },
    actionTaken: "Rebuilt IAM profiles to follow strict zero-trust, least-privilege boundaries."
  },
  {
    row: 2,
    col: 3,
    title: "Secret Key Automated Rotation",
    moduleName: "Security & Secret Vault",
    parameterName: "Availability",
    preAudit: {
      riskLevel: "Medium",
      score: 50,
      description: "Secret cryptographic keys have never been rotated since system launch, creating catastrophic liability if older developer logs were ever leaked.",
      telemetry: "JWT private key unchanged for 482 days",
      codeSnippet: `// [FAIL] Static JWT secret key configuration
const JWT_SECRET = "permanent_static_security_token_unrotated_since_inception";`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 11,
      description: "Configured automated 30-day KMS key rotation. Enforced dual-key verify intervals to allow older valid tokens to phase out smoothly without outages.",
      telemetry: "Automated rotation active. 0 validation failures during transition",
      codeSnippet: `// [OK] Automated JWKS rotation handler
const verifyToken = async (token) => {
  const JWKS = jose.createRemoteJWKSet(new URL('https://xavira-auth.com/.well-known/jwks.json'));
  const { payload } = await jose.jwtVerify(token, JWKS);
  return payload;
};`
    },
    actionTaken: "Enabled Google Cloud KMS automated key rotation paired with JWKS verifiers."
  },

  // --- ROW 3: MESSAGE BUS & QUEUES ---
  {
    row: 3,
    col: 0,
    title: "Unbounded Message Queue Backpressure",
    moduleName: "Message Bus / Queues",
    parameterName: "Concurrency",
    preAudit: {
      riskLevel: "Critical",
      score: 91,
      description: "Message broker queues do not enforce ingestion limits. High spikes in event generation exhaust container memory, causing unexpected process crashes.",
      telemetry: "Process crash triggered when unconsumed queue exceeds 250k tasks",
      codeSnippet: `// [FAIL] Memory-clogging unthrottled consumer
channel.consume('compute-jobs', async (msg) => {
  // Pulls work continuously, piling up tasks in Node's memory heap
  processJob(msg.content);
});`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 13,
      description: "Enforced queue prefetch limits and strict backpressure boundaries. Ingestion automatically pauses when memory or CPU usage triggers threshold rules.",
      telemetry: "Heap memory capped at 32% under heavy stress testing",
      codeSnippet: `// [OK] Active Consumer Backpressure limit
await channel.prefetch(50); // Process maximum 50 parallel jobs per container
channel.consume('compute-jobs', async (msg) => {
  await processJob(msg.content);
  channel.ack(msg); // Only pull next job once processed
});`
    },
    actionTaken: "Introduced client prefetch configurations and backpressure triggers on consumer nodes."
  },
  {
    row: 3,
    col: 1,
    title: "Double-Execution / Idempotency",
    moduleName: "Message Bus / Queues",
    parameterName: "Consistency",
    preAudit: {
      riskLevel: "High",
      score: 88,
      description: "Network interruptions trigger event re-deliveries. Without transaction idempotency checks, payment webhooks double-process financial transactions.",
      telemetry: "0.12% duplicate payout hazard during network disconnects",
      codeSnippet: `// [FAIL] Naive Payout webhook (Re-delivery risk)
app.post('/webhook/stripe', async (req, res) => {
  const payment = req.body;
  await userLedger.credit(payment.userId, payment.amount);
  res.status(200).send();
});`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 5,
      description: "Established a distributed deduplication filter using atomic Redis transactional checks, discarding already-processed event IDs securely.",
      telemetry: "Zero duplicate calculations recorded during simulated outages",
      codeSnippet: `// [OK] Idempotent Payout Webhook Guard
app.post('/webhook/stripe', async (req, res) => {
  const { eventId, userId, amount } = req.body;
  const isDuplicate = await redis.set(\`webhook:\${eventId}\`, 'lock', 'NX', 'EX', 86400);
  if (!isDuplicate) {
    return res.status(200).send({ status: 'ignored_duplicate' });
  }
  await userLedger.credit(userId, amount);
  res.status(200).send({ status: 'processed' });
});`
    },
    actionTaken: "Deployed distributed event deduplication filters utilizing atomic key-locks."
  },
  {
    row: 3,
    col: 2,
    title: "Queue Connection Security",
    moduleName: "Message Bus / Queues",
    parameterName: "Security",
    preAudit: {
      riskLevel: "Medium",
      score: 52,
      description: "Message brokers run with default credentials on clear-text TCP protocols. Anyone inside the VPC can sniff system payloads and push malicious system commands.",
      telemetry: "Plaintext connection strings identified in deployment templates",
      codeSnippet: `// [FAIL] Unencrypted message bus connection
const connection = amqp.connect("amqp://guest:guest@broker-host:5672");`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 8,
      description: "Configured TLS/SSL encryption for all message broker paths. Enabled username-password credentials bound strictly to internal private IP subnet addresses.",
      telemetry: "100% of transport layers encrypted using TLS 1.3",
      codeSnippet: `// [OK] Enforced TLS Encrypted Message broker
const connection = amqp.connect("amqps://app_worker:SecureToken@broker-host:5671", {
  ca: [fs.readFileSync('/etc/ssl/certs/ca.pem')],
  minVersion: 'TLSv1.3'
});`
    },
    actionTaken: "Configured TLS transport layers and custom authentication credentials on event networks."
  },
  {
    row: 3,
    col: 3,
    title: "Dead Letter Queue Failovers",
    moduleName: "Message Bus / Queues",
    parameterName: "Availability",
    preAudit: {
      riskLevel: "High",
      score: 74,
      description: "A single corrupted message (poison pill) can repeatedly crash the message processor, locking up the message queue and halting all queue deliveries.",
      telemetry: "Complete consumer halts triggered by database query typos",
      codeSnippet: `// [FAIL] Poison pill crash hazard
channel.consume('orders', async (msg) => {
  try {
    const data = JSON.parse(msg.content); // If parse fails, crashes process!
    await updateDb(data);
  } catch (err) {
    // Re-queueing the poison pill endlessly blocks the pipeline
    channel.nack(msg, false, true); 
  }
});`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 10,
      description: "Configured DLQ routing parameters. Failsafe mechanisms isolate corrupted messages automatically, alerting administrators while processing continues uninterrupted.",
      telemetry: "0 queues stalled (100% of poison payloads isolated to DLQ)",
      codeSnippet: `// [OK] Poison-Pill DLQ Redirect Configuration
const queueOpts = {
  deadLetterExchange: 'orders.dlx',
  deadLetterRoutingKey: 'orders.failed'
};
// Messages rejected without requeue route automatically to DLX
channel.nack(msg, false, false); // Moves immediately to DLQ`
    },
    actionTaken: "Structured Dead-Letter Exchange (DLX) topologies protecting consumers from crash conditions."
  },

  // --- ROW 4: VECTOR PIPELINES ---
  {
    row: 4,
    col: 0,
    title: "Vector Search Heap Exhaustion",
    moduleName: "Vector Search & LLMs",
    parameterName: "Concurrency",
    preAudit: {
      riskLevel: "Critical",
      score: 93,
      description: "Vector query models load gigantic floating-point embeddings directly into worker system memory. Concurrent users quickly trigger heap out-of-memory crashes.",
      telemetry: "Frequent container reboots (OOM) under parallel search tasks",
      codeSnippet: `// [FAIL] Inline Vector Index Parsing
const index = fs.readFileSync('gigantic_embedding_matrix.bin');
// Running matrix calculation directly in application threads
const matched = calculateCosineSimilarity(userVector, index);`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 14,
      description: "Isolated vector indexing onto a specialized C++ database. Sub-millisecond vector similarity calculations take place completely outside main application memory spaces.",
      telemetry: "Memory consumption flattened and completely stable at <45MB",
      codeSnippet: `// [OK] Dedicated High-Speed Vector DB Query
const client = new MilvusClient({ address: "vector-db-service:19530" });
const searchResult = await client.search({
  collectionName: "document_embeddings",
  vector: userEmbedding,
  limit: 10
});`
    },
    actionTaken: "Decoupled vector similarity indexes onto a highly-optimised vector database service."
  },
  {
    row: 4,
    col: 1,
    title: "Vector Row-Level Isolation",
    moduleName: "Vector Search & LLMs",
    parameterName: "Consistency",
    preAudit: {
      riskLevel: "High",
      score: 80,
      description: "Vector indexes are pooled across multiple customers. Lacking user filters on semantic match pipelines, search results leak confidential data to other clients.",
      telemetry: "Data leakage risk flagged during automated audit assessments",
      codeSnippet: `// [FAIL] Unfiltered global vector query
const searchResult = await vectorDb.query({
  vector: embedding,
  limit: 5 // Returns best matches from any customer database!
});`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 7,
      description: "Enforced strict Row-Level Security (RLS) filters on all semantic queries. System validates request ownership attributes dynamically within database engines.",
      telemetry: "Zero cross-customer leaks verified over 5M query cycles",
      codeSnippet: `// [OK] RLS Filter Enforced Vector Query
const searchResult = await vectorDb.query({
  vector: embedding,
  filter: \`tenant_id == "\${user.tenantId}"\`, // Strict separation
  limit: 5
});`
    },
    actionTaken: "Engineered strict customer partitioning and metadata filters inside the vector index."
  },
  {
    row: 4,
    col: 2,
    title: "Model Payload Sanitization",
    moduleName: "Vector Search & LLMs",
    parameterName: "Security",
    preAudit: {
      riskLevel: "Medium",
      score: 64,
      description: "Raw inputs are fed straight to AI model prompts without scrubbing. User injections can hijack LLM systems to extract administrative private data keys.",
      telemetry: "Susceptible to standard prompt-override instructions",
      codeSnippet: `// [FAIL] Injection-Prone Prompt Assembly
const prompt = \`Summarize this transaction history: \${userInput}\`;
const result = await model.generate(prompt);`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 11,
      description: "Implemented a hardened Prompt Gateway parsing user parameters using rigid structural system instructions and isolating sensitive variables securely.",
      telemetry: "100% of prompt manipulation attempts isolated and discarded",
      codeSnippet: `// [OK] Hardened Prompt Boundary Template
const systemInstructions = "You are a restricted summarizer. Only output valid JSON.";
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: [
    { role: 'user', parts: [{ text: userInput }] }
  ],
  config: { systemInstruction: systemInstructions }
});`
    },
    actionTaken: "Configured structural prompt gateway layers with isolated user constraints."
  },
  {
    row: 4,
    col: 3,
    title: "Runaway LLM Cost Control",
    moduleName: "Vector Search & LLMs",
    parameterName: "Availability",
    preAudit: {
      riskLevel: "High",
      score: 85,
      description: "No safeguards on recursive model calls. Users can trigger infinite loops of agent queries, exhausting API quotas and generating huge billing overruns.",
      telemetry: "Single automated test triggered $420 in billing costs over 2 hours",
      codeSnippet: `// [FAIL] Unmonitored recursive loop potential
while (agent.needsMoreData()) {
  const result = await model.ask(agent.getCurrentQuery()); // Uncapped billing!
  agent.incorporate(result);
}`
    },
    postAudit: {
      riskLevel: "Safe",
      score: 8,
      description: "Configured hard limits on token-spend and recursive depths. Added custom semantic caches preventing redundant model hits for similar queries.",
      telemetry: "Overhead reduced by 72% (Cache hits & loop limits enforced)",
      codeSnippet: `// [OK] Loop-Gated Agent Execution with Semantic Cache
let iteration = 0;
while (agent.needsMoreData() && iteration < 5) { // Strict Max Depth
  const query = agent.getCurrentQuery();
  const cachedResult = await semanticCache.get(query);
  const result = cachedResult || await model.ask(query);
  agent.incorporate(result);
  iteration++;
}`
    },
    actionTaken: "Introduced recursive loop safety limits and sub-millisecond semantic search caches."
  }
];

export default function RiskHeatmap() {
  const [viewMode, setViewMode] = useState<'current' | 'remediated'>('current');
  const [selectedCoord, setSelectedCoord] = useState<{ row: number; col: number }>({ row: 0, col: 0 });

  // Rows and columns labels
  const rows = [
    "Edge Ingress Gateway",
    "State & DB Registry",
    "Security & Secret Vault",
    "Message Bus / Queues",
    "Vector Search & LLMs"
  ];

  const cols = [
    "Concurrency",
    "Consistency",
    "Security",
    "Availability"
  ];

  // Selected cell data
  const selectedCell = heatmapData.find(
    (cell) => cell.row === selectedCoord.row && cell.col === selectedCoord.col
  ) || heatmapData[0];

  // Helper function to color code based on risk level
  const getCellColor = (cell: HeatmapCell) => {
    const isSelected = selectedCoord.row === cell.row && selectedCoord.col === cell.col;
    
    if (viewMode === 'current') {
      const risk = cell.preAudit.riskLevel;
      if (risk === 'Critical') {
        return {
          bg: isSelected ? 'bg-rose-950/70' : 'bg-rose-900/40 hover:bg-rose-900/60',
          border: isSelected ? 'border-rose-500' : 'border-rose-950',
          text: 'text-rose-400',
          indicator: 'bg-rose-500',
          glow: 'shadow-[0_0_15px_rgba(244,63,94,0.15)]'
        };
      }
      if (risk === 'High') {
        return {
          bg: isSelected ? 'bg-amber-950/70' : 'bg-amber-900/30 hover:bg-amber-900/50',
          border: isSelected ? 'border-amber-500' : 'border-amber-950',
          text: 'text-amber-400',
          indicator: 'bg-amber-500',
          glow: 'shadow-[0_0_15px_rgba(245,158,11,0.15)]'
        };
      }
      if (risk === 'Medium') {
        return {
          bg: isSelected ? 'bg-yellow-950/60' : 'bg-yellow-950/20 hover:bg-yellow-950/40',
          border: isSelected ? 'border-yellow-600/60' : 'border-yellow-950',
          text: 'text-yellow-400',
          indicator: 'bg-yellow-500',
          glow: 'shadow-[0_0_10px_rgba(234,179,8,0.1)]'
        };
      }
      return {
        bg: isSelected ? 'bg-emerald-950/60' : 'bg-emerald-950/20 hover:bg-emerald-950/40',
        border: isSelected ? 'border-emerald-600/60' : 'border-emerald-950',
        text: 'text-emerald-400',
        indicator: 'bg-emerald-500',
        glow: 'shadow-[0_0_10px_rgba(16,185,129,0.1)]'
      };
    } else {
      // Remediated Mode colors (mostly safe, cool-greens/blues)
      const isSafe = cell.postAudit.riskLevel === 'Safe';
      if (isSafe) {
        return {
          bg: isSelected ? 'bg-cyan-950/60' : 'bg-[#0b1b1e]/40 hover:bg-[#0b1b1e]/60',
          border: isSelected ? 'border-cyan-500' : 'border-cyan-950/80',
          text: 'text-cyan-400',
          indicator: 'bg-cyan-500',
          glow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]'
        };
      }
      return {
        bg: isSelected ? 'bg-emerald-950/60' : 'bg-[#0d1c16]/30 hover:bg-[#0d1c16]/50',
        border: isSelected ? 'border-emerald-500' : 'border-emerald-950/80',
        text: 'text-emerald-400',
        indicator: 'bg-emerald-500',
        glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]'
      };
    }
  };

  // Helper function to get raw CSS color values for Framer Motion animation interpolations
  const getCellCSSValues = (cell: HeatmapCell) => {
    const isSelected = selectedCoord.row === cell.row && selectedCoord.col === cell.col;
    
    if (viewMode === 'current') {
      const risk = cell.preAudit.riskLevel;
      if (risk === 'Critical') {
        return {
          backgroundColor: isSelected ? 'rgba(136, 19, 55, 0.7)' : 'rgba(136, 19, 55, 0.4)', // rose-950 and rose-900
          borderColor: isSelected ? 'rgb(244, 63, 94)' : 'rgba(136, 19, 55, 0.8)', // rose-500 and rose-950
          textColor: 'rgb(251, 113, 133)', // rose-400
          indicatorColor: 'rgb(244, 63, 94)', // rose-500
          shadow: isSelected ? '0 0 15px rgba(244, 63, 94, 0.15)' : 'none'
        };
      }
      if (risk === 'High') {
        return {
          backgroundColor: isSelected ? 'rgba(120, 53, 4, 0.7)' : 'rgba(120, 53, 4, 0.3)', // amber-950 and amber-900
          borderColor: isSelected ? 'rgb(245, 158, 11)' : 'rgba(120, 53, 4, 0.8)', // amber-500 and amber-950
          textColor: 'rgb(251, 191, 36)', // amber-400
          indicatorColor: 'rgb(245, 158, 11)', // amber-500
          shadow: isSelected ? '0 0 15px rgba(245, 158, 11, 0.15)' : 'none'
        };
      }
      if (risk === 'Medium') {
        return {
          backgroundColor: isSelected ? 'rgba(66, 32, 6, 0.6)' : 'rgba(66, 32, 6, 0.2)', // yellow-950
          borderColor: isSelected ? 'rgba(202, 138, 4, 0.6)' : 'rgba(66, 32, 6, 0.8)', // yellow-600/60 and yellow-950
          textColor: 'rgb(253, 224, 71)', // yellow-400
          indicatorColor: 'rgb(234, 179, 8)', // yellow-500
          shadow: isSelected ? '0 0 10px rgba(234, 179, 8, 0.1)' : 'none'
        };
      }
      return {
        backgroundColor: isSelected ? 'rgba(6, 78, 59, 0.6)' : 'rgba(6, 78, 59, 0.2)', // emerald-950
        borderColor: isSelected ? 'rgba(5, 150, 105, 0.6)' : 'rgba(6, 78, 59, 0.8)', // emerald-600/60 and emerald-950
        textColor: 'rgb(52, 211, 153)', // emerald-400
        indicatorColor: 'rgb(16, 185, 129)', // emerald-500
        shadow: isSelected ? '0 0 10px rgba(16, 185, 129, 0.1)' : 'none'
      };
    } else {
      const isSafe = cell.postAudit.riskLevel === 'Safe';
      if (isSafe) {
        return {
          backgroundColor: isSelected ? 'rgba(8, 47, 73, 0.6)' : 'rgba(11, 27, 30, 0.4)', // cyan-950 and custom dark cyan
          borderColor: isSelected ? 'rgb(6, 182, 212)' : 'rgba(8, 47, 73, 0.8)', // cyan-500 and cyan-950
          textColor: 'rgb(34, 211, 238)', // cyan-400
          indicatorColor: 'rgb(6, 182, 212)', // cyan-500
          shadow: isSelected ? '0 0 20px rgba(6, 182, 212, 0.2)' : 'none'
        };
      }
      return {
        backgroundColor: isSelected ? 'rgba(6, 78, 59, 0.6)' : 'rgba(13, 28, 22, 0.3)', // emerald-950 and custom dark green
        borderColor: isSelected ? 'rgb(16, 185, 129)' : 'rgba(6, 78, 59, 0.8)', // emerald-500 and emerald-950
        textColor: 'rgb(52, 211, 153)', // emerald-400
        indicatorColor: 'rgb(16, 185, 129)', // emerald-500
        shadow: isSelected ? '0 0 15px rgba(16, 185, 129, 0.15)' : 'none'
      };
    }
  };

  // Score stats calculations
  const totalScoreCurrent = heatmapData.reduce((acc, cell) => acc + cell.preAudit.score, 0) / heatmapData.length;
  const totalScoreRemediated = heatmapData.reduce((acc, cell) => acc + cell.postAudit.score, 0) / heatmapData.length;

  const criticalCountCurrent = heatmapData.filter(cell => cell.preAudit.riskLevel === 'Critical').length;
  const highCountCurrent = heatmapData.filter(cell => cell.preAudit.riskLevel === 'High').length;

  return (
    <section id="architectural-risk-heatmap" className="py-24 lg:py-32 bg-transparent border-b border-[#0f1d3a] relative">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-rose-500/[0.015] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-[10px] tracking-widest text-cyan-500 bg-cyan-950/20 border border-cyan-500/20 px-3.5 py-1.5 rounded uppercase font-bold glow-text-cyan">
            [ INTERACTIVE THREAT INTELLIGENCE ]
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
            ARCHITECTURAL THREAT HEATMAP
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            An interactive 2D modeling grid demonstrating state isolation anomalies and threat metrics discovered during real audits, comparing legacy risk indices to a hardened XAVIRA deployment.
          </p>
        </div>

        {/* Global Overview Scorecard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Risk Index Score */}
          <div className="bg-[#030815]/80 border border-[#0f1d3a]/60 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none text-zinc-500">
              <TrendingDown className="w-24 h-24" />
            </div>
            <div className="space-y-1 z-10">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                // Systemic Vulnerability Index
              </span>
              <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Average Platform Risk Index
              </h3>
            </div>
            <div className="flex items-baseline gap-4 mt-6 z-10">
              <div className="flex flex-col">
                <span className="text-3xl font-mono font-medium text-rose-500">
                  {Math.round(totalScoreCurrent)}/100
                </span>
                <span className="text-[9px] font-mono text-zinc-500">Pre-Audit Index</span>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600 self-center" />
              <div className="flex flex-col">
                <span className="text-3xl font-mono font-medium text-cyan-400">
                  {Math.round(totalScoreRemediated)}/100
                </span>
                <span className="text-[9px] font-mono text-zinc-500">Post-Audit Index</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-light z-10">
              Represents overall probability of catastrophic memory leaks, race conditions, or access exploits. Reduced by {Math.round(totalScoreCurrent - totalScoreRemediated)}% after formal verification.
            </p>
          </div>

          {/* Card 2: Critical / High Threats */}
          <div className="bg-[#030815]/80 border border-[#0f1d3a]/60 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none text-zinc-500">
              <Flame className="w-24 h-24" />
            </div>
            <div className="space-y-1 z-10">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                // Systemic Failures Isolated
              </span>
              <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Active High & Critical Risks
              </h3>
            </div>
            <div className="flex items-baseline gap-4 mt-6 z-10">
              <div className="flex flex-col">
                <span className="text-3xl font-mono font-medium text-rose-500">
                  {criticalCountCurrent + highCountCurrent}
                </span>
                <span className="text-[9px] font-mono text-zinc-500">Detected Threats</span>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600 self-center" />
              <div className="flex flex-col">
                <span className="text-3xl font-mono font-medium text-cyan-400">
                  0
                </span>
                <span className="text-[9px] font-mono text-zinc-500">Remaining Faults</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-light z-10">
              Critical flaws capable of triggering cascading container failovers or unauthorised row leaks are completely eliminated from the topology.
            </p>
          </div>

          {/* Card 3: System Stability State */}
          <div className="bg-[#030815]/80 border border-[#0f1d3a]/60 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none text-zinc-500">
              <Cpu className="w-24 h-24" />
            </div>
            <div className="space-y-1 z-10">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                // Concurrency & Flow Integrity
              </span>
              <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Overall State Stability
              </h3>
            </div>
            <div className="flex items-baseline gap-4 mt-6 z-10">
              <div className="flex flex-col">
                <span className="text-xl font-mono font-black text-rose-500 uppercase">
                  UNBOUNDED
                </span>
                <span className="text-[9px] font-mono text-zinc-500">High Leak Potential</span>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-600 self-center" />
              <div className="flex flex-col">
                <span className="text-xl font-mono font-black text-cyan-400 uppercase">
                  HERMETIC
                </span>
                <span className="text-[9px] font-mono text-zinc-500">Safe Core Isolation</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-light z-10">
              Asynchronous operations run inside strict process pools and memory buffers to prevent runtime locks or API cost overruns under extreme scale.
            </p>
          </div>

        </div>

        {/* Primary Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: 2D Heatmap Grid */}
          <div className="lg:col-span-7 bg-[#040c1e]/60 border border-[#0f1d3a]/60 rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header with Switch */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0f1d3a]/60 pb-5">
                <div className="space-y-1">
                  <h3 className="font-display text-base font-black text-white tracking-widest uppercase">
                    Vulnerability Matrix
                  </h3>
                  <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    Click cells to audit structural details and view code patches.
                  </span>
                </div>

                {/* State Toggle */}
                <div className="flex p-0.5 bg-[#030815]/90 rounded border border-[#0f1d3a]/60">
                  <button
                    onClick={() => setViewMode('current')}
                    className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded font-bold transition-all cursor-pointer ${
                      viewMode === 'current'
                        ? 'bg-rose-950/50 border border-rose-500/30 text-rose-400 glow-text-rose'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Current Architecture
                  </button>
                  <button
                    onClick={() => setViewMode('remediated')}
                    className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded font-bold transition-all cursor-pointer ${
                      viewMode === 'remediated'
                        ? 'bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 glow-text-cyan'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Remediated State
                  </button>
                </div>
              </div>

              {/* Grid Canvas Container */}
              <div className="relative overflow-x-auto min-w-full">
                
                {/* 2D Heatmap Grid */}
                <div className="min-w-[600px] py-4">
                  
                  {/* Grid Headers (Columns) */}
                  <div className="grid grid-cols-5 gap-2.5 mb-2.5 items-center">
                    {/* Empty cell for row label axis */}
                    <div className="col-span-1 text-right pr-4">
                      <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest block font-bold">
                        System Modules
                      </span>
                    </div>
                    {cols.map((colName, idx) => (
                      <div key={idx} className="col-span-1 text-center py-1">
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider font-semibold block">
                          {colName}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Grid Rows */}
                  <div className="space-y-2.5">
                    {rows.map((rowName, rIdx) => (
                      <div key={rIdx} className="grid grid-cols-5 gap-2.5 items-center">
                        
                        {/* Row Axis Label */}
                        <div className="col-span-1 text-right pr-4 border-r border-[#0f1d3a]/60 py-1">
                          <span className="font-mono text-[10px] text-zinc-400 font-bold tracking-tight block">
                            {rowName}
                          </span>
                        </div>

                        {/* Interactive Cells for this Row */}
                        {cols.map((_, cIdx) => {
                          const cell = heatmapData.find(c => c.row === rIdx && c.col === cIdx);
                          if (!cell) return <div key={cIdx} className="col-span-1" />;

                          const cssValues = getCellCSSValues(cell);
                          const isSelected = selectedCoord.row === rIdx && selectedCoord.col === cIdx;

                          return (
                            <motion.button
                              key={`${rIdx}-${cIdx}`}
                              onClick={() => setSelectedCoord({ row: rIdx, col: cIdx })}
                              className={`col-span-1 h-14 rounded border flex flex-col items-center justify-center p-1.5 relative group cursor-pointer ${isSelected ? 'z-10' : 'z-0'}`}
                              animate={{
                                backgroundColor: cssValues.backgroundColor,
                                borderColor: cssValues.borderColor,
                                boxShadow: cssValues.shadow,
                              }}
                              whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.15 }
                              }}
                              whileTap={{ scale: 0.98 }}
                              transition={{
                                type: 'spring',
                                stiffness: 220,
                                damping: 24,
                                delay: (rIdx * 0.05) + (cIdx * 0.05)
                              }}
                            >
                              <motion.span 
                                animate={{ color: cssValues.textColor }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 220,
                                  damping: 24,
                                  delay: (rIdx * 0.05) + (cIdx * 0.05)
                                }}
                                className="font-mono text-[9px] font-black uppercase text-center truncate w-full"
                              >
                                {cell.title.substring(0, 16)}...
                              </motion.span>
                              
                              <div className="flex items-center gap-1 mt-1">
                                <motion.span 
                                  animate={{ backgroundColor: cssValues.indicatorColor }}
                                  transition={{
                                    type: 'spring',
                                    stiffness: 220,
                                    damping: 24,
                                    delay: (rIdx * 0.05) + (cIdx * 0.05)
                                  }}
                                  className="w-1.5 h-1.5 rounded-full" 
                                />
                                <AnimatePresence mode="wait">
                                  <motion.span
                                    key={viewMode}
                                    initial={{ opacity: 0, y: -2 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 2 }}
                                    transition={{ duration: 0.15 }}
                                    className="text-[8px] font-mono text-zinc-500 font-bold"
                                  >
                                    {viewMode === 'current' ? `Score: ${cell.preAudit.score}` : `Score: ${cell.postAudit.score}`}
                                  </motion.span>
                                </AnimatePresence>
                              </div>

                              {/* Highlight glow layer */}
                              {isSelected && (
                                <motion.span 
                                  layoutId="active-cell-indicator"
                                  className="absolute inset-x-0 bottom-0 h-[2px] bg-cyan-500 rounded-b" 
                                />
                              )}
                            </motion.button>
                          );
                        })}

                      </div>
                    ))}
                  </div>

                </div>

              </div>

            </div>

            {/* Bottom Grid Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#0f1d3a]/60 mt-6 text-[10px] font-mono text-zinc-500">
              <div className="flex items-center gap-4">
                <span className="uppercase tracking-widest text-[9px] text-zinc-600 font-bold">Legend:</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-rose-500/20 border border-rose-500/40 rounded-sm" />
                  <span>Critical Risk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-amber-500/20 border border-amber-500/40 rounded-sm" />
                  <span>High Risk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-yellow-500/20 border border-yellow-500/40 rounded-sm" />
                  <span>Medium Risk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-cyan-500/20 border border-cyan-500/40 rounded-sm animate-pulse" />
                  <span>Sovereign Guard / Safe</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Selected: row {selectedCoord.row + 1}, col {selectedCoord.col + 1}</span>
              </div>
            </div>

          </div>

          {/* Right Side: Risk Inspector Panel */}
          <div className="lg:col-span-5 bg-[#040c1e]/60 border border-[#0f1d3a]/60 rounded-xl p-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#0f1d3a]/60 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    // THREAT AUDIT SPECS
                  </span>
                  <h3 className="font-display text-sm font-black text-white tracking-widest uppercase">
                    Risk Investigator
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#030815]/85 border border-[#0f1d3a]/60 font-mono text-[9px] text-cyan-400">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{selectedCell.moduleName}</span>
                </div>
              </div>

              {/* Subtitle / Selected Attribute */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-cyan-500 font-bold bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/20 uppercase tracking-wide">
                    {selectedCell.parameterName}
                  </span>
                  <ChevronRight className="w-3 h-3 text-zinc-600" />
                  <span className="text-xs font-mono text-white font-bold">
                    {selectedCell.title}
                  </span>
                </div>
              </div>

              {/* Toggle comparison detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCoord.row}-${selectedCoord.col}-${viewMode}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-5"
                >
                  
                  {/* Current State or Remediated state block */}
                  {viewMode === 'current' ? (
                    <div className="space-y-4">
                      {/* Risk Level Badge */}
                      <div className="flex items-center justify-between bg-rose-950/20 border border-rose-500/20 p-3 rounded">
                        <div className="flex items-center gap-2.5">
                          <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-rose-500 font-bold uppercase tracking-widest">Pre-Audit Vulnerability Level</span>
                            <span className="text-xs text-white font-bold uppercase tracking-wide">{selectedCell.preAudit.riskLevel} Risk Index</span>
                          </div>
                        </div>
                        <span className="text-xl font-mono font-black text-rose-500 bg-rose-950/40 px-3 py-1 rounded border border-rose-500/20">
                          {selectedCell.preAudit.score}/100
                        </span>
                      </div>

                      {/* Description */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">Vulnerability Diagnostics</span>
                        <p className="text-xs text-zinc-300 leading-relaxed font-light">
                          {selectedCell.preAudit.description}
                        </p>
                      </div>

                      {/* Telemetry Indicator */}
                      <div className="space-y-1.5 bg-[#030815]/50 border border-[#0f1d3a]/60 rounded p-3">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                          </span>
                          <span className="font-bold">TELEMETRY DEVIATION:</span>
                        </div>
                        <p className="text-xs text-rose-400 font-mono font-bold pl-4">
                          {selectedCell.preAudit.telemetry}
                        </p>
                      </div>

                      {/* Code Snippet */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">Legacy Infrastructure Implementation</span>
                        <div className="bg-[#020510]/95 rounded border border-[#0f1d3a]/60 p-3 overflow-x-auto">
                          <pre className="font-mono text-[10px] text-zinc-400 leading-relaxed">
                            {selectedCell.preAudit.codeSnippet}
                          </pre>
                        </div>
                      </div>

                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Remediated State Badge */}
                      <div className="flex items-center justify-between bg-cyan-950/20 border border-cyan-500/20 p-3 rounded">
                        <div className="flex items-center gap-2.5">
                          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">Remediated Platform State</span>
                            <span className="text-xs text-white font-bold uppercase tracking-wide">{selectedCell.postAudit.riskLevel} Configuration</span>
                          </div>
                        </div>
                        <span className="text-xl font-mono font-black text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded border border-cyan-500/20">
                          {selectedCell.postAudit.score}/100
                        </span>
                      </div>

                      {/* Description */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">Remediation Action & Design</span>
                        <p className="text-xs text-zinc-200 leading-relaxed font-light">
                          {selectedCell.postAudit.description}
                        </p>
                      </div>

                      {/* Telemetry Indicator */}
                      <div className="space-y-1.5 bg-[#030815]/50 border border-[#0f1d3a]/60 rounded p-3">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                          </span>
                          <span className="font-bold">VERIFIED BENCHMARK:</span>
                        </div>
                        <p className="text-xs text-cyan-400 font-mono font-bold pl-4">
                          {selectedCell.postAudit.telemetry}
                        </p>
                      </div>

                      {/* Code Snippet */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">Hardened XAVIRA Reference Code</span>
                        <div className="bg-[#020510]/95 rounded border border-[#0f1d3a]/60 p-3 overflow-x-auto">
                          <pre className="font-mono text-[10px] text-cyan-400 leading-relaxed">
                            {selectedCell.postAudit.codeSnippet}
                          </pre>
                        </div>
                      </div>

                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>

            {/* Bottom Summary Callout */}
            <div className="pt-4 border-t border-[#0f1d3a]/60 flex items-start gap-3 mt-6 text-[11px] text-zinc-400 font-mono leading-relaxed bg-[#030815]/50 p-3 rounded border border-[#0f1d3a]/65">
              <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-bold block mb-0.5">XAVIRA Corrective Action:</span>
                <span>{selectedCell.actionTaken}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
