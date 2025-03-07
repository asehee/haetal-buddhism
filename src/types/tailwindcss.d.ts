// types/tailwind.d.ts
declare module 'tailwindcss' {
    export interface Config {
      corePlugins?: {[key: string]: boolean};
      safelist?: string[];
      // 다른 필요한 속성들
    }
  }