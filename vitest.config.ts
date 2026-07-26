import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import { playwright } from "@vitest/browser-playwright";
import viteConfig from "./vite.config";

const vitestConfig = defineConfig({
  test: {
    browser: {
      enabled: true,
      instances: [{ browser: "chromium" }],
      provider: playwright(),
    },
  },
});

// export default vitestConfig
export default mergeConfig(viteConfig, vitestConfig);
