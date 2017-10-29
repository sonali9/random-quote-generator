
var quotes=[
'“Do your own thing on your own terms and get what you came here for.”-Oliver James',
'“Flatter yourself critically.”-Willis Goth Regier',
'“Do what you feel in your heart to be right, for you’ll be criticized anyway.”-Eleanor Roosevelt',
'“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”-Mark Twain',
'“I will not let anyone walk through my mind with their dirty feet.”-Mahatma Gandhi',
'“Better to write for yourself and have no public, than to write for the public and have no self.”-Cyril Connolly',
'“We must not allow other people’s limited perceptions to define us.”-Virginia Satir',
'“Don’t look for society to give you permission to be yourself.”-Steve Maraboli',
'“If things go wrong, don’t go with them.”-Roger Babson',
'“Wanting to be someone else is a waste of who you are.”-Kurt Cobain',
'“Tension is who you think you should be. Relaxation is who you are.”-Chinese Proverb',
'“Where\’s your will to be weird\?\”-Jim Morrison',
'“Some people say you are going the wrong way, when it’s simply a way of your own.”-Angelina Jolie',
'“Remember to always be yourself. Unless you suck.”-Joss Whedon',
'\“Do what you can, with what you have, where you are.”-Theodore Roosevelt',
'\“Be yourself; everyone else is already taken.”-Oscar Wilde',
'\“I took a deep breath and listened to the old bray of my heart. I am. I am. I am.”-Sylvia Plath',
'\“There came a time when the risk to remain tight in the bud was more painful than the risk it took to blossom.”-Anaïs Nin',
'\“To find yourself, think for yourself.”-Socrates',
'\“If you seek authenticity for authenticity’s sake you are no longer authentic.”-Jean Paul Sartre',
'\“If you cannot be a poet, be the poem.”-David Carradine',
'\“When one is pretending the entire body revolts.”-Anaïs Nin',
'\“Be there for others, but never leave yourself behind.”-Dodinsky',
'\“Do what you must,And your friends will adjust.”-Robert Brault',
'\“Just let awareness have its way with you completely.”-Scott Morrison',
'\“We must be our own before we can be another’s.”-Ralph Waldo Emerson',
'\“This above all: to thine own self be true.” -William Shakespeare'
];
/*var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

 var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);*/
    


function getquote(){
 
  randomquote = quotes[Math.floor(Math.random() * quotes.length)];
  $('.quote').text(randomquote);
;}
 $(".show").on("click", function() {
    getquote();
  });

 $(".tweet").click(function(){
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomquote);
 });
