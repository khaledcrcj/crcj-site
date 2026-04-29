import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { projectId } from "@/sanity.env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!projectId) {
    return (
      <main style={{ padding: 32, fontFamily: "Arial, sans-serif" }}>
        <h1>CRCJ Website Editor</h1>
        <p>
          Add the Sanity project settings in Vercel first, then this page will
          become the editing dashboard.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
