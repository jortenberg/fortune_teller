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
        numBottomRight = getRandomInt(12, 15)
        icons = $("#icons" + getRandomInt(1, 4));

    CSSPlugin.defaultSmoothOrigin = true;


    function sideways() {
        var tl = new TimelineMax();
            tl.fromTo(inside, .3, {scaleX: 0, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: .9}, {scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut})
            tl.to(inside, .3, {scaleX: 0, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: .9, ease:Power2.easeInOut});
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
            tl.fromTo(inside, .3, {scaleY: 0, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: .9}, 
                {scaleY: 1, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut})
            tl.to(inside, .3, {scaleY: 0, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: .9, ease:Power2.easeInOut});
        return tl;
    }

    function upDownHalfOpen() {
        var tl = new TimelineMax();
            tl.fromTo(inside, .3, {scaleY: 0, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: .9}, {scaleY: 1, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut});
        return tl;
    }

    function upDownHalfClose() {
        var tl = new TimelineMax();
            tl.set(inside, {scaleX: 1, scaleY: 1, autoAlpha: 1})
            tl.fromTo(inside, .3, {scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", autoAlpha: 1}, {scaleY: 0, scaleX: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power2.easeInOut});
        return tl;
    }

    // Returns a random integer between min (inclusive) and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $("#red").on('click', function() {
        // debugger;
        color = 'red';
        var redTl = new TimelineMax({onComplete: addNumbers});

        redTl
            .to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1")
            .add( upDown() )
            .add( sideways() )
            .add( upDownHalfOpen() );  

        redTl.timeScale(1.2);
        return redTl;
    });

    $('#purple').on('click', function() {
        color = 'purple';
        var purpleTl = new TimelineMax({onComplete: addNumbers});

        purpleTl
            .to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1")
            .add( upDown() )
            .add( sideways() )
            .add( upDown() )
            .add( sideways() )
            .add( upDown() )
            .add( sidewaysHalfOpen() );

        purpleTl.timeScale(1.2);
        return purpleTl;
    });

    $('#blue').on('click', function() {
        color = 'blue';
        var blueTl = new TimelineMax({onComplete: addNumbers});

        blueTl
            .to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1")
            .add( upDown() )
            .add( sideways() )
            .add( upDown() )
            .add( sidewaysHalfOpen() );

        blueTl.timeScale(1.2);
        return blueTl;
    });

    $('#green').on('click', function() {
        color = 'green';
        var greenTl = new TimelineMax({onComplete: addNumbers});

        greenTl
            .to(mainSubhead, .3, {delay: .5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut}, "-=1")
            .add( upDown() )
            .add( sideways() )
            .add( upDown() )
            .add( sideways() )
            .add( upDownHalfOpen() );

        greenTl.timeScale(1.2);
        return greenTl;
    });

    // 88888888888888888888888888888

    function addNumbers() {
      var containerNumbers = $("#containerNumbers"),
          redNumster = $( ".top-left" ),
          blueNumster = $( ".top-right" ),
          purpleNumster = $( ".bottom-left" ),
          greenNumster = $( ".bottom-right" ),
          tl = new TimelineMax();

          console.log("hello numbers function with ease");

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
            .set(redNumster.text(numTopLeft), {css: {visibility: "visible"}})
            .set(blueNumster.text(numTopRight), {css: {visibility: "visible"}})
            .set(purpleNumster.text(numBottomLeft), {css: {visibility: "visible"}})
            .set(greenNumster.text(numBottomRight), {css: {visibility: "visible"}})
            .fromTo(containerNumbers, 0.5, {scale: 0.2, autoAlpha:0}, {scale: 1.0, transformOrigin: "50% 50%", autoAlpha: 1, ease: Power2.easeInOut})
            .fromTo(mainSubhead.text("Pick a Number"), .5, {scale: 0.2, autoAlpha:0}, {scale: 1.0, autoAlpha: 1, ease:Power2.easeInOut}, "-=0.5");

      tl.timeScale(1.0);
      return tl;
    }

    $('#redNum').on('click', function() {
        num = numTopLeft;

        var tl= new TimelineMax({onComplete: part2Nums}); 

          tl.to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
          tl.to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
          tl.add( sidewaysHalfClose(), "-=0.5");

        return tl;
    });

    $('#blueNum').on('click', function() {
        num = numTopRight;

        var tl= new TimelineMax({onComplete: part2Nums}); 

          tl.to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
          tl.to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
          tl.add( sidewaysHalfClose(), "+=0.5");
          
        return tl;
    });

    $('#purpleNum').on('click', function() {
        num = numBottomLeft;

        var tl= new TimelineMax({onComplete: part2Nums}); 

          tl.to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
          tl.to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
          tl.add( sidewaysHalfClose(), "+=0.5");
          
        return tl;
    });

    $('#greenNum').on('click', function() {
        num = numBottomRight;

        var tl= new TimelineMax({onComplete: part2Nums}); 

          tl.to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
          tl.to(containerNumbers, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
          tl.add( sidewaysHalfClose(), "+=0.5");
          
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

    // 88888888888888888888888888888

    function addIcons() {
      var tl = new TimelineMax();

      console.log("hello add icons function");
      
      // debugger;
      tl
        .fromTo(mainSubhead.text("Pick a Thing"), 0.5, {scale: 0.2, autoAlpha: 0}, {scale: 1.0, autoAlpha: 1.0, ease:Power2.easeInOut})
        .fromTo(icons, 0.5, {scale: 0.2, autoAlpha: 0}, {scale: 1.0, autoAlpha: 1, ease: Power2.easeInOut}, "-=0.5");

      return tl;
    }

    $(".redIcon").on("click", function() {
        // debugger;
        iconly = (this).id;
        
        var tl = new TimelineMax({onComplete: part2Icons});

        console.log(icons);
        console.log(iconly);

        tl
          .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
          .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
          .add( sidewaysHalfClose(), "-=0.5");

        // var iconStuff = [tl, iconly] ask tess
        return tl;
    });

    $(".blueIcon").on("click", function() {
        iconly = (this).id;
        
        var tl = new TimelineMax({onComplete: part2Icons});

        console.log(icons);
        console.log(iconly);

        tl
          .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
          .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
          .add( sidewaysHalfClose(), "-=0.5");

        return tl;
    });

    $(".purpleIcon").on("click", function() {
        iconly = (this).id;
        
        var tl = new TimelineMax({onComplete: part2Icons});

        console.log(icons);
        console.log(iconly);

        tl
          .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
          .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
          .add( sidewaysHalfClose(), "-=0.5");

        return tl;
    });

    $(".greenIcon").on("click", function() {
        iconly = (this).id;
        
        var tl = new TimelineMax({onComplete: part2Icons});

        console.log(icons);
        console.log(iconly);

        tl
          .to(mainSubhead, 0.5, {delay: 0.5, scale: 0.2, autoAlpha: 0, ease: Power2.easeInOut})
          .to(icons, 0.5, {scale: 0.2, transformOrigin: "50% 50%", autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5")
          .add( sidewaysHalfClose(), "-=0.5");

        return tl;
    });

    function part2Icons() {
      console.log(iconly);

      var iconlyNum = iconly.length,
          tl= new TimelineMax({onComplete: theChoices}); 

      console.log(iconlyNum);

      if (iconlyNum%2 == 0) {
        console.log("this is the even scenario iconly");

        for (var i = 0; i < (iconlyNum-2)/2; i++) {
            tl.add( upDown() )
            tl.add( sideways() );
        }
        tl.add( upDown() )
        tl.add( sidewaysHalfOpen() );
      }
      else {
        console.log("this is the odd scenario iconly");

        for (var i = 0; i < (iconlyNum-1)/2; i++) {
            tl.add( upDown() )
            tl.add( sideways() );
        }
        tl.add( upDownHalfOpen() );
      }

      tl.timeScale(1.2);
      return tl;
    }

    function theChoices() {
      console.log("almost the finalie")
      var tl = new TimelineMax();

      tl
        // .to(wholeThing, .4, {y: -80, autoAlpha: 0, ease:Power2.easeInOut});
        // .to(wholeThing, .5, {scale: 0.5, y: -80, autoAlpha: .5, ease:Power2.easeInOut});
        .to(wholeThing, .5, {scale: 0.3, top: "5%", rotation: 180, ease:Power2.easeInOut})
        .to(inside, .5, {autoAlpha: 0, ease:Power2.easeInOut}, "-=0.5");
    }

    // 88888888888888888888888888888

    masterTl
      .set("#icons1", {autoAlpha: 0})
      .set("#icons2", {autoAlpha: 0})
      .set(wholeThing, {autoAlpha: 0})
      .set(mainSubhead, {autoAlpha: 0})
      .to(h1, .4, {y: -80, delay: 2.5, autoAlpha: 0, ease:Power3.easeIn})
      .to(mainSubhead, .5, {delay: .8, autoAlpha: 1, ease:Power3.easeIn})
      .to(wholeThing, .5, {autoAlpha: 1, ease:Power3.easeIn}, '-=0.5');

    // masterTl.timeScale(0.5);

});


