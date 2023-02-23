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
export const roadMapListUrl = '/api/roadmap';
export const getRoadMapList = async () => {
  const { roadMapList } = await request<RoadMapListResponse>(roadMapListUrl);
  return roadMapList;
};

export const useRoadMapList = (options?: QueryOptions<RoadMap[]>) =>
  useQuery<RoadMap[]>(['roadMap'], getRoadMapList, options);