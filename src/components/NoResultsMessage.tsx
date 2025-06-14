
import React from "react";

type NoResultsMessageProps = {
  onReset: () => void;
  showReset?: boolean;
};

const NoResultsMessage: React.FC<NoResultsMessageProps> = ({
  onReset,
  showReset = true,
}) => (
  <div className="flex flex-col items-center py-16">
    <img src="/placeholder.svg" className="w-24 h-24 mb-6 opacity-60" alt="" />
    <div className="text-2xl font-semibold mb-2">No results found</div>
    <div className="text-muted-foreground mb-4 text-center">
      Try changing your filters or check back soon.
    </div>
    {showReset && (
      <button
        className="mt-2 border border-border text-destructive hover:bg-destructive/10 px-4 py-2 rounded"
        onClick={onReset}
        aria-label="Reset search filters"
      >
        Reset filters
      </button>
    )}
  </div>
);

export default NoResultsMessage;

