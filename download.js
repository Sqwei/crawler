const request = require('superagent');
require('superagent-charset')(request);
const cherrio = require('cheerio');
const fs = require('fs');
const http = require('http');


const arr = [18570,18569,18568,18567,18558,18560,18561,18562,18564,18565,18566,18563,18559,19261,19260,19259,19258,19257,19256,19255,19254,19253,19252,19251,19250,19249,18777,18717,18716,18715,18714,18713,18712,18711,18710,18677,18676,18631,18607,19114,18989,18988,18931,18930,18807,18806,18783,18782,18781,18780,18779,18778,19248,19169,19168,19167,19166,19165,19164,19163,19162,19161,19170,19116,19115];

arr.forEach((item, i) => {
    request.get(`http://muu22.com/art37_${item}_1_1.html`).end((err, res) => {
        
        if(err) console.log(err);
        const $ = cherrio.load(res.text);
        const title = $('title').text().substr(4, 10);
        console.log($('.playerArea audio source').attr('src'));
        // http.get($('.playerArea audio source').attr('src'),function (res) {
        //     var audio ="";
        //     res.setEncoding("binary");
        //     console.log(title + "正在下载中...");
        //     res.on("data",function (chunk) {
        //         audio += chunk;
        //     });
        //     res.on("end",function () {
        //      fs.writeFile(title+".mp3",audio,"binary",function (err) {
        //       if (err) {
        //        console.log(title + "保存失败");
        //        return;
        //       }
        //       console.log(title + "保存成功");
        //      });
        //     });
        //     res.on("error",function (err) {
        //      console.log("请求失败");
        //     });
        //    });
    });
    
});

