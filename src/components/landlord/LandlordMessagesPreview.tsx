
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface Message {
  id: number;
  name: string;
  preview: string;
  time: string;
}
interface Props {
  messages: Message[];
  loading: boolean;
  onInbox: () => void;
}

const LandlordMessagesPreview: React.FC<Props> = ({
  messages,
  loading,
  onInbox
}) => {
  const defaultMessages: Message[] = [
    { id: 1, name: "Anna S.", preview: "Hi, is the apartment still available?", time: "5 min ago" },
    { id: 2, name: "Ben L.", preview: "Can I schedule a tour this weekend?", time: "Today, 11:04" }
  ];

  const displayMessages = loading 
    ? Array.from({ length: 2 }).map((_, idx) => ({
        id: idx,
        name: "",
        preview: "",
        time: ""
      }))
    : messages.length > 0 
    ? messages 
    : defaultMessages;

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-lg text-gray-900">Messages from Tenants</span>
        <Button variant="link" className="text-primary" onClick={onInbox}>Go to Inbox</Button>
      </div>
      <Card>
        <CardContent className="py-2">
          <div className="flex flex-col divide-y divide-muted">
            {displayMessages.slice(0, 3).map((msg, idx) => (
              <div key={msg.id || idx} className="flex items-center gap-3 py-2">
                <Avatar className="h-9 w-9 text-sm">
                  <AvatarFallback className="bg-muted text-gray-700 font-bold">
                    {loading ? "U" : (msg.name || "U")[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">
                    {loading ? <div className="bg-muted h-3 w-14 rounded" /> : msg.name || "User"}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {loading ? <div className="bg-muted h-2 w-24 rounded" /> : msg.preview || "Message preview"}
                  </div>
                </div>
                <div className="text-[11px] text-muted-foreground ml-auto">
                  {loading ? "--" : msg.time || "--"}
                </div>
                <Button size="sm" variant="secondary" className="ml-2" onClick={onInbox}>
                  <MessageSquare className="w-4 h-4 mr-1" /> Reply
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LandlordMessagesPreview;
