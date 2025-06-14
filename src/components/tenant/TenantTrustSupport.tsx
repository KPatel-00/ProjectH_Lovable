
import React from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    text: "The smoothest renting experience ever! Highly recommend.",
    user: "Max L.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Trustworthy platform for students and expats.",
    user: "Sophia W.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];
const partners = [
  { name: "Berlin University", logo: "/placeholder.svg" },
  { name: "Housing24", logo: "/placeholder.svg" }
];

const TenantTrustSupport: React.FC = () => (
  <section className="mt-10 pb-6">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">⭐ Trustpilot Reviews <span className="text-base font-normal ml-1">4.8/5</span></h2>
        <div className="flex space-x-4">
          {reviews.map(r =>
            <div key={r.user} className="rounded-lg bg-white p-4 shadow w-56 flex flex-col">
              <div className="italic">"{r.text}"</div>
              <div className="flex items-center gap-2 mt-3">
                <img src={r.avatar} className="w-7 h-7 rounded-full" alt={r.user} />
                <div className="font-semibold text-sm">{r.user}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 items-start">
        <div>
          <span className="font-semibold">Our Partners:</span>
          <div className="flex gap-4 mt-2">
            {partners.map(p => (
              <img src={p.logo} alt={p.name} key={p.name} className="h-10 w-20 object-contain bg-white rounded shadow" />
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="inline-flex items-center border rounded px-3 py-1 text-xs font-semibold text-emerald-700 border-emerald-300 bg-emerald-50">GDPR Secure</span>
          <span className="inline-flex items-center border rounded px-3 py-1 text-xs font-semibold text-blue-700 border-blue-300 bg-blue-50">Verified Listings</span>
        </div>
        <div className="flex gap-3 mt-2 w-full flex-wrap">
          <Button variant="link" className="px-0 text-blue-700" onClick={() => window.location.href='/help'}>🆘 Help Center</Button>
          <Button variant="link" className="px-0 text-blue-700" onClick={() => window.location.href='/help/how-to-apply'}>📝 How to Apply</Button>
          <Button variant="link" className="px-0 text-blue-700" onClick={() => window.location.href='/terms'}>📄 Terms</Button>
          <Button variant="link" className="px-0 text-blue-700" onClick={() => window.location.href='/privacy'}>Privacy</Button>
        </div>
      </div>
    </div>
  </section>
);
export default TenantTrustSupport;
