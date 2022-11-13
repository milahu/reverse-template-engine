import {parse} from 'parse5'
import {fromParse5} from 'hast-util-from-parse5'
//import glob from 'tiny-glob'
import {visit} from 'unist-util-visit'
import {toHtml} from 'hast-util-to-html'
import diff from 'unist-diff'

import fs from 'fs'

import reverseStringTemplate from './reverse-string-template/index.js'

import Underscore from 'underscore'

// TODO
//const pathGlob = "path/to/input/dir/**/*.html"

const d = "path/to/input/dir"

const leftFile = `${d}/path/to/original-left.html`
const rightFile = `${d}/path/to/original-right.html`



Underscore.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

function getAst(source) {
  const p5ast = parse(source, {
    sourceCodeLocationInfo: true,
  })
  const hast = fromParse5(p5ast)
  return hast
}

function normalizeHtml(source) {
  return toHtml(getAst(source))
}

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
