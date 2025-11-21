'use client';

import React, { useState } from "react";
import ChangeLogCard from "./changelog-card";
import { StepBack, StepForward } from 'lucide-react';

const itemsPerPage = 12;

export default function ChangeLogClient({ allReleases }: { allReleases: Release[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!Array.isArray(allReleases) || allReleases.length === 0) {
    return (
      <section aria-label="Changelog">
        <p className="text-center text-white py-8">No changelog entries available at the moment.</p>
      </section>
    );
  }

  const totalPages = Math.ceil(allReleases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allReleases.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section aria-label="Changelog Entries" className="text-white">
      <div className="grid grid-cols-1 gap-6">
        {currentItems.map((release) => (
          <article key={release.id} aria-label={`Release ${release.tag_name}`}>
            <ChangeLogCard release={release} />
          </article>
        ))}
      </div>

      <nav
        aria-label="Pagination"
        className="flex gap-2 mt-6 justify-center items-center text-sm"
      >
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-[#1A2445] rounded disabled:opacity-50"
          aria-label="Previous Page"
        >
          <StepBack />
        </button>

        <span aria-live="polite">Page {currentPage} of {totalPages}</span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 bg-[#1A2445] rounded disabled:opacity-50"
          aria-label="Next Page"
        >
          <StepForward />
        </button>
      </nav>
    </section>
  );
}
