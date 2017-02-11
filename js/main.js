$(document).ready(function() {
  var h1 = $("h1"),
  wholeThing = $("#wholething"),
  red = $("#red"),
  inside = $("#inside"),
  mainSubhead = $("#mainSubhead"),
  masterTl = new TimelineMax(),
  color,
  num,
  iconly,
  numTopLeft = getRandomInt(4, 7),
  numTopRight = getRandomInt(1, 3),
  numBottomLeft = getRandomInt(8, 11),
  numBottomRight = getRandomInt(12, 15),
  icons = $("#icons" + getRandomInt(1, 4));

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Flaps moving functions start
  function sideways() {
    var tl = new TimelineMax();
    tl
      .fromTo(inside, .3, {scaleX: 0, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: .9}, {scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut})
      .to(inside, .3, {scaleX: 0, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: .9, ease:Power2.easeInOut});
    return tl;
  }

  function sidewaysHalfOpen() {
    var tl = new TimelineMax();
    tl.fromTo(inside, .3, {scaleX: 0, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: .9}, {scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut});
    return tl;
  }

  function sidewaysHalfClose() {
    var tl = new TimelineMax();
    tl.fromTo(inside, .3, {scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: 1}, {scaleX: 0, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut});
    return tl;
  }

  function upDown() {
    var tl = new TimelineMax();
    tl
      .fromTo(inside, .3, {scaleY: 0, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: .9}, {scaleY: 1, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut})
      .to(inside, .3, {scaleY: 0, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: .9, ease:Power2.easeInOut});
    return tl;
  }

  function upDownHalfOpen() {
    var tl = new TimelineMax();
    tl.fromTo(inside, .3, {scaleY: 0, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: .9}, {scaleY: 1, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut});
    return tl;
  }

  function upDownHalfClose() {
    var tl = new TimelineMax();
    tl
      .set(inside, {scaleX: 1, scaleY: 1, autoAlpha: 1})
      .fromTo(inside, .3, {scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: 1}, {scaleY: 0, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut});
    return tl;
  }
  // Flaps moving functions end

  // picked color functions start
  $("#red").on("click", function() {
    color = "red";
    var tl = new TimelineMax({onComplete: addNumbers});

    tl
      .to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1")
      .add( upDown() )
      .add( sideways() )
      .add( upDownHalfOpen() )
      .timeScale(1.2);
    return tl;
  });

  $("#purple").on("click", function() {
    color = "purple";
    var tl = new TimelineMax({onComplete: addNumbers});

    tl
      .to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1")
      .add( upDown() )
      .add( sideways() )
      .add( upDown() )
      .add( sideways() )
      .add( upDown() )
      .add( sidewaysHalfOpen() )
      .timeScale(1.2);
    return tl;
  });

  $("#blue").on("click", function() {
    color = "blue";
    var tl = new TimelineMax({onComplete: addNumbers});

    tl
      .to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1")
      .add( upDown() )
      .add( sideways() )
      .add( upDown() )
      .add( sidewaysHalfOpen() )
      .timeScale(1.2);
    return tl;
  });

  $("#green").on("click", function() {
    color = "green";
    var tl = new TimelineMax({onComplete: addNumbers});

    tl
      .to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1")
      .add( upDown() )
      .add( sideways() )
      .add( upDown() )
      .add( sideways() )
      .add( upDownHalfOpen() )
      .timeScale(1.2);
    return tl;
  });
// picked color functions end

  function addNumbers() {
    var containerNumbers = $("#containerNumbers"),
    redNumster = $( ".top-left" ).text(numTopLeft),
    blueNumster = $( ".top-right" ).text(numTopRight),
    purpleNumster = $( ".bottom-left" ).text(numBottomLeft),
    greenNumster = $( ".bottom-right" ).text(numBottomRight),
    tl = new TimelineMax();

    $( "#red" ).off();
    $( "#blue" ).off();
    $( "#purple" ).off();
    $( "#green" ).off();
    $( "#red" ).css( "cursor", "auto" );
    $( "#blue" ).css( "cursor", "auto" );
    $( "#purple" ).css( "cursor", "auto" );
    $( "#green" ).css( "cursor", "auto" );

    tl
      .set(containerNumbers, {css: {display: "block", visibility: "hidden"}})
      .fromTo(containerNumbers, 0.5, {scale: 0.2, autoAlpha:0}, {scale: 1.0, transformOrigin: "50% 50%", autoAlpha: 1, ease: Power2.easeInOut})
      .fromTo(mainSubhead.text("Pick a Number"), .5, {scale: 0.2, autoAlpha:0}, {scale: 1.0, autoAlpha: 1, ease:Power2.easeInOut}, "-=0.5");

    tl.timeScale(1.0);
    return tl;
  }

  $("#redNum").on('click', function() {
    num = numTopLeft;

    var tl = new TimelineMax({onComplete: part2Nums}); 

    tl.to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
    tl.to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
    tl.add( sidewaysHalfClose(), "-=0.2");

    return tl;
  });

  $("#blueNum").on('click', function() {
    num = numTopRight;

    var tl = new TimelineMax({onComplete: part2Nums});

    tl.to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
    tl.to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
    tl.add( sidewaysHalfClose() );

    return tl;
  });

  $("#purpleNum").on('click', function() {
    num = numBottomLeft;

    var tl= new TimelineMax({onComplete: part2Nums}); 

    tl.to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
    tl.to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
    tl.add( sidewaysHalfClose(), "+=0.1");

    return tl;
  });

  $("#greenNum").on('click', function() {
    num = numBottomRight;

    var tl= new TimelineMax({onComplete: part2Nums}); 

    tl.to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
    tl.to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
    tl.add( sidewaysHalfClose(), "-=0.5");

    return tl;
  });

  function part2Nums() {

    console.log(num);

    var tl= new TimelineMax({onComplete: addIcons}); 

    if (num%2 == 0) {
      console.log("this is the even scenario numbers");

      for (var i = 0; i < (num-2)/2; i++) {
        tl.add( upDown() )
        tl.add( sideways() );
      }
      tl.add( upDown() )
      tl.add( sidewaysHalfOpen() );
    }
    else {
      console.log("this is the odd scenario numbers");

      for (var i = 0; i < (num-1)/2; i++) {
        tl.add( upDown() )
        tl.add( sideways() );
      }
      tl.add( upDownHalfOpen() );
    }

    tl.timeScale(1.2);
    return tl;
  }


  function addIcons() {
    var tl = new TimelineMax();

    tl
      .fromTo(mainSubhead.text("Pick a Thing"), 0.5, {scale: 0.2, autoAlpha: 0}, {scale: 1.0, autoAlpha: 1.0, ease:Power2.easeInOut})
      .fromTo(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0}, {scale: 1.0, autoAlpha: 1, ease: Power2.easeInOut}, "-=0.5");

    return tl;
  }

  $(".redIcon").on("click", function() {
    iconly = (this).id;

    var tl = new TimelineMax({onComplete: part2Icons});

    tl
      .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
      .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
      .add( sidewaysHalfClose(), "-=0.2");

    return tl;
  });

  $(".blueIcon").on("click", function() {
    iconly = (this).id;

    var tl = new TimelineMax({onComplete: part2Icons});

    tl
      .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
      .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
      .add( sidewaysHalfClose() );

    return tl;
  });

  $(".purpleIcon").on("click", function() {
    iconly = (this).id;

    var tl = new TimelineMax({onComplete: part2Icons});

    tl
      .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
      .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
      .add( sidewaysHalfClose(), "-=0.5");

    return tl;
  });

  $(".greenIcon").on("click", function() {
    iconly = (this).id;

    var tl = new TimelineMax({onComplete: part2Icons});

    tl
      .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
      .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
      .add( sidewaysHalfClose(), "-=0.5");

    return tl;
  });

  function part2Icons() {
    console.log(iconly);

    var iconlyNum = iconly.length,
    tl= new TimelineMax({onComplete: theDeterminer}); 

    console.log(iconlyNum);

    if (iconlyNum%2 == 0) {
      console.log("this is the even scenario iconly");

      for (var i = 0; i < (iconlyNum-2)/2; i++) {
        tl
          .add( upDown() )
          .add( sideways() );
      }
      tl
        .add( upDown() )
        .add( sidewaysHalfOpen() );
    }
    else {
      console.log("this is the odd scenario iconly");

      for (var i = 0; i < (iconlyNum-1)/2; i++) {
        tl
          .add( upDown() )
          .add( sideways() );
      }
      tl.add( upDownHalfOpen() );
    }

    tl.timeScale(1.2);
    return tl;
  }

  function theDeterminer() {
    console.log(color);
    console.log(num);
    console.log(iconly);
    $("#deterColor").text(color);
    $("#deterNum").text(num);
    $("#deterIcon").text(iconly);

    var determiner = $("#deterFortune"),
    tl = new TimelineMax({onComplete: theFortune});

    tl
      .set(determiner, {css: {display: "block", visibility: "hidden"}})
      .to(wholeThing, .5, {scale: 0.2, y: "-80%", rotation: 180, ease:Power2.easeInOut})
      .to(inside, .5, {autoAlpha: 0, ease:Power2.easeInOut}, "-=0.5")
      .fromTo(determiner, 0.5, {autoAlpha:0, scale: 0.2, transformOrigin: "50% 50%", y: "-100%"}, {autoAlpha: 1, scale: 1.0, ease: Power2.easeInOut})
      .to(determiner, 0.5, {autoAlpha:0, scale: 0.2, transformOrigin: "50% 50%", y: "-100%", ease: Power2.easeInOut}, "+=2.0");

    return tl;
  }

  function theFortune() {

    var fortuneNum = getRandomInt(0, 56),
    fortunes = ["You cannot love life until you live the life you love.", "Be on the lookout for coming events; They cast their shadows beforehand.", "Land is always on the mind of a flying bird.", "The man or woman you desire feels the same about you.", "Today it is up to you to create the peacefulness you long for.", "A smile is your passport into the hearts of others.","Change can hurt, but it leads a path to something better.", "Enjoy the good luck a companion brings you.", "A chance meeting opens new doors to success and friendship.", "You learn from your mistakes... You will learn a lot today.", "What ever you're goal is in life, embrace it visualize it, and for it will be yours.", "Meeting adversity well is the source of your strength.", "A dream you have will come true.", "You will become great if you believe in yourself.", "There is no greater pleasure than seeing your loved ones prosper.", "You will marry your lover.", "You already know the answer to the questions lingering inside your head.", "It is now, and in this world, that we must live.", "You must try, or hate yourself for not trying.", "You can make your own happiness.", "The greatest risk is not taking one.", "Love can last a lifetime, if you want it to.", "Adversity is the parent of virtue.", "Serious trouble will bypass you.", "Now is the time to try something new.", "If you feel you are right, stand firmly by your convictions.", "Keep your eye out for someone special.", "You are very talented in many ways.", "A stranger, is a friend you have not spoken to yet.", "Keep it simple. The more you say, the less people remember.", "Good things take time.", "Do what is right, not what you should.", "To effect the quality of the day is no small achievement.", "Not all closed eye is sleeping, nor open eye is seeing.", "Bread today is better than cake tomorrow.", "A feeling is an idea with roots.", "Man is born to live and not prepare to live.", "It's all right to have butterflies in your stomach. Just get them to fly in formation.", "If you don't give something, you will not get anything.", "The harder you try to not be like your parents, the more likely you will become them.", "You will think for yourself when you stop letting others think for you.", "Everything will be ok. Don't obsess. You must stay where you are for now.", "If you love someone keep fighting for them.", "Do what you want, when you want, and you will be rewarded.", "The cooler you think you are the dumber you look.", "Expect great things and great things will come.", "The wheel of good fortune is turning in your direction!", "What breaks in a moment may take years to mend.", "You will be rewarded for your patience and understanding.", "Never miss a chance to keep your mouth shut.", "Nothing shows a man's character more than what he laughs at.", "Never regret anything that made you smile.", "Love takes pratice.", "Don't take yourself so seriously, no one else does.", "You've got what it takes, but it will take everything you've got!", "At this very moment you can change the rest of your life.", "Become who you are."],
    tl = new TimelineMax(),
    fortune = "<h2>" + fortunes[fortuneNum] + "</h2>";
    deterFortune = $("#deterFortune").html(fortune);

    console.log(fortuneNum);


    tl.fromTo(deterFortune, 0.5, {autoAlpha:0, scale: 0.2, transformOrigin: "50% 50%", y: "-130%"}, {autoAlpha: 1, scale: 1.0, ease: Power2.easeInOut});

    return tl;
  }

  masterTl
  .set(wholeThing, {autoAlpha: 0})
  .set(mainSubhead, {autoAlpha: 0})
  .to(h1, .4, {y: -80, delay: 2.5, autoAlpha: 0, ease:Power3.easeIn})
  .to(mainSubhead, .5, {delay: .8, autoAlpha: 1, ease:Power3.easeIn})
  .to(wholeThing, .5, {autoAlpha: 1, ease:Power3.easeIn}, "-=0.5");
});


