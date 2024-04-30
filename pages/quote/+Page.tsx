import { QuoteForm } from "./QuoteForm";

export function Page() {
  return (
    <div className="flex semidark pad">
      <h3>Request a quote</h3>
      <QuoteForm />
    </div>
  );
}
