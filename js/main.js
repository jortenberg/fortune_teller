$(document).ready(function() {
  var h1 = $("h1"),
      origami = $("#origami"),
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

// Flaps moving start
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
  // Flaps moving end

  //color start
  $("#red").on('click', function() {
    color = "red";
    animateColor(color.length);
  });

  $("#purple").on("click", function() {
    color = "purple";
    animateColor(color.length);
  });

  $("#blue").on("click", function() {
    color = "blue";
    animateColor(color.length);
  });

  $("#green").on("click", function() {
    color = "green";
    animateColor(color.length);
  });

  function animateColor(number) {
    var tl= new TimelineMax({onComplete: addNumbers});

    tl.to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1");

    if (number%2 == 0) {
      // this is the even scenario
      for (var i = 0; i < (number-2)/2; i++) {
        tl
          .add( upDown() )
          .add( sideways() );
      }
      tl
        .add( upDown() )
        .add( sidewaysHalfOpen() );
    }
    else {
      // this is the odd scenario
      for (var i = 0; i < (number-1)/2; i++) {
        tl
          .add( upDown() )
          .add( sideways() );
      }
      tl.add( upDownHalfOpen() );
    }
    tl.timeScale(1.0);
    return tl;
  }
// color end

// numbers start
  function addNumbers() {
    var containerNumbers = $("#containerNumbers"),
        tl = new TimelineMax();

    $( ".top-left" ).text(numTopLeft);
    $( ".top-right" ).text(numTopRight);
    $( ".bottom-left" ).text(numBottomLeft);
    $( ".bottom-right" ).text(numBottomRight);
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
    animateNumFirst();
  });

  $("#blueNum").on('click', function() {
    num = numTopRight;
    animateNumFirst();
  });

  $("#purpleNum").on('click', function() {
    num = numBottomLeft;
    animateNumFirst();
  });

  $("#greenNum").on('click', function() {
    num = numBottomRight;
    animateNumFirst();
  });

  function animateNumFirst() {
    var containerNumbers = $("#containerNumbers"),
        tl = new TimelineMax({onComplete: animateNumSecond});

    tl
      .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
      .to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
      .add( sidewaysHalfClose() );

    return tl;
  }

  function animateNumSecond() {
    var tl= new TimelineMax({onComplete: addIcons});

    if (num%2 == 0) {
      // this is the even scenario
      for (var i = 0; i < (num-2)/2; i++) {
        tl
          .add( upDown() )
          .add( sideways() );
      }
      tl
        .add( upDown() )
        .add( sidewaysHalfOpen() );
    }
    else {
      // this is the odd scenario
      for (var i = 0; i < (num-1)/2; i++) {
        tl
          .add( upDown() )
          .add( sideways() );
      }
      tl.add( upDownHalfOpen() );
    }
    tl.timeScale(1.0);
    return tl;
  }
// numbers end

// icons start
  function addIcons() {
    var tl = new TimelineMax();

    $( "#redNum" ).off();
    $( "#blueNum" ).off();
    $( "#purpleNum" ).off();
    $( "#greenNum" ).off();
    $( "#redNum" ).css( "cursor", "auto" );
    $( "#blueNum" ).css( "cursor", "auto" );
    $( "#purpleNum" ).css( "cursor", "auto" );
    $( "#greenNum" ).css( "cursor", "auto" );

    tl
      .fromTo(mainSubhead.text("Pick a Thing"), 0.5, {scale: 0.2, autoAlpha: 0}, {scale: 1.0, autoAlpha: 1.0, ease:Power2.easeInOut})
      .fromTo(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0}, {scale: 1.0, autoAlpha: 1, ease: Power2.easeInOut}, "-=0.5");

    return tl;
  }

  $(".redIcon").on("click", function() {
    iconly = (this).id;
    animateIconsFirst();
  });

  $(".blueIcon").on("click", function() {
    iconly = (this).id;
    animateIconsFirst();
  });

  $(".purpleIcon").on("click", function() {
    iconly = (this).id;
    animateIconsFirst();
  });

  $(".greenIcon").on("click", function() {
    iconly = (this).id;
    animateIconsFirst();
  });

  function animateIconsFirst() {
    var tl = new TimelineMax({onComplete: animateIconsSecond});

    tl
      .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
      .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
      .add( sidewaysHalfClose(), "-=0.2");

    return tl;
  }

  function animateIconsSecond() {
    var iconlyNum = iconly.length,
        tl= new TimelineMax({onComplete: theDeterminer});

    if (iconlyNum%2 == 0) {
      // this is the even scenario
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
      // this is the odd scenario
      for (var i = 0; i < (iconlyNum-1)/2; i++) {
        tl
          .add( upDown() )
          .add( sideways() );
      }
      tl.add( upDownHalfOpen() );
    }
    tl.timeScale(1.0);
    return tl;
  }
// icons end

  function theDeterminer() {
    $("#deterColor").text(color);
    $("#deterNum").text(num);
    $("#deterIcon").text(iconly);

    var determiner = $("#deterFortune"),
        tl = new TimelineMax({onComplete: theFortune});

    tl
      .set(determiner, {css: {display: "block", visibility: "hidden"}})
      .to(origami, .5, {scale: 0.2, y: "-80%", rotation: 180, ease:Power2.easeInOut})
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

    tl.fromTo(deterFortune, 0.5, {autoAlpha:0, scale: 0.2, transformOrigin: "50% 50%", y: "-130%"}, {autoAlpha: 1, scale: 1.0, ease: Power2.easeInOut});

    return tl;
  }

  masterTl
    .set(origami, {scale: 0.1, y: -190, autoAlpha: 0})
    .set(mainSubhead, {transformOrigin: "50% 50%", scale: 0.2, autoAlpha: 0})
    .set(h1, {transformOrigin: "50% 50%", scale: 0.2, autoAlpha:0})

    .to(origami, 0.5, {scale: 0.2, y: -190, autoAlpha: 1.0, ease:Power2.easeInOut})
    .to(h1, 0.5, {scale: 1.0, autoAlpha: 1, ease:Power2.easeInOut}, "-=0.5")
    .to(h1, 0.5, {delay: 2.5, scale: 0.2, autoAlpha: 0, ease:Power2.easeInOut})

    .to(origami, 1.5, {scale: 1.0, y: 0, rotation: 360, autoAlpha: 1.0, ease:Power2.easeInOut})
    .to(mainSubhead, 0.5, {scale: 1.0, autoAlpha: 1.0, ease:Power2.easeInOut}, "-=0.5");

});


