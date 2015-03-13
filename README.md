SIMPLE IMDB SCRAPER

This is a very basic scraper created using Express,Cheerio and Request libraries in Node.js in order to learn web scraping.Given a URL to the IMDB page of a movie,it retrieves information about the name of the movie,its release year ,rating  and its director and stores the information in the form of a json file in the same directory.

This functionality,even though basic can be extended along the same lines easily to gain more in depth information from the webpage.

USAGE:

-run “node web_scraper.js” on the terminal.
-open “localhost:8088/scrape” in browser.
-view stored json in file by the name “weboutput.json” in the same working directory.

Note:To scrape any other movie,replace the current value of variable “url” in the code by the url of its page on IMDB.

 
