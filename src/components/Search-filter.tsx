// components/search-filters.tsx
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
  
  export function SearchFilters() {
    return (
      <div className="flex space-x-4">
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tech">Technology</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
          </SelectContent>
        </Select>
  
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10</SelectItem>
            <SelectItem value="11-50">11-50</SelectItem>
            <SelectItem value="51-200">51-200</SelectItem>
            <SelectItem value="201-1000">201-1000</SelectItem>
            <SelectItem value="1000+">1000+</SelectItem>
          </SelectContent>
        </Select>
  
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="na">North America</SelectItem>
            <SelectItem value="eu">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  }