import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
