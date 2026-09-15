import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../api';

export type Report = {
  id: string;
  cycloneId: string;
  cyclone: {
    name: string;
    basin: string;
  };
  title: string;
  content: string;
  author: string;
  severity: string;
  timestamp: string;
};

export function useReports() {
  return useQuery<Report[]>({
    queryKey: ['reports'],
    queryFn: () => fetcher('/reports'),
  });
}
