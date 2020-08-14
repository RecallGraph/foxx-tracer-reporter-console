"use strict";
var _a;
const foxx_tracer_1 = require("@recallgraph/foxx-tracer");
const util_1 = require("util");
module.exports = (_a = class ConsoleReporter extends foxx_tracer_1.reporters.Reporter {
        constructor(namespace = 'console') {
            super(namespace);
        }
        report(traces) {
            const { stream } = this.config;
            let out;
            switch (stream) {
                case 'log':
                    out = console.log.bind(console);
                    break;
                case 'error':
                    out = console.error.bind(console);
                    break;
                case 'debug':
                default:
                    out = console.debug.bind(console);
            }
            out(util_1.inspect(traces, ConsoleReporter.FORMAT_OPTIONS));
        }
    },
    _a.FORMAT_OPTIONS = Object.freeze({
        depth: Infinity,
        maxArrayLength: Infinity,
        breakLength: Infinity,
        compact: true,
        sorted: true
    }),
    _a);
//# sourceMappingURL=ConsoleReporter.js.map