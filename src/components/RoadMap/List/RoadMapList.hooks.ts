import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { request } from '@/utils';
import { QueryOptions } from '@/utils/query';

export type RoadMap = {
  id: number;
};

export type RoadMapsResponse = {
  roadMapList: RoadMap[];
};

export const roadMapsUrl = '';
export const getRoadMaps = () => request(roadMapsUrl);

// TODO: update to exact type
export const useRoadMaps = (options?: QueryOptions<RoadMap[]>) =>
  useQuery<RoadMap[]>(['roadMap'], getRoadMaps, options);
