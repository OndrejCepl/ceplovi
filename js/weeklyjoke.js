const weeklyJoke = {
    0: "V hospodě si podnapilý muž upřeně prohlíží dva chlapíky u vedlejšího stolu. Nakonec mu jeden z nich povídá: „Žádný strach, nejste opilý. My jsme dvojčata.” <br> „Cože? Všichni čtyři?”",
    1: "V okresním městě přijde do redakce místních novin žena požádat, aby do smutečního sloupku napsali oznámení o úmrtí jejího muže. Redaktor jí říká, že se platí deset korun za slovo. Žena zapřemýšlí a povídá: „Tak tam napište: Zemřel Jaroslav Peterka.“ Redaktor je dost zaražen a říká jí: „Paní, minimální délka smutečního oznámení je sedm slov.“ Ona se znovu zamyslí a říká: „Tak tedy: Zemřel Jaroslav Peterka, prodám Favorita r. v. 1990.“"

}

// function to get the current week number
Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    var dayOfYear = ((today - onejan + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
};

function updateWeeklyJoke() {
    // get the current week number
    var today = new Date()
    var currentWeekNumber = today.getWeek();
    // length of the database
    var jokeDataSize = Object.keys(weeklyJoke).length;
    // Get the content for the current week from the object
    const jokeContent = weeklyJoke[currentWeekNumber % jokeDataSize];
    document.getElementById('joke-weekly').innerHTML = jokeContent;
};

window.onload = updateWeeklyJoke;

