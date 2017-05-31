# Plastikaweb2017

[![Travis](https://img.shields.io/travis/plastikaweb/plastikaweb2017.svg)](https://travis-ci.org/plastikaweb/plastikaweb2017)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![codecov](https://codecov.io/gh/plastikaweb/plastikaweb2017/branch/master/graph/badge.svg)](https://codecov.io/gh/plastikaweb/plastikaweb2017)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://choosealicense.com/licenses/mit/)

## Personal Site example using Angular (v 4.0.1).
Just it! You are able to clone, modify, test and use it.

### Main packages and applications.
- This application relies on [Firebase Database](https://firebase.google.com/) as data store mainly. 
- It implements I18N with browser language detection and translation locally via JSON files and the [NGX-Translation](https://github.com/ngx-translate/core) package.
- It uses also [Teradata Covalent](https://teradata.github.io/covalent) and [Angular Material 2](https://github.com/angular/material2) for UX. 
- Uses [flexbox](https://www.w3.org/TR/css-flexbox-1) as layout CSS3 mode.
- Locally implements [AngularFire2](https://github.com/angular/angularfire2) to synchronize with Firebase.
- [Angular/cli](https://cli.angular.io/) utility to generate, serve, test, build and lint the app.

### Other features.
- It uses [NGX-Charts](https://swimlane.gitbooks.io/ngx-charts/content/) with [D3 library](https://d3js.org/).
- A breadcrumb trail thanks to [ng2-breadcrumb](https://github.com/gmostert/ng2-breadcrumb)

## Get the app
```sh
# Install Angular CLI globally
npm install -g @angular/cli@latest

# Clone your fork
git clone git@github.com:plastikaweb/plastikaweb2017.git

# Go to the project directory:
cd plastikaweb2017 {or any custom name}

# Install project dependencies:
npm install

# go to src/config directory, and rename `firebase.config.ts.sample` to `firebase.config.ts`. Fill with your firebase database data.

# go to src/config directory, and edit `lang.config.ts`. Fill with your app languages and the default app language.

# Serve the app
ng serve

# Navigate to http://localhost:4200/

```

License
----

[MIT](https://github.com/plastikaweb/plastikaweb2017/blob/master/LICENSE.md)
