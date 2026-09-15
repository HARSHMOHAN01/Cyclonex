import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../api';

export type Cyclone = {
  id: string;
  internationalId: string | null;
  name: string;
  basin: string;
  region: string;
  status: string;
  category: number;
  maxWind: number;
  centralPressure: number;
  latitude: number;
  longitude: number;
  movementDirection: number | null;
  movementSpeed: number | null;
  timestamp: string;
  source: string;
};

export type Observation = {
  id: string;
  cycloneId: string;
  timestamp: string;
  latitude: number;
  longitude: number;
  windSpeed: number;
  pressure: number;
  category: number;
  source: string;
};

export type Track = Observation; // Essentially the same structure

export type ForecastPoint = {
  id: string;
  forecastRunId: string;
  forecastTime: string;
  latitude: number;
  longitude: number;
  windSpeed: number;
  pressure: number;
  category: number;
  confidence: number | null;
};

export type ForecastRun = {
  id: string;
  cycloneId: string;
  model: string;
  initializedAt: string;
  points: ForecastPoint[];
};

export function useCyclones(status?: 'Active' | 'Archived') {
  const queryParam = status ? `?status=${status}` : '';
  return useQuery<Cyclone[]>({
    queryKey: ['cyclones', status],
    queryFn: () => fetcher(`/cyclones${queryParam}`),
  });
}

export function useCycloneDetails(id: string) {
  return useQuery<{ cyclone: Cyclone, observations: Observation[], reports: any[] }>({
    queryKey: ['cyclones', id],
    queryFn: () => fetcher(`/cyclones/${id}`),
    enabled: !!id,
  });
}

export function useCycloneTracks(id: string) {
  return useQuery<Track[]>({
    queryKey: ['cyclones', id, 'tracks'],
    queryFn: () => fetcher(`/cyclones/${id}/tracks`),
    enabled: !!id,
  });
}

export function useCycloneForecasts(id: string) {
  return useQuery<ForecastRun[]>({
    queryKey: ['cyclones', id, 'forecasts'],
    queryFn: () => fetcher(`/cyclones/${id}/forecasts`),
    enabled: !!id,
  });
}
