var audio = null;
var memedio = null;

function itIsTheDay() {
  var today = new Date();
  return (today.getMonth() == 3 && today.getDate() == 1)
}

function buildMemedio() {
  if (itIsTheDay()) {
    return function() {
      this.clips=[];
      for (i=0; i<11; i++) {
        this.clips.push(new Howl({
          src: ["static/audio/41.mp3"],
          volume: 0.2
        }));
      }
    }
  }
  else {
    return function() {
      this.clips = [
          new Howl({
            src: ["static/audio/1.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/2.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/3.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/4.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/5.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/6.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/7.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/8.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/9.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/10.mp3"],
            volume: 0.2
          }),
          new Howl({
            src: ["static/audio/11.mp3"],
            volume: 0.2
          })
      ];
    }
  }
}

function magic(){
  if (itIsTheDay()) {
    var vid = document.getElementById('vid');
    vid.src = "static/video/41.mp4";

    WebFont.load({
      google: {
        families: ["Luckiest Guy"]
      }
    });

    text = document.getElementById('todays-lucky-winner');
    text.style.fontFamily="Luckiest Guy";

    button = document.getElementById('best-button');
    button.style.fontFamily="Luckiest Guy";
  }
}

function standupr(){
  var peeps = Array("Stephen",
                      "Paul",
                      "Tiffany",
                      "Tyler",
                      "Levi",
                      "Jesse",
                      "Lindsey",
                      "Jovanna",
                      "Dave",
                      "Kerry",
                      "Chris");

  var winnar = peeps[Math.floor(Math.random()*peeps.length)];
  var text = document.getElementById('todays-lucky-winner');
  var splitname = "";
  for (char in winnar) {
      splitname = splitname + "<span>"+winnar[char]+"</span>";
  }
  text.innerHTML = splitname;

  var memedio = buildMemedio();

  if (audio != null) {
    for (clip in audio.clips) {
      audio.clips[clip].stop();
    }
  }
  audio = new memedio();
  audio.clips[Math.floor(Math.random()*11)].play();
}
