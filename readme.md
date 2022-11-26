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

#### suffix tree

- https://github.com/maclandrol/SuffixTreeJS
- https://github.com/jayrbolton/node-suffix-tree
- https://github.com/nyxtom/text-tree

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

### learning algorithms

http://libalf.informatik.rwth-aachen.de/

<blockquote>

Algorithm | offline | online | target model
-- | -- | -- | --
Angluin's L* |   | X | DFA
L* (adding counter-examples to columns) |   | X | DFA
Kearns / Vazirani |   | X | DFA
Rivest / Schapire |   | X | DFA
NL* |   | X | NFA
Regular positive negative inference (RPNI) | X |   | DFA
DeLeTe2 | X |   | NFA
Biermann & Feldman's algorithm | X |   | NFA
Biermann & Feldman's algorithm (using SAT-solving) | X |   | DFA

Glossary

DFA: a deterministic finite-state automaton

NFA: a nondeterministic finite-state automaton

Offline learning: offline learning algorithms are learning algorithms that passively receive a set of classified data. Their goal then is to generalize this set of positive and negative words to some kind of explanation H (e.g. a DFA) which is in conformance with the input. aka non-supervised learning, passive learning.

Online learning: In contrast to offline learning algorithms, online learning algorithms are capable of actively asking certain kinds of queries to some teacher who is able to classify these queries. This ability lets them infer explanations for the underlying set of already classified words. aka supervised learning, active learning.

</blockquote>


### grammar inference

- grammar learning, grammar inference, grammatical inference, grammar induction
- https://en.wikipedia.org/wiki/Grammar_induction
- https://datascience.stackexchange.com/questions/78377/learn-common-grammar-pattern-from-set-of-sample-strings
- https://stackoverflow.com/questions/15512918/grammatical-inference-of-regular-expressions-for-given-finite-list-of-representa
  - DFA Learning algorithm
    - DFA = deterministic finite automaton
  - libalf - automata learning algorithm framework in C++ 
    - http://libalf.informatik.rwth-aachen.de/
    - https://github.com/libalf/libalf
- https://github.com/topics/grammatical-inference
- https://github.com/topics/grammar-induction-algorithms
  - https://github.com/asaparov/parser - 20 stars - C++ - Semantic parser induction using a generative model of grammar.
- https://github.com/topics/inductive-learning
- https://github.com/topics/semantic-parser - NLP, natural language processing, human language processing
- https://libgen.rs/search.php?req=grammatical+inference
  - Wojciech Wieczorek - Grammatical Inference. Algorithms Routines and Applications (2017)
  - Colin de la Higuera - Grammatical Inference. Learning Automata and Grammars (2010)
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

<blockquote>

Grammatical Inference

The problem of inducing, learning or inferring grammars has been studied for decades,
but only in recent years has grammatical inference emerged as an independent field with
connections to many scientific disciplines, including bio-informatics,
computational linguistics and pattern recognition.

This book meets the need for a comprehensive and unified
summary of the basic techniques and results, suitable for researchers working in these
various areas.

In Part I, the objects of use for grammatical inference are studied in detail: strings
and their topology, automata and grammars, whether probabilistic or not.

Part II carefully
explores the main questions in the field: what does learning mean? How can we associate
complexity theory with learning?

In Part III the author describes a number of techniques
and algorithms that allow us to learn from text, from an informant, or through interaction
with the environment. These concern automata, grammars, rewriting systems, pattern
languages and transducers.

&mdash; Colin de la Higuera - Grammatical Inference. Learning Automata and Grammars (2010)

</blockquote>

#### Data Extraction

- https://github.com/topics/data-extraction
- https://github.com/hi-primus/optimus - 1K stars - Python - Agile Data Preparation Workflows made easy with Pandas, Dask, cuDF, Dask-cuDF, Vaex and PySpark. Optimus is an opinionated python library to easily load, process, plot and create ML models that run over pandas, Dask, cuDF, dask-cuDF, Vaex or Spark.
- https://github.com/hermit-crab/ScrapeMate - 100 stars - JavaScript - Scraping assistant tool. Editing and maintaining CSS/XPath selectors across webpages. Available as a Chrome/Chromium and a Firefox extensions.
- https://github.com/scopashq/typestream - 50 stars - JavaScript - data transformation framework for TypeScript

