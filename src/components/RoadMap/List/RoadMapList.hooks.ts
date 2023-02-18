import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { request } from '@/utils';
import { QueryOptions } from '@/utils/query';

export type RoadMap = {
  id: number;
};

export type RoadMapListResponse = {
  roadMapList: RoadMap[];
};

// TODO: update api path
// TODO: add proxy for path /api
export const roadMapsUrl = '/api/roadmap';
export const getRoadMaps = async () => {
  const { roadMapList } = await request<RoadMapListResponse>(roadMapsUrl);
  return roadMapList;
};

export const useRoadMapList = (options?: QueryOptions<RoadMap[]>) =>
  useQuery<RoadMap[]>(['roadMap'], getRoadMaps, options);
