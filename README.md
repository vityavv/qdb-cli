# qdb-cli

[![NPM](https://nodei.co/npm/qdb-cli.png)](https://nodei.co/npm/qdb-cli/)

`qdb-cli`, the sister project of [`qdb-api-plus`](https://github.com/vityavv/qdb-api-plus), is a command line interface for the quote database on [bash.org](http://bash.org)

## How to use

Everything is detailed in the help text that you can get by running `qdb --help` or `qdb -h` or `qdb help` or even just `qdb`.

```
$ npm install -g qdb-cli
$ qdb
Usage: qdb <command> [<args>] [-i | --id] [-n | --hide-score] [-o | --over0] [-b | --byNumber]
Commands:
	random [<count>] - Get count amount of random quotes (default 1)
	top [<count>] - Get count amount of top quotes (default 1)
	latest [<count>] - Get latest quotes
	get <id> - Get a specific quote based on it's id
	search <query> [<count>] - Search for specific quotes (count default is 1)
	help - Show this help text
Options:
	i or id - Show the ID with the quote
	n or hide-score - Hide the score of the quote
	o or over0 - (only applies to random) whether to get quotes with a positive score or not
	b or byNumber - (only applies to search) whether to sort by ID number or by Score
	h or help - show this help text
```

## Cool tricks

Pair it with...
* cowsay (tip - use `-n` to preserve whitespace)
* figlet
* lolcat (my favorite)
* all of the above
