module.exports = function extract (str, pattern, options) {
  options = options || {}
  let delimiters = options.delimiters || ['{{', '}}']
  let lazyDelimiters = options.lazy_delimiters || ['{%', '%}']
  let lowercase = options.lowercase
  let whitespace = options.whitespace

  if (lowercase) {
    str = str.toLowerCase()
  }

  if (whitespace) {
    str = str.replace(/\s+/g, (match) => {
      let whitespaceStr = ''
      for (let i = 0; i < whitespace; i++) {
        whitespaceStr = whitespaceStr + match.charAt(0)
      }
      return whitespaceStr
    })
  }

  // Newlines complicate the matching regular expressions so to avoid that whole mess, replace
  // all occurances of newlines in the string and the patterns with obscure ascii characters 🤞
  str = obfuscateNewLine(str)
  pattern = obfuscateNewLine(pattern)

  let specialCharsRegex = /[\\\^\$\*\+\.\?\(\)\[\]|\:]/g
  let greedyStr = makeTokenMatcher(delimiters)
  let lazyStr = makeTokenMatcher(lazyDelimiters)
  let tokenRegex = new RegExp(greedyStr + '|' + lazyStr, 'g')
  let greedyRegex = new RegExp(greedyStr, 'g')
  let lazyRegex = new RegExp(lazyStr, 'g')
  let tokens = pattern.match(tokenRegex)
  let patternRegex = new RegExp(pattern.replace(specialCharsRegex, '\\$&')
    .replace(greedyRegex, '([\\s|\\S]*)')
    .replace(lazyRegex, '([\\s|\\S]*?)'))

  let matches = str.match(patternRegex)

  if (!matches) {
    return null
  }

  // Exact string matches to return an empty object, no match returns null
  if (!tokens) {
    return (str === pattern) ? {} : null
  }

  matches = matches.splice(1)
  let output = {}
  for (let i = 0; i < tokens.length; i++) {
    let isLazy = tokens[i].indexOf(lazyDelimiters[0]) === 0
    if (isLazy) {
      output[tokens[i].replace(new RegExp(lazyDelimiters[0] + '|' + lazyDelimiters[1], 'g'), '').trim()] = unobfuscateNewLine((matches[i] || '').trim())
    } else {
      output[tokens[i].replace(new RegExp(delimiters[0] + '|' + delimiters[1], 'g'), '').trim()] = unobfuscateNewLine((matches[i] || '').trim())
    }
  }

  return output
}

function obfuscateNewLine (input) {
  return input.split('\n').join('þ').split('\r').join('∂')
}

function unobfuscateNewLine (input) {
  return input.split('þ').join('\n').split('∂').join('\r')
}

function makeTokenMatcher (delims) {
  return delims[0] + '([^' + delims.join('') + ']+)' + delims[1]
}
