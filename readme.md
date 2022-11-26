# reverse template engine

reverse-engineer a JSX template of many similar HTML files

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

#### Information Extraction

- https://github.com/topics/information-extraction
  - https://github.com/tstanislawek/awesome-document-understanding - OCR, computer vision, image analysis
  - https://github.com/gkiril/oie-resources - NLP
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

##### Information Extraction from Structured Text

https://www.google.com/search?q=xml+information+extraction+automatic+wrapper+generation+grammatical+inference+of+tree+automata

- [A Survey of Web Information Extraction Systems. CH Chang, M Kayed, R Girgis, KF Shaalan, IEEE Transactions 2006](http://scholar.cu.edu.eg/sites/default/files/shaalan/files/iesurvey2006.pdf) - 1200 quotes
- [Roadrunner: Towards automatic data extraction from large web sites. V Crescenzi, G Mecca, P Merialdo, VLDB 2001](https://www.vldb.org/conf/2001/P109.pdf) - 1500 quotes
- [Information Extraction in Structured Documents using Tree Automata](https://alpha.uhasselt.be/jan.vandenbussche/ta_paper.pdf)
- [Semantic Wrappers for Semi-Structured Data Extraction](http://atc1.aut.uah.es/~mdolores/Docs/2008/cole07_WebMantic.pdf) - obtain the semantic generators for a particular Web site
- [Information Extraction from Web Documents Based on Local Unranked Tree Automaton Inference. R Kosala, M Bruynooghe, J Van den Bussche 2003](https://www.ijcai.org/Proceedings/03/Papers/060.pdf) - 50 quotes
- [Information Extraction in Structured Documents using Tree Automata Induction](https://users.dcc.uchile.cl/~cgallegu/ie/kosala02information.pdf)
- [Automatic information extraction from large websites. V Crescenzi, G Mecca 2004](http://www.inf.uniroma3.it/wp-content/uploads/2015/03/2003-76.pdf) - 250 quotes
- [Information extraction from structured documents using k-testable tree automaton inference. R Kosala, H Blockeel, M Bruynooghe 2006](https://www.academia.edu/download/49968352/gltestable.pdf) - 50 quotes
- [Information extraction in structured documents using tree automata induction. R Kosala, JV Bussche, M Bruynooghe. 2002](https://sci-hub.ru/https://doi.org/10.1007/3-540-45681-3_25) - 60 quotes

##### Information extraction in structured documents using tree automata induction

[Information extraction in structured documents using tree automata induction. R Kosala, JV Bussche, M Bruynooghe. 2002](https://sci-hub.ru/https://doi.org/10.1007/3-540-45681-3_25) - 60 quotes

<blockquote>

A problem, however, in directly applying tree automata to tree-structured
documents such as HTML or XML documents, is that the latter trees are “unranked”:
the number of children of a node is not fixed by the label, but is varying.

There are two approaches to deal with this situation:

1. The first approach is to use a generalized notion of tree automata towards
unranked tree formalisms (e.g., [17,23]). In such formalisms, the transition
rules are of the form δ(v, e) → q, where e is a regular expression over Q that
describes a sequence of states.
2. The second approach is to encode unranked trees into ranked trees, specifically, binary trees, and to use existing tree automata inference algorithms
for inducing the tree automaton.

In this paper we follow the second approach, because it seems less complicated. An advantage is that we can use existing learning methods that work
on ranked trees. A disadvantage is that we have to preprocess the trees before
applying the algorithm.

17:
C. Pair and A. Quere. D´efinition et etude des bilangages r´eguliers. Information
and Control, 13(6):565–593, 1968.

23:
M. Takahashi. Generalizations of regular sets and their application to a study of
context-free languages. Information and Control, 27:1–36, 1975.

</blockquote>

#### Relation extraction

https://medium.com/@andreasherman/different-ways-of-doing-relation-extraction-from-text-7362b4c3169e

<blockquote>

Different ways of doing Relation Extraction from text

Relation Extraction (RE) is the task of extracting semantic relationships from text, which usually occur between two or more entities. These relations can be of different types. E.g “Paris is in France” states a “is in” relationship from Paris to France. This can be denoted using triples, (Paris, is in, France).

Information Extraction (IE) is the field of extracting structured information from natural language text. This field is used for various NLP tasks, such as creating Knowledge Graphs, Question-Answering System, Text Summarization, etc. Relation extraction is in itself a subfield of IE.

</blockquote>

https://github.com/ekalgolas/Relation-extraction-using-Semantic-Web

<blockquote>

We will process unstructured data from web (obtained by crawling some sample websites) by maybe: having a Apache SolR installation locally and manually feeding it web pages. We can use Stanford NLP API to extract semantics from the unstructured text. After we extract some semantics, we can construct a structured data format, probably RDF/XML/OWL and also have a visual representation of the graph data using Gruff.

</blockquote>

https://www.slideshare.net/butest/information-extraction-from-html-general-machine-learning

#### search engines

- apache lucene?
- solr?



###### A Survey of Web Information Extraction Systems

[A Survey of Web Information Extraction Systems. CH Chang, M Kayed, R Girgis, KF Shaalan, IEEE Transactions 2006](http://scholar.cu.edu.eg/sites/default/files/shaalan/files/iesurvey2006.pdf) - 1200 quotes

<blockquote>

4.2 Supervised WI systems

As shown in the left-bottom of Figure 5, supervised WI systems take a set of web pages labeled with examples of the
data to be extracted and output a wrapper. The user provides an initial set of labeled examples and the system
(with a GUI) may suggest additional pages for the user to
label. For such systems, general users instead of programmers can be trained to use the labeling GUI, thus reducing
the cost of wrapper generation. Such systems are SRV, RAPIER, WHISK, WIEN, STALKER, SoftMealy, NoDoSE, DEByE.

SRV is a top-down relational algorithm that generates single-slot extraction rules [8].
It regards IE as a kind of classification problem. The input documents are tokenized and
all substrings of continuous tokens (i.e. text fragments) are
labeled as either extraction target (positive examples) or not
(negative examples). The rules generated by SRV are logic
rules that rely on a set of token-oriented features (or predicates).
These features have two basic varieties: simple and
relational. A simple feature is a function that maps a token
into some discrete value such as length, character type (e.g.,
numeric), orthography (e.g., capitalized) and part of speech
(e.g., verb). A relational feature maps a token to another
token, e.g. the contextual (previous or next) tokens of the
input tokens. The learning algorithm proceeds as FOIL,
starting with entire set of examples and adds predicates
greedily to cover as many positive examples and as few
negative examples as possible. For example, to extract the
rating score for our running example, SRV might return
rule like Figure 9(a), which says rating is a single numeric
word and occurs within a HTML list tag.

https://www.cs.utexas.edu/~ml/rapier.html - ftp://ftp.cs.utexas.edu/pub/mooney/rapier - RAPIER is a bottom-up inductive learning system for learning information extract rules. It has been tested on several domains and performs comparably to or slightly better than other recent learning system for this task.

RAPIER also focuses on field-level extraction but uses bottom-up (compression-based) relational learning algorithm
[7], i.e. it begins with the most specific rules and then replacing them with more general rules.
RAPIER learns single slot extraction patterns that make use of syntactic and
semantic information including part-of-speech tagger or a
lexicon (WordNet). The extraction rules consist of three distinct patterns. The first one is the pre-filler pattern that
matches text immediately preceding the filler, the second
one is the pattern that match the actual slot filler, finally the
last one is the post-filler pattern that match the text immediately following the filler. As an example, Figure 9(b)
shows the extraction rule for the book title, which is immediately preceded by words “Book”, “Name”, and “</b>”,
and immediately followed by the word “<b>”. The “Filler
pattern” specifies that the title consists of at most two
words that were labeled as “nn” or “nns” by the POS tagger
(i.e., one or two singular or plural common nouns).

WIEN: Kushmerick identified a family of six wrapper
classes, LR, HLRT, OCLR, HOCLRT, N-LR and N-HLRT for
semi-structured Web data extraction [9]. WIEN focuses on
extractor architectures. The first four wrappers are used for
semi-structured documents, while the remaining two
wrappers are used for hierarchically nested documents. The
LR wrapper is a vector of 2K delimiters for a site containing
K attributes. For example, the vector (‘Reviewer name
</b>’, ‘<b>’, ‘Rating </b>’, ‘<b>’, ‘Text </b>’, ‘</li>’) can
be used to extract 3-slot book reviews for our running example. The HLRT class uses two additional delimiters to
skip over potentially-confusing text in either the head or
tail of the page. The OCLR class uses two additional delimiters to identify an entire tuple in the document, and then
uses the LR strategy to extract each attribute in turn. The
HOCLRT wrapper combines the two classes OCLR and
HLRT. The two wrappers N-LR and N-HLRT are extension
of LR and HLRT and designed specifically for nested data
extraction. Note that, since WIEN assumes ordered attributes in a data record, missing attributes and permutation of
attributes can not be handled. 

WHISK uses a covering learning algorithm to generate
multi-slot extraction rules for a wide variety of documents
ranging from structured to free text [6]. When applying to
free text, WHISK works best with input that has been annotated by a syntactic analyzer and a semantic tagger. WHISK
rules are based on a form of regular expression patterns
that identify the context of relevant phrases and the exact
delimiters of those phrases. It takes a set of hand-tagged
training instances to guide the creation of rules and to test
the performance of the proposed rules. WHISK induces
rules top-down, starting from the most general rule that
covers all instances, and then extending the rule by adding
terms one at a time. For example, to generate 3-slot book
reviews, it start with empty rule “*(*)*(*)*(*)*”, where each
parenthesis indicates a phrase to be extracted. The phrase
within the first set of parentheses is bound to the first variable $1, and the second to $2, and forth. Thus, the rule in
Figure 10 can be used to extract our 3-slot book reviews for
our running example. If part of the input remains after the
rule has succeeded, the rule is re-applied to the rest of the
input. Thus, the extraction logic is similar to the LR wrapper for WIEN.

https://dl.acm.org/doi/abs/10.1145/276305.276330 - NoDoSE — a tool for semi-automatically extracting structured and semistructured data from text documents. B. Adelberg, SIGMOD 1998

NoDoSE: Opposed to WIEN, where training examples are
obtained from some oracles that can identify interesting
types of fields within a document, NoDoSE provides an
interactive tool for users to hierarchically decompose semistructured documents (including plain text or HTML pages)
[23]. Thus, NoDoSE is able to handle nested objects. The
system attempts to infer the format/grammar of the input
documents by two heuristic-based mining components: one
that mines text files and the other parses HTML code. Similar to WIEN, the mining algorithms try to find common
prefix and suffix as delimiters for various attributes. Although it does not assume the order of attributes within a
record to be fixed, it seeks to find a totally consistent ordering for various attributes in a record. The result of this task
is a tree that describes the structure of the document. For
example, to generate a wrapper for the running example,
the user can interact with the NoDoSE GUI to decompose
the document as a record with two fields: a book title (an
attribute of type string) and a list of Reviewer, which is in
turn a record of the three fields RName (string), Rate (integer), and Text (string). Next, NoDoSE then automatically
parses them and generates the extraction rules.

SoftMealy: In order to handle missing attributes and attribute permutations in input, Hsu and Dung introduce the
idea of finite-state transducer (FST) to allow more variation
on extractor structures [10]. A FST consists of two different
parts: the body transducer, which extract the part of the page
that contains the tuples (similar to HLRT in WIEN), and the
tuple transducer which iteratively extracts the tuples from
the body. The tuple transducer accepts a tuple and returns
its attributes. Each distinct attribute permutation in the
page can be encoded as a successful path from start state to
the end state of the tuple transducer; and the state transitions are determined by matching contextual rules that describe the context delimiting two adjacent attributes. Contextual rules consist of individual separators that represent
invisible borderlines between adjacent tokens; and an inductive generalization algorithm is used to induce these
rules from training examples. Figure 11 shows an example
of FST that can be used to extract the attributes of the book
reviews: the reviewer name (N), the rating (R), and the
comment (T). In addition to the begin and end states, each
attribute, A , is followed by a dummy state, A . Each arc is
labeled with the contextual rule that enables the transition
and the tokens to output. For example, when the state transition reaches to the R state, the transducer will extract the
attribute R until it matches the contextual rules s<R, R >
(which is composed of s<R, R >L
 and s<R, R >R
). The state
R and the end state are connected if we assume no comment can occur.

STALKER is a WI system that performs hierarchical data
extraction [11]. It introduces the concept of embedded catalog (EC) formalism to describe the structure of a wide range
of semi-structured documents. The EC description of a page
is a tree-like structure in which the leaves are the attributes
to be extracted and the internal nodes are lists of tuples. For
each node in the tree, the wrapper needs a rule to extract
this node from its parent. Additionally, for each list node,
the wrapper requires a list iteration rule that decomposes
the list into individual tuples. Therefore, STALKER turns
the difficult problem of extracting data from an arbitrary
complex document into a series of easier extraction tasks
from higher level to lower level. Moreover, the extractor
uses multi-pass scans to handle missing attributes and multiple permutations. The extraction rules are generated by
using of a sequential covering algorithm, which starts from
linear landmark automata to cover as many positive examples as possible, and then tries to generate new automata
for the remaining examples. A Stalker EC tree that describes
the data structure of the running example is shown in Figure 12(a), where some of the extraction rules are shown in
Figure 12(b). For example, the reviewer ratings can be extracted by first applying the List(Reviewer) extraction rule
(which begins with “<ol>” and ends with “</ol>”) to the
whole document, and then the Rating extraction rule to
each individual reviewer, which is obtained by applying the
iteration rule for List(Reviewer). In a way, STALKER is
equivalent to multi-pass Softmealy [30]. However, the extraction patterns for each attribute can be sequential as opposed to the continuous patterns used by Softmealy. 

DEByE (Data Extraction By Example): Like NoDoSE, DEByE provides an interactive GUI for wrapper generation
[24], [25]. The difference is that in DEByE the user marks
only atomic (attribute) values to assemble nested tables,
while in NoDoSE the user decomposes the whole document
in a top-down fashion. In addition, DEByE adopts a bottom-up extraction strategy which is different from other
approaches. The main feature of this strategy is that it extracts atomic components first and then assembles them
into (nested) objects. The extraction rules, called attributevalue pair patterns (AVPs), for atomic components are identified by context analysis: starting with context length 1, if
the number of matches exceeds the estimated number of
occurrences provided by the user, it adds additional terms
to the pattern until the number of matches is less than the
estimated one. For example, DEByE generates AVP patterns, “Name</b>* <b>Reviews”, “Name</b>*<b> Rating”, “Rating</b>*<b>Text” and “</b>*<li>” for book
name, reviewer name, rating and comment respectively (*
denotes the data to be extracted). The resulting AVPs are
then used to compose an object extraction pattern (OEPs).
OEPs are trees containing information on the structure of
the document. The sub-trees of an OEP are themselves
OEPs, modeling the structure of component objects. At the
bottom of the hierarchy lie the AVPs that used to identify
atomic components. The assemble of atomic values into
lists or tuples is based on the assumption that various occurrences of objects do not overlap each other. For nonhomogeneous objects, the user can specify more than one
example object, thus creating a distinct OEP for each example.

4.3 Semi-Supervised IE systems

The systems that we categorize as semi-supervised IE systems include IEPAD, OLERA and Thresher. As opposed to
supervised approach, OLERA and Thresher accept a rough
(instead of a complete and exact) example from users for
extraction rule generation, therefore they are called semisupervised. IEPAD, although requires no labeled training
pages, post-effort from the user is required to choose the
target pattern and indicate the data to be extracted. All
these systems are targeted for record-level extraction tasks.
Since no extraction targets are specified for such systems, a
GUI is required for users to specify the extraction targets
after the learning phase. Thus, users’ supervision is involved. 

IEPAD is one of the first IE systems that generalize extraction patterns from unlabeled Web pages [31]. This method
exploits the fact that if a Web page contains multiple (homogeneous) data records to be extracted, they are often
rendered regularly using the same template for good visualization. Thus, repetitive patterns can be discovered if the
page is well encoded. Therefore, learning wrappers can be
solved by discovering repetitive patterns. IEPAD uses a
data structure called PAT trees which is a binary suffix tree
to discover repetitive patterns in a Web page. Since such a
data structure only records the exact match for suffixes,
IEPAD further applies center star algorithm to align multiple strings which start from each occurrence of a repeat and
end before the start of next occurrence. Finally, a signature
representation is used to denote the template to comprehend all data records. For our running example, only page
pe2 can be used as input to IEPAD. By encoding each tag as
an individual token and any text between two adjacent tags
as a special token “T”, IEPAD discover the pattern
“<li><b>T</b>T<b>T</b>T <b>T</b>T</li>” with two
occurrences. The user then has to specify, for example, the
2nd, 4th and 6th “T” tokens, as the relevant data (denoting
reviewer name, rating and comment, respectively).

OLERA is a semi-supervised IE system that acquires a
rough example from the user for extraction rule generation
[32]. OLERA can learn extraction rules for pages containing
single data records, a situation where IEPAD fails. OLERA
consists of 3 main operations. (1) Enclosing an information
block of interest: where the user marks an information block
containing a record to be extracted for OLERA to discover
other similar blocks (using approximate matching technique) and generalize them to an extraction pattern (using
multiple string alignment technique). (2) Drilling-down/rollingup an information slot: drilling-down allows the user to
navigate from a text fragment to more detailed components, whereas rolling-up combines several slots to form a
meaningful information unit. (3) Designating relevant information slots for schema specification as in IEPAD.

Thresher [33] is also a semi-supervised approach that is
similar to OLERA. The GUI for Thresher is built in the Hay
stack browser which allows users to specify examples of
semantic contents by highlighting them and describing
their meaning (labeling them). However, it uses tree edit
distance (instead of string edit distance as in OLERA) between the DOM subtrees of these examples to create a
wrapper. Then it allows the user to bind the semantic web
language RDF (Resource Description Framework) classes
and predicates to the nodes of these wrappers.

DEPTA (Data Extraction based on Partial Tree Alignment):
Like IEPAD and DeLa, DEPTA can be only applicable to
Web pages that contain two or more data records in a data
region. However, instead of discovering repeat substring
based on suffix trees, which compares all suffixes of the
HTML tag strings (as the encoded token string described in
IEPAD), it compares only adjacent substrings with starting
tags having the same parent in the HTML tag tree (similar
to HTML DOM tree but only tags are considered). The insight is that data records of the same data region are reflected in the tag tree of a Web page under the same parent
node. Thus, irrelevant substrings do not need to be compared together as that in suffix-based approaches. Furthermore, the substring comparison can be computed by string
edit distance instead of exact string match when using suffix trees where only completely similar substrings are identified. The described algorithm, called MDR [38], works in
three steps. First, it builds an HTML tag tree for the Web
page as shown in Figure 14 where text strings are disregarded.
Second, it compares substrings for all children under the same parent. For example, we need to make two
string comparison, (b1, b2) and (b2, ol), under parent node
<body>, where the tag string node <ol> is represented by
“<li><b><b><b><li><b><b><b>”. If the similarity is
greater than a predefined threshold (as shown in the
shaded nodes in Figure 14), the nodes are recorded as data
regions. The third step is designed to handle situations
when a data record is not rendered contiguously as assumed in previous works. Finally, the recognition of data
items or attributes in a record is accomplished by partial
tree alignment [39]. Tree alignment is better than string
alignment for it considers tree structure, thus, reducing the
number of possible alignments. The algorithm first chooses
the record tree with the largest number of data items as
center and then matches other record trees to the center
tree. However, DEPTA only adds tag nodes to the center
tree when the positions of the tag nodes can be uniquely
determined in the center tree. For remained nodes, they are
processed in the next iteration after all tag trees are processed. Note that DEPTA assumes that non-tag tokens are
data items to be extracted, thus, it extracts not only the reviewer name, rating and comments, but also the labels
“Reviewer Name”, “Rating”, and “Text” for page pe2
 in our
running example. Further, DEPTA is limited to handle
nested data records. So, a new algorithm, NET, is developed to handle such data records by performing a postorder traversal of the visual-based tag tree of a Web page
and matching subtrees in the process using a tree edit distance method and visual cues [40]. 

Of the unsupervised WI approaches, one important issue
is to differentiate the role of each token: either a data token
or template token. Some assume that every HTML tag is
generated by the template and other tokens are data items
to simplify the issue (as in DeLa and DEPTA). However, the
assumption does not hold for many collections of pages
(therefore, IEPAD and OLERA simply leave the issue to
distinguish between data and template tokens to the users).
RoadRunner also assumes that every HTML tag is generated by the template, but other matched string tokens are
also considered as part of the template. In comparison,
EXALG has the most detailed tokenization method while
more flexible assumption where each token can be a template token if there are enough tokens to form frequently
occurring equivalence class.

On the other hand, DEPTA conducts the mining process
from single Web pages, while RoadRunner and EXALG do
the analysis from multiple Web pages (While DeLa takes
advantages of multiple input pages for data-rich section
extraction and generalized pattern construction, it discovers
C-repeat patterns from single Web pages.). The later, in our
viewpoint, is the key point that is used to differentiate the
role of each token. Thus, multiple pages of the same class is
also used to discover data rich section (as in DeLa) or
eliminate noisy information (as in [41]). Meanwhile, the
adaptation of tree matching in DEPTA (as well as Thresher)
also provides better result than string matching techniques
used in IEPAD and RoadRunner. EXALG similarly does not
make full use of the tree structure although the DOM tree
path information is used for differentiating token roles. Finally, since information extraction is only a part of a
wrapper program or information integration systems, additional
tasks like page fetching, label assignment, and mapping
with other web data sources are remained to be processed.

Due to space limitation, we are not able to compare all
researches here. For example, ViNTs [42] is a record-level
wrapper generation system which exploits visual information to find separators between data regions from search
result pages. However, the algorithm can be only applicable
to pages that contain at least four data records. Another
related approach that has been applied on Web sites for
extracting information from tables is [43]. The technique
relies on the use of additional links to a detail page containing additional information about that item. In parallel to the
efforts to detect Web tables, other researchers have worked
in detecting tables in plain text documents (such as government statistical reports) and segmenting them into records [44]. Since these approaches do not address the problem of distinguish data tokens from template tokens, we
consider them as semi-supervised approaches.

</blockquote>

#### An XML-enabled data extraction toolkit for web sources

An XML-enabled data extraction toolkit for web sources. Ling Liu, C. Pu, Wei Han, 2001

http://maaz.ihmc.us/rid=1228288297429_1842851864_16163/An%20XML%20enabled%20data%20extraction%20toolkit.pdf

### Template Induction

#### Discovering Textual Structures: Generative Grammar Induction using Template Trees

Discovering Textual Structures: Generative Grammar Induction using Template Trees. Thomas Winters, L. D. Raedt, 2020

https://arxiv.org/abs/2009.04530

#### Latent Template Induction with Gumbel-CRFs

Latent Template Induction with Gumbel-CRFs. Yao Fu, Chuanqi Tan, Alexander M. Rush, 2020

https://arxiv.org/abs/2011.14244

#### Html Tag Based Web Data Extraction and Tree Merging From Template Page

Html Tag Based Web Data Extraction and Tree Merging From Template Page. A. Chandrasekhar, P. V. S. Readdy, 2014

https://www.academia.edu/download/34193222/V2I3-0067.pdf

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
- https://gitlab.lis-lab.fr/dev/scikit-splearn/ - Python scikit toolbox for spectral learning algorithms. These algorithms aim at learning Weighted Automata (WA) using what is named a Hankel matrix.
- https://pypi.org/project/pylstar/ - Python implementation of the LSTAR Grammatical inference algorithm
- https://github.com/LearnLib/learnlib - 150 stars - Java - Library for Automata Learning and Experimentation.
  - https://bitbucket.org/learnlib/ralib/ - active learning algorithms for register automata
  - https://learnlib.de/
  - https://github.com/Learnlib/learnlib/wiki
- https://github.com/lorisdanto/symbolicautomata - 50 stars - Java - Library for symbolic automata and symbolic visibly pushdown automata
- http://www.italia.cs.ru.nl/tomte/ - tool for learning register automata. The tool uses counterexample guided abstraction refinement to automatically construct abstractions, and uses a Mealy machine learner (such as LearnLib) as a back-end.
- https://github.com/mvcisback/dfa-identify - identifying (learning) minimal DFAs from labeled examples by reduction to SAT
- https://github.com/ctlab/DFA-Inductor-py - passive inference via reduction to SAT
- https://gitlab.science.ru.nl/rick/z3gi - Satisfiability Modulo Theories (SMT) backed passive learning algorithm. Z3GI is a Python tool and library that uses the [Z3 SMT solver](https://github.com/Z3Prover/z3) for learning minimal consistent state machine models from labeled strings or input/output taces. The ideas the tool is based on and the experiments conducted are described in the publication [Model Learning as a Satisfiability Modulo Theories Problem](https://gitlab.science.ru.nl/rick/z3gi/-/blob/master/extended.pdf) due to appear at the LATA 2018 conference.
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
