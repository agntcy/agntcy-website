'use client';

import { useState } from "react";
import ChangeLogCard from "./changelog-card";
import { StepBack, StepForward } from 'lucide-react';

const itemsPerPage = 12;

export default function ChangeLogClient({ allReleases }: { allReleases: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allReleases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allReleases.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
        {currentItems.map((release) => (
          <ChangeLogCard key={release.id} release={release} />
        ))}
      </div>

      <div className="flex gap-2 mt-4 text-white justify-center items-center">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-[#1A2445] rounded"
        >
          <StepBack />
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 bg-[#1A2445] rounded"
        >
          <StepForward />
        </button>
      </div>
    </div>
  );
}
