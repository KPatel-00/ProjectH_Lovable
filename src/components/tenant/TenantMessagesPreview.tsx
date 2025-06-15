
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import EmptyState from "@/components/EmptyState";
import { MailWarning, ArrowRight } from "lucide-react";

type Message = {
  id: number;
  landlordName: string;
  landlordAvatar: string;
  text: string;
  timestamp: string;
};

type Props = { messages: Message[] };

const TenantMessagesPreview: React.FC<Props> = ({ messages }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {/* Spacer - H2 is now rendered by parent */}
        <span />
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate("/messages")}
          className="rounded-full border px-4 py-1 text-xs uppercase tracking-wider border-border bg-white hover:bg-muted text-foreground shadow-sm transition-all font-normal"
        >
          Go to Inbox
          <ArrowRight className="w-3 h-3 ml-2" />
        </Button>
      </div>

      {messages.length === 0 ? (
        <EmptyState
          icon={MailWarning}
          title="No new messages"
          description="Message threads from landlords about your applications will show up here."
        />
      ) : (
        <div className="space-y-4">
          {messages.slice(0, 3).map(msg => (
            <div
              key={msg.id}
              className="bg-background border border-border rounded-xl p-4 hover:border-primary/40 transition-colors duration-300 group cursor-pointer"
              onClick={() => navigate("/messages")}
            >
              <div className="flex items-center gap-4">
                <img 
                  src={msg.landlordAvatar} 
                  className="w-12 h-12 rounded-full object-cover" 
                  alt={msg.landlordName} 
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-foreground text-sm truncate">
                      {msg.landlordName}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {msg.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {msg.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantMessagesPreview;

