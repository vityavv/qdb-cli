let qdb = require("qdb-api-plus");

let config = {
	score: !process.argv.some(el => /--no-score|-n/g.test(el)),
	id: process.argv.some(el => /--give-id|-g/g.test(el)),
	amount: 1
};
let amountFlag = process.argv.find(el => /(--amount|-a)=([1-9][0-9]?|100)$/g.test(el));
if (amountFlag) config.amount = amountFlag.match(/(?<=(--amount|-a)=)\d+/g);

let helptext =
`qdb-cli: A CLI tool for the Quote Database (bash.org)
Flags:
	-h or --help                              Show this help text
	Config options:
		-n or --no-score                  Don't display the score with the quote
		-g or --give-id                   Gives the ID of the quote
	Output options:
		-r or --random                    Get a random quote
		-l or --latest                    Get the latest quote
		-i=<id> or --id=<id>              Get quote by ID
		-s=<query> or --search=<query>    Search for a quote
		-a=<amount> or --amount=<amount>  Amount of quotes to display in search (Default 1)
			can be 1, 10, 25, 50, 75, or 100
`;

if (process.argv.some(el => /--help|-h/g.test(el))) console.log(helptext);
else if (process.argv.some(el => /--random|-r/g.test(el))) qdb.random().then(output).catch(console.error);
else if (process.argv.some(el => /--latest|-l/g.test(el))) qdb.latest().then(output).catch(console.error);
else if (process.argv.some(el => /--id|-i/g.test(el))) {
	if (process.argv.some(el => /(--id|-i)=\d+/g.test(el))) {
		let id = process.argv.find(el => /(--id|-i)=\d+/g.test(el)).match(/(?<=(--id|-i)=)\d+/)[0];
		qdb.get(id).then(output).catch(console.error);
	} else {
		console.log("No ID provided");
	}
} else if (process.argv.some(el => /(--search|-s)/g.test(el))) {
	if (process.argv.some(el => /(--search|-s)=.+/g.test(el))) {
		let query = process.argv.find(el => /(--search|-s)=.+/g.test(el)).match(/(?<=(--search|-s)=).+/)[0];
		qdb.search(query, 0, config.amount).then(quotes => {
			if (config.amount === 1) output(quotes);
			else quotes.forEach(quote => {output(quote); console.log("\n\n");});
		});
	} else {
		console.log("No query provided");
	}
}
function output(quote) {
	console.log(quote.text);
	if (config.score) console.log("Score:", quote.score);
	if (config.id) console.log("ID:", quote.id);
}
