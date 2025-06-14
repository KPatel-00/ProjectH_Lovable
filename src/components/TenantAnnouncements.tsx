
import React from "react";

type Announcement = {
  title: string;
  desc: string;
};

type Props = {
  announcements: Announcement[];
};

const TenantAnnouncements: React.FC<Props> = ({ announcements }) => (
  <section className="mt-4 mb-6">
    <h2 className="text-xl font-semibold mb-2">Announcements & Tips</h2>
    <div className="flex flex-col gap-3">
      {announcements.map((a, i) => (
        <div key={i} className="bg-accent/60 border border-border rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm">
          <span className="font-semibold text-primary">{a.title}</span>
          <span className="text-sm text-foreground">{a.desc}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TenantAnnouncements;
