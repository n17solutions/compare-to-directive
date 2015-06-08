# N17 Compare

## Angular Directive

Compare one model value or object to another, great for comparing passwords in a user registration form for example.

### Installation

**Bower**

`bower install --save n17compare`

**GitHub**

https://github.com/n17solutions/tooltip-directive.git

The usable files are housed in the **dist** folder

### Compatibility

N17 Compare requires:
* AngularJS

If you are already using these frameworks in your project, you should use the files from the **no-frameworks** folder. We have also included a full bundle in the **inc-frameworks** folder. 

If using the **inc-frameworks** source, you will need to bootstrap an AngularJS App around all N17 Compare on the page. For Example:

```html
<div ng-app="n17-compare">
	...
		<input type="password" name="password" ng-model="password" />
		<input type="password" name="comparePassword" ng-model="comparePassword" compare-to="password" />
		...
```

If using AngularJS in your app already, you will need to add N17 Validators as a dependency of your app. For Example:
```javascript
var app = angular.module('myapp', ['n17-validators']);
```

### Usage

```html
<form name="myForm" novalidate>
	<input type="password" name="password" ng-model="password" />
	<input type="password" name="comparePassword" ng-model="comparePassword" compare-to="password" />
	<div ng-show="myForm.comparePassword.$error.compareTo">Fields do not match!</div>
</form>
```

### Options

There are many options available and they can be accessed using the Angular Directive attribute notation.
For Example:

```html
<input type="password" name="comparePassword" ng-model="comparePassword" compare-to="password" />
```

*List of Options*
* compare-to:				 	String|Object 	- The model value or object to compare to
* compare-to-case-insensitive:	Boolean 		- Whether to check using case sensitivity