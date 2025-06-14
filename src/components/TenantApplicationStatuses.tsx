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

const TenantApplicationStatuses: React.FC<Props> = ({ applications }) => {
  return (
    <section className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Your Applications</h2>
      {applications.length === 0 ? (
        <EmptyState
          icon={FolderOpen}
          title="No applications yet"
          description="Your submitted applications and their status will appear here."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {applications.map((app) => (
            <div
              key={app.id}
              className="flex items-center gap-4 bg-white rounded-lg shadow p-4"
            >
              <img src={app.image} alt={app.title} className="w-14 h-14 rounded object-cover" />
              <div className="flex-1">
                <div className="font-semibold">{app.title}</div>
                <div className="text-xs text-muted-foreground">Applied {app.appliedDate}</div>
              </div>
              <div>
                <span className="text-primary font-medium">{app.status}</span>
                {/* show progress bar if needed */}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default TenantApplicationStatuses;
