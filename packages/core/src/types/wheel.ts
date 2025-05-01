import {
  FontItemType,
  ImgItemType,
  BackgroundType,
  FontExtendType,
} from "./index";

export type PrizeFontType = FontItemType &
  FontExtendType & {
    textDirection?: "horizontal" | "vertical"; // 文字方向，水平或垂直
  };

export type ButtonFontType = FontItemType & {};

export type BlockImgType = ImgItemType & {
  rotate?: boolean;
};

export type PrizeImgType = ImgItemType & {};

export type ButtonImgType = ImgItemType & {};

export type BlockType = {
  padding?: string;
  background?: BackgroundType;
  imgs?: Array<BlockImgType>;
};

export type PrizeType = {
  range?: number;
  _computedAngle?: number;
  angle?: number;
  background?: BackgroundType;
  fonts?: Array<PrizeFontType>;
  imgs?: Array<PrizeImgType>;
  activeBackground?: string; // 激活状态背景色
  activeBorder?: string; // 新增激活边框颜色
  activeBorderWidth?: string; // 边框宽度
  multipleSelectable?: boolean; // 是否允许多选
  activeFontColor?: ButtonFontType["fontColor"];
};

export type ButtonType = {
  radius?: string;
  pointer?: boolean;
  background?: BackgroundType;
  fonts?: Array<ButtonFontType>;
  imgs?: Array<ButtonImgType>;
};

export type DefaultConfigType = {
  gutter?: string | number;
  offsetDegree?: number;
  speed?: number;
  speedFunction?: string;
  accelerationTime?: number;
  decelerationTime?: number;
  stopRange?: number;
  autoAngle?: boolean; // 新增：是否自动平分角度
  canSelect?: boolean; // 新增：可以选择
};

export type DefaultStyleType = {
  background?: BackgroundType;
  fontColor?: PrizeFontType["fontColor"];
  fontSize?: PrizeFontType["fontSize"];
  fontStyle?: PrizeFontType["fontStyle"];
  fontWeight?: PrizeFontType["fontWeight"];
  lineHeight?: PrizeFontType["lineHeight"];
  wordWrap?: PrizeFontType["wordWrap"];
  lengthLimit?: PrizeFontType["lengthLimit"];
  lineClamp?: PrizeFontType["lineClamp"];
  activeBackground?: string; // 激活状态背景色
  activeBorder?: string; // 新增激活边框颜色
  activeBorderWidth?: string; // 边框宽度
  multipleSelectable?: boolean; // 是否允许多选
  activeFontColor?: ButtonFontType["fontColor"];
  // 小圆球配置
  circleRadius?: number; // 小圆球半径
  circleColor?: string; // 小圆球颜色
  circleVisible?: boolean; // 是否显示小圆球
  // 文字方向配置
  textDirection?: "horizontal" | "vertical"; // 文字方向，水平或垂直
};

export type StartCallbackType = (e: MouseEvent) => void;
export type EndCallbackType = (prize: object, index: number) => void;
export type SelectCallbackType = (prizes: Array<number>) => void;

export default interface LuckyWheelConfig {
  width: string | number;
  height: string | number;
  blocks?: Array<BlockType>;
  prizes?: Array<PrizeType>;
  buttons?: Array<ButtonType>;
  defaultConfig?: DefaultConfigType;
  defaultStyle?: DefaultStyleType;
  start?: StartCallbackType;
  end?: EndCallbackType;
  select?: SelectCallbackType;
}
