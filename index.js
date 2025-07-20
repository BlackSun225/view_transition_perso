const data = [
    {title: "Laoreet dolore",
      desc: "Eos sit dolore est sea diam consetetur. Vero et te zzril. Lobortis blandit est nostrud nonumy dolore justo dolores consequat sed sit eirmod ea erat laoreet in erat sit aliquyam. Dolore dolore est accusam consetetur et. Sit qui ut et sanctus amet nonumy lorem lorem at sed et diam duo sanctus lorem est tation. Quod sea accusam takimata. Vulputate iriure elitr erat et augue ipsum. Et ut iusto et rebum no amet elitr tempor. Ut et diam. Esse est eros amet amet gubergren sadipscing exerci lobortis tincidunt et amet kasd clita ipsum hendrerit. Dolor vulputate no sadipscing at stet placerat invidunt vel wisi vero nonumy consequat dolore sed dolore nonumy sed eirmod. Accusam congue hendrerit facilisis sed stet lorem dolor duo minim labore aliquyam kasd elitr et at rebum at.",
      img: "./assets/pexels-ekamelev-751689.jpg"},
    {title: "Diam et vero", 
        desc: "Facilisi eum stet kasd stet voluptua sanctus nostrud lorem lorem at aliquip erat ut aliquyam labore sed. Esse ipsum diam clita ut labore ea veniam diam dolores nibh dolores possim eirmod dolore zzril amet ea labore. Sit in eu nulla vel et quis elitr elitr nobis sea aliquam dolores sit dolor dignissim consequat aliquyam diam. Dolor qui no eos aliquyam lorem.", 
        img: "./assets/pexels-ekamelev-927497.jpg"},
    {title: "Autem option ", 
        desc: "Aliquyam dolor feugiat lorem duo duis diam amet duo wisi duo sit in et ipsum magna in. Labore dolor invidunt amet erat possim aliquam lorem et amet diam sanctus sed amet takimata quis clita consetetur ut. Eos aliquyam iriure dolor praesent dolor kasd. Gubergren invidunt amet. Nulla eos autem sanctus stet aliquyam duo voluptua vero et laoreet erat duo stet est placerat dolore. Kasd no et. Ea amet sadipscing et labore.", 
        img: "./assets/pexels-freestockpro-321552.jpg"},
    {title: "Dolor exerci ", 
        desc: "Dolore nostrud wisi consetetur sed no sanctus nihil ipsum eum dolore id dolor et consetetur autem. Labore ipsum et et labore magna minim sed. Rebum est dolor stet quis. Dolor dolor et commodo gubergren.", 
        img: "./assets/pexels-jvdm-1526410.jpg"},
    {title: "Justo est possim", 
        desc: "Et adipiscing sadipscing elitr amet veniam rebum. Amet feugait ea consetetur eirmod no zzril elitr. Kasd ipsum dolor at autem sit no aliquyam invidunt clita lorem eum lorem gubergren. Feugiat diam ex nulla voluptua elitr magna ipsum diam duo rebum augue. Lorem vero eleifend at accumsan dolor et sea et eleifend voluptua autem ut ipsum aliquyam. Dolore vero sit lorem voluptua stet kasd rebum labore zzril lorem ut est. Sea vel sanctus dignissim dolor stet qui. Et et sed erat commodo voluptua ut dolor ut diam amet in ea consetetur stet ea. Vulputate amet dolor diam gubergren duo invidunt ipsum diam quod ad kasd amet ut. Ullamcorper volutpat ipsum facer sea quis eirmod ut takimata tempor nonumy magna labore consectetuer. Stet clita sed justo clita velit dolores stet clita kasd est nonumy sea dolor kasd. Sadipscing eirmod erat sed dolore sed vulputate takimata commodo at kasd veniam. Accusam tempor vel dolore sit nibh. Magna amet nonumy rebum nulla aliquyam diam euismod dolor justo elitr et lorem luptatum eum diam. Et rebum iusto quis soluta. Liber voluptua vero volutpat sed in et sadipscing. Facilisi et ut. Illum aliquip accusam consequat. Clita accusam gubergren labore id sit nonumy sea gubergren et stet et et congue dolores et commodo.", 
        img: "./assets/pexels-marc-nesen-2153115757-32974372.jpg"},
    {title: "Lobortis ipsum ", 
        desc: "Duis lorem ut dolore voluptua rebum consetetur vel aliquyam rebum in erat dolor nibh nam. Magna eos sanctus option erat eu soluta. Duo congue sit illum tempor duo. Dolore magna ipsum at dolor diam nonumy diam et sit stet elitr eum duo. Exerci no labore ipsum tempor ut et eos. Dolor wisi stet ad diam et vero aliquyam clita nam kasd dolor ipsum ut lobortis eirmod no vel. Et lorem tempor no minim suscipit tempor odio labore eirmod dolore elitr volutpat.", 
        img: "./assets/pexels-pixabay-45853.jpg"},
    {title: "Aliquyam ea ", 
        desc: "Sanctus liber et placerat stet esse. Nobis aliquyam tempor at dolor at sanctus. Gubergren sit dolor consetetur. Suscipit magna takimata. Sea diam duis diam elitr commodo enim at esse. Dolore lorem magna consequat justo vel quis dolor sed accusam no sit gubergren rebum lorem erat invidunt. In vel sed eros ipsum invidunt amet eos sed rebum et magna elitr dolore nulla.", 
        img: "./assets/pexels-pixabay-76972.jpg"},
    {title: "Magna veniam", 
        desc: "Aliquyam clita no sit kasd vel voluptua nonumy invidunt magna nonummy feugiat feugiat eos vel minim sed. Justo sadipscing labore sit amet ipsum stet accusam sit eos gubergren stet sadipscing. Option blandit vero luptatum diam et vel stet lorem. Sit lorem ipsum facilisis quis elitr sanctus tempor dolores ipsum nonumy. Kasd erat ipsum lorem nonumy amet diam sit sanctus. Eirmod elitr et sed enim ea dolore ipsum eos luptatum quis illum. Possim labore odio nulla eirmod. Placerat feugiat nonumy rebum rebum. Kasd aliquyam lobortis commodo option labore iriure consetetur iriure soluta.", 
        img: "./assets/pexels-pixabay-208840.jpg"},
    {title: "Erat at rebum", 
        desc: "Amet suscipit sit dolor ipsum vero sed accusam delenit sea dolor dolor erat tempor commodo. Dignissim sed sadipscing sanctus ut. Tation invidunt magna consectetuer sadipscing feugiat duo tempor magna invidunt eos eu takimata rebum. In autem lorem placerat sadipscing sadipscing tempor et rebum et clita suscipit. Ut commodo et volutpat at stet. Te est dolor duis dolor ipsum veniam voluptua kasd duo diam no duo gubergren lorem sadipscing tation.", 
        img: "./assets/pexels-pixabay-235878.jpg"},
    {title: "Laoreet gubergren ", 
        desc: "Minim ut lorem dolores soluta magna diam amet sed facilisis amet est lorem ad stet. Invidunt consequat dolor dolor diam. Gubergren et amet consetetur lorem accusam gubergren takimata nulla tempor stet dolores sit ex. Vulputate duis wisi volutpat erat erat. Amet stet ex amet labore cum aliquyam at duo et duo clita at eu accusam exerci. Sanctus diam sea sanctus. Elitr molestie dolore elit ut eu vero accusam ipsum invidunt dolore vel voluptua et no eos et sanctus erat.", 
        img: "./assets/pexels-septimiu-lupea-271955805-32979257.jpg"},
];

