const request = require('superagent');
require('superagent-charset')(request);
const cherrio = require('cheerio');
const fs = require('fs');


const arr = ['a','b','c','d','e'];
const idList = [];
const done = {};
arr.forEach((item, i) => {
    request.get(`http://muu22.com/bfmqx_53_${i+1}.html`).end((err, res) => {
        if(err) console.log(err);
        done[arr[i]] = true;
        const $ = cherrio.load(res.text);
        $('.movieList li a').each((index, it) => {
            if(index < 13) {
                idList.push($(it).attr('href').substr(7,5));
            }
            if(done.a && done.b && done.c && done.d && done.e) {
                fs.writeFile('idList.json', idList, [2], ()=>{});

            } 
        });
    });
    
});

