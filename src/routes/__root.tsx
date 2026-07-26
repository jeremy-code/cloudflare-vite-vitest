import type { ReactNode } from "react";

import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};

const RootComponent = () => {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
};

const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  }),
  component: RootComponent,
});

export { Route };
