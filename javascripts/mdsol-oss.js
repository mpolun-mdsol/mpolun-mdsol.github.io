$(function() {
  
  var data = {
    projects: [
      {
        "symbol":"Db",
        "title":"dice_bag",
        "url":"https://github.com/mdsol/dice_bag",
        "description":"Organic eu culpa farm-to-table aesthetic trust fund, put a bird on it street art exercitation deep v do food truck fanny pack. Selfies id nihil accusamus bitters cupidatat.",
        "watchers":"0",
        "forks":"0",
        "language":""
      },
      {
        "symbol":"Cr",
        "title":"crichton",
        "url":"https://github.com/mdsol/crichton",
        "description":"",
        "watchers":"0",
        "forks":"0",
        "language":""
      },
      {
        "symbol":"Br",
        "title":"bilgerat",
        "url":"https://github.com/mdsol/bilgerat",
        "description":"",
        "watchers":"0",
        "forks":"0",
        "language":""
      },
      {
        "symbol":"Ic",
        "title":"ice_cookbook",
        "url":"https://github.com/mdsol/ice_cookbook",
        "description":"",
        "watchers":"0",
        "forks":"0",
        "language":""
      },
      {
        "symbol":"Kf",
        "title":"knife-flow",
        "url":"https://github.com/mdsol/knife-flow",
        "description":"",
        "watchers":"0",
        "forks":"0",
        "language":""
      },
      {
        "symbol":"Sh",
        "title":"shamus",
        "url":"https://github.com/mdsol/shamus",
        "description":"",
        "watchers":"0",
        "forks":"0",
        "language":""
      },
      {
        "symbol":"Pm",
        "title":"policy_machine",
        "url":"https://github.com/mdsol/policy_machine",
        "description":"",
        "watchers":"0",
        "forks":"0",
        "language":""
      },
      {
        "symbol":"Cl",
        "title":"cleric",
        "url":"https://github.com/mdsol/cleric",
        "description":"",
        "watchers":"0",
        "forks":"0",
        "language":""
      }

    ]
  };
  
   
  var createGrid = function(data) {
    console.log('::: createGrid');
    var template = $('#tmpl-projects').html();
    var html = Mustache.to_html(template, data);
   
    $(html).hide().appendTo('#periodic').fadeIn();

    var items = $('#periodic li'),
        itemCount = items.length,
        listCount = 7;
        listTemplate = $('#tmpl-blank').html(),
        listHtml = Mustache.to_html(listTemplate, data);

    for(var i = 0; i<listCount;i++) {
      $(listHtml).hide().appendTo('#periodic').fadeIn('slow');
    }
    var lists = $('#periodic ul:visible');
     
    for(var i = 0; i<itemCount;i++) {
      var min = 1,
          max = listCount,
          tgtList =  lists[Math.floor(Math.random() * (max - min + 1)) + min];
          console.log(Math.floor(Math.random() * (max - min + 1)) + min)
          console.log(tgtList, items.length);
          //$(tgtList).prepend(items[i])
          $(tgtList).find('li.blank').eq(Math.floor(Math.random() * (5 - 1 + 1)) + min).replaceWith(items[i])
          
    }
    
  };

  createGrid(data);

  $('#periodic a').popover({
    'trigger': 'hover',
    'html':'tr'
  });

  var height = $('footer').height() + 50;
  $('footer').animate({
      height: "-="+ height 
    },500);

});