#Course about react tech
_________________________________________________________________________
#In this lesson: Extra Feautures --> Boiler Plate.
___

## Description
In this application scratch , we have added new javascript features with Babel.
###  [stage-0]

To install this plugin we need to execute in out console:
```
npm install --save-dev babel-preset-stage-0

```

After install, the way to include in our webpack file config is the following one:
```[javascript]
  presets: ['react', 'es2015', 'stage-0']
```

and we can test it like this example:
*app.jsx*


```[javascript]
var obj1 = {
  name: 'Manuel',
  location: 'Gijon'
};

var obj2 = {
  age:33,
  ...obj1 // this is fucking awesome
};

console.log(obj2);
```

  [stage-0]: http://babeljs.io/docs/plugins/preset-stage-0/ "stage-0 link"
