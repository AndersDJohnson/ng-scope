ng-scope
========

Angular directive for extending scope.

- Modifying scope properties.
- Scope inheritance for `ng-include`, so it has access to parent template scope.
- Defining aliases for scope values.
- Augmenting scope with transient primitives, e.g. for `ng-include`.

Also [available at ngModules.org](http://ngmodules.org/modules/ng-scope).

## Install

Via Bower:

```sh
$ bower install --save ng-scope
```

Then include `ng-scope.js` in your page.

And add it as a dependency of your module, e.g.:

```js
var myApp = angular.module('myApp', ['ngScope']);
```

## Examples

### Wrapping

```html
<div ng-scope="{name: 'Anders', job: 'developer'}">
  <!-- whatever you want here -->
  <!-- parent scope is also accessible -->
</div>
```
### ng-include

#### Scope inheritance

With `ng-include`, we can pass the current scope with `this`:

```html
<div ng-scope="this" ng-include src="'template'"></div>
```

Or, of course, we can pass any value:

```html
<div ng-scope="{name: 'Anders', job: 'developer'}" ng-include src="'template'"></div>

<script type="text/ng-template" id="template">
  Hi, my name is {{name}}, and I work as a {{job}}!
  <!-- parent scope is also accessible -->
</script>
```

### Aliasing

```html
<div ng-scope="{name: fullName}">
  <!-- whatever you want here -->
</div>
```
