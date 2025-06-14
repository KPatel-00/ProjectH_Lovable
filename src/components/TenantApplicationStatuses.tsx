
import React from "react";
import { useNavigate } from "react-router-dom";

type Application = {
  id: number;
  image: string;
  title: string;
  appliedDate: string;
  progress: number;
  status: string;
};

type Props = {
  applications: Application[];
};

const TenantApplicationStatuses: React.FC<Props> = ({ applications }) => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex items-center justify-between mb-3 mt-8">
        <h2 className="text-xl font-semibold">Recent Application Statuses</h2>
        <button
          className="text-primary text-sm font-medium hover:underline"
          onClick={() => navigate("/profile/applications")}
        >
          View All Applications
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {applications.map(app => (
          <div
            key={app.id}
            className="bg-white rounded-2xl border border-border shadow flex items-center gap-4 px-4 py-3 cursor-pointer transition hover:shadow-md"
            onClick={() => navigate(`/applications/${app.id}`)}
          >
            <img src={app.image} alt={app.title} className="h-14 w-14 rounded-lg object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-lg text-foreground">{app.title}</div>
              <div className="text-xs text-muted-foreground">Applied on {app.appliedDate}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="w-32 flex items-center gap-2 mb-1">
                <div className="flex-1 h-2 rounded bg-muted overflow-hidden">
                  <div
                    className="h-full rounded bg-primary transition-all duration-300"
                    style={{ width: `${app.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-primary">{app.progress}%</span>
              </div>
              <div className="text-xs font-medium text-muted-foreground">{app.status}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TenantApplicationStatuses;
