import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../api';
import { Observation } from './useCyclones';

export type SystemEvent = {
  id: string;
  service: string;
  status: string;
  message: string | null;
  timestamp: string;
};

export function useTelemetryObservations() {
  return useQuery<{ cyclone: { name: string, internationalId: string | null } } & Observation[]>({
    queryKey: ['telemetry', 'observations'],
    queryFn: () => fetcher('/telemetry/observations'),
    refetchInterval: 5000, // Poll every 5s per design specs
  });
}

export function useSystemStatus() {
  return useQuery<SystemEvent[]>({
    queryKey: ['telemetry', 'status'],
    queryFn: () => fetcher('/telemetry/status'),
    refetchInterval: 5000,
  });
}
