const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const tokenBucket = new Map<string, { tokens: number; lastRefill: number }>();

export function rateLimit(identifier: string) {
  const now = Date.now();
  const bucket = tokenBucket.get(identifier) ?? { tokens: MAX_REQUESTS, lastRefill: now };

  const elapsed = now - bucket.lastRefill;
  if (elapsed > WINDOW_MS) {
    bucket.tokens = MAX_REQUESTS;
    bucket.lastRefill = now;
  }

  if (bucket.tokens <= 0) {
    tokenBucket.set(identifier, bucket);
    return { allowed: false };
  }

  bucket.tokens -= 1;
  tokenBucket.set(identifier, bucket);
  return { allowed: true };
}