<blockquote>

2.4.2 Information extraction: automatic wrapper generation

The quantity of structured data available today due to the exponential growth of the World
Wide Web introduces a number of challenges to scientists interested in grammatical inference.
HTML and XML data appear as text,
but the text is well bracketed through a number of tags
that are either syntactic (HTML) and give indications as to how the file should be represented,
or semantic (XML).

Here is a small piece from an XML file:

```xml
<book>
  <chapter>
    <name>Introduction</name>
    <length>25 pages</length>
    <description>
      Motivations about the book
    </description>
    <exercises>0</exercises>
  </chapter>
  <chapter>
    <name>The Data</name>
    <length>18 pages</length>
    <description>
      Describe some cases where the data is made of strings
    </description>
    <exercises>0</exercises>
  </chapter>
  <chapter>
    <name>Strings and Languages</name>
    <length>35 pages</length>
    <description>
      Definitions of strings and stringology
    </description>
    <exercises>23</exercises>
  </chapter>
</book>
```

Between the many problems when working with these files,
one can aim to **find the grammar corresponding to a set of XML files**.

One very nice application in which grammatical inference has been helpful is that of
building a wrapper automatically (or semi-automatically).
A wrapper is supposed to take a web page and extract from it the information for which it has been designed.

For instance, if we need to build a mailing list, the wrapper would find in a web page the information that is needed.
Obviously, the wrapper will work on the code of the web page: the HTML or XML file.
Therefore, **grammatical inference of tree automata** is an obvious candidate.

Another feature of the task is that labelling the examples is cumbersome and can be noisy.
The proposal is to do this on the fly, through an interaction between the system and the user.
This will justify in part the rising interest in **active learning** methods.

&mdash; Colin de la Higuera - Grammatical Inference. Learning Automata and Grammars (2010)

</blockquote>

#### Tree Automata

https://github.com/topics/tree-automata

<blockquote>

What about trees and graphs?

The original goal was to cover extensively the field of grammatical inference.

This of
course meant discussing in detail **tree automata** and grammars, giving the main adaptation
of classical string algorithms to the case of trees, and even dealing with those works specific
to trees. As work progressed it became clear that **learning tree automata** and grammars was
going to involve at least as much material as with strings.

The conclusion was reached to
only sketch the specificities here, leaving the matter largely untouched, with everything to
be written. This of course is not justified by the importance of the question, but only by the
editorial difficulty and the necessity to stop somewhere. Of course, after trees will come
the question of graphs...

...

Extensions of the above mechanisms (automata, grammars) to deal with trees and
graphs have been proposed. For the case of **tree automata** a general survey is (Comon
et al., 1997) and for graph grammars there are a number of possible sources (Courcelle,
1991).

...

Algorithm RPNI has been successfully adapted to **tree automata** (García & Oncina,
1993), and infinitary languages (de la Higuera & Janodet, 2004).

...

In the field of computational linguistics, efforts have been made to learn context-free
grammars from more informative data, such as trees (Charniak, 1996),
following theoretical results by Yasubumi Sakakibara (Sakakibara, 1992). Learning from structured data has
been a line followed by many: learning tree automata (Fernau, 2002, Habrard, Bernard &
Jacquenet, 2002, Knuutila & Steinby, 1994), or context-free grammars from bracketed data
(Sakakibara, 1990) allows to obtain better results, either with queries (Sakakibara, 1992),
regular distributions (Carrasco, Oncina & Calera-Rubio, 2001, Kremer, 1997, Rico-Juan,
Calera-Rubio & Carrasco, 2002), or negative information (García & Oncina, 1993). This
has also led to different studies concerning the probability estimation of such grammars
(Calera-Rubio & Carrasco, 1998, Lari & Young, 1990).

...

19.3 About trees and graphs and more structure

We have left untouched (or nearly untouched) the question of learning from data that would
be more structured than strings. There are many researchers working on learning tree grammars and tree automata.
In some cases the work consists of adapting a string language
inference algorithm to suit the tree case, but in many others the problems are new and
novel algorithms are needed. Furthermore, in practice, in many cases the tree structures
allow us to model the data in a much more accurate fashion.

