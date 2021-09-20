/// <reference types="@rckeller/example-sdk" />

const dataLayer = []
window.dataLayer = new Proxy(dataLayer, {
  set: function(target, property, value) {
    if (typeof value === 'object') {
      console.log('dataLayer: new event saved', value);
    }
    target[property] = value;
    // you have to return true to accept the changes
    return true;
  }
});

console.warn('@rckeller/example-script: mock analytics initialized')
