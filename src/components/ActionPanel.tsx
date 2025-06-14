
import React, { useState } from "react";
import { Heart, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href);
};

type Props = {
  listingId: string;
};

const ActionPanel: React.FC<Props> = ({ listingId }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-col gap-2 bg-white/70 backdrop-blur rounded-xl shadow border border-border p-4">
      <Button
        className="w-full flex items-center gap-2 text-base font-semibold bg-gradient-to-r from-primary to-secondary"
        onClick={() => window.location.href = `/apply/${listingId}`}
      >
        <Mail className="w-5 h-5" />
        Apply Now
      </Button>
      <Button
        className={`w-full flex items-center gap-2 text-base font-semibold ${saved ? "bg-primary text-white" : "bg-background"}`}
        variant="outline"
        onClick={() => setSaved((s) => !s)}
      >
        <Heart className={saved ? "fill-primary text-primary" : "text-muted-foreground"} />
        {saved ? "Saved" : "Save to Wishlist"}
      </Button>
      <Button
        variant="outline"
        className="w-full flex items-center gap-2"
        onClick={copyLink}
        type="button"
      >
        <Share2 className="w-5 h-5" />
        Share
      </Button>
    </div>
  );
};

export default ActionPanel;
