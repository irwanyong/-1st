import { treaty } from "@elysiajs/eden"

import type { App } from "@1st/api"

export const apiSDK = treaty<App>("localhost:4000")
