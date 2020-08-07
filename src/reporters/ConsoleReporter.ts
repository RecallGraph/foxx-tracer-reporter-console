import { reporters, SpanData } from '@recallgraph/foxx-tracer';
import { inspect } from 'util';

export default class ConsoleReporter extends reporters.Reporter {
  private static readonly FORMAT_OPTIONS = {
    depth: Infinity,
    maxArrayLength: Infinity,
    breakLength: Infinity,
    compact: true,
    sorted: true
  };

  constructor(namespace: string = 'console') {
    super(namespace);
  }

  report(traces: SpanData[][]): void {
    const { level } = this.config;
    let out;

    switch (level) {
      case 'info':
        out = console.log.bind(console);
        break;

      case 'debug':
      default:
        out = console.debug.bind(console);
    }

    out(inspect(traces, ConsoleReporter.FORMAT_OPTIONS));
  }
}