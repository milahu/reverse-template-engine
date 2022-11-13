import {parse} from 'parse5'
//import {read} from 'to-vfile'
//import {inspect} from 'unist-util-inspect'
import {fromParse5} from 'hast-util-from-parse5'
//import glob from 'tiny-glob'
import {visit} from 'unist-util-visit'
//import {toString} from 'hast-util-to-string' // only text contents, no html string
import {toHtml} from 'hast-util-to-html'

import fs from 'fs'

import reverseStringTemplate from './reverse-string-template/index.js'
//TypeError: Cannot read properties of undefined (reading 'baz')
//import * as razor from './razor.js/razor.js'

import Underscore from 'underscore'
/*
import handlebars from 'handlebars'
import Mustache from 'mustache'
import Dot from 'dot'
*/



// TODO
//const pathGlob = "/home/user/src/milahu/soylent/www.completefoods.co/diy/recipes/*.html"

const d = "/home/user/src/milahu/soylent/www.completefoods.co/diy/recipes"

const leftFile = `${d}/path/to/original-left.html`
const rightFile = `${d}/path/to/original-right.html`



Underscore.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

/*
Underscore.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};
const render = Underscore.template("Hello {{ name[0] }}!");
const result = render({name: ["Mustache"]});
console.dir({result})

throw new Error("todo")

console.dir({
  res: Dot.template("{{a}}")({a:1}),
})
throw new Error("todo")
*/

/*
template engines

Underscore.template works as expected
{{ name[0] }} is supported

squirrelly scopes data in varName = "it" -> {{it.name1}} instead of {{name1}}

handlebars does not support array data: {{name[0]}} throws parse error
but nested objects work
https://handlebarsjs.com/guide/#nested-input-objects
{{name[0]}} throws: Expecting 'ID', 'STRING', 'NUMBER', 'BOOLEAN', 'UNDEFINED', 'NULL', 'DATA', got 'INVALID'
{{name.0}} throws: Expecting 'ID', got 'NUMBER'
supported syntax:
{{name.[0]}}
-> ugly
https://github.com/handlebars-lang/handlebars.js/issues/1322

mustache silently ignores {{name[0]}}

//const render = handlebars.compile(template)
//const render = (data) => Mustache.render(template, data)
*/

//console.log(inspect(hast))

//import {h} from 'hastscript'
import diff from 'unist-diff'

function getAst(source) {
  const p5ast = parse(source, {
    sourceCodeLocationInfo: true,
  })
  const hast = fromParse5(p5ast)
  return hast
}

/*
async function astOfPath(path) {
  const file = await read(path)
  const p5ast = parse(String(file), {
    sourceCodeLocationInfo: true,
  })
  const hast = fromParse5(p5ast, file)
  return hast
}
*/

async function main() {

  let leftSource, rightSource, expectedTemplate

  var isTest = false
  var isTest = true

  if (isTest) {
    // generate test sources
    expectedTemplate = `
      <html>
        <head>
          <title>{{data[0]}}</title>
        </head>
        <body>
          <section>
            <h1>{{data[1]}}</h1>
            <div>{{data[2]}}</div>
          </section>
        </body>
      </html>
    `
    const dataLength = 3
    function data(side, length) {
      length = dataLength
      return {
        // left data 0, left data 1, ...
        data: Array.from({length}).map((_, idx) => `${side} data ${idx}`)
      }
    }
    const render = Underscore.template(expectedTemplate);
    leftSource = render(data("left"))
    rightSource = render(data("right"))
  }

  else {
    // use real source files
    leftSource = fs.readFileSync(leftFile, "utf8")
    rightSource = fs.readFileSync(rightFile, "utf8")
  }

  const left = getAst(leftSource)
  const right = getAst(rightSource)

  //console.dir({leftSource, rightSource}, {depth: 3})

  const changes = diff(left, right)

  //delete changes.left; console.dir(changes, {depth: 3})

  //console.dir(Object.keys(changes), {depth: 3})

  /*
  delete changes.left
  for (const nodeIdStr of Object.keys(changes)) {
    const change = changes[nodeIdStr]
    const nodeIndex = +nodeIdStr
    console.dir({ nodeIdStr, nodeIndex, change, })
  }
  */

  //console.log("left"); console.dir(left, {depth: 8})

  //console.log("replace")
  // replace
  let nodeIndex = 0
  let dataIndex = -1
  const leftData = []
  function visitor(node, _index, _parent) {
    // note: nodeIndex != index
    nodeIndex++
    //console.dir({nodeIndex, node}, {depth: 5})
    if (nodeIndex in changes) {
      const change = changes[nodeIndex]
      if (change.type == "text") {
        //console.log("replace node.children")
        //console.dir({nodeIndex, node}, {depth: 5})
        dataIndex++
        leftData.push(toHtml({type: "root", children: node.children}))
        node.children = [
          {
            type: "text",
            value: `{{data[${dataIndex}]}}` // {{data[0]}}
            //value: `{{data_${dataIndex}}}` // {{data_0}}
          }
        ]
      }
    }
  }
  visit(left, visitor)

  function normalizeHtml(source) {
    return toHtml(getAst(source))
  }

  const template = toHtml(left)

  if (isTest) {
    console.log(`expected template:\n${normalizeHtml(expectedTemplate)}\n`)
  }

  console.log(`template:\n${template}\n`)
  console.dir({leftData})
  console.dir({leftData_length: leftData.length})



  // parse rightData

  // https://github.com/mbrevoort/reverse-string-template
  const rightData = reverseStringTemplate(normalizeHtml(rightSource), template)

  // https://github.com/blerik/razor.js
  // TypeError: Cannot read properties of undefined (reading 'data_0')
  //const rightData = razor.getModel(template, normalizeHtml(rightSource));



  console.dir({rightData})

  if (isTest == false) {
    console.log(`writing template.html`)
    fs.writeFileSync("template.html", template, "utf8")

    console.log(`writing left.html`)
    fs.writeFileSync("left.html", normalizeHtml(leftSource), "utf8")

    console.log(`writing right.html`)
    fs.writeFileSync("right.html", normalizeHtml(rightSource), "utf8")

    console.log(`compare:`)
    console.log(`git diff --color-words=. template.html left.html`)
    console.log(`git diff --color-words=. template.html right.html`)
  }
}

main()
