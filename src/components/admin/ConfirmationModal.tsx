import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: (reason?: string) => void;
  type: null | "approve" | "reject";
};

export default function ConfirmationModal({ open, onClose, onConfirm, type }: Props) {
  const [reason, setReason] = useState("");
  if (!type) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{type === "approve" ? "Approve?" : "Reject?"}</DialogTitle>
          <DialogDescription>
            {type === "approve"
              ? "Are you sure you want to approve this request?"
              : 
              <>
                Are you sure you want to reject this request?
                <div className="mt-2">
                  <textarea
                    className="w-full border rounded p-2 text-sm"
                    placeholder="Optional: add a reason"
                    rows={2}
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                  />
                </div>
              </>
            }
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button
            variant={type === "approve" ? "default" : "outline"}
            className={type === "reject" ? "text-destructive border-destructive" : ""}
            onClick={() => {
              onConfirm(type === "reject" ? reason : undefined);
            }}
          >
            {type === "approve" ? "Approve" : "Reject"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

