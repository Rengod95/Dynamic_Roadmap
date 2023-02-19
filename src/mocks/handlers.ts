import { rest } from 'msw';
import { roadMapList } from '@/mocks/RoadMap.mock';
import { roadMapListUrl } from '@/components/RoadMap/List';

export const getRoadMapList = rest.get(roadMapListUrl, (req, res, ctx) =>
  res(
    ctx.json({
      roadMapList,
    })
  )
);

export const handlers = [getRoadMapList];
