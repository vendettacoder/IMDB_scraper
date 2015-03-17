var express = require('express');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var app = express();

app.get('/scrape', function(req, res) {
    var url = 'http://www.imdb.com/title/tt2084970/';
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var title, release, rating, director;
            var json = {
                title: "",
                release: "",
                rating: "",
                description:"",
                director: "",
                writers:[],
                actors:[]
            };
            $('.header').filter(function() {
                var data = $(this);
                json.title = data.children().first().text();
                json.release = data.children().last().children().text();
            });
            $('.star-box-giga-star').filter(function() {
                var data = $(this);
                json.rating = data.text();
            });
            $('.txt-block[itemprop="director"]').filter(function() {
                var data = $(this);
                json.director = data.children().last().children().first().text();
            });
            $('.txt-block[itemprop="creator"]').filter(function() {
                var data = $(this);
                for(var i =0;i<data.children('a').length;i++)
                json.writers.push(data.children('a').eq(i).text());
            });
            $('.txt-block[itemprop="actors"]').filter(function() {
                var data = $(this);
                for(var i =0;i<data.children('a').length;i++)
                json.actors.push(data.children('a').eq(i).text());
            });
            $('p[itemprop="description"]').filter(function(){
                var data=$(this);
                json.description=data.text();
            });
           
        }
        fs.writeFile('weboutput.json', JSON.stringify(json, null, 4), function(err) {

            console.log('Movie details written to weboutput.json file in your present directory.');

        })
        res.send('Output on console!')

    });
});
app.listen('8088')
console.log('Client set to listen to port 8088');
exports = module.exports = app;
