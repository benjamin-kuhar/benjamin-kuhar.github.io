function standupr(){
    var peeps = Array("Ben",
                        "Charlie",
                        "Jeff",
                        "Stephen",
                        "Paul",
                        "Tiffany",
                        "Tyler",
                        "Levi",
                        "Jesse",
                        "Lindsey",
                        "Jovanna",
                        "Dave",
                        "Kerry",
                        "Chris",
                        "Rutu");
    var winnar = peeps[Math.floor(Math.random()*peeps.length)];
    var text = document.getElementById('todays-lucky-winner');
    var splitname = "";
    for (char in winnar) {
        splitname = splitname + "<span>"+winnar[char]+"</span>";
    }
    text.innerHTML = splitname;

    var memedio = function() {
      this.clips = [
          new Howl({
            src: ["static/audio/1.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/2.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/3.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/4.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/5.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/6.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/7.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/8.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/9.mp3"],
            volume: 0.35
          }),
          new Howl({
            src: ["static/audio/10.mp3"],
            volume: 0.35
          })
      ];
  }
  var audio = new memedio();
  audio.clips[Math.floor(Math.random()*10)].play();
}

