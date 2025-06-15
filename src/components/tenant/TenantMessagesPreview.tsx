
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import EmptyState from "@/components/EmptyState";
import { MailWarning } from "lucide-react";
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
    <section className="mt-7">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
          Messages from Landlords
        </h2>
        <Button size="sm" onClick={() => navigate("/messages")}>
          Go to Inbox
        </Button>
      </div>
      {messages.length === 0 ? (
        <EmptyState
          icon={MailWarning}
          title="No new messages"
          description="Message threads from landlords about your applications will show up here."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {messages.map(msg =>
            <div
              key={msg.id}
              className="flex items-center gap-3 bg-white/90 border border-border rounded-xl shadow-[0_2px_10px_-5px_rgba(146,153,188,0.09)] p-3 hover:shadow-md hover:scale-[1.01] transition"
            >
              <img src={msg.landlordAvatar} className="w-10 h-10 rounded-full object-cover border" alt={msg.landlordName} />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-foreground truncate">{msg.landlordName}</div>
                <div className="text-sm text-muted-foreground truncate">{msg.text}</div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">{msg.timestamp}</div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
export default TenantMessagesPreview;
