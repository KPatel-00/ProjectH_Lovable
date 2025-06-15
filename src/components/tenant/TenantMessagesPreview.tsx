
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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-light tracking-wide text-foreground uppercase">
          Messages from Landlords
        </h2>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate("/messages")}
          className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground p-0 h-auto font-medium"
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
              className="bg-white border border-border rounded-xl p-4 hover:border-primary/20 transition-colors duration-300 group cursor-pointer card-refined"
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
