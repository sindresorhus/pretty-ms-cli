# pretty-ms-cli

> Convert milliseconds to a human readable string: `1337000000` → `15d 11h 23m 20s`


## Install

```
$ npm install --global pretty-ms-cli
```


## Usage

```
$ pretty-ms --help

  Usage
    $ pretty-ms <milliseconds> [--compact] [--verbose] [--sec-decimal-digits=<number>]
    echo <milliseconds> | pretty-ms

  Options
    -c, --compact               Only show the first part
    -v, --verbose               Use full-length units
    -d, --sec-decimal-digits    Number of digits to appear after the seconds decimal point

  Examples
    $ pretty-ms 1337
    1.3s
    $ pretty-ms 1337 --verbose
    1.3 seconds
    $ pretty-ms 1337 --compact
    ~1s
    $ pretty-ms 1337 --sec-decimal-digits=4
    1.3370s
```


## Related

- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
