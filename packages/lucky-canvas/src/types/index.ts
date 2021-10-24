// 字体类型
export type FontType = {
  text: string
  top?: string | number
  fontColor?: string
  fontSize?: string
  fontStyle?: string
  fontWeight?: string
  lineHeight?: string
}

export type FontExtendType = {
  wordWrap?: boolean
  lengthLimit?: string | number
  lineClamp?: number
}

// 图片类型
export type ImgType = {
  src: string
  top?: string | number
  width?: string
  height?: string
  $resolve?: Function
  $reject?: Function
}

export type BorderRadiusType = string | number
export type BackgroundType = string
export type ShadowType = string

export type ConfigType = {
  // 临时处理元素类型, 当版本升到4.x之后就可以删掉了
  nodeType?: number
  // 配置
  flag: 'WEB' | 'MP-WX' | 'UNI-H5' | 'UNI-MP' | 'TARO-H5' | 'TARO-MP'
  el?: string
  divElement?: HTMLDivElement
  canvasElement?: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  dpr: number
  width: string
  height: string
  unitFunc?: (num: number, unit: string) => number
  // 覆盖方法
  rAF?: Function
  setTimeout: Function
  setInterval: Function
  clearTimeout: Function
  clearInterval: Function
  // 组件生命周期
  beforeCreate?: Function
  beforeInit?: Function
  afterInit?: Function
  beforeDraw?: Function
  afterDraw?: Function
}

type RequireKey = 'width' | 'height'
export type UserConfigType = Partial<Omit<ConfigType, RequireKey>> & Required<Pick<ConfigType, RequireKey>>

export type UniImageType = {
  path: string
  width: number
  height: number
}
