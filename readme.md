# reverse template engine

find a template of many similar html files

## similar projects

- https://github.com/sng2c/tmplrev
- https://github.com/wimpyprogrammer/strings-to-regex

### commercial

most commercial scraping services offer this feature

## status

- [x] it can compare two files
- [ ] it can compare multiple files
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

### common substrings

- https://github.com/hanwencheng/CommonSubstrings
- https://stackoverflow.com/questions/2892931/longest-common-substring-from-more-than-two-strings

### common pattern

- https://stackoverflow.com/questions/72591638/how-to-find-common-patterns-in-thousands-of-strings
  - https://en.wikipedia.org/wiki/Phrasal_template
  - https://en.wikipedia.org/wiki/Collocation_extraction
  - https://en.wikipedia.org/wiki/Text_mining - parsing, deriving patterns, evaluation
- https://datascience.stackexchange.com/questions/111739/how-to-find-common-patterns-in-thousands-of-strings
  - sequence alignment algorithms, usually found in bioinformatics
    - https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm
    - https://en.wikipedia.org/wiki/Hirschberg%27s_algorithm
- https://datascience.stackexchange.com/questions/27058/finding-repeating-string-patterns-in-thousands-of-files
- Algorithms for Finding Patterns in Strings https://sci-hub.ru/https://doi.org/10.1016/B978-0-444-88071-0.50010-2

### grammar inference

- https://datascience.stackexchange.com/questions/78377/learn-common-grammar-pattern-from-set-of-sample-strings
  - grammar learning, grammar inference, grammatical inference, grammar induction
    - https://en.wikipedia.org/wiki/Grammar_induction
- https://stackoverflow.com/questions/15512918/grammatical-inference-of-regular-expressions-for-given-finite-list-of-representa
  - DFA Learning algorithm
    - DFA = deterministic finite automaton
  - libalf - automata learning algorithm framework in C++ 
    - http://libalf.informatik.rwth-aachen.de/
    - https://github.com/libalf/libalf
- https://github.com/topics/grammatical-inference
- https://github.com/topics/inductive-learning
- https://libgen.rs/search.php?req=grammatical+inference
- https://libgen.rs/search.php?req=grammar+inference

<blockquote>
  
1.1 The Problem and Its Various Formulations

Let us start with the presentation of how many variants of a grammatical inference
problem we may be faced with.

Informally, we are given a sequence of words and
the task is to find a rule that lies behind it.

Different models and goals are given
by response to the following questions:

- Is the sequence finite or infinite?
- Does the sequence contain only examples (positive words)
  or also counter-examples (negative words)?
- Is the sequence of the form: all positive and negative words up to a certain length n?
- What is meant by the rule: are we satisfied with
  - regular acceptor
  - contextfree grammar
  - context-sensitive grammar
  - other tool?
- Among all the rules that match the input, should the obtained one be of a minimum size?

&mdash; Wojciech Wieczorek - Grammatical Inference. Algorithms Routines and Applications (2017)

</blockquote>

### automata learning

- https://github.com/topics/automata-learning
- https://github.com/topics/dfa-learning
- https://github.com/DES-Lab/AALpy
- https://github.com/steynvl/inferrer
- https://github.com/LearnLib/learnlib
- https://github.com/mvcisback/dfa-identify - identifying (learning) minimal DFAs from labeled examples by reduction to SAT
- https://github.com/ctlab/DFA-Inductor-py - passive inference via reduction to SAT
- https://gitlab.science.ru.nl/rick/z3gi - SMT backed passive learning algorithm
- https://pypi.org/project/lstar/ - Active learning algorithm based L* derivative

#### suffix tree

- https://github.com/maclandrol/SuffixTreeJS
- https://github.com/jayrbolton/node-suffix-tree
- https://github.com/nyxtom/text-tree

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
