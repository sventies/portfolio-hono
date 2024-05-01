import { useEffect, useState } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
});
