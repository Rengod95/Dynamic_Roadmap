import { Root } from './RoadMapList.styles';
import { useRoadMaps } from '@/components/RoadMap/List/RoadMapList.hooks';
import { RoadMapListItem } from '@/components/RoadMap/List/RoadMapListItem';

export type RoadMapListProps = {};
export const RoadMapList = ({}: RoadMapListProps) => {
  const { data = [] } = useRoadMaps();
  return (
    <Root>
      {data.map((roadMap) => (
        <RoadMapListItem {...roadMap} key={roadMap.id} />
      ))}
    </Root>
  );
};
