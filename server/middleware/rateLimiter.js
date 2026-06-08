// Simple in-memory rate limiter (works without Redis too)
// For production, swap with Upstash Redis

const requestCounts = new Map();

const aiRateLimiter = (req, res, next) => {
  const userId = req.user._id.toString();
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 10; // 10 AI calls per minute per user

  if (!requestCounts.has(userId)) {
    requestCounts.set(userId, { count: 1, resetTime: now + windowMs });
    return next();
  }

  const userLimit = requestCounts.get(userId);

  if (now > userLimit.resetTime) {
    requestCounts.set(userId, { count: 1, resetTime: now + windowMs });
    return next();
  }

  if (userLimit.count >= maxRequests) {
    return res.status(429).json({
      message: 'Too many AI requests. Please wait a minute before trying again.'
    });
  }

  userLimit.count++;
  next();
};

module.exports = { aiRateLimiter };