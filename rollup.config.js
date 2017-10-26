import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/platform-browser': 'ng.platform-browser',
  '@angular/forms': 'ng.forms',
  '@ngrx/store': 'ngrx.store',
  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/add/operator/distinctUntilChanged': 'Rx',
  'rxjs/add/operator/do': 'Rx',
  'rxjs/add/operator/filter': 'Rx',
  'rxjs/add/operator/map': 'Rx',
};

export default {
  entry: './dist/@ngrx/forms.es5.js',
  dest: './dist/bundles/forms.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ngrx.forms',
  plugins: [resolve()],
  external: Object.keys(globals),
  globals: globals,
  onwarn: () => { return }
}
