ng-scope
========

Angular directive for extending scope with expression value.

Allows augmenting scope with transient primitives.

## Install

Via Bower:

```sh
$ bower install --save ng-scope
```

Then include `ng-scope.js` in your page.

## Examples

### Wrapping

```js
<div ng-scope="{name: 'Anders', job: 'developer'}">
  <!-- whatever you want here -->
  <!-- parent scope is also accessible -->
</div>
```
### ng-include

```js
<script type="text/ng-template" id="template">
  Hi, my name is {{name}}, and I work as a {{job}}!
  <!-- parent scope is also accessible -->
</script>
<div ng-scope="{name: 'Anders', job: 'developer'}" ng-include src="'template'"></div>
```
