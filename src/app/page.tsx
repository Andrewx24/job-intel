// app/page.tsx
import { CompanySearch } from "@/components/CompanySearch";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Find Your Next Business Opportunity
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Access detailed information about companies and decision makers across the United States.
        </p>
        <CompanySearch />
      </div>
    </div>
  );
}