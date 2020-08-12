import { reporters, SpanData } from '@recallgraph/foxx-tracer';
import { inspect } from 'util';

export = class ConsoleReporter extends reporters.Reporter {
  private static readonly FORMAT_OPTIONS = Object.freeze({
    depth: Infinity,
    maxArrayLength: Infinity,
    breakLength: Infinity,
    compact: true,
    sorted: true
  });

  constructor(namespace: string = 'console') {
    super(namespace);
  }

  report(traces: SpanData[][]): void {
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

    out(inspect(traces, ConsoleReporter.FORMAT_OPTIONS));
  }
}