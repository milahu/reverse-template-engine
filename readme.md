# reverse template engine

find a template of many similar html files

## similar projects

- https://github.com/sng2c/tmplrev

### commercial

most commercial scraping services offer this feature

## status

- [x] working prototype
- [ ] it can find arrays of similar items
- [ ] it can find trees of similar items
- [ ] it can find optional blocks (conditional blocks)
- [ ] the resulting parser is aware of html syntax

## what

a template engine

- takes one template (page.html.tpl) and an array of data (page.json)
- returns an array of texts (page.html)

```
               ┌────────────┐
Template  ────►│            │
               │  Template  │
               │            │
               │   Engine   │
  Data[]  ────►│            ├────►  Text[]
               └────────────┘
```

a **reverse** template engine does the opposite

- takes an array of texts (page.html)
- returns one template (page.html.tpl) and an array of data (page.json)

```
               ┌────────────┐
               │            ├────►  Template
               │  Reverse   │
               │  Template  │
               │   Engine   │
  Text[]  ────►│            ├────►  Data[]
               └────────────┘
```

## based on

### tree diff

- https://github.com/search?l=JavaScript&p=2&q=tree+diff&type=Repositories
- https://github.com/Matt-Esch/virtual-dom
- https://github.com/syntax-tree/unist-diff - part of unifiedjs
- https://github.com/Tchanders/treeDiffer.js

### template-based parsing

different from "template finding"

aka: parser-generators

#### javascript

- https://github.com/blerik/razor.js
- https://github.com/mbrevoort/reverse-string-template
- https://github.com/akushnikov/template-parser
- https://github.com/lezer-parser
- https://github.com/coderaiser/putout

#### python

- https://github.com/arshaw/scrapemark

#### java

- https://github.com/juzraai/reverse-template-engine

## see also

- https://stackoverflow.com/questions/18168707/javascript-templating-language-in-reverse
- https://softwareengineering.stackexchange.com/questions/241485/do-input-template-languages-exist
- https://reverseengineering.stackexchange.com/questions/1331/automated-tools-for-file-format-reverse-engineering
- https://stackoverflow.com/questions/42727092/find-similar-branches-in-multiple-trees
- Rajkovic, M., Stankovic, M., & Marković, I. (2011). A Template Engine for Parsing Objects from Textual Representations. (https://doi.org/10.1063/1.3636860) ([semanticscholar.org](https://www.semanticscholar.org/paper/A-Template-Engine-for-Parsing-Objects-from-Textual-Rajkovic-Stankovic/4c5ffbe2fae274e1cdacb8b39d564c6a2e91cf5c)) ([sci-hub.ru](https://sci-hub.ru/https://doi.org/10.1063/1.3636860)) - nothing new there. captain obvious stuff

## keywords

- tree compression of many similar trees
- reverse-engineer the template of many similar html files
- find template from sample data
- template-finding
- template-detection
- template-generation
- template-generator
- grammar generator
- generate schema from data
- approximate schema from data
- find common structure of many similar html files
- generate parser of many similar input files
- reverse-engineering a JSX template from many rendered pages
