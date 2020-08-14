import { SpanData } from '@recallgraph/foxx-tracer';
declare const _default: {
    new (namespace?: string): {
        report(traces: SpanData[][]): void;
        readonly _config: any;
        readonly config: {
            [key: string]: any;
        };
    };
    readonly FORMAT_OPTIONS: Readonly<{
        depth: number;
        maxArrayLength: number;
        breakLength: number;
        compact: boolean;
        sorted: boolean;
    }>;
};
export = _default;
//# sourceMappingURL=ConsoleReporter.d.ts.map