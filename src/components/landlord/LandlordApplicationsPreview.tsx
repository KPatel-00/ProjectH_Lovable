
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, FileText } from "lucide-react";

interface Application {
  id: number;
  applicantName: string;
  listingTitle: string;
  date: string;
  status?: "New" | "Under Review" | "Accepted" | "Rejected";
}
interface Props {
  applications: Application[];
  loading?: boolean;
  onViewAll: () => void;
}

const statusColors: Record<string, string> = {
  "New": "bg-yellow-100 text-yellow-900",
  "Under Review": "bg-blue-100 text-blue-900",
  "Accepted": "bg-green-100 text-green-900",
  "Rejected": "bg-red-100 text-red-900"
};

const LandlordApplicationsPreview: React.FC<Props> = ({
  applications,
  loading,
  onViewAll
}) => (
  <section>
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-lg text-gray-900">Tenant Applications</span>
      <Button variant="link" className="text-primary" onClick={onViewAll}>Manage All Applications</Button>
    </div>
    <Card>
      <CardContent className="py-3">
        <table className="min-w-full divide-y divide-border">
          <thead>
            <tr>
              <th className="text-left text-xs font-bold text-muted-foreground pb-2">Listing</th>
              <th className="text-left text-xs font-bold text-muted-foreground pb-2">Applicant</th>
              <th className="text-left text-xs font-bold text-muted-foreground pb-2">Date</th>
              <th className="text-left text-xs font-bold text-muted-foreground pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading 
              ? Array.from({ length: 3 }).map((_, idx) => (
                  <tr key={idx} className="border-b last:border-none">
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <div className="bg-muted h-3 w-16 rounded" />
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 text-xs">
                          <AvatarFallback className="bg-muted text-gray-700 font-bold">U</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted h-3 w-12 rounded" />
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="bg-muted h-3 w-10 rounded" />
                    </td>
                    <td className="py-2">
                      <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-yellow-100 text-yellow-900">
                        New
                      </span>
                    </td>
                  </tr>
                ))
              : applications.slice(0, 5).map((app) => (
                  <tr key={app.id} className="border-b last:border-none">
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span>{app.listingTitle}</span>
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 text-xs">
                          <AvatarFallback className="bg-muted text-gray-700 font-bold">{app.applicantName[0]}</AvatarFallback>
                        </Avatar>
                        <span>{app.applicantName}</span>
                      </div>
                    </td>
                    <td className="py-2">
                      <span className="text-xs">{app.date}</span>
                    </td>
                    <td className="py-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${statusColors[app.status || "New"]}`}>
                        {app.status || "New"}
                      </span>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </CardContent>
    </Card>
  </section>
);

export default LandlordApplicationsPreview;
