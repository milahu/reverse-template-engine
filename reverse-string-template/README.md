## Reverse String Template

Extract values from structured strings. This module used regular expressions under the covers while providing a simpler template stile syntax for specifying patterns. 

Pattern matching is a bit touchy 🤡. If the result is unexpectedly `null`, it means the string wasn't sufficiently matched.

This work was derived from [laktek/extract-values](https://github.com/laktek/extract-values) 🙏. 

### Examples

```javascript
    var tmpl = require('reverse-string-template')

    tmpl("/2012/08/12/test.html", "/{{year}}/{{month}}/{{day}}/{{title}}.html")
    >> { "year": "2012", "month": "08", "day": "12", "title": "test" }

    tmpl("John Doe <john@example.com> (http://example.com)", "{}name}} <{}email}}> ({}url}})")
    >> {"name": "John Doe", "email": "john@example.com", "url": "http://example.com" }

    tmpl("from 4th October  to 10th  October", "from `from` to `to`", { whitespace: 1, delimiters: ["`", "`"] })
    >> {"from": "4th October", "to": "10th October" }

    tmpl("Convert 1500 Grams to Kilograms", "convert {{quantity}} {{from_unit}} to {{to_unit}}", { lowercase: true })
    >> {"quantity": "1500", "from_unit": "grams", "to_unit": "kilograms" }]

```

### How to Use

#### Install as a NPM package

```
    npm install reverse-string-template
```

* Then `require` in your project.
    
```javascript
    
```

### Unit Tests

Run `npm test`.

```shell
  Template
    ✓ lakteks original test cases should pass
    ✓ should output expected values


  2 passing (19ms)
```

### Options

**whitespace** - normalizes the whitespace in the input string, so it can be aligned with the given pattern. You can define the number of continous whitespaces to contain in the string. Making it zero (0) will remove all whitespaces.

**lowercase** - converts the input string to lowercase before matching.

**delimiters** - If specify the delimiters used in the pattern to define the values. Default delimiters are `{{` and `}}`.

**lazy_delimiters** - If specify the lazy delimiters used in the pattern to define the values. Default delimiters are `{%` and `%}`. Lazy delimiator produce matchers using lazy matching (instead of greedy).

### Licence

[MIT LICENSE](https://github.com/laktek/punch/blob/master/LICENSE)