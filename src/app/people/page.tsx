// app/people/page.tsx
import { Suspense } from 'react';
import { Person } from '@/lib/types';
import { PersonCard } from '@/components/PersonCard';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

// Loading component for people
function LoadingPeople() {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      <span className="ml-2 text-lg text-gray-600 dark:text-gray-300">
        Loading people...
      </span>
    </div>
  );
}

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* Page Header */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              People
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Connect with decision makers and industry professionals
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Search by name, title, or company..."
                className="w-full"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="executive">Executive</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="engineer">Engineer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="us-east">US East</SelectItem>
                <SelectItem value="us-west">US West</SelectItem>
                <SelectItem value="us-central">US Central</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* People Grid with Loading State */}
          <Suspense fallback={<LoadingPeople />}>
            <PeopleList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

async function PeopleList() {
  // In a real app, fetch people from your API
  const people: Person[] = [];

  // Handle empty state
  if (people.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          No people found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}