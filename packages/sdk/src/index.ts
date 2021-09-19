export * from './utils/foo/someFunction';

import { ICustomWindow } from './types/window';

declare global {
  interface Window extends Partial<ICustomWindow> {}
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
    }
  }

  // Declare global variables for TypeScript and VSCode.
  // Do not rename this file or move these types into index.d.ts
  // @see https://code.visualstudio.com/docs/nodejs/working-with-javascript#_global-variables-and-type-checking
  const __DEV__: boolean;
  const __VERSION__: string;
  const $FixMe: any;
}
