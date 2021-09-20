/// <reference types="@rckeller/example-sdk" />

function init () {
  if (typeof window !== 'undefined') return undefined;
  console.warn('@rckeller/example-script: initialize')
  // global.window.dataLayer = [];
}

export default { init }
