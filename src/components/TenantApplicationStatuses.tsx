
import React from "react";
import EmptyState from "@/components/EmptyState";
import { FolderOpen } from "lucide-react";

type Application = {
  id: number;
  image: string;
  title: string;
  appliedDate: string;
  progress: number;
  status: string;
};

interface Props {
  applications: Application[];
}

const statusColors: Record<string, string> = {
  "Pending": "bg-yellow-100 text-yellow-800",
  "Approved": "bg-emerald-100 text-emerald-700",
  "Rejected": "bg-destructive text-destructive-foreground",
  "In Review": "bg-blue-100 text-blue-700",
};

const TenantApplicationStatuses: React.FC<Props> = ({ applications }) => {
  return (
    <section className="mt-10">
      <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-3">
        Your Applications
      </h2>
      {applications.length === 0 ? (
        <EmptyState
          icon={FolderOpen}
          title="No applications yet"
          description="Your submitted applications and their status will appear here."
        />
      ) : (
        <div className="flex flex-col gap-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="flex items-center gap-4 bg-white/90 border border-border rounded-2xl shadow-[0_2px_16px_-4px_rgba(146,153,188,0.11)] p-4 group hover:shadow-lg hover:scale-[1.02] transition-transform duration-150"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-14 h-14 rounded-xl object-cover border"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base text-foreground truncate">{app.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">Applied {app.appliedDate}</div>
              </div>
              <div className="flex flex-col items-end gap-1 min-w-[95px]">
                <span className={
                  `inline-block px-2.5 py-1 rounded-xl text-xs font-semibold 
                  ${statusColors[app.status] || "bg-muted text-muted-foreground"}`
                }>
                  {app.status}
                </span>
                {/* You could show a thin progress bar below if "progress" shown */}
                {typeof app.progress === "number" && app.progress < 100 && (
                  <div className="w-full h-1 bg-muted rounded mt-1">
                    <div
                      className="bg-primary h-1 rounded"
                      style={{ width: `${app.progress}%`, transition: "width 0.3s" }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default TenantApplicationStatuses;
