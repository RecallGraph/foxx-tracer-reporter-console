# foxx-tracer-reporter-console
A console reporter for [foxx-tracer-collector](https://github.com/RecallGraph/foxx-tracer-collector).

## Installation
This package is already available in the collector by default. See the collector docs for how to enable it.

## Configuration
This reporter has a single configuration parameter, viz, the console stream to which it should pipe its output. There are 3 options - `log`, `debug` and `error`. If the reporter is installed under the namespace `console` (which is the default), then the `manifest.json` of the collector would have a section like:
```json
{
    "configuration": {
        "reporters-console": {
            "type": "json",
            "required": true,
            "default": {
                "stream": "debug"
            },
            "description": "Settings for the console reporter."
        }
    }
}
```
You can change the stream parameter to one of the other 2 available values if needed.

## Writing Your Own Reporter
This package can be used as a template for developing your own reporters.

For an example of a reporter built for the [Datadog Agent](https://docs.datadoghq.com/agent/), see [foxx-tracer-reporter-datadog](https://github.com/RecallGraph/foxx-tracer-reporter-datadog).

Also see the [foxx-tracer docs](https://recallgraph.github.io/foxx-tracer/) for a closer look at the core tracing library that does makes it all work. Custom reporters may need to use its exports for certain features.