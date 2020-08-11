import { reporters, SpanData } from '@recallgraph/foxx-tracer';

export default class ConsoleReporter extends reporters.Reporter {
  private static readonly FORMAT_OPTIONS;

  constructor(namespace?: string);

  report(traces: SpanData[][]): void;
}
//# sourceMappingURL=ConsoleReporter.d.ts.map