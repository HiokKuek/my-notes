const apiUrl = "https://api.quotable.kurokeita.dev/api/quotes/random"

async function start() {
  var quote;
  var cite;
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (response.ok) {
    // Update DOM elements
    quote  = data.quote.content;
    cite   = data.quote.author.name;
  } else {
    quote = "An error occurred";
    console.log(data);
  }

  /* Output
   * This uses a template literal (https://www.javatpoint.com/es6-template-literals) to format the output
   * for the obsidian note. Note that new lines are honored.
   */
  return `>[!quote] Quote of the Day
>${quote}
>— ${cite}`;
}
module.exports = start;
