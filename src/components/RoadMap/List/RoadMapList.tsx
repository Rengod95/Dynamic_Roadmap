import { Root } from './RoadMapList.styles';
import { useRoadMapList } from '@/components/RoadMap/List/RoadMapList.hooks';
import { RoadMapListItem } from '@/components/RoadMap/List/RoadMapListItem';

export type RoadMapListProps = {};
export const RoadMapList = ({}: RoadMapListProps) => {
  const { data: roadMapList = [] } = useRoadMapList();
  return (
    <Root>
      {roadMapList.map((roadMap) => (
        <li key={roadMap.id}>
          <RoadMapListItem {...roadMap} />
        </li>
      ))}
    </Root>
  );
};