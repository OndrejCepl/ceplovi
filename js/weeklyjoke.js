const weeklyJoke = {
    0: "V hospodě si podnapilý muž upřeně prohlíží dva chlapíky u vedlejšího stolu. Nakonec mu jeden z nich povídá: „Žádný strach, nejste opilý. My jsme dvojčata.” <br> „Cože? Všichni čtyři?”",
    1: "V okresním městě přijde do redakce místních novin žena požádat, aby do smutečního sloupku napsali oznámení o úmrtí jejího muže. Redaktor jí říká, že se platí deset korun za slovo. Žena zapřemýšlí a povídá: „Tak tam napište: Zemřel Jaroslav Peterka.“ Redaktor je dost zaražen a říká jí: „Paní, minimální délka smutečního oznámení je sedm slov.“ Ona se znovu zamyslí a říká: „Tak tedy: Zemřel Jaroslav Peterka, prodám Favorita r. v. 1990.“",
    2: "Dva slepí piloti s nasazenými tmavými brýlemi jdou v dopravním letadle uličkou mezi sedadly. Jednoho vede slepecký pes, druhý hledá cestu ťukáním hůlky. Vejdou do pilotní kabiny, zavřou za sebou dveře a nastartují motory.  Cestující na sebe nervózně pohlédnou a čekají, kdy jim někdo oznámí, že jde o žert. Jenže nikdo nepřichází a z reproduktorů se taky nic neozývá. Letoun se začne pohybovat čím dál rychleji po ranveji a pasažéři sledují okýnky, jak se blíží velké jezero na konci startovní dráhy. Když už to vypadá, že letadlo v plné rychlosti vletí do vody, pasažéři začnou v hrůze panicky ječet. V ten okamžik piloti přitáhnou řízení a letadlo se zvedne do vzduchu. Cestující si oddychnou a v klidu sedí na svých místech. Jsou přesvědčeni, že letoun je v dobrých rukou. V kokpitu se jeden slepý pilot otočí k tomu druhému a řekne: <br> “Teda Bobe, jednoho krásnýho dne ty lidi zařvou pozdě a my všichni chcípnem.“",
    3: "Přijde nový vězeň do gulagu na Sibiři a sedne si na lavici do baráku. Spoluvězeň, starej mazák, se ptá: <br>„Tak kolik jsi dostal?“ <br>„Pětadvacet let,“ odpoví smutně nováček. <br>„A za co?“ ptá se starý vězeň. Chlapík jen pokrčí rameny:<br>„Za nic…“<br>„Kecáš, za nic se dává deset!“",
    4: "Příjde babka po dlouhé době k lékaři a doktor se jí ptá: <br>“Tak co babi, pročpak jste u nás tak dlouho nebyla?“<br>“Já jsem byla nemocná, pane doktore...“"
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

