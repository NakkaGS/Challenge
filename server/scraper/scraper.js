const request = require('request-promise');
const cheerio = require('cheerio');

const axios = require('axios'); 

const GetSitemapLinks = require("get-sitemap-links").default;

exports.scraper = function (){(async () => {

    const array = await GetSitemapLinks("https://dev98.de/sitemap-1.xml");
 
    let { data } = await axios.get(`http://localhost:8000/api/articles/getallarticles`)

    for (site in array) {
        let mustNotSend = false

        const response = await request(array[site]);
        let $ = cheerio.load(response);     
        
        //Get the Article Category in the bottom of the page
        let category = $('a[rel="category tag"]').text();
        
        //Get the Article Image
        let image
        var listItems = $(".featured-image");
        listItems.each(function(idx, li) {
              image =  $(li).find('img').attr('src'); 
              return image
        });

        //It is to remove the bottom part
        $('.sharedaddy').remove();
        $('.saboxplugin-wrap').remove();
        $('.jp-relatedposts').remove();

        //Get the rest of attributes
        let title = $('h1[class="entry-title"]').text();
        let writer = $('a[class="url fn n"]').text(); 
        let writerhtml = $('a[class="url fn n"]').html(); 
        let date = $('time[class="entry-date"]').text(); 
        let comments = $('a[class="comments-link"]').text().substring(0,1); 
        let commentsNumber = Number(comments)
        let text = $('div[class="entry-content"]').html();

        //console.log("////////////////////////////////////////////////");

        if ((writerhtml !== null) && (text !== null || "")){
          const articleToSend = {
            title: title,
            category: category,
            comments: commentsNumber,
            writer: writer,
            date: date,
            text: text,
            image: image,
          };
            
          const config = {
            headers: { //It just worked like this for PUT. Axious is in x-www-form-urlencoded
                "Content-Type": "application/x-www-form-urlencoded",
            }
          }

          data.forEach(test => {
            if(title === test.title){
              mustNotSend = true
            }
          });

          if (mustNotSend === false){
            const { sent } = axios.post(`http://localhost:8000/api/articles/create/`,{ article: articleToSend })
            console.log('New article added at:', new Date)
          }
          
        }
    }
})()}
