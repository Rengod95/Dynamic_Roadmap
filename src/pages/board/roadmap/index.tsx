import { RoadMapList } from '@/components/RoadMap/List';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

export type RoadMapPageProps = {};

export const RoadMapPage = ({}: RoadMapPageProps) => {
  // TODO: concrete component
  return <RoadMapList />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['roadMap']);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
