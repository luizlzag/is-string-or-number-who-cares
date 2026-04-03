# is-string-or-number-who-cares

[![npm](https://img.shields.io/npm/v/is-string-or-number-who-cares)](https://www.npmjs.com/package/is-string-or-number-who-cares)
[![license](https://img.shields.io/npm/l/is-string-or-number-who-cares)](https://www.npmjs.com/package/is-string-or-number-who-cares)
[![downloads](https://img.shields.io/npm/dt/is-string-or-number-who-cares)](https://www.npmjs.com/package/is-string-or-number-who-cares)

> The world's most advanced string or number detection library.

## Overview

After years of rigorous research and millions in funding (not really), we've finally solved the problem that JavaScript developers have been struggling with since 2009: **checking if a value is a string or a number**.

Built with cutting-edge `typeof` technology, this library leverages the latest advances in type detection to deliver results you never asked for.

## Features

- **Blazingly fast** - It's just a `typeof` check, what did you expect?
- **Zero dependencies** - Because we couldn't afford any
- **Enterprise-grade** - Tested in production (by us, once)
- **TypeScript ready** - Just kidding, it's not
- **Fully documented** - You're reading it right now

## Installation

```bash
npm install is-string-or-number-who-cares
```

## Usage

### Checking if a value is a string or number

```javascript
const { isStringOrNumber } = require('is-string-or-number-who-cares');

isStringOrNumber('hello');
// { type: 'string', message: "It's a string, congrats 🎉" }

isStringOrNumber(42);
// { type: 'number', message: "It's a number, you're amazing 🏆" }

isStringOrNumber(true);
// { type: 'garbage', message: "Not a string or number. Go back to school." }
```

### Converting strings to numbers

Our proprietary `stringToNumber` algorithm uses a revolutionary approach: it tells you it can't convert.

```javascript
const { stringToNumber } = require('is-string-or-number-who-cares');

stringToNumber('123');
// { result: NaN, message: '"123" is a string, genius. To convert it needs to be a number.' }

stringToNumber(42);
// { result: 42, message: "It's already a number (42). Are you testing me?" }

stringToNumber(null);
// { result: NaN, message: 'That is nothing. Give up.' }
```

## API Reference

### `isStringOrNumber(value)`

Determines whether the provided value is a string, a number, or garbage.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check. Try not to pass `null`. |

**Returns:** An object with `type` and `message` properties. The message is mandatory because we care about your feelings.

### `stringToNumber(value)`

Attempts to convert a value to a number. Spoiler: it won't.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to convert. Good luck. |

**Returns:** An object with `result` (always `NaN` if you passed a string) and a `message` explaining why it's your fault.

## Why?

Because `typeof` is too hard to type. This saves you 6 whole characters.

## Contributing

Please don't. This is perfect.

## License

[WTFPL](http://www.wtfpl.net/) - Do What The Fuck You Want To Public License
