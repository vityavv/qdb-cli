let qdb = require("qdb-api-plus");
let argv = require("minimist")(process.argv.slice(1), {
	boolean: ["id", "i", "hide-score", "n", "over0", "o", "byNumber", "b"],
});
let helptext = "";
if (argv._[0].startsWith("/")) {
	argv._.shift();
}
console.log(argv);
let options = {
	id: argv.i || argv.id,
	score: !(argv.n || argv["hide-score"]),
	over0: argv.o || argv.over0,
	byNumber: argv.b || argv.byNumber
}
let command = argv._[0];
switch (command) {
	case "random":
		qdb.random(argv._[1] || 1, options.over0).then(showQuotes).catch(console.error);
		break;
	case "top":
	case "latest":
		qdb[argv._[0]](argv._[1] || 1).then(showQuotes).catch(console.error);
		break;
	case "get":
		if (!argv._[1]) {
			console.error("No ID provided!");
			process.exit(1);
		}
		qdb.get(argv._[1]).then(showQuotes).catch(console.error);
		break;
	case "search":
		if (!argv._[1]) {
			console.error("No query provided!");
			process.exit(1);
		}
		qdb.search(argv._[1], argv._[2], options.byNumber).then(showQuotes).catch(console.error);
	default:
		console.log(helptext);
}
function showQuotes(quotes) {
	if (quotes.text) {
		console.log(quotes.text);
		if (options.score) console.log("Score: " + quotes.score);
		if (options.id) console.log("ID: " + quotes.id);
	} else {
		quotes.forEach(quote => {
			console.log(quote.text);
			if (options.score) console.log("Score: " + quote.score);
			if (options.id) console.log("ID: " + quote.id);
			console.log("-".repeat(process.stdout.columns));
		});
	}
}