...

19.5 About learning itself

A view defended by some is that learning is about compressing; a compression with loss,
where the loss itself corresponds to the gain in learning.

Throughout the book we have viewed algorithms whose chief goal was to get hold of
enormous amounts of data and somehow digest this into a simple set of rules which in turn
allowed us to somehow replace the data by the grammar. In other words, the feeling we
have reached is that learning is all about forgetting.

&mdash; Colin de la Higuera - Grammatical Inference. Learning Automata and Grammars (2010)

</blockquote>

### automata learning

- https://github.com/topics/automata-learning
- https://github.com/topics/dfa-learning
- https://automata.cs.ru.nl/Tools - Automata Wiki
- https://github.com/DES-Lab/AALpy - 100 stars - Python - Active Automata Learning Library
- https://github.com/steynvl/inferrer - 30 stars - Python - automata learning library
- https://github.com/LearnLib/learnlib - 150 stars - Java - Library for Automata Learning and Experimentation.
  - https://bitbucket.org/learnlib/ralib/ - active learning algorithms for register automata
  - https://learnlib.de/
  - https://github.com/Learnlib/learnlib/wiki
- http://www.italia.cs.ru.nl/tomte/ - tool for learning register automata. The tool uses counterexample guided abstraction refinement to automatically construct abstractions, and uses a Mealy machine learner (such as LearnLib) as a back-end.
- https://github.com/mvcisback/dfa-identify - identifying (learning) minimal DFAs from labeled examples by reduction to SAT
- https://github.com/ctlab/DFA-Inductor-py - passive inference via reduction to SAT
- https://gitlab.science.ru.nl/rick/z3gi - SMT backed passive learning algorithm
- https://pypi.org/project/lstar/ - Active learning algorithm based L* derivative
- https://wcventure.github.io/Active-Automata-Learning/ - A Quick Survey of Active Automata Learning
- https://blog.csdn.net/wcventure/article/details/79144074 - Angluin L* algorithm
- https://arxiv.org/pdf/2209.14031.pdf Active vs. Passive: A Comparison of Automata Learning Paradigms for Network Protocols

### Substring-Based Algorithms

#### Alignment-Based Learning

author: van Zaanen 2000

van Zaanen M (2000) ABL: alignment-based learning. In:Proceedings of the 18th international
conference on computational linguistics (COLING), association for computational linguistics,
association for computational linguistics, pp 961–967

https://ilk.uvt.nl/menno/research/software/abl

> ABL learns structure from plain sequences (for example natural language sentences) by comparing them. Based on the parts of the sequences that are the same and parts that are not the same in two sequences, structure is inserted in the sequences.

#### Grammatical Inference

##### Error-Correcting Grammatical Inference

author: Rulot and Vidal 1987

Rulot H, Vidal E (1987) Modelling (sub)string-length based constraints through a grammatical
inference method. In: Kittler J, Devijver P (eds) Proceedings of the NATO advanced study institute
on pattern recognition theory and applications. Springer, pp 451–459

##### ADIOS

author: Solan et al. 2005

Solan Z, Horn D, Ruppin E, Edelman S (2005) Unsupervised learning of natural languages. Proc
Nat Acad Sci USA 102(33):11,629–11,634

##### Data-Oriented Parsing

author: Bod 2006

Bod R (2006) An all-subtrees approach to unsupervised parsing. In: Proceedings of the 21st international conference on computational linguistics and 44th annual meeting of the ACL, association
for computational linguistics, pp 865–872

### tree diff

- https://github.com/search?l=JavaScript&p=2&q=tree+diff&type=Repositories
- https://github.com/Matt-Esch/virtual-dom
- https://github.com/syntax-tree/unist-diff - part of unifiedjs
- https://github.com/Tchanders/treeDiffer.js

### data transformers

- https://github.com/scopashq/typestream

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
- https://pypi.org/project/fado/ - manipulation of automata, manipulation of regular languages, high-level programming, prototyping of algorithms

#### java

- https://github.com/juzraai/reverse-template-engine

#### C++

- https://github.com/html-extract/hext - Domain-specific language for extracting structured data from HTML documents

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
