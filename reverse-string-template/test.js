const tmpl = require('./')
const assert = require('assert')

describe('Template', function () {
  it('lakteks original test cases should pass', () => {
    var cases = [
      [['a:b,c:d', 'a:{a},c:{c}', { delimiters: ['{', '}'] }], { 'a': 'b', 'c': 'd' }],

      [['/2012/08/12/test.html', '/{year}/{month}/{day}/{title}.html', { delimiters: ['{', '}'] }], { 'year': '2012', 'month': '08', 'day': '12', 'title': 'test' }],

      [['Content-Type: text/html; charset=utf-8', 'Content-Type: {mime}; charset={charset}', { delimiters: ['{', '}'] }], {'mime': 'text/html', 'charset': 'utf-8' }],

      [['/assets/images/logo.jpg', '{dirpath}/{basename}.{extension}', { delimiters: ['{', '}'] }], { 'dirpath': '/assets/images', 'basename': 'logo', 'extension': 'jpg' }],

      [['some long file name.html.mustache', '{name}.{output_extension}.{template_extension}', { delimiters: ['{', '}'] }], { 'name': 'some long file name', 'output_extension': 'html', 'template_extension': 'mustache' }],

      [['Lakshan Perera <lakshan@web2media.net> (http://laktek.com)', '{name} <{email}> ({url})', { delimiters: ['{', '}'] }], {'name': 'Lakshan Perera', 'email': 'lakshan@web2media.net', 'url': 'http://laktek.com' }],

      [['a:b,c:d', 'a:{{a}},c:{{c}}'], { 'a': 'b', 'c': 'd' }],

      [['red  blue   green', '{first} {second} {third}', { whitespace: 1, delimiters: ['{', '}'] }], {'first': 'red', 'second': 'blue', 'third': 'green' }],

      [['red\n blue\n\ngreen', '{first}\n{second}\n{third}', { whitespace: 1, delimiters: ['{', '}'] }], {'first': 'red', 'second': 'blue', 'third': 'green' }],

      [['from 4th October  to 10th  October', 'from `from` to `to`', { whitespace: 1, delimiters: ['`', '`'] }], {'from': '4th October', 'to': '10th October' }],

      [['4th October  to 10th  October', 'from `from` to `to`', { whitespace: 1, delimiters: ['`', '`'] }], null],

      [['Convert 1500 Grams to Kilograms', 'convert {quantity} {from_unit} to {to_unit}', { lowercase: true, delimiters: ['{', '}'] }], {'quantity': '1500', 'from_unit': 'grams', 'to_unit': 'kilograms' }],

      [['same thing', 'same thing'], {}],

      [['/app/les', '/app'], null],

      [[
        '<h1 class="p-title">This is a title.</h1><data class="p-name" value="This is a name"></data>',
        '<h1 class="p-title"><%= title %></h1><data class="p-name" value="<%= name %>"></data>',
        { delimiters: ['<%=', '%>']}], { title: 'This is a title.', name: 'This is a name'}
      ]]

    for (var i = 0; i < cases.length; i++) {
      let result = tmpl.apply(this, cases[i][0])
      assert.deepEqual(result, cases[i][1], `Case ${i+1} should be equal ${result}  !== ${cases[i][1]}`)
    }
  })

  it('should output expected values', function () {
    let cases = []
    cases.push({
      in: '[Redacted/missions] Pull request submitted by <https://github.com/selfcontained|selfcontained>',
      pattern: '[{{repo}}] Pull request submitted by <{{submitted_url}}|{{submitted_name}}>',
      data: {
        repo: 'Redacted/missions',
        submitted_url: 'https://github.com/selfcontained',
        submitted_name: 'selfcontained'
      }
    })

    cases.push({
      in: '[Redacted/RedactedAndroid] Pull request submitted by <https://github.com/Redacted|Redacted>',
      pattern: '[{{repo}}] Pull request submitted by <{{submitted_url}}|{{submitted_name}}>',
      data: {
        repo: 'Redacted/RedactedAndroid',
        submitted_url: 'https://github.com/Redacted',
        submitted_name: 'Redacted'
      }
    })

    cases.push({
      in: `*New Lead :* Redacted Redacted - Director, * Redacted Redacted*\n\n*Lead Source :* Web \n\nI'd like to consult with someone about apps that I'm looking to get developed for my personal IP with a potential partnership from redacted that will simplify our life with redacted prepared for the tech evolution.  If possible also I'd like to offer my redacted skills to your Redacted Branch.\n\npH\n\n<mailto:redacted@gmail.com| redacted@gmail.com>\n\n < tel:(403)555- 1212 | (403) 555- 1212 >\n\n < https://redacted.salesforce.com/00Q0XXXXXXXXXXXXXX>`,
      pattern: `*New Lead :* {{name}} - {{title}}, * {{company_name}}*\n\n*Lead Source :* {{source}} \n\n{{message}}\n\n<mailto:{{email}}|{{email}}>\n\n < tel:{{phone}}|{{phone}}>\n\n <{{url}}>`,
      data: {
        name: 'Redacted Redacted',
        title: 'Director',
        company_name: 'Redacted Redacted',
        source: 'Web',
        message: "I'd like to consult with someone about apps that I'm looking to get developed for my personal IP with a potential partnership from redacted that will simplify our life with redacted prepared for the tech evolution.  If possible also I'd like to offer my redacted skills to your Redacted Branch.\n\npH",
        email: 'redacted@gmail.com',
        phone: '(403) 555- 1212',
        url: 'https://redacted.salesforce.com/00Q0XXXXXXXXXXXXXX'
      }
    })

    cases.push({
      in: `*New Lead :* Redacted Redacted - , * Redacted Redacted*\n\n*Lead Source :* Web\n\nI'd like to consult with someone about apps that I'm looking to get developed for my personal IP with a potential partnership from redacted that will simplify our life with redacted prepared for the tech evolution.  If possible also I'd like to offer my redacted skills to your Redacted Branch.\n\npH\n\n<mailto:redacted@gmail.com| redacted@gmail.com>\n\n < tel:(403)555- 1212 | (403) 555- 1212 >\n\n < https://redacted.salesforce.com/00Q0XXXXXXXXXXXXXX>`,
      pattern: `*New Lead :* {{name}} - {{title}}, * {{company_name}}*\n\n*Lead Source :* {%source%}\n\n{{message}}\n\n<mailto:{{email}}|{{email}}>\n\n < tel:{{phone}}|{{phone}}>\n\n <{{url}}>`,
      data: {
        name: 'Redacted Redacted',
        title: '',
        company_name: 'Redacted Redacted',
        source: 'Web',
        message: "I'd like to consult with someone about apps that I'm looking to get developed for my personal IP with a potential partnership from redacted that will simplify our life with redacted prepared for the tech evolution.  If possible also I'd like to offer my redacted skills to your Redacted Branch.\n\npH",
        email: 'redacted@gmail.com',
        phone: '(403) 555- 1212',
        url: 'https://redacted.salesforce.com/00Q0XXXXXXXXXXXXXX'
      }
    })

    cases.push({
      in: `*New Lead :*  - , * *\n\n*Lead Source :* \n\n\n\n<mailto:|>\n\n < tel:|>\n\n <>`,
      pattern: `*New Lead :* {{name}} - {{title}}, * {{company_name}}*\n\n*Lead Source :* {%source%}\n\n{{message}}\n\n<mailto:{{email}}|{{email}}>\n\n < tel:{{phone}}|{{phone}}>\n\n <{{url}}>`,
      data: {
        name: '',
        title: '',
        company_name: '',
        source: '',
        message: '',
        email: '',
        phone: '',
        url: ''
      }
    })

    cases.push({
      in: `[July 25th, 2017 11:04 AM] xp: *New Lead :* Redacted Redacted - , * For Redacted*\n\n*Lead Source :* Web\n\nHi! My name is Redacted Redacted and I work with For Redacted here in Austin. For Redacted is a redacted service that comes to you with all the necessary training materials needed for redacted. We also offer nutritional health coaching and group training. We have had a lot of success working with businesses in the office setting and would love to extend our services to you and your employees.  \n\nWe can meet the Redacted needs of your business whether you are a big company or a small business. At a minimum, we will bring all the equipment needed to give your employee’s a redacted! We require very little room (we are used to training people in their living rooms).  We can come before work, at lunch, after work or anytime in between. We can also design, implement and conduct testing for a fitness incentive program that would offer employees some sort of reward for reaching a specific fitness goal. The first training session is always free and individual training is $40 per session with price discounts for groups. In addition, if you sign up with us or an employee mentions Robots and Pencils when signing up, we will offer a $5 discount for every session! We would love to work with you and help your business achieve redactded! Please feel free to pass on our information to your employees incase anyone wants to redacted and to contact us if you have any questions! Thank you!\n\nRedacted Redacted \n<mailto:RedactedeRedacted@gmail.com|RedactedeRedacted@gmail.com>\n<http://www.redacted.com|www.redacted.com>\n\n<mailto:RedactedeRedacted@gmail.com|RedactedeRedacted@gmail.com>\n\n\n\n<https://redacted.salesforce.com/00Q0G00001XXXXXX>`,
      pattern: `[{{date}}] xp: *New Lead :* {{name}} - {{title}}, * {{company_name}}*\n\n*Lead Source :* {%source%}\n\n{{message}}\n\n{{email}}\n\n{{phone}}\n\n{{link}}`,
      data: {
        date: 'July 25th, 2017 11:04 AM',
        name: 'Redacted Redacted',
        title: '',
        company_name: 'For Redacted',
        source: 'Web',
        message: 'Hi! My name is Redacted Redacted and I work with For Redacted here in Austin. For Redacted is a redacted service that comes to you with all the necessary training materials needed for redacted. We also offer nutritional health coaching and group training. We have had a lot of success working with businesses in the office setting and would love to extend our services to you and your employees.  \n\nWe can meet the Redacted needs of your business whether you are a big company or a small business. At a minimum, we will bring all the equipment needed to give your employee’s a redacted! We require very little room (we are used to training people in their living rooms).  We can come before work, at lunch, after work or anytime in between. We can also design, implement and conduct testing for a fitness incentive program that would offer employees some sort of reward for reaching a specific fitness goal. The first training session is always free and individual training is $40 per session with price discounts for groups. In addition, if you sign up with us or an employee mentions Robots and Pencils when signing up, we will offer a $5 discount for every session! We would love to work with you and help your business achieve redactded! Please feel free to pass on our information to your employees incase anyone wants to redacted and to contact us if you have any questions! Thank you!\n\nRedacted Redacted \n<mailto:RedactedeRedacted@gmail.com|RedactedeRedacted@gmail.com>\n<http://www.redacted.com|www.redacted.com>',
        email: '<mailto:RedactedeRedacted@gmail.com|RedactedeRedacted@gmail.com>',
        phone: '',
        link: '<https://redacted.salesforce.com/00Q0G00001XXXXXX>'
      }
    })

    cases.push({
      in: `brian@foo.bar • <https://manage.stripe.com/customers/cus_B12345abcde|View details>`,
      pattern: `{{email}} • <{{link}}|View details>`,
      data: {
        email: 'brian@foo.bar',
        link: 'https://manage.stripe.com/customers/cus_B12345abcde'
      }
    })

    cases.push({
      in: `Failed:  stanlee's build (<https://circleci.com/gh/Redacted/RedactedAndroid/5283?utm_campaign=chatroom-integration&amp;utm_medium=referral&amp;utm_source=slack|#5283>; retry by person) in <https://circleci.com/gh/Redacted/RedactedAndroid?utm_campaign=chatroom-integration&amp;utm_medium=referral&amp;utm_source=slack|Redacted/RedactedAndroid> (<https://circleci.com/gh/Redacted/RedactedAndroid/tree/bugfix%2Fbr-login2-validations?utm_campaign=chatroom-integration&amp;utm_medium=referral&amp;utm_source=slack|bugfix/br-login2-validations>)\n - zipcode length checked to be 5 digit exact (<https://github.com/Redacted/RedactedAndroid/commit/baaebf2247ef8469cc2a7e266746d27f445dbb45|baaebf2> by stanlee)\n\nActions: <https://circleci.com/actions/retry/github/Redacted/RedactedAndroid/5283|Rebuild>\n`,
      pattern: `{{status}}:  {{user}}'s build (<{{build_link}}|{{build_id}}>; retry by {{ignore}}) in <{{project_link}}> (<{{branch_link}}|{{branch_name}}>)\n - {{commit_message}} (<{{github_commit_link}}|{{github_commit_sha}}> by {{ignore}})\n\nActions: <{{rebuild_link}}|Rebuild>\n`,
      data: {
        status: 'Failed',
        user: 'stanlee',
        build_link: 'https://circleci.com/gh/Redacted/RedactedAndroid/5283?utm_campaign=chatroom-integration&amp;utm_medium=referral&amp;utm_source=slack',
        build_id: '#5283',
        project_link: 'https://circleci.com/gh/Redacted/RedactedAndroid?utm_campaign=chatroom-integration&amp;utm_medium=referral&amp;utm_source=slack|Redacted/RedactedAndroid',
        branch_link: 'https://circleci.com/gh/Redacted/RedactedAndroid/tree/bugfix%2Fbr-login2-validations?utm_campaign=chatroom-integration&amp;utm_medium=referral&amp;utm_source=slack',
        branch_name: 'bugfix/br-login2-validations',
        commit_message: 'zipcode length checked to be 5 digit exact',
        github_commit_link: 'https://github.com/Redacted/RedactedAndroid/commit/baaebf2247ef8469cc2a7e266746d27f445dbb45',
        github_commit_sha: 'baaebf2',
        rebuild_link: 'https://circleci.com/actions/retry/github/Redacted/RedactedAndroid/5283'
      }
    })

    cases.forEach((c, i) => {
      let output = tmpl(c.in, c.pattern)
      assert.ok(output, `Case ${i + 1} result should not be null`)

      Object.keys(c.data).forEach(key => {
        assert.equal(c.data[key], output[key], `Case ${i + 1}: for ${key} must be equal`)
      })
    })
  })
})
