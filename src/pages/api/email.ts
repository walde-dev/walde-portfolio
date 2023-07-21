import { LRUCache } from "lru-cache";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const limiter = rateLimit({
  interval: 300 * 1000, // 300 seconds (5 min) interval
  uniqueTokenPerInterval: 10, // Max 10 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const name = req.body.name;
  const email = req.body.email;
  const html = req.body.html;

  if (!name || !email || !html) {
    res.status(400).json({
      error: "Missing required fields",
    });
    return;
  }

  try {
    await limiter.check(res, 10, "CACHE_TOKEN"); // 10 request per minute
    try {
      const res = await resend.emails.send({
        from: "portfolio@waldemar.dev",
        to: "hello@waldemar.dev",
        subject: "New message from your portfolio",
        html: html + `<br/><br/>Name: ${name}<br/>Email: ${email}`,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error", error: error });
    }
  } catch {
    res.status(429).json({ error: "Rate limit exceeded" });
  }

  res.status(200).json({ success: true });
}

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        if (currentUsage === undefined) {
          return reject();
        }
        const isRateLimited = currentUsage >= limit;
        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader(
          "X-RateLimit-Remaining",
          isRateLimited ? 0 : limit - currentUsage
        );

        return isRateLimited ? reject() : resolve();
      }),
  };
}
