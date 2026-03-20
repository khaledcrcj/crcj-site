"use client";

export default function Page() {
  return (
    <main className="min-h-screen bg-white p-10">
      <button
        type="button"
        onClick={() => alert("Desktop clicks work")}
        className="rounded-md bg-blue-700 px-6 py-4 text-white"
      >
        Test Button
      </button>
    </main>
  );
}
