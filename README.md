# object-hmac

A simple hashing library that provides consistent object signatures with a secret using bencode and crypto for node.js

# Installation

```
npm install object-hmac
```

# Usage

```
var serialize = require('object-hmac');
var secret = "My hmac secret";
var hash = serialize({key: 'value', key1: 'value1'}, secret);
```
