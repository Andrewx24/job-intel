// components/PersonCard.tsx
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Person } from '@/lib/types';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Linkedin, 
  MessageSquare,
  Briefcase,
  ExternalLink 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-4">
        <div className="flex items-start gap-4">
          {/* Profile Image */}
          <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={person.imageUrl || '/default-avatar.png'}
              alt={`${person.firstName} ${person.lastName}`}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Name and Title */}
            <h3 className="text-lg font-semibold truncate dark:text-white">
              {person.firstName} {person.lastName}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
              {person.title}
            </p>
            
            {/* Company */}
            <Link 
              href={`/companies/${person.companyId}`}
              className="mt-1 text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
            >
              <Building2 className="h-4 w-4" />
              {person.company.name}
            </Link>
          </div>
        </div>

        {/* Location */}
        {person.company.location && (
          <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            {person.company.location.toString()}
          </div>
        )}
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Contact Buttons */}
          <div className="flex flex-col gap-2">
            {person.email && (
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2 text-sm"
                asChild
              >
                <Link href={`mailto:${person.email}`}>
                  <Mail className="h-4 w-4" />
                  Send Email
                  {person.emailStatus === 'verified' && (
                    <span className="ml-auto text-green-600 dark:text-green-400 text-xs">
                      Verified
                    </span>
                  )}
                </Link>
              </Button>
            )}

            {person.socialProfiles?.linkedin && (
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2 text-sm"
                asChild
              >
                <Link 
                  href={person.socialProfiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </Link>
              </Button>
            )}

            <Button 
              variant="outline" 
              className="w-full justify-start gap-2 text-sm"
              asChild
            >
              <Link href={`/messages/new?recipient=${person.id}`}>
                <MessageSquare className="h-4 w-4" />
                Send Message
              </Link>
            </Button>
          </div>

          {/* Additional Information */}
          {person.bio && (
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {person.bio}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}