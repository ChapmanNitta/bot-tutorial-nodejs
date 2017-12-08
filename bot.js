var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /(Akane Kimidori|Akira|Anat|Android 17|Android 18|Android 35|Aoi Kimidori|Arack|Arale Norimaki|Auta Magetta|Awamo|Baby Gamera|Barry Kahn|Basil|Bee|Beerus|Belmod|Bergamo|Biarra|Borareta|Botamo|Brianne de Chateau|Bubibinman|Bulla|Bulma|Burpman|Burter|Cabba|Campari|Captain Ginyu|Caroni|Caulifla|Caway|Cell|Centipede aliens|Champa|Chappil|Chiaotzu|Chi-Chi|Chief Moginaian|Cloned Gryll|Cloned Vegeta|Cocoa Amaguri|Cocotte|Cognac|Comfrey|Commeson|Cukatail|Cus|Dabura|Damom|Dende|Dercori|Dodoria|Dr. Brief|Dr. Mashirito|Dr. Rota|Drakiyan|Dyspo|Emperor Pilaf|Erasa|Fortuneteller Baba|Frieza|Fused Zamasu|Future Android 8|Future Babidi|Future Bulma|Future Dabura|Future Goku|Future Gowasu|Future Kibito|Future Mai|Future Pilaf|Future Scratch|Future Shin|Future Shu|Future Trunks|Future Turtle|Future Yajirobe|Future Zamasu|Future Zeno|Fuwa|Galactic King|Galactic Poachers|Galbee|Gamisaras|Ganos|Garana|Gatchan|Geene|Ghost Usher|Gohan|Goku|Goku Black|Good Buu|Goten|Gotenks|Gowasu|Great Priest|Gryll|Guldo|Haru|Heles|Hermila|Hop|Hyssop|Infinite Zamasu|Iwne|Jaco|Jeice|Jilcol|Jimeze|Jirasen|Jiren|Jium|Kahseral|Kale|Katopesla|Kefla|Kettol|Khai|Kibito|Kibito Kai|Kid Buu|King Kai|King Nikochan|King Piccolo|King Vegeta|King Yemma|Kinoko Sarada|Koitsukai|Korin|Korn|Krillin|Kunshi|Kurikinton Soramame|Kuru|Lilibeu|Liquiir|Mai|Maji Kayo|Majora|Maki|Makkora|Marcarita|Marron|Martian|Martinu|Master Roshi|Methiop|Midori Norimaki|Miss Piiza|Moginaian|Mojito|Monaka|Monna|Moori|Mosco|Mr.Pig|Mr.Popo|Mr. Satan|Murichim|Murisam|Napapa|Nappa|Narirama|Nigrisshi|Nink|Obotchaman|Obuni|Ogma|Old Kai|Oolong|Oracle Fish|Ox-King|Pancea|Panchy|Paparoni|Peasuke Soramame|Pell|Piccolo|Pirina|Pirozhki|Porunga|Potage|Pride Troopers|Prum|Puar|Quitela|Rabanra|Raditz|Reality Machine|Recoome|Referee|Renso|Roh|Roselle|Rubalt|Rumsshi|Sanka Ku|Saonel|Senbei Norimaki|Shantsa|Shenron|Shin|Shisami|Shosa|Shu|Sidra|Singer|Sorbet|Sorrel|Sourman|Su Roas|Super Buu|Super Shenron|Tagoma|Tambourine|Taro Soramame|The Preecho|Tien Shinhan|Tights|Toppo|Tribal bird aliens|Trio De Dangers|Trunks|Tupper|Turbo Norimaki|Ugg|Universe 6 Saiyan King|Vados|Vegeta|Vegito|Videl|Vikal|Vuon|Watagash|Whis|Yajirobe|Yamcha|Yamoshi|Yurin|Zalama|Zamases|Zamasu|Zarbuto|Zeno|Zirloin|Zoiray|Zuno|)/gi;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

  //botResponse = cool();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : 'Anime sucks'
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
