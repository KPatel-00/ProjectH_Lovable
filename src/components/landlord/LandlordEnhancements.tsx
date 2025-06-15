
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface Tip {
  tip: string;
  trigger?: string;
}
interface Props {
  tips: Tip[];
}
const LandlordEnhancements: React.FC<Props> = ({ tips }) => (
  <section>
    <div className="font-semibold text-lg text-gray-900 mb-2">Suggestions for You</div>
    <div className="flex flex-col gap-3">
      {tips.map((t, i) => (
        <Card key={i} className="flex flex-row items-center justify-between p-2">
          <CardContent className="flex items-center gap-3 py-2">
            <Pencil className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <span className="font-medium">{t.tip}</span>
              {t.trigger && <div className="text-xs text-muted-foreground">{t.trigger}</div>}
            </div>
          </CardContent>
          <Button size="sm" variant="outline" className="mr-6">Action</Button>
        </Card>
      ))}
    </div>
  </section>
);

export default LandlordEnhancements;
