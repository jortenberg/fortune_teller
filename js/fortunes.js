var fortunes = ["You cannot love life until you live the life you love.", 
"Be on the lookout for coming events; They cast their shadows beforehand.", 
"Land is always on the mind of a flying bird.",
"The man or woman you desire feels the same about you.",
"Today it is up to you to create the peacefulness you long for.",
"A smile is your passport into the hearts of others.",
"Change can hurt, but it leads a path to something better.",
"Enjoy the good luck a companion brings you.",
"A chance meeting opens new doors to success and friendship.",
"You learn from your mistakes... You will learn a lot today.",
"What ever you&rsquo;re goal is in life, embrace it visualize it, and for it will be yours.",
"Meeting adversity well is the source of your strength.",
"A dream you have will come true.",
"You will become great if you believe in yourself.",
"There is no greater pleasure than seeing your loved ones prosper.",
"You will marry your lover.",
"You already know the answer to the questions lingering inside your head.",
"It is now, and in this world, that we must live.",
"You must try, or hate yourself for not trying.",
"You can make your own happiness.",
"The greatest risk is not taking one.",
"Love can last a lifetime, if you want it to.",
"Adversity is the parent of virtue.",
"Serious trouble will bypass you.",
"Now is the time to try something new.",
"If you feel you are right, stand firmly by your convictions.",
"Keep your eye out for someone special.",
"You are very talented in many ways.",
"A stranger, is a friend you have not spoken to yet.",
"Keep it simple. The more you say, the less people remember.",
"Good things take time.",
"Do what is right, not what you should.",
"To effect the quality of the day is no small achievement.",
"Not all closed eye is sleeping, nor open eye is seeing.",
"Bread today is better than cake tomorrow.",
"A feeling is an idea with roots.",
"Man is born to live and not prepare to live.",
"It&rsquo;s all right to have butterflies in your stomach. Just get them to fly in formation.",
"If you don&rsquo;t give something, you will not get anything.",
"The harder you try to not be like your parents, the more likely you will become them.",
"You will think for yourself when you stop letting others think for you.",
"Everything will be ok. Don&rsquo;t obsess. You must stay where you are for now.",
"If you love someone keep fighting for them.",
"Do what you want, when you want, and you will be rewarded.",
"The cooler you think you are the dumber you look.",
"Expect great things and great things will come.",
"The wheel of good fortune is turning in your direction!",
"What breaks in a moment may take years to mend.",
"You will be rewarded for your patience and understanding.",
"Never miss a chance to keep your mouth shut.",
"Nothing shows a man&rsquo;s character more than what he laughs at.",
"Never regret anything that made you smile.",
"Love takes pratice.",
"Don&rsquo;t take yourself so seriously, no one else does.",
"You&rsquo;ve got what it takes, but it will take everything you&rsquo;ve got!",
"At this very moment you can change the rest of your life.",
"Become who you are.",
"Let your heart make your decisions - it does not get as confused as your head.",
"Working hard will make you live a happy life.",
"Try everything once, even the things you don&rsquo;t think you will like."
"Shoot for the moon! If you miss you will still be amongst the stars."
];

10
15
13

function theFortune() {
  console.log("almost there ya hoo baby");

  var fortuneNum = getRandomInt(0, 4),
  		fortunes = ["You cannot love life until you live the life you love.", "Be on the lookout for coming events; They cast their shadows beforehand.", "Land is always on the mind of a flying bird.", "The man or woman you desire feels the same about you.", "Today it is up to you to create the peacefulness you long for."],
  		tl = new TimelineMax(),
      fortune = "<h2>" + fortunes[fortuneNum] + "</h2>";
  		deterFortune = $("#deterFortune").html(fortune);


  tl.fromTo(deterFortune, 0.5, {autoAlpha:0, scale: 0.2, transformOrigin: "50% 50%", y: "-220%"}, {autoAlpha: 1, scale: 1.0, ease: Power2.easeInOut});
    
  return tl;
}
