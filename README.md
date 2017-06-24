# string-url-extractor
Lightweight JavaScript library for extract URLs from strings

### Usage
```javascript
const stringUrlExtractor = require('string-url-extractor');

let text = 'Let`s extract some urls from this string, like http://some-url.com, https://some-url.com/path, some-url.io, www.some-url.com, ftp://some.ftp.com';

console.log(stringUrlExtractor(text));
// ['http://some-url.com', 'https://some-url.com/path', 'some-url.io', 'www.some-url.com', 'ftp://some.ftp.com'];
```
