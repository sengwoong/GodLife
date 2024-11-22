const common = {
  GREEN_400: '#66A86A',
  RED_500: '#FF5F5F',
  BLUE_400: '#B4E0FF',
  GRAY_200: '#E7E7E7',
  WHITE_100: '#FFFFFF',
  UNCHANGE_BLACK: '#161616',
};

const colors = {
  GREEN: common.GREEN_400,
  RED: common.RED_500,
  BLUE: common.BLUE_400,
  GRAY: common.GRAY_200,
  BLACK: common.UNCHANGE_BLACK,
  WHITE: common.WHITE_100,
} as const;

const colorHex = {
  GREEN: colors.GREEN,
  RED: colors.RED,
  BLUE: colors.BLUE,
  GRAY: colors.GRAY,
  BLACK: colors.BLACK,
} as const;

export { colors, colorHex };
