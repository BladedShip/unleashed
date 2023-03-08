import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

import { myTheme } from "./theme";
import StudioLogo from "./components/StudioLogo";

export default defineConfig({
  basePath: "/studio",
  name: "Unleashed_Studio",
  title: "Unleashed Blog Studio",
  projectId:"nag6l5d1",
  dataset:"production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  theme:myTheme,
  studio:{
    components:{
      logo:StudioLogo,
    }
  }
});
