ng-scope
========

Angular directive for extending scope.

- Modifying scope properties.
- Defining aliases for scope values.
- Augmenting scope with transient primitives, e.g. for `ng-include`.

## Install

Via Bower:

```sh
$ bower install --save ng-scope
```

Then include `ng-scope.js` in your page.

## Examples

### Wrapping

```html
<div ng-scope="{name: 'Anders', job: 'developer'}">
  <!-- whatever you want here -->
  <!-- parent scope is also accessible -->
</div>
```
### ng-include

```html
<script type="text/ng-template" id="template">
  Hi, my name is {{name}}, and I work as a {{job}}!
  <!-- parent scope is also accessible -->
</script>
<div ng-scope="{name: 'Anders', job: 'developer'}" ng-include src="'template'"></div>
```

### Aliasing

```html
<div ng-scope="{name: fullName}">
  <!-- whatever you want here -->
</div>
```
