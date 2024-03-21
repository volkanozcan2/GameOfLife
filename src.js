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
        audio.play();
    });
    this.innerText = "hello world!";
    t.removeEventListener("click", arguments.callee);
    setInterval(() => {
        t.style.fontFamily = f[~~(Math.random() * f.length)];
        t.style.color = "#" + c[~~(Math.random() * c.length)];
        document.body.style.backgroundColor = "#" + c[~~(Math.random() * c.length)];
        t.style.filter = ` hue-rotate(${Math.random() * 360}deg)`;

    }, 123);

}
);