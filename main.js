$(document).ready(function() {
  var intro = $(".intro"),
      origami = $("#origami"),
      inside = $("#inside"),
      mainSubhead = $("#mainSubhead"),
      masterTl = new TimelineMax(),
      color,
      num,
      iconly,
      numTopLeft = getRandomInt(4, 6),
      numTopRight = getRandomInt(1, 3),
      numBottomLeft = getRandomInt(7, 9),
      numBottomRight = getRandomInt(10, 12),
      icons = $("#icons" + getRandomInt(1, 4));

  document.addEventListener("touchstart", function(){}, true);       

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// always use attr:{} if you want to animate a svg attribute because by default GSAP will assume its a css property first.
//      or to be really anal always use this specifice syntax css:{} or attr:{} 
//      example
//      .to(svgDot, 0.7, {attr:{cx: 100, cy: 100}, ease:Power2.easeInOut}, '-=0.7')

// How come in gsap documentation the css property values are sometimes in quotes and sometimes not in quotes?

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
    tl.timeScale(1.2);
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
    tl.timeScale(1.2);
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
    tl.timeScale(1.2);
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
      .to(origami, 1.2, {scale: 0.2, y: "-70%", rotation: "-360", ease:Power2.easeInOut})
      .to(inside, .5, {autoAlpha: 0, ease:Power2.easeInOut}, "-=0.5")
      .fromTo(determiner, 0.5, {autoAlpha:0, scale: 0.2, transformOrigin: "50% 50%", y: "-90%"}, {autoAlpha: 1, scale: 1.0, ease: Power2.easeInOut})
      .to(determiner, 0.5, {autoAlpha:0, scale: 0.2, transformOrigin: "50% 50%", y: "-90%", ease: Power2.easeInOut}, "+=2.0");

    return tl;
  }

  function theFortune() {
    var fortuneNum = getRandomInt(0, 91),
        fortunes = ["You cannot love life until you live the life you love.", "Be on the lookout for coming events; They cast their shadows beforehand.", "Land is always on the mind of a flying bird.", "The man or woman you desire feels the same about you.", "Today it is up to you to create the peacefulness you long for.", "A smile is your passport into the hearts of others.", "Change can hurt, but it leads a path to something better.", "Enjoy the good luck a companion brings you.", "A chance meeting opens new doors to success and friendship.", "You learn from your mistakes... You will learn a lot today.", "What ever you&rsquo;re goal is in life, embrace it visualize it, and for it will be yours.", "Meeting adversity well is the source of your strength.", "A dream you have will come true.", "You will become great if you believe in yourself.", "There is no greater pleasure than seeing your loved ones prosper.", "You will marry your lover.", "You already know the answer to the questions lingering inside your head.", "It is now, and in this world, that we must live.", "You must try, or hate yourself for not trying.", "You can make your own happiness.", "The greatest risk is not taking one.", "Love can last a lifetime, if you want it to.", "Adversity is the parent of virtue.", "Serious trouble will bypass you.", "Now is the time to try something new.", "If you feel you are right, stand firmly by your convictions.", "Keep your eye out for someone special.", "You are very talented in many ways.", "A stranger, is a friend you have not spoken to yet.", "Keep it simple. The more you say, the less people remember.", "Good things take time.", "Do what is right, not what you should.", "To effect the quality of the day is no small achievement.", "Not all closed eye is sleeping, nor open eye is seeing.", "Bread today is better than cake tomorrow.", "A feeling is an idea with roots.", "Man is born to live and not prepare to live.", "It&rsquo;s all right to have butterflies in your stomach. Just get them to fly in formation.", "If you don&rsquo;t give something, you will not get anything.", "The harder you try to not be like your parents, the more likely you will become them.", "You will think for yourself when you stop letting others think for you.", "Everything will be ok. Don&rsquo;t obsess. You must stay where you are for now.", "If you love someone keep fighting for them.", "Do what you want, when you want, and you will be rewarded.", "The cooler you think you are the dumber you look.", "Expect great things and great things will come.", "The wheel of good fortune is turning in your direction!", "What breaks in a moment may take years to mend.", "You will be rewarded for your patience and understanding.", "Never miss a chance to keep your mouth shut.", "Nothing shows a man&rsquo;s character more than what he laughs at.", "Never regret anything that made you smile.", "Love takes practice.", "Don&rsquo;t take yourself so seriously, no one else does.", "You&rsquo;ve got what it takes, but it will take everything you&rsquo;ve got!", "At this very moment you can change the rest of your life.", "Become who you are.", "Let your heart make your decisions - it does not get as confused as your head.", "Working hard will make you live a happy life.", "Try everything once, even the things you don&rsquo;t think you will like.","Shoot for the moon! If you miss you will still be amongst the stars.", "Luck sometimes visits a fool, but it never sits down with him.", "You don&rsquo;t get in life what you want; you get in life what you are.", "It&rsquo;s a good time to finish up old tasks.", "A leader is a person you will follow to a place you wouldn&rsquo;t go by yourself.", "Spread your good feelings around.", "Obstacles are those frightful things you see when you take your eyes off the goal.", "If you think you can do a thing or think you can't do a thing, you&rsquo;re right.", "One who admires you greatly is hidden before your eyes.", "Now is the time to try something new.", "If you fail to plan, you plan to fail.", "Avert misunderstanding by calm, poise, and balance.", "An hour with friends is worth more than ten with strangers.", "Accident is the mother of invention.", "This too shall pass", "It does not matter how slowly you go as long as you do not stop.<br>(Confucius)", "Choose a job you love, and you will never have to work a day in your life.<br>(Confucius)", "Wherever you go, go with all your heart.<br>(Confucius)", "I hear and I forget. I see and I remember. I do and I understand.<br>(Confucius)", "Our greatest glory is not in never falling, but in rising every time we fall.<br>(Confucius)", "In nature there are neither rewards nor punishments; there are consequences.<br>(Robert Green Ingersoll)", "You have a secret admirer.", "Be ready to open the door when opportunity knocks.", "Keep your eyes on the stars and your feet on the ground.<br>(Theodore Roosevelt)", "The only person you should try to be better than is the person you were yesterday.", "Those who Don&rsquo;t believe in magic will never find it.<br>(Roald Dahl)", "Ask yourself if what you&rsquo;re doing today will get you closer to where you want to be tomorrow.", "Life may not be the party we hoped for, but while we&rsquo;re here, we should dance.", "The more that you read, the more things you will know. The more that you learn, the more places you&rsquo;ll go.<br>(Dr. Seuss)", "Be who you are and say what you feel, because those who mind Don&rsquo;t matter and those who matter Don&rsquo;t mind.<br>(Dr. Seuss)", "Today you are you! That is truer than true! There is no one alive who is you-er than you!<br>(Dr. Seuss)", "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.<br>(Dr. Seuss)"],
        tl = new TimelineMax(),

        deterFortune = $("#deterFortune").html("<h2>" + fortunes[fortuneNum] + "</h2>"),

        // eyebrow = $("<h4>your fortune</h4>").insertBefore(" #deterFortune h2 "),
        goAgain = $("<a href='http://www.jillortenberg.co/teller/'>Another go?</a>").insertAfter(" #deterFortune h2 ");

    $("#containerNumbers").remove();

    // alert($("#deterFortune").html());
    

    tl
      .set(deterFortune, {scale: 0.2, y: "25%", autoAlpha: 0})
      // .set(eyebrow, {scale: 0.2, y: "25%", autoAlpha: 0})
      .set(goAgain, {scale: 0.2, autoAlpha: 0})
      .to(deterFortune, 1.0, {autoAlpha: 1, scale: 1.0, y: "25%", ease: Power2.easeInOut})
      // .to(eyebrow, 1.0, {autoAlpha: 1, scale: 1.0, y: "25%", ease: Power2.easeInOut}, "-=1.0")
      .to(goAgain, 1.0, {autoAlpha: 1, scale: 1.0, ease: Power2.easeInOut}, "+=2.0");

    return tl;
  }



  masterTl
    .set(origami, {scale: 0.1, y: "-185", autoAlpha: 0})
    .set(mainSubhead, {transformOrigin: "50% 50%", scale: 0.2, autoAlpha: 0})
    .set(intro, {transformOrigin: "50% 50%", scale: 0.2, autoAlpha:0})

    .to(origami, 0.5, {scale: 0.2, y: "-185", autoAlpha: 1.0, ease:Power2.easeInOut})
    .to(intro, 0.5, {scale: 1.0, autoAlpha: 1, ease:Power2.easeInOut}, "-=0.5")
    .to(intro, 0.5, {delay: 2.0, scale: 0.2, autoAlpha: 0, ease:Power2.easeInOut})

    .to(origami, 1.5, {scale: 1.0, y: 0, rotation: "720", autoAlpha: 1.0, ease:Power2.easeInOut})
    .to(mainSubhead, 0.4, {scale: 1.0, autoAlpha: 1.0, ease:Power2.easeInOut}, "+=0.18");

});


