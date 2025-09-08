"use client";

import NextError from "next/error";

// This is a simplified global error boundary without Sentry
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  console.error("Global error caught:", error);

  return (
    <html>
      <body>
        {/* Renders the default Next.js error page */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
