# Code Syntax Checker (New)
---

This package is aimed at providing a basic syntax check for many languages (listed below) to ensure correct syntax.

You do need to install a few things for each one to work on your system. Click on the languages to scroll to point.

Check syntax via string or file!


### Supported Languages
- [PHP](#php)
- [Ruby](#ruby)
- [Python](#python)
- [Perl](#perl)
- [Lua (needs fixing)](#lua)
- [Bash (needs fixing)](#bash1)
- [c](#c-and-c)
- [c++](#c-and-)
- [js](#javascript)

---

## Installing

To install this package use the below command. Reference each language below for those steps.
```
npm i syntax-checker-new
```

## Examples & Usage for `checkSyntaxString()`
- `codeString`: The string of code you wish to validate.
- `language`: The language your string of code is. This is the language file extension. For example C++ would be `cpp`.
- `callback`: The functions call back object.
    - `passed`: Boolean of whether or not the code passed.
    - `error`: The error code for the syntax error if passed = false. **This is currently not used.**


```js
checkSyntaxString(codeString, language, function(syntaxReturn){
    console.log(syntaxReturn.passed);
    console.log(syntaxReturn.error);
});
```

Javascript Example.
```js
const syntaxchecker = require("syntax-checker-new");
let jscode = `console.log(syntaxReturn);`;
syntaxchecker.checkSyntaxString(jscode, "js", function(syntaxReturn){
    console.log(syntaxReturn.passed) // Expected result: true
});
```

PHP Example.
```js
const syntaxchecker = require("syntax-checker-new");
let phpcode = `<?php echo 'test message; ?>`;
syntaxchecker.checkSyntaxString(phpcode, "php", function(syntaxReturn){
    console.log(syntaxReturn.passed) // Expected result: false (as the quote is not closed)
});
```

---

## Examples & Usage for `checkSyntaxFile()`
- `filePath`: The file path of the file to check.
- `language`: The language your string of code is. This is the language file extension. For example C++ would be `cpp`.
- `callback`: The functions call back object.
    - `passed`: Boolean of whether or not the code passed.
    - `error`: The error code for the syntax error if passed = false. **This is currently not used.**


```js
checkSyntaxFile(filePath, language, function(syntaxReturn){
    console.log(syntaxReturn.passed);
    console.log(syntaxReturn.error);
});
```

Javascript Example.
```js
const syntaxchecker = require("syntax-checker-new");
let jspath = `/root/test.js`;
syntaxchecker.checkSyntaxFile(jspath, "js", function(syntaxReturn){
    console.log(syntaxReturn.passed)
});
```

PHP Example.
```js
const syntaxchecker = require("syntax-checker-new");
let phppath = `/root/test.php`;
syntaxchecker.checkSyntaxFile(phppath, "php", function(syntaxReturn){
    console.log(syntaxReturn.passed)
});
```

---

## Specific Languages

Each language you wish to syntax check may require that language to be installed on your system.

### PHP
If you intend to use PHP syntax checking you will need to install PHP on your system. See the PHP website below for instructions.

https://www.php.net/manual/en/install.php

### Ruby
To use ruby in syntax checking you need to install Ruby. See the below site for more.

https://www.ruby-lang.org/en/documentation/installation/

### Python
To syntax check Python scripts install Python

https://www.python.org/downloads/

### Perl
If you want to syntax check Perl, install Perl.

https://www.perl.org/get.html

### Lua
If you intend to syntax check for Lua errors you need to have Lua installed

http://www.lua.org/download.html

### Bash
Install Bash to syntax check bash scripts.

https://www.gnu.org/software/bash/

### C And C++
These use the same program as the languages are very alike. See the below link.

https://gcc.gnu.org/install/

### Javascript
You're in luck! Javascript uses node for syntax checking so if you have Node.Js installed (which you likely do) then you're fine!


---

## Support
If you need support create a comment on GitHub or if you use Discord talk to the creator (FAXES & Beefer)

[![Discord](https://faxes.zone/i/9wkr3.png)](https://faxes.zone/discord)