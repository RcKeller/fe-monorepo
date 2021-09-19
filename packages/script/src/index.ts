/// <reference types="@rckeller/example-sdk" />

function init () {
  if (typeof window !== 'undefined') return undefined;
  global.window.dataLayer = [];
}

export default { init }
