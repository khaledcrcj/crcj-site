"use client";

import dynamic from "next/dynamic";
import config from "@/sanity.config";
import { projectId } from "@/sanity.env";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

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
