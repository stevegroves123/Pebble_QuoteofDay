var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Quote',
  subtitle:'Fetching...'
});

// Display the Card
card.show();

ajax(
  {
    url: 'http://api.theysaidso.com/qod.json',
    type: 'json'
  },
  function(data) {
    card.subtitle('Quote of the day is: ' + data.contents.quote);
  },
  function(error) {
    card.body('The ajax failed...'+ error.error.message);
  }
);