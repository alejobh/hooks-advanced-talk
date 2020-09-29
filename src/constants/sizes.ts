export const SCREEN_SIZES: { [key: string]: { name: string; width: number } } = {
  xxs: { name: 'xxs', width: 320 },
  xs: { name: 'xs', width: 375 },
  sm: { name: 'sm', width: 550 },
  md: { name: 'md', width: 768 },
  lg: { name: 'lg', width: 1024 }
} as const;
// By using as const we get a union of literal types returned by getSize

export const SMALL_SCREENS = [SCREEN_SIZES.xxs.name, SCREEN_SIZES.xs.name, SCREEN_SIZES.sm.name];