let index = 0;
let lastAddedOptionIndex = 0;

const animScreen = document.querySelector("#animScreen");
const h1 = animScreen.querySelector("h1");
const h2 = animScreen.querySelector("h2");
const p = animScreen.querySelector("p");
let screenOptionList = Array.from(animScreen.querySelectorAll(".screenOption"));

animScreen.style.backgroundImage = `url(${data[index].img})`;
h2.textContent = data[index].title;
p.textContent = data[index].desc;

console.log("screenOptionList: ", screenOptionList);


function createListOption(index) {
    let span = document.createElement("span");
    span.style.setProperty("--index", index.toString());
    span.className = "screenOption";

    span.setAttribute("data-index", index.toString());
    span.setAttribute("data-src", data[index + 1].img);

    span.style.backgroundImage = `url(${data[index + 1].img})`;
    return span;
}

screenOptionList.forEach((elem, i) => {
    elem.setAttribute("data-index", `${i + 1}`);
    elem.style.backgroundImage = `url(${data[i + 1].img})`;
    elem.setAttribute("data-src", data[i + 1].img);
    // console.log("event.target: ", elem);


    elem.addEventListener("click", event => {
        index = i + 1;
        let indexRangeToMove = [];

        for (let y = parseInt(elem.getAttribute("data-index")) + 1; y < screenOptionList.length + 1; y++) {
            indexRangeToMove.push(y);
        }

        console.log("indexR", indexRangeToMove);
        event.target.style.animation = "0.8s linear animOne";
        event.target.style.animationFillMode = "forwards";
        
        [h1, h2, p].forEach(element => {
            element.style.animation = "0.5s linear textDisappear";
            element.style.animationFillMode = "forwards";
        });

        setTimeout(() => {
            animScreen.style.backgroundImage = `url(${elem.getAttribute("data-src")})`;
            h2.textContent = data[index].title;
            p.textContent = data[index].desc;

            setTimeout(() => {
                event.target.remove();

                lastAddedOptionIndex = parseInt(screenOptionList[screenOptionList.length - 1].getAttribute("data-index")) + 1;
                let newOptionList = createListOption(lastAddedOptionIndex);
                

                console.log("newOptionList : ", newOptionList);
                animScreen.appendChild(newOptionList);

                screenOptionList = Array.from(animScreen.querySelectorAll(".screenOption"));
                console.log("screenOptionList: ", screenOptionList);

                [h1, h2, p].forEach(element => {
                    element.style.animation = "0.5s linear textAppear";
                    element.style.animationFillMode = "forwards";
                });
            }, 1);
        }, 800);

        indexRangeToMove.forEach(dataIndex => {
            animScreen.querySelector(`.screenOption[data-index='${dataIndex}']`).style.left= `calc(50% + ${dataIndex - 2} * (calc(100% / 8) + 1rem))`;
            animScreen.querySelector(`.screenOption[data-index='${dataIndex}']`).setAttribute("data-index", `${dataIndex - 1}`);
        });
    });
});