import { Aurelia } from 'aurelia-framework'

export function configure(aurelia : Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validation');

  aurelia.start().then(a => a.setRoot('app', document.body)); 
}