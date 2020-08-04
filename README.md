# foxx-tracer-reporter-console
A console reporter for [foxx-tracer-collector](https://github.com/RecallGraph/foxx-tracer-collector).

## Installation
This package is already available in the collector by default. See the collector docs for how to enable it.

## Configuration
No configuration is required. Just enable it in the collector's configuration.

## Writing Your Own Reporter
This package can be used as a template for developing your own reporters.

For an example of a reporter built for the [Datadog Agent](https://docs.datadoghq.com/agent/), see [foxx-tracer-reporter-datadog](https://github.com/RecallGraph/foxx-tracer-reporter-datadog).

Also see the [foxx-tracer docs](https://recallgraph.github.io/foxx-tracer/) for a closer look at the core tracing library that does makes it all work. Custom reporters may need to use its exports for certain features.