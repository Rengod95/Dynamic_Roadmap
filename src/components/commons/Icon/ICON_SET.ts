import { ViewBoxSize } from '.';

//icon data types
export type IconName = 'arrowLeft' | 'heart' | 'arrowRight';

export interface IconData {
  path: string;
  viewBoxSize: ViewBoxSize;
  [key: string]: any;
}

export const ICON_SET: Record<IconName, IconData> = {
  arrowLeft: {
    path: 'M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z',
    viewBoxSize: '0 0 1024 1024',
  },
  heart: {
    path: 'M 10,30A 20,20 0,0,1 50,30A 20,20 0,0,1 90,30Q 90,60 50,90Q 10,60 10,30 z',
    viewBoxSize: '0 0 100 100',
  },
  arrowRight: {
    path: 'M12.4818 9.99982L5.34175 16.2468C4.92575 16.6108 4.88375 17.2428 5.24775 17.6578C5.61175 18.0738 6.24375 18.1158 6.65875 17.7528L14.6587 10.7518C15.1138 10.3538 15.1138 9.64582 14.6587 9.24782L6.65875 2.24782C6.24375 1.88382 5.61175 1.92582 5.24775 2.34082C4.88375 2.75682 4.92575 3.38882 5.34175 3.75182L12.4818 9.99982Z',
    viewBoxSize: '0 0 20 20',
  },
};
