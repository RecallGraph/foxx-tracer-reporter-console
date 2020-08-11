'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const foxx_tracer_1 = require('@recallgraph/foxx-tracer')
const util_1 = require('util')

class ConsoleReporter extends foxx_tracer_1.reporters.Reporter {
  constructor (namespace = 'console') {
    super(namespace)
  }

  report (traces) {
    const { level } = this.config
    let out
    switch (level) {
      case 'info':
        out = console.log.bind(console)
        break
      case 'debug':
      default:
        out = console.debug.bind(console)
    }
    out(util_1.inspect(traces, ConsoleReporter.FORMAT_OPTIONS))
  }
}

exports.default = ConsoleReporter
ConsoleReporter.FORMAT_OPTIONS = {
  depth: Infinity,
  maxArrayLength: Infinity,
  breakLength: Infinity,
  compact: true,
  sorted: true
}
//# sourceMappingURL=ConsoleReporter.js.map