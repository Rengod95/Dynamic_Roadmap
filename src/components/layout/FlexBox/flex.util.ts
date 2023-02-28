import styled from '@emotion/styled';

type mainAxisDirection = 'row' | 'column';
type useOneLine = 'nowrap' | 'wrap';
type mainAxisItemPos = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
type subAxisItemPosOneline =
  | 'stretch'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';
type subAxisItemPos = 'flex-start' | 'center' | 'flex-end' | 'stretch';

interface FlexConfig {
  element: any;
  mainAxisDirection?: mainAxisDirection;
  useOneLine?: useOneLine;
  mainAxisItemPos?: mainAxisItemPos;
  subAxisItemPosOneLine?: subAxisItemPosOneline;
  subAxisItemPos?: subAxisItemPos;
}

const DEFAULT_MAIN_AXIS_DIRECTION = 'row';
const DEFAULT_USE_ONE_LINE = 'nowrap';
const DEFAULT_MAIN_AXIS_ITEM_POS = 'center';
const DEFAULT_SUB_AXIS_ITEM_POS_ONE_LINE = 'center';
const DEFAULT_SUB_AXIS_ITEM_POS = 'stretch';

class FlexBox {
  private element: any;
  private mainAxisDirection: mainAxisDirection = DEFAULT_MAIN_AXIS_DIRECTION;
  private useOneLine: useOneLine = DEFAULT_USE_ONE_LINE;
  private mainAxisItemPos: mainAxisItemPos = DEFAULT_MAIN_AXIS_ITEM_POS;
  private subAxisItemPosOneLine: subAxisItemPosOneline = DEFAULT_SUB_AXIS_ITEM_POS_ONE_LINE;
  private subAxisItemPos: subAxisItemPos = DEFAULT_MAIN_AXIS_ITEM_POS;

  private setMainAxisDirection = (direction: mainAxisDirection) => {
    this.mainAxisDirection = direction;
    return this;
  };

  private setUseOneLine = (useOne: useOneLine) => {
    this.useOneLine = useOne;
    return this;
  };

  private setMainAxisItemPos = (pos: mainAxisItemPos) => {
    this.mainAxisItemPos = pos;
    return this;
  };

  private setSubAxisItemPos = (pos: subAxisItemPos) => {
    this.subAxisItemPos = pos;
    return this;
  };

  private setSubAxisItemPosOneLine = (pos: subAxisItemPosOneline) => {
    this.subAxisItemPosOneLine = pos;
    return this;
  };

  public resetFlexConfig() {
    this.mainAxisDirection = DEFAULT_MAIN_AXIS_DIRECTION;
    this.useOneLine = DEFAULT_USE_ONE_LINE;
    this.mainAxisItemPos = DEFAULT_MAIN_AXIS_ITEM_POS;
    this.subAxisItemPos = DEFAULT_SUB_AXIS_ITEM_POS;
    this.subAxisItemPosOneLine = DEFAULT_SUB_AXIS_ITEM_POS_ONE_LINE;
    return this;
  }

  private createFlexBox = (element: any = 'div') => {
    return styled(element)`
      display: flex;
      flex-direction: ${this.mainAxisDirection};
      flex-wrap: ${this.useOneLine};
      justify-content: ${this.mainAxisItemPos};
      align-content: ${this.subAxisItemPos};
      align-items: ${this.subAxisItemPosOneLine};
    `;
  };

  public createDefaultFlexBox = (element: any) => {
    this.resetFlexConfig();
    return this.createFlexBox(element);
  };

  public columnFlexBox = (element: any) => {
    this.resetFlexConfig();
    this.setMainAxisDirection('column');
    return this.createFlexBox(element);
  };

  public rowFlexBox = (element: any) => {
    this.resetFlexConfig();
    this.setMainAxisDirection('row');
    return this.createFlexBox(element);
  };

  public columnStartFlexBox = (element: any) => {
    this.resetFlexConfig();
    this.setMainAxisDirection('column');
    this.setMainAxisItemPos('flex-start');
    return this.createFlexBox(element);
  };

  public rowStartFlexBox = (element: any) => {
    this.resetFlexConfig();
    this.setMainAxisDirection('row');
    this.setMainAxisItemPos('flex-start');
    return this.createFlexBox(element);
  };
}

export let FlexBoxCreator: FlexBox = new FlexBox();

export default FlexBoxCreator;
