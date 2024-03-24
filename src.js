var f = ["'East Sea Dokdo', cursive",
    "'Gochi Hand', cursive",
    "'Homemade Apple', cursive",
    "'Nerko One', cursive",
    "'Pacifico', cursive",
    "'Permanent Marker', cursive",
    "'Sriracha', cursive"];
var c = ["ffbe0b", "fb5607", "ff006e", "8338ec", "3a86ff"];
var t = document.getElementById("t");

t.addEventListener("click", function () {
    t.style.fontFamily = f[~~(Math.random() * f.length)];
    t.style.color = "#" + c[~~(Math.random() * c.length)];
    //play sound 
    var audio = new Audio('lfo.mp3');
    audio.play();
    audio.addEventListener('ended', function () {
        audio.pause();
        document.body.classList.add("fadeout");
        body.style.backgroundColor = "#000";
        clearInterval(timer);

    });
    this.innerText = "hello world!";
    t.removeEventListener("click", arguments.callee);
    let timer = setInterval(() => {
        t.style.fontFamily = f[~~(Math.random() * f.length)];
        t.style.color = "#" + c[~~(Math.random() * c.length)];
        document.body.style.backgroundColor = "#" + c[~~(Math.random() * c.length)];
        t.style.filter = ` hue-rotate(${Math.random() * 360}deg)`;

    }, 123);

}
);