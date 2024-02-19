//  (c) Jim Goodell 
const practiceitems = [

    {id: "18FEB2024-1", prompt: "Pastor Kohl's Farewell Reminder 1: Keep the ______________ foremost in all your thinking and living.", choices: 
    [
        {id: "choice0", value: "CBC phone number", correct: false}, 
        {id: "choice1", value: "CBC legacy", correct: false},
        {id: "choice1", value: "Great Commandments", correct: true, correctfeedback: "&quot;Teacher, which is the greatest commandment in the Law?&quot; Jesus replied: &quot;&apos;Love the Lord your God with all your heart and with all your soul and with all your mind.&apos; This is the first and greatest commandment.&quot;"},
        {id: "choice1", value: "Giving to CBC", correct: false}
    ]},
    {id: "mission0", prompt: "The mission of Charlton Baptist Church is to _______ God by making and growing fully devoted followers of Jesus Christ.", choices: 
    [
        {id: "choice0", value: "Jesus", correct: false}, 
        {id: "choice1", value: "Bible", correct: false},
        {id: "choice1", value: "glorify", correct: true},
        {id: "choice1", value: "pray to", correct: false}
    ]},
    {id: "18FEB2024-2", prompt: "Pastor Kohl's Farewell Reminder 2: Your speech should always be full of _________ no matter what the circumstances. (Colossians 4:6,Ephesians 4:29)", choices: 
    [
        {id: "choice0", value: "grace", correct: true}, 
        {id: "choice1", value: "accountability", correct: false},
        {id: "choice1", value: "judgement", correct: false},
        {id: "choice1", value: "righteous indignation", correct: false}
    ]},
    {id: "18FEB2024-3", prompt: "Pastor Kohl's Farewell Reminder 3: Be quick to __________ and seek reconciliation with those who hurt you.", choices: 
    [
        {id: "choice0", value: "listen", correct: false}, 
        {id: "choice1", value: "correct", correct: false},
        {id: "choice1", value: "forgive", correct: true},
        {id: "choice1", value: "speak", correct: false}
    ]},
    {id: "18FEB2024-4", prompt: "Pastor Kohl's Farewell Reminder 4: Put away your __________ ambitions.", choices: 
    [
        {id: "choice0", value: "righteous", correct: false}, 
        {id: "choice1", value: "selfish", correct: true, correctfeedback: "selfish ambition = insisting on getting our own way."},
        {id: "choice1", value: "complex", correct: false},
        {id: "choice1", value: "purple", correct: false}
    ]},
    {id: "18FEB2024-5", prompt: "Pastor Kohl's Farewell Reminder 5: Go beyond ____________ in extending hospitality to all who enter through our doors, strangers and church family are alike. (Hebrews 13:1-2)", choices: 
    [
        {id: "choice0", value: "the line", correct: false}, 
        {id: "choice1", value: "the Bible", correct: false},
        {id: "choice1", value: "the church", correct: false},
        {id: "choice1", value: "friendliness", correct: true}
    ]},
    {id: "18FEB2024-6", prompt: "Pastor Kohl's Farewell Reminder 6: Don't make the mistake of thinking you will have less money in your pocket if you _______________. (Proverbs 3:9-10, Proverbs 11:24-25, Malachi 3:10, Like 6:38, 2 Corinthians 9:6)", choices: 
    [
        {id: "choice0", value: "buy a new car", correct: false}, 
        {id: "choice1", value: "pray", correct: false},
        {id: "choice1", value: "work hard", correct: false},
        {id: "choice1", value: "give generously", correct: true}
    ]},
    {id: "18FEB2024-7", prompt: "Pastor Kohl's Farewell Reminder 7: Remember to look beyond the pews to _________ for everything you need. (Matthew 7:7-9, 18:19, Mark 11:24, John 15:7-8,16, 16:23, 1 John 3:21,22; 5:14-15)", choices: 
    [
        {id: "choice0", value: "heaven", correct: true}, 
        {id: "choice1", value: "the parking lot", correct: false},
        {id: "choice1", value: "the back wall", correct: false},
        {id: "choice1", value: "the street", correct: false}
    ]},
    {id: "18FEB2024-END", prompt: "This is the end of Pastor Kohl's Farewell Reminders. Do you want to continue with truths from the previous sermon?", choices: 
    [
        {id: "choice0", value: "", correct: false, incorrectfeedback: ""}, 
        {id: "choice1", value: "", correct: false, incorrectfeedback: ""},
        {id: "choice1", value: "Continue", correct: true, incorrectfeedback: "Ok, let's go!"},
        {id: "choice1", value: "", correct: false, incorrectfeedback: ""}
    ]},
    {id: "mission1", prompt: "The mission of Charlton Baptist Church is to glorify God by ________ and growing fully devoted followers of Jesus Christ.", choices: 
    [
        {id: "choice0", value: "helping", correct: false, incorrectfeedback: "Nope."}, 
        {id: "choice1", value: "worshiping", correct: false},
        {id: "choice1", value: "glorifying", correct: false},
        {id: "choice1", value: "making", correct: true}
    ]},
    {id: "makingorgrowing", prompt: "Our priority is:", choices: 
    [
        {id: "choice0", value: "outreach to new followers of Jesus Christ", correct: false}, 
        {id: "choice1", value: "growth for existing followers of Jesus Christ", correct: false},
        {id: "choice1", value: "none of the above", correct: false},
        {id: "choice1", value: "both making and growing followers of Jesus Christ", correct: true}
    ]},
    {id: "mission2", prompt: "The mission of Charlton Baptist Church is to glorify God by making and _______ fully devoted followers of Jesus Christ.", choices: 
    [
        {id: "choice0", value: "growing", correct: true}, 
        {id: "choice1", value: "worshiping", correct: false},
        {id: "choice1", value: "felowshiping", correct: false},
        {id: "choice1", value: "loving", correct: false}
    ]},
    {id: "evangelism", prompt: "What is the best thing we can do to reach unbelievers:", choices: 
    [
        {id: "choice0", value: "Outreach Events", correct: false}, 
        {id: "choice1", value: "Seeker Groups", correct: false},
        {id: "choice1", value: "Personal Evangelism", correct: true},
        {id: "choice1", value: "Ongoing Outreach Ministries", correct: false}
    ]},
    {id: "mission4", prompt: "The mission of Charlton Baptist Church is to glorify God by making and growing fully _________ followers of Jesus Christ.", choices: 
    [
        {id: "choice0", value: "prayer", correct: false}, 
        {id: "choice1", value: "devoted", correct: true},
        {id: "choice1", value: "Jesus", correct: false},
        {id: "choice1", value: "Bible", correct: false}
    ]},
    {id: "mission5", prompt: "The mission of Charlton Baptist Church is to glorify God by making and growing fully devoted _________ of Jesus Christ.", choices: 
    [
        {id: "choice0", value: "morals", correct: false}, 
        {id: "choice1", value: "words", correct: false},
        {id: "choice1", value: "sin", correct: false},
        {id: "choice1", value: "followers", correct: true}
    ]},
    {id: "smallgroupsize", prompt: "The ideal small group size for maximum participation by each participant:", choices: 
    [
        {id: "choice0", value: "12", correct: false}, 
        {id: "choice1", value: "6", correct: false},
        {id: "choice1", value: "24", correct: false},
        {id: "choice1", value: "4", correct: true}
    ]},
    {id: "mission6", prompt: "The mission of Charlton Baptist Church is to glorify God by making and growing fully devoted followers of ________.", choices: 
    [
        {id: "choice0", value: "Jesus Christ", correct: true}, 
        {id: "choice1", value: "Charlton Baptist Church", correct: false},
        {id: "choice1", value: "small groups", correct: false},
        {id: "choice1", value: "the pastor", correct: false}
    ]},
    {id: "smallgroupsizemax", prompt: "The maximum recommended small group size is:", choices: 
    [
        {id: "choice0", value: "12", correct: true}, 
        {id: "choice1", value: "6", correct: false},
        {id: "choice1", value: "24", correct: false},
        {id: "choice1", value: "44", correct: false}
    ]},
    {id: "verbinmatt28", prompt: "Matthew 28:19 says: <i>Go therefore and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit.</i> What is the main verb in this passage based on the original Greek text?", choices: 
    [
        {id: "choice0", value: "go", correct: false}, 
        {id: "choice1", value: "baptise", correct: false},
        {id: "choice1", value: "name", correct: false},
        {id: "choice1", value: "disciple", correct: true, correctfeedback: "Right, &quot;disciple&quot; or &quot;make disciples&quot; is the main verb. A common mistake is to think it is &quot;go&quot;, but that is just a modifier here, as in &quot;going&quot;."}
    ]},
    {id: "end", prompt: "This is the end of the practice. Close the tab to end or tap/click continue to practice again.</i> What is the main verb in this passage based on the original Greek text?", choices: 
    [
        {id: "choice0", value: "", correct: false, incorrectfeedback: ""}, 
        {id: "choice1", value: "", correct: false, incorrectfeedback: ""},
        {id: "choice1", value: "", correct: false, incorrectfeedback: ""},
        {id: "choice1", value: "Continue", correct: true, correctfeedback: "Ok. Let's practice some more."}
    ]}
];
var currentpracticeItemIndex = practiceitems.length;

function nextPracticeItem() {
    document.getElementById("landingpage").style.visibility="hidden";
    document.getElementById("nextButton").style.visibility="hidden";
    currentpracticeItemIndex++;
    if (currentpracticeItemIndex>practiceitems.length-1) {currentpracticeItemIndex=0};
    document.getElementById('practiceitemprompt').innerHTML = practiceitems[currentpracticeItemIndex].prompt;
    for (i=0;i<practiceitems[currentpracticeItemIndex].choices.length;i++) {
        var choicetileid = "choicetile" + i;
        var choiceobj = document.getElementById(choicetileid);
        choiceobj.innerHTML = practiceitems[currentpracticeItemIndex].choices[i].value;
        choiceobj.correct = practiceitems[currentpracticeItemIndex].choices[i].correct;
        if (practiceitems[currentpracticeItemIndex].choices[i].correctfeedback!=null) {
            choiceobj.correctfeedback = practiceitems[currentpracticeItemIndex].choices[i].correctfeedback;
        } else {
            choiceobj.correctfeedback = "";
        }
        if (practiceitems[currentpracticeItemIndex].choices[i].incorrectfeedback!=null) {
            choiceobj.incorrectfeedback = practiceitems[currentpracticeItemIndex].choices[i].incorrectfeedback;
        } else {
            choiceobj.incorrectfeedback = "";
        }
    }
    document.getElementById("practiceitem").style.visibility="visible";
    document.getElementById("choicetile").style.visibility="visible";
}
const dragoffset = {x: 0, y: 0};
const draglast = {x: 0, y: 0};
const centerXY = {x: 0, y: 0};
const player_position = {id: "C", name: "Center", relX: 0, relY: 0};
const playstep = {step: 0, player_positions: [player_position]};
const play = {name: "", steps: [playstep]};
const plays = [play];
const formation = {name: "", player_posiitons: [player_position]};
const formations = [formation];
const data={username:"", formations, plays};
data.formations=[];
data.plays=[];
var current_formation_name = ""; //The name of the current formation
var current_play_name = "";
var current_play_step = 0;
var current_play = play;
/**  Practice item globals */
const playerPositions = [{id: "LWR", name: "Left Wide Receiver", unit: "O"}, {id: "LT", name: "Left Tackle", unit: "O"}, {id: "LG", name: "Left Guard",  unit: "O"}, {id: "C", name: "Center", unit: "O"}, {id: "RG", name: "Right Guard", unit: "O"}, {id: "RT", name: "Right Tackle", unit: "O"}, {id: "TE", name: "Tight End", unit: "O"}, {id: "RWR", name: "Right Wide Receiver", unit: "O"}, {id: "QB", name: "Quarterback", unit: "O"}, {id: "FB", name: "Fullback", unit: "O"}, {id: "HB", name: "Halfback", unit: "O"}];
const playerPlayTiles = [{positionId: "RWR", play: "Flood"},{positionId: "RWR", play: "PA_Corner"},{positionId: "RWR", play: "PA_Fly"},{positionId: "RWR", play: "Out_and_Up"},{positionId: "RWR", play: "Shallow_Cross"},{positionId: "RWR", play: "Stop_and_Go"},{positionId: "RWR", play: "WR_Reverse_Pass-Wing_T"},{positionId: "RWR", play: "WR_Reverse_Pass-Wishbone"}];
var currentPlayerPlayTilesIndex = 0;
/***/
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.visibility=="visible") {menu.style.visibility="hidden";} else {menu.style.visibility="visible";}
}
function togglePractice() {
    // Hide maker components
    document.getElementById("nextButton").style.visibility="hidden";
    document.getElementById('buttonbar').style.visibility="hidden";
    document.getElementById('myCanvas').style.visibility="hidden";
    document.getElementById('lineofscrimage').style.visibility="hidden";
    toggleMute();
    toggleMenu();
    // Present a practice item
    displayPlayerPlayItem();
    document.getElementById('practiceitem').style.visibility="visible";
    document.getElementById('menu').style.visibility="hidden";
}
function toggleMaker() {
    // Hide maker components
    document.getElementById("nextButton").style.visibility="hidden";
    document.getElementById('buttonbar').style.visibility="visible";
    document.getElementById('myCanvas').style.visibility="visible";
    document.getElementById('lineofscrimage').style.visibility="visible";
    document.getElementById('practiceitem').style.visibility="hidden";
    default_lineup();
    document.getElementById('menu').style.visibility="hidden";
}
/* function getOtherRandomPlayerPlayImage(positionId, play) {
    var randomPlayerPlayImage = "";
    // @TODO -- Rewrite -- This will go into an infiinte loop if there aren't at-least 5 plays for the player to practice
    while (randomPlayerPlayImage == "") {
        var r = Math.floor(Math.random() * playerPlayTiles.length);
        if (playerPlayTiles[r].play != play && playerPlayTiles[r].positionId) {
            randomPlayerPlayImage = `images/plays/${positionId}-${playerPlayTiles[r].play}.png`
        }
    }
    //alert(randomPlayerPlayImage);
    return randomPlayerPlayImage;
}
function lookupPositionName(positionId) {
    for (i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i].id == positionId) { return playerPositions[i].name }
    }
} */
function checkAnswer(e) {
    var feedback ="";
    var feedbacktime = 2000;
    if (e.correct==true) {
        playAudioFeedback("correct");
        feedback = "Yes! ";
        if (e.correctfeedback!=null && e.correctfeedback.length>1) {
            feedback = e.correctfeedback;
            if (feedback.length>20) {feedbacktime+=(feedback.length*40);};
        }
        const myTimeout = window.setTimeout(hideFeedbackAndContinue, feedbacktime);
        //document.getElementById("feedbackImage").src="images/correctFeedback.png";
    } else {
        feedback = "That's not it. ";
        if (e.incorrectfeedback!=null && e.incorrectfeedback.length>1) {
            feedback = e.incorrectfeedback;
            if (feedback.length>20) {feedbacktime+=(feedback.length*40);};
        }
        playAudioFeedback("incorrect");
        const myTimeout = window.setTimeout(hideFeedback, feedbacktime);
        //document.getElementById("feedbackImage").src="images/incorrectFeedback.png";
    }
    document.getElementById("feedbackDiv").innerHTML=feedback;
    document.getElementById("feedbackDiv").style.visibility="visible";
}
function hideFeedbackAndContinue() {
    document.getElementById("feedbackDiv").style.visibility="hidden";
    const myTimeout = window.setTimeout(showNextButton, 500);
}
function hideFeedback() {
    document.getElementById("feedbackDiv").style.visibility="hidden";
}
function showNextButton() {
    document.getElementById("nextButton").style.visibility="visible";
}

function playAudioFeedback(audioClip) {
    //@TODO - add audio feedback
    var audioControl = document.getElementById(audioControl);
    var filePath = "audio/"+audioClip+".mp3"
    audio.src = filePath;
    audio.play();
}
function toggleMute() {
    // run on page load
    var audio = document.getElementById('audio');
    var muteButton = document.getElementById("muteButton");
    if (audio.muted) {
        muteButton.src="images/unmuted.png";
        audio.muted=false;
    } else {
        muteButton.src="images/muted.png";
        audio.muted=true;
    }
    audio.play(); // audio will load and then play
    var userAgent = window.navigator.userAgent;
    if (userAgent.includes("Safari") && !(userAgent.includes("Chrome"))) {
        var alertText = `Audio feedback not supported on Safari and iOS browsers. Use Chrome on Mac. Your user agent is: ${userAgent}`;
        alert(alertText);
    }
}
function drag_start(event) {
    var dm = document.getElementById('dragme');
    // Compute position clicked within the object relative to the top left of the object, used for precice dropping
    dragoffset.x = dm.offsetLeft - event.clientX;
    dragoffset.y = dm.offsetTop - event.clientY;
} 
function drag_me(event) { 
    event.preventDefault(); 
    draglast.x = event.pageX;
    draglast.y = event.pageY;
    return false; 
} 
function drop_here(event) { 
    event.preventDefault();
    var dm = document.getElementById('dragme');
    dm.style.left = (draglast.x+dragoffset.x) + 'px';
    dm.style.top = (draglast.y+dragoffset.y) + 'px';
    dm.innerHTML = ((draglast.x-centerXY.x) + ", " + (draglast.y-centerXY.y));
    return false;
} 
function find_center() {
    // Find the horizontal center of the viewport field
    var pf = document.getElementById('playingfield');
    centerXY.x = Math.round(pf.clientWidth/2);
    centerXY.y = Math.round(pf.clientHeight/2);
    return true;
}
/* function default_lineup() {
    find_center();
    // Move line of scrimage to middle
    var ls = document.getElementById('lineofscrimage');
    ls.style.top = centerXY.y + 'px';
    // Each player is positioned relative to center of line of scrimage
    const player_position = {id: "C", name: "Center", relX: 0, relY: 0};
    // Constructor for default formation
    const play_snapshot = {step: 0, player_positions: [{id: "LWR", name: "Left Wide Receiver", relX: -120, relY: 10}, {id: "LT", name: "Left Tackle", relX: -36, relY: 10}, {id: "LG", name: "Left Guard", relX: -17, relY: 10}, {id: "C", name: "Center", relX: 0, relY: 10}, {id: "RG", name: "Right Guard", relX: 17, relY: 10}, {id: "RT", name: "Right Tackle", relX: 36, relY: 10}, {id: "TE", name: "Tight End", relX: 80, relY: 20}, {id: "RWR", name: "Right Wide Receiver", relX: 120, relY: 10}, {id: "QB", name: "Quarterback", relX: 0, relY: 70}, {id: "FB", name: "Fullback", relX: 0, relY: 50}, {id: "HB", name: "Halfback", relX: 0, relY: 30}]};

    // Place players on field
    for (let player_posiiton of play_snapshot.player_positions) {
        var div = document.createElement("div");
        div.className = "draggable";
        div.className = "player";
        div.style.top = (player_posiiton.relY+centerXY.y) + "px";
        div.style.left = (player_posiiton.relX+centerXY.x) + "px";
        div.draggable="true";
        div.id = player_posiiton.id;
        div.name = player_posiiton.name;
        div.innerHTML = "O";
        
        var tooltipspan = document.createElement("span");
        tooltipspan.className = "tooltiptext";
        tooltipspan.innerHTML = player_posiiton.name;
        div.appendChild(tooltipspan);
        
        document.body.appendChild(div);
        var thisDiv = document.getElementById(player_posiiton.id);
        
        // Add event dragable handlers
        thisDiv.ondragstart = function(event) {
            var dm = event.target;
            dragoffset.x = dm.offsetLeft - event.clientX; // Compute position clicked within the object relative to the top left of the object, used for precice dropping
            dragoffset.y = dm.offsetTop - event.clientY;
        };
        
        thisDiv.ondrag = function(event) {
            draglast.x = event.pageX;
            draglast.y = event.pageY;
        };
        
        thisDiv.ondragend = function(event) {
            event.target.style.left = (draglast.x+dragoffset.x) + 'px';
            event.target.style.top = (draglast.y+dragoffset.y) + 'px';
            //event.target.innerHTML = ((draglast.x-centerXY.x) + ", " + (draglast.y-centerXY.y));
            return false;
        };
        
    }
    loadFromCookie();
}
function getFormationByName(formation_name) {
    for (let f of formations) {
        if (f.name==formation_name) {
            return f;
        } else {
            return null;
        }
    }
}
function saveFormation() {
    find_center();
    let formation_name = prompt("Formation name", current_formation_name);
    // Create JSON object from the current DOM objects
    const newFormation = {name: formation_name, player_positions: []};
    document.querySelectorAll('.player').forEach( player => {
        // Get values from the DIV element into string of JSON object
        const newPlayerPosition = {id: player.id, name: player.name, relX: (Number.parseInt(player.style.left)-centerXY.x), relY: (Number.parseInt(player.style.top)-centerXY.y)};
        newFormation.player_positions.push(newPlayerPosition);
    });
    // Does the formation already exist in the data model?
    var existingFormation = getFormationByName(formation_name);
    if (existingFormation!=null) {
        if (confirm("The formation " + formation_name + " exists? Replace it?")) {
            existingFormation = newFormation;
            current_formation_name = formation_name;
        };
    } else {
        current_formation_name = formation_name;
        formations.push(newFormation);
    }
    saveToCookie();
}
function getPlayByName(playname) {
    for (let p of data.plays) {
        if (p.name==playname) {
            current_play = p; // Set as global
            return p;
        }
    }
    return false;
}
function getPlayStep(play, step) {
    for (let s of play.steps) {
        if (s.step==step) {
            return s;
        } else {
            return false;
        }
    }
    return false;
}
function setCurrentPlayStep(playerpositions) {
    var p = getPlayByName(current_play_name);
    var s = getPlayStep(p,current_play_step);
    s.player_posiitons=playerpositions;
    setCurrentPlay();
    tempstatus("Play step updated.");
    return true;
}
function setCurrentPlay() {
    //Store the current play to the data object
    for (i=0; i<data.plays.length-1; i++) {
        let p = data.plays[i];
        if (p.name==current_play_name) {
            data.plays[i] = current_play;
            return p;
        }
    }
}

function getPlayerPositions() {
    find_center();
    const newPlayStep = {step: current_play_step, player_positions: []};
    // Create JSON object from the current DOM objects
    document.querySelectorAll('.player').forEach( player => {
        // Get values from the DIV element into string of JSON object
        const newPlayerPosition = {id: player.id, name: player.name, relX: (Number.parseInt(player.style.left)-centerXY.x), relY: (Number.parseInt(player.style.top)-centerXY.y)};
        newPlayStep.player_positions.push(newPlayerPosition);
    });
    return newPlayStep;
}
function setPlayStep() {
    // Create JSON play step object from the player objects in DOM
    let domPlayStep = getPlayerPositions();
    // Check for current play
    var current_play = getPlayByName(current_play_name);
    if (current_play) {
        // Does the step exist?
        var s = getPlayStep(current_play,current_play_step);
        if (s) {
            current_play.steps[current_play_step] = domPlayStep;
        } else {
            current_play_step = current_play.steps.push(domPlayStep)-1; //Add the step to the data
            
        };
        //WARN: May need code to ensure added step is sequentially numbered
    } else {
        // New play -- must have a name
        if (current_play_name=="") {
            playname = prompt("Play name", "");
        }
        current_play_name = playname;
        current_play_step=0;
        current_play = createPlay(playname);
        current_play.steps.push(domPlayStep);
    }
    setCurrentPlay();
    updateStatus();
    //saveToCookie();
}
function createPlay(playname) {
    var newPlay = {name: playname, steps: []};
    var arrayLen = data.plays.push(newPlay);
    return data.plays[arrayLen-1];
} */
// function savePlayStep() {
//     //Deprecate -- replace with setPlayStep
// 	find_center();
//     // Play must have a name
//     if (current_play_name=="") {
// 	    playname = prompt("Play name", "");
//     }
// 	const newPlayStep = {step: current_play_step, player_positions: []};
//     // Create JSON object from the current DOM objects
//     document.querySelectorAll('.player').forEach( player => {
//         // Get values from the DIV element into string of JSON object
//         const newPlayerPosition = {id: player.id, name: player.name, relX: (Number.parseInt(player.style.left)-centerXY.x), relY: (Number.parseInt(player.style.top)-centerXY.y)};
//         newPlayStep.player_positions.push(newPlayerPosition);
//     });
// 	// Does the play already exist in the data model?
//     var existingPlay = getPlayByName(playname);
//     if (existingPlay!=null) {
//         // Does the play step exist?
//         var existingPlayStep = getPlayStep(existingPlay, current_play_step);
//         if (existingPlayStep==null) {
//             //add the step
//             existingPlay.steps.push(newPlayStep);
//         } else {
//             //overwrite the step
//             existingPlayStep = newPlayStep;
//         }
//     } else {
//         // Create the play and step
//         const newPlay = {name: playname, steps: []};
//         newPlay.steps.push(newPlayStep);
//         plays.push(newPlay);
//         current_play_name = playname;
//         current_play = newPlay; // Set as global
//     }
//     // Update global dataset with newplays
//     data.plays=plays;
//     updateStatus();
//     saveToCookie();
// }
/* function addPlayStep() {
    if (current_play!=null && current_play.steps!=null && current_play.steps.length>0) {
        current_play_step++ 
    } else {
        alert("Save step 0 before adding a step.");
    }
    updateStatus();
}
function reset() {
    current_formation_name = "";
    current_play_name = "";
    current_play_step = 0;
    data.formations = [];
    data.plays=[];
    document.querySelectorAll('.player').forEach( p => {p.remove();}); //Clear the field
    clearVectors();
    default_lineup();
    updateStatus();
}
function newPlay() {
    reset();
    var playname = prompt("Play name", "");
    current_play_name = playname;
    current_play_step=0;
    current_play = createPlay(playname);
    setPlayStep();
}
function deletePlay() {
    // TO DO
}
function updateStatus() {
    document.getElementById("status").innerHTML = "Play: <select id='playselect'  onchange='selectPlay()'><option value=''>---</option></select> | Play Step: <a href='javascript:stepBack()'>&lt;</a> " + current_play_step + " <a href='javascript:stepForward()'>&gt;</a>";
    updatePlaySelector();
}
function updatePlaySelector() {
    playselect = document.getElementById("playselect");
    // Remove and then re-add the options
    while (playselect.firstChild) {
        playselect.firstChild.remove();
    }
    data.plays.forEach(p =>{
        var opt = document.createElement('option');
        opt.value = p.name;
        opt.innerHTML = p.name;
        opt.selected = false;
        if (p.name==current_play_name) {opt.selected = true;};
        playselect.appendChild(opt);
    });
    if (data.plays.length==0) {
        
    }
}
function selectPlay() {
    playselect = document.getElementById("playselect");
    current_play_name = playselect.value;
    current_play = getPlayByName(current_play_name);
    current_play_step = 0;
    tempstatus("Play '" + current_play_name + "' selcted.");
    animatePlayStep(100);
}
function clearVectors() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
}
function getPlayerVectors() {
    //Get the play
    var existingPlay = getPlayByName(current_play_name);
    const playerVectors = [];
    if (existingPlay!=null) {
        existingPlay.steps.forEach(s =>{
            for (i=0;i<s.player_positions.length;i++) {
                pp = s.player_positions[i];
                if (s.step==0) { 
                    //on first step create the vectors for all players on the field
                    const playerVector = {id: pp.id, coordinates: [{x: pp.relX,y: pp.relY}]};
                    playerVectors.push(playerVector);
                } else {
                    // on subsequent steps find the player vector array and append coordinates
                    playerVectors[i].coordinates.push({x:pp.relX,y:pp.relY});
                }
            };
        });
    }
    return playerVectors;
}
function drawVectors() {
    // Create a Canvas:
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let playerVectors = getPlayerVectors(); //Gets vectors for current play
    playerVectors.forEach(pv=>{
        let coords=pv.coordinates;
        for (i=0;i<coords.length-1;i++) {
            const coordStart = coords[i];
            const coordEnd = coords[i+1];
            ctx.beginPath();
            ctx.moveTo(centerXY.x+coordStart.x+10,centerXY.y+coordStart.y+10);
            ctx.lineTo(centerXY.x+coordEnd.x+10,centerXY.y+coordEnd.y+10);
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 2]);
            ctx.stroke();
            
            if (i==coords.length-2) { //Add arrow head on last segment
                drawVectorWithArrow(ctx,centerXY.x+coordStart.x+10,centerXY.y+coordStart.y+10,centerXY.x+coordEnd.x+10,centerXY.y+coordEnd.y+10);
            }
        };
    });
}
function drawVectorWithArrow( context, fromx, fromy, tox, toy ) {
    const dx = tox - fromx;
    const dy = toy - fromy;
    const headlen = Math.sqrt( dx * dx + dy * dy ) * 0.3; // length of head in pixels
    const angle = Math.atan2( dy, dx );
    context.beginPath();
    context.moveTo( tox - headlen * Math.cos( angle - Math.PI / 6 ), toy - headlen * Math.sin( angle - Math.PI / 6 ) );
    context.lineTo( tox, toy );
    context.lineTo( tox - headlen * Math.cos( angle + Math.PI / 6 ), toy - headlen * Math.sin( angle + Math.PI / 6 ) );
    context.stroke();
}
function deleteData() {
    var c = confirm("Are you sure? This will delete all data.");
    if (c) {
        data.plays = [];
        data.formations = [];
        current_play_name = "";
        current_play_step = 0;
        current_play = null;
        updateStatus();
        var d= new Date();
        document.cookie = "data=''; expires="+d.toUTCString();
    }
}
function saveToCookie() {
    // Save the entire data set to a cookie
    var dataString=JSON.stringify(data);
    alert(dataString);
    const d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000)); //for testing set expire in one day
    document.cookie = "data="+dataString+"; expires="+d.toUTCString();
}
function loadFromCookie() {
    try {
        let tempdata = JSON.parse(getCookie("data"));
        data.name=tempdata.name;
        data.plays=tempdata.plays;
        data.formations=tempdata.formations;
        tempstatus("Loaded from cookie: " + data.plays.length + " plays.");
        if (data.plays.length>0) {
            current_play=data.plays[0];
            current_play_name=current_play.name;
            current_play_step=0;
            //alert(JSON.stringify(data));
            updateStatus();
        }
    } catch(e) {
        tempstatus("Data from cookie could not be loaded.");
    }
} */
// function debugRoundtripCookie() {
//     var dataString=JSON.stringify(data);
//     saveToCookie();
//     if (dataString==JSON.stringify(data)) {
//         tempstatus("Good cookie");
//     } else {
//         tempstatus("Bad cookie");
//     }
// }
/* function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
function tempstatus(msg) {
    document.getElementById("tempstatus").innerHTML=msg;
}
function displayPlayerPositions(playstep) {
    tempstatus("Moving players to position " + playstep + " of play " + current_play_name + ".");
    // Get the player's position coordinates move the object there
    current_play = getPlayByName(current_play_name);
    current_play.steps[current_play_step].player_positions.forEach(pp =>{
            var thisPlayer = document.getElementById(pp.id);
            tempstatus(pp.id + ":" + pp.relY + " in " + current_play_name);
            thisPlayer.style.top=(centerXY.y+pp.relY);
            thisPlayer.style.left=(centerXY.x+pp.relX); 
    });  
}
function stepBack() {
    if (current_play_step>0) {current_play_step--};
    animatePlayStep(2000);
    updateStatus();
}
function stepForward() {
    if (current_play_step<(current_play.steps.length-1)) {current_play_step++};
    animatePlayStep(2000);
    updateStatus();
}
function repositionThisPlayer(event) {
    // Get the player's position coordinates move the object there
    current_play.steps[current_play_step].player_positions.forEach(pp =>{
        if (pp.id=this.id) {
            this.style.top=(centerXY.y+pp.relY);
            this.style.left=(centerXY.x+pp.relX);
        }    
    }); 
}
function animatePlayStep(speed) {
    //speed = speed of animation in ms
    //HACK: Something with the data breaks and loses id property unless we stringify and then parse
    var ds = JSON.stringify(current_play.steps[current_play_step].player_positions);
    var d = JSON.parse(ds);
    //END HACK
    for (i=0; i<d.length-1;i++) {
        var pp=d[i];
        var thisPlayer = document.getElementById(pp.id);
        if (thisPlayer!=null) {$(thisPlayer).animate({left: (centerXY.x+pp.relX),top: (centerXY.y+pp.relY)},speed,repositionThisPlayer());};
    };       
}
function animatePlay() {
    current_play_step = 0;
    animatePlayStep(0); // 0 speed jumps players to starting position
    animateNextStep();  
}
function animateNextStep() {
    updateStatus();
    animatePlayStep(3000); // 3000 takes 3 seconds to move to next posiiton
    if (current_play_step<current_play.steps.length-1) {
        current_play_step++;
        setTimeout(animateNextStep(),4000);
    }
} */