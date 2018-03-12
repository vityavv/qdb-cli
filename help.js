//This file contains the help text, because I was too lazy to put it in the other file, where it would look ugly.
module.exports = `Usage: qdb <command> [<args>] [-i | --id] [-n | --hide-score] [-o | --over0] [-b | --byNumber]
Commands:
	random [<count>] - Get count amout of random quotes (default 1)
	top [<count>] - Get count amount of top quotes (default 1)
	latest [<count>] - Get latest quotes
	get <id> - Get a specific quote based on it's id
	search <query> [<count>] - Search for specific quotes (count default is 1)
	help - Show this help text
Options:
	i or id - Show the ID with the quote
	n or hide-score - Hide the score of the quote
	o or over0 - (only applies to random) whether to get quotes with a positive score or not
	b or byNumber - (only applies to search) whether to sort by ID number or by Score`;
