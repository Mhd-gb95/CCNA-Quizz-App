const questions = [
    {
    question : "Which of the following dynamic routing protocols are Distance Vector routing protocols?",
    answsers : [
        {text:"RIP", correct:true},
        {text:"OSPF", correct:false},
        {text:"BGP", correct:false},
        {text:"IS-IS", correct:false},
        
        ]
    },
    {
    question : "Which statement about static and dynamic routes is true?",
    answsers : [
        {text:"Dynamic routes tell the router how to forward packets to networks that are not directly connected, while static routes tell the router how to forward packets to networks that are directly connected", correct:false},
        {text:"Static routes are manually configured by a network administrator, while dynamic routes are automatically learned and adjusted by a routing protocol", correct:true},
        {text:"Dynamic routes are manually configured by a network administrator, while static routes are automatically learned and adjusted by a routing protocol", correct:false},
        {text:"Static routes tell the router how to forward packets to networks that are not directly connected, while dynamic routes tell the router how to forward packets to networks that are directly connected", correct:false},
        
        ]
    },
    {
    question : "Router A learns the same route from two different neighbors, one of the neighbor routers is an OSPF neighbor and the other is an EIGRP neighbor. What is the administrative distance of the route that will be installed in the routing table?",
    answsers : [
        {text:"20", correct:false},
        {text:"110", correct:false},
        {text:"90", correct:true},
        {text:"115", correct:false},
        
    ]
},
{
    question : "Which attribute does a router use to select the best path when two or more different routes to the same destination exist from two different routing protocols?",
    answsers : [
        {text:"metric", correct:false},
        {text:"administrative distance", correct:true},
        {text:"hop count", correct:false},
        {text:"dual algorithm", correct:false},
        
    ]
},
{
    question : "What is a benefit of using a Cisco Wireless LAN Controller?",
    answsers : [
        {text:"Central AP management requires more complex configurations", correct:false},
        {text:"It supports autonomous and lightweight APs", correct:false},
        {text:"Unique SSIDs cannot use the same authentication method", correct:false},
        {text:"It eliminates the need to configure each access point individually", correct:true},
        
    ]
},
{
    question : "Which mode allows access points to be managed by Cisco Wireless LAN Controllers?",
    answsers : [
        {text:"bridge", correct:false},
        {text:"lightweight", correct:true},
        {text:"mobility express", correct:false},
        {text:"autonomous", correct:false},
        
    ]
},
{
    question : "Which statement about Link Aggregation when implemented on a Cisco Wireless LAN Controller is true?",
    answsers : [
        {text:"When enabled the WLC bandwidth drops to 500 Mbps", correct:false},
        {text:"One functional physical port is needed to pass client traffic", correct:true},
        {text:"To pass client traffic two or more ports must be configured", correct:false},
        {text:"The EtherChannel must be configured in “mode active”", correct:false},
        
    ]
},
{
    question : "Which 802.11 frame type is association response?",
    answsers : [
        {text:"management", correct:true},
        {text:"control", correct:false},
        {text:"protected frame", correct:false},
        {text:"action", correct:false},
        
    ]
},
{
    question : "Two switches are connected and using Cisco Dynamic Trunking Protocol. SW1 is set to Dynamic Desirable. What is the result of this configuration?",
    answsers : [
        {text:"The link is in a downstate.", correct:false},
        {text:"The link is in an error disables stale", correct:false},
        {text:"The link is becomes an access port", correct:false},
        {text:"The link becomes a trunkport", correct:true},
        
    ]
},
{
    question : "Which command should you enter to configure a device as an NTP server?",
    answsers : [
        {text:"ntp peer", correct:false},
        {text:"ntp master", correct:true},
        {text:"ntp server", correct:false},
        {text:"ntp authenticate", correct:false},
        
    ]
},
{
    question : "What is the functionality of the Cisco DNA Center?",
    answsers : [
        {text:"data center network policy controller", correct:false},
        {text:"software-defined controller for automation of devices and services", correct:true},
        {text:"console server that permits secure access to all network devices", correct:false},
        {text:"IP address pool distribution scheduler", correct:false},
        
    ]
},
{
    question : "Which IP header field is changed by a Cisco device when QoS marking is enabled?",
    answsers : [
        {text:"Header Checksum", correct:false},
        {text:"Type of Service", correct:true},
        {text:"DSCP", correct:false},
        {text:"ECN", correct:false},
        
    ]
},
{
    question : "What uses HTTP messages to transfer data to applications residing on different hosts?",
    answsers : [
        {text:"REST", correct:true},
        {text:"OpenStack", correct:false},
        {text:"OpFlex", correct:false},
        {text:"OpenFlow", correct:false},
        
    ]
},
{
    question : "What is a characteristic of RSA?",
    answsers : [
        {text:"It uses preshared keys for encryption", correct:false},
        {text:"It is an asymmetric encryption algorithm", correct:true},
        {text:"It requires both sides to have identical keys for encryption", correct:false},
        {text:"It is a symmetric decryption algorithm.", correct:false},
        
    ]
},
{
    question : "Which signal frequency appears 60 times per minute?",
    answsers : [
        {text:"1 Hz signal", correct:false},
        {text:"1 GHz signal", correct:false},
        {text:"60 Hz signal", correct:true},
        {text:"60 GHz signal", correct:false},
        
    ]
},
{
    question : "What is the function of a controller in a software-defined network?",
    answsers : [
        {text:"multicast replication at the hardware level", correct:false},
        {text:"setting packet-handling policies", correct:true},
        {text:"forwarding packets", correct:false},
        {text:"fragmenting and reassembling packets", correct:false},
        
    ]
},
{
    question : "Which command enables HTTP access to the Cisco WLC?",
    answsers : [
        {text:"config network secureweb enable", correct:false},
        {text:"config network webmode enable", correct:true},
        {text:"config certificate generate webadmin", correct:false},
        {text:"config network telnet enable", correct:false},
        
    ]
},
{
    question : "What is a benefit of a point-to-point leased line?",
    answsers : [
        {text:"full-mesh capability", correct:false},
        {text:"flexibility of design", correct:false},
        {text:"low cost", correct:false},
        {text:"simplicity of configuration", correct:true},
        
    ]
},
{
    question : "Which state is bypassed in Rapid PVST+ when PortFast is enabled on a port?",
    answsers : [
        {text:"discarding", correct:false},
        {text:"learning", correct:true},
        {text:"blocking", correct:false},
        {text:"forwarding", correct:false},
        
    ]
},
    {
    question : "What describes a northbound REST API for SDN?",
    answsers : [
        {text:"network-element-facing interface for the control and data planes", correct:false},
        {text:"application-facing interface for GET, POST, PUT, and DELETE methods", correct:true},
        {text:"network-element-facing interface for GET, POST, PUT, and DELETE methods", correct:false},
        {text:"application-facing interface for SNMP GET requests", correct:false},
        
    ]
    },
    {
    question : "What is a reason to implement LAG on a Cisco WLC?",
    answsers : [
        {text:"Enable the connected switch ports to use different Layer 2 configurations.", correct:false},
        {text:"Increase the available throughput on the link.", correct:true},
        {text:"Allow for stateful failover between WLCs.", correct:false},
        {text:"Increase security by encrypting management frames.", correct:false},
        
       ]
    },
    {
    question : "Which type of wireless encryption is used for WPA2 in pre-shared key mode?",
    answsers : [
        {text:"AES-256", correct:false},
        {text:"RC4", correct:false},
        {text:"TKIP with RC4", correct:false},
        {text:"AES-128", correct:true},
        
        ]
     },
     {
    question : "Which QoS Profile is selected in the GUI when configuring a voice over WLAN deployment?",
    answsers : [
        {text:"Silver", correct:false},
        {text:"Gold", correct:false},
        {text:"Bronze", correct:false},
        {text:"Platinum", correct:true},
        
        ]
     },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StarQuizz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answsers.forEach(answser => {
        const button = document.createElement("button");
        button.innerHTML = answser.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answser.correct){
            button.dataset.correct = answser.correct;
        }
        button.addEventListener("click",selectedAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectedAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `Vous avez obtenu ${score} sur ${questions.length}!`;
    nextButton.innerHTML = "Jouez Encore";
    nextButton.style.display = "block";
}

function handledNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handledNextButton();
    }else{
        StarQuizz();
    }
});

StarQuizz();















[
    {
    "question": "Quel langage est principalement utilisé pour le développement web côté client ?",
    "options": ["Python", "JavaScript", "PHP", "C++"],
    "answer": "JavaScript",
    "category": "IT"
  },
  {

    "question": "Quel protocole est utilisé pour transférer des fichiers sur Internet ?",
    "options": ["SMTP", "FTP", "HTTP", "DNS"],
    "answer": "FTP",
    "category": "IT"
  },
  {
 
    "question": "Quel est le rôle d’un pare-feu ?",
    "options": ["Accélérer le réseau", "Bloquer les virus", "Filtrer le trafic réseau", "Stocker les données"],
    "answer": "Filtrer le trafic réseau",
    "category": "IT"
  },
  {

    "question": "Quel est le système d’exploitation développé par Apple ?",
    "options": ["Windows", "Linux", "macOS", "Android"],
    "answer": "macOS",
    "category": "IT"
  },
   {
    "id": 21,
    "question": "Quel langage est principalement utilisé pour les scripts côté serveur ?",
    "options": ["HTML", "CSS", "PHP", "JavaScript"],
    "answer": "PHP",
    "category": "IT"
  },
  {
    "id": 22,
    "question": "Quel est le rôle du DNS ?",
    "options": ["Envoyer des emails", "Traduire les noms de domaine en adresses IP", "Stocker des fichiers", "Sécuriser les connexions"],
    "answer": "Traduire les noms de domaine en adresses IP",
    "category": "IT"
  },
  {
    "id": 23,
    "question": "Quel est le langage de requête utilisé pour interroger une base de données ?",
    "options": ["SQL", "HTML", "Python", "C#"],
    "answer": "SQL",
    "category": "IT"
  },
  {
    "id": 24,
    "question": "Quel est le rôle d’un compilateur ?",
    "options": ["Exécuter le code", "Traduire le code source en langage machine", "Créer une interface", "Gérer la mémoire"],
    "answer": "Traduire le code source en langage machine",
    "category": "IT"
  },
   {
    "id": 41,
    "question": "Quel langage est utilisé pour le développement d’applications Android ?",
    "options": ["Swift", "Kotlin", "JavaScript", "Ruby"],
    "answer": "Kotlin",
    "category": "IT"
  },
  {
    "id": 42,
    "question": "Quel est le rôle d’un algorithme ?",
    "options": ["Stocker des données", "Résoudre un problème", "Afficher une image", "Gérer la mémoire"],
    "answer": "Résoudre un problème",
    "category": "IT"
  },
  {
    "id": 43,
    "question": "Quel est le format de fichier utilisé pour les feuilles de style ?",
    "options": [".html", ".js", ".css", ".php"],
    "answer": ".css",
    "category": "IT"
  },
  {
    "id": 44,
    "question": "Quel est le rôle d’un serveur web ?",
    "options": ["Créer des images", "Stocker des vidéos", "Héberger des sites web", "Compiler du code"],
    "answer": "Héberger des sites web",
    "category": "IT"
  },
    {
    "id": 61,
    "question": "Quel langage est utilisé pour le développement d’applications iOS ?",
    "options": ["Java", "Swift", "C#", "Python"],
    "answer": "Swift",
    "category": "IT"
  },
  {
    "id": 62,
    "question": "Quel est le rôle d’un système d’exploitation ?",
    "options": ["Compiler du code", "Gérer les ressources matérielles", "Créer des images", "Afficher des vidéos"],
    "answer": "Gérer les ressources matérielles",
    "category": "IT"
  },
  {
    "id": 63,
    "question": "Quel est le format de fichier utilisé pour les pages web ?",
    "options": [".html", ".css", ".js", ".php"],
    "answer": ".html",
    "category": "IT"
  },
  {
    "id": 64,
    "question": "Quel est le rôle d’un navigateur web ?",
    "options": ["Compiler du code", "Afficher les pages web", "Créer des bases de données", "Gérer les fichiers"],
    "answer": "Afficher les pages web",
    "category": "IT"
  },
  {
    "id": 81,
    "question": "Quel langage est utilisé pour le développement de jeux avec Unity ?",
    "options": ["Java", "C#", "Python", "Swift"],
    "answer": "C#",
    "category": "IT"
  },
  {
    "id": 82,
    "question": "Quel est le rôle d’un IDE (environnement de développement) ?",
    "options": ["Compiler du code", "Écrire, tester et déboguer du code", "Créer des images", "Gérer les fichiers"],
    "answer": "Écrire, tester et déboguer du code",
    "category": "IT"
  },
  {
    "id": 83,
    "question": "Quel est le format de fichier utilisé pour les scripts Python ?",
    "options": [".py", ".js", ".html", ".css"],
    "answer": ".py",
    "category": "IT"
  },
  {
    "id": 84,
    "question": "Quel est le rôle d’un backend dans une application web ?",
    "options": ["Gérer l’interface utilisateur", "Gérer les données et la logique", "Afficher les pages", "Créer des animations"],
    "answer": "Gérer les données et la logique",
    "category": "IT"
  }
]


[
      {
    "question": "Quel composant électronique stocke l’énergie sous forme de champ électrique ?",
    "options": ["Résistance", "Condensateur", "Diode", "Transistor"],
    "answer": "Condensateur",
    "category": "Électronique"
  },
  {

    "question": "Quel est le rôle d’un transistor ?",
    "options": ["Stocker l’énergie", "Amplifier ou commuter un signal", "Mesurer la température", "Convertir le courant alternatif"],
    "answer": "Amplifier ou commuter un signal",
    "category": "Électronique"
  },
  {
 
    "question": "Quel composant limite le courant dans un circuit ?",
    "options": ["Diode", "Résistance", "Condensateur", "Bobine"],
    "answer": "Résistance",
    "category": "Électronique"
  },
  {

    "question": "Quel est le symbole d’un condensateur ?",
    "options": ["R", "C", "L", "D"],
    "answer": "C",
    "category": "Électronique"
  },
  {
    "id": 25,
    "question": "Quel composant électronique est utilisé pour redresser le courant ?",
    "options": ["Diode", "Résistance", "Condensateur", "Bobine"],
    "answer": "Diode",
    "category": "Électronique"
  },
  {
    "id": 26,
    "question": "Quel est le rôle d’un oscillateur ?",
    "options": ["Amplifier un signal", "Générer une fréquence", "Filtrer le courant", "Stocker l’énergie"],
    "answer": "Générer une fréquence",
    "category": "Électronique"
  },
  {
    "id": 27,
    "question": "Quel composant est utilisé pour mesurer une température ?",
    "options": ["Thermistance", "Diode", "Transistor", "Résistance"],
    "answer": "Thermistance",
    "category": "Électronique"
  },
  {
    "id": 28,
    "question": "Quel est le symbole d’une résistance ?",
    "options": ["R", "C", "L", "D"],
    "answer": "R",
    "category": "Électronique"
  },
  {
    "id": 45,
    "question": "Quel composant est utilisé pour convertir le courant alternatif en courant continu ?",
    "options": ["Transformateur", "Diode", "Résistance", "Condensateur"],
    "answer": "Diode",
    "category": "Électronique"
  },
  {
    "id": 46,
    "question": "Quel est le rôle d’un transformateur ?",
    "options": ["Convertir la tension", "Stocker l’énergie", "Filtrer le courant", "Mesurer la température"],
    "answer": "Convertir la tension",
    "category": "Électronique"
  },
  {
    "id": 47,
    "question": "Quel composant est utilisé pour créer un champ magnétique ?",
    "options": ["Bobine", "Diode", "Résistance", "Condensateur"],
    "answer": "Bobine",
    "category": "Électronique"
  },
  {
    "id": 48,
    "question": "Quel est le symbole d’une bobine ?",
    "options": ["R", "C", "L", "D"],
    "answer": "L",
    "category": "Électronique"
  },
  {
    "id": 65,
    "question": "Quel composant est utilisé pour filtrer les signaux ?",
    "options": ["Condensateur", "Résistance", "Bobine", "Filtre actif"],
    "answer": "Filtre actif",
    "category": "Électronique"
  },
  {
    "id": 66,
    "question": "Quel est le rôle d’un régulateur de tension ?",
    "options": ["Augmenter la tension", "Stabiliser la tension", "Convertir le courant", "Stocker l’énergie"],
    "answer": "Stabiliser la tension",
    "category": "Électronique"
  },
  {
    "id": 67,
    "question": "Quel composant est utilisé pour détecter la lumière ?",
    "options": ["Photodiode", "Condensateur", "Résistance", "Bobine"],
    "answer": "Photodiode",
    "category": "Électronique"
  },
  {
    "id": 68,
    "question": "Quel est le symbole d’une diode ?",
    "options": ["R", "C", "D", "L"],
    "answer": "D",
    "category": "Électronique"
  },
  {
    "id": 85,
    "question": "Quel composant est utilisé pour mesurer une tension ?",
    "options": ["Voltmètre", "Ampèremètre", "Ohmmètre", "Oscilloscope"],
    "answer": "Voltmètre",
    "category": "Électronique"
  },
  {
    "id": 86,
    "question": "Quel est le rôle d’un microcontrôleur ?",
    "options": ["Amplifier un signal", "Exécuter des instructions programmées", "Filtrer le courant", "Convertir la tension"],
    "answer": "Exécuter des instructions programmées",
    "category": "Électronique"
  },
  {
    "id": 87,
    "question": "Quel composant est utilisé pour stocker des données numériques ?",
    "options": ["Mémoire EEPROM", "Diode", "Résistance", "Condensateur"],
    "answer": "Mémoire EEPROM",
    "category": "Électronique"
  },
  {
    "id": 88,
    "question": "Quel est le symbole d’un microcontrôleur ?",
    "options": ["MCU", "µC", "IC", "CPU"],
    "answer": "µC",
    "category": "Électronique"
  }
]

[
    {
    "id": 9,
    "question": "Quelle est la dérivée de sin(x) ?",
    "options": ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    "answer": "cos(x)",
    "category": "Mathématiques"
  },
  {
    "id": 10,
    "question": "Combien vaut 7 × 8 ?",
    "options": ["54", "56", "58", "60"],
    "answer": "56",
    "category": "Mathématiques"
  },
  {
    "id": 11,
    "question": "Quel est le résultat de 2^5 ?",
    "options": ["10", "16", "32", "64"],
    "answer": "32",
    "category": "Mathématiques"
  },
  {
    "id": 12,
    "question": "Quel est le périmètre d’un carré de côté 4 cm ?",
    "options": ["8 cm", "12 cm", "16 cm", "20 cm"],
    "answer": "16 cm",
    "category": "Mathématiques"
  },
  {
    "id": 29,
    "question": "Quel est le résultat de 9 × 6 ?",
    "options": ["54", "56", "58", "60"],
    "answer": "54",
    "category": "Mathématiques"
  },
  {
    "id": 30,
    "question": "Quelle est la racine carrée de 144 ?",
    "options": ["10", "11", "12", "13"],
    "answer": "12",
    "category": "Mathématiques"
  },
  {
    "id": 31,
    "question": "Quel est le résultat de 3^3 ?",
    "options": ["6", "9", "27", "81"],
    "answer": "27",
    "category": "Mathématiques"
  },
  {
    "id": 32,
    "question": "Quel est le périmètre d’un rectangle de 5 cm sur 3 cm ?",
    "options": ["8 cm", "10 cm", "16 cm", "20 cm"],
    "answer": "16 cm",
    "category": "Mathématiques"
  },
   {
    "id": 49,
    "question": "Quel est le résultat de 5 × 9 ?",
    "options": ["45", "40", "50", "55"],
    "answer": "45",
    "category": "Mathématiques"
  },
  {
    "id": 50,
    "question": "Quelle est la racine carrée de 81 ?",
    "options": ["7", "8", "9", "10"],
    "answer": "9",
    "category": "Mathématiques"
  },
  {
    "id": 51,
    "question": "Quel est le résultat de 4^2 ?",
    "options": ["8", "12", "16", "20"],
    "answer": "16",
    "category": "Mathématiques"
  },
  {
    "id": 52,
    "question": "Quel est le périmètre d’un triangle équilatéral de côté 6 cm ?",
    "options": ["12 cm", "18 cm", "24 cm", "30 cm"],
    "answer": "18 cm",
    "category": "Mathématiques"
  },
  {
    "id": 69,
    "question": "Quel est le résultat de 6 × 7 ?",
    "options": ["42", "48", "36", "40"],
    "answer": "42",
    "category": "Mathématiques"
  },
  {
    "id": 70,
    "question": "Quelle est la racine carrée de 100 ?",
    "options": ["9", "10", "11", "12"],
    "answer": "10",
    "category": "Mathématiques"
  },
  {
    "id": 71,
    "question": "Quel est le résultat de 2^6 ?",
    "options": ["32", "64", "128", "256"],
    "answer": "64",
    "category": "Mathématiques"
  },
  {
    "id": 72,
    "question": "Quel est le périmètre d’un cercle de rayon 3 cm ?",
    "options": ["6π cm", "3π cm", "9π cm", "12π cm"],
    "answer": "6π cm",
    "category": "Mathématiques"
  },
  {
    "id": 89,
    "question": "Quel est le résultat de 8 × 8 ?",
    "options": ["64", "72", "56", "48"],
    "answer": "64",
    "category": "Mathématiques"
  },
  {
    "id": 90,
    "question": "Quelle est la racine carrée de 121 ?",
    "options": ["10", "11", "12", "13"],
    "answer": "11",
    "category": "Mathématiques"
  },
  {
    "id": 91,
    "question": "Quel est le résultat de 10^2 ?",
    "options": ["100", "1000", "10", "20"],
    "answer": "100",
    "category": "Mathématiques"
  },
  {
    "id": 92,
    "question": "Quel est le périmètre d’un rectangle de 10 cm sur 4 cm ?",
    "options": ["28 cm", "26 cm", "24 cm", "20 cm"],
    "answer": "28 cm",
    "category": "Mathématiques"
  }
]


[
    {
    "id": 13,
    "question": "Quelle est l’unité de mesure de la force ?",
    "options": ["Joule", "Newton", "Watt", "Pascal"],
    "answer": "Newton",
    "category": "Physique"
  },
  {
    "id": 14,
    "question": "Quelle est la vitesse de la lumière dans le vide ?",
    "options": ["300 000 km/s", "150 000 km/s", "1 000 km/s", "3 000 km/s"],
    "answer": "300 000 km/s",
    "category": "Physique"
  },
  {
    "id": 15,
    "question": "Quel est le symbole chimique de l’eau ?",
    "options": ["O2", "H2O", "CO2", "HO"],
    "answer": "H2O",
    "category": "Physique"
  },
  {
    "id": 33,
    "question": "Quelle est l’unité de mesure de la pression ?",
    "options": ["Joule", "Pascal", "Watt", "Newton"],
    "answer": "Pascal",
    "category": "Physique"
  },
  {
    "id": 34,
    "question": "Quel est le symbole chimique du sodium ?",
    "options": ["Na", "S", "So", "Sn"],
    "answer": "Na",
    "category": "Physique"
  },
  {
    "id": 35,
    "question": "Quelle est la formule de la vitesse ?",
    "options": ["v = m × a", "v = d / t", "v = f × λ", "v = E / t"],
    "answer": "v = d / t",
    "category": "Physique"
  },
   {
    "id": 53,
    "question": "Quelle est l’unité de mesure de l’énergie ?",
    "options": ["Watt", "Joule", "Pascal", "Newton"],
    "answer": "Joule",
    "category": "Physique"
  },
  {
    "id": 54,
    "question": "Quel est le symbole chimique du carbone ?",
    "options": ["Ca", "C", "Co", "Cu"],
    "answer": "C",
    "category": "Physique"
  },
  {
    "id": 55,
    "question": "Quelle est la formule de la densité ?",
    "options": ["d = m / V", "d = V / m", "d = m × V", "d = m + V"],
    "answer": "d = m / V",
    "category": "Physique"
  },
   {
    "id": 73,
    "question": "Quelle est l’unité de mesure de la puissance ?",
    "options": ["Joule", "Watt", "Pascal", "Newton"],
    "answer": "Watt",
    "category": "Physique"
  },
  {
    "id": 74,
    "question": "Quel est le symbole chimique de l’oxygène ?",
    "options": ["O", "Ox", "O2", "Og"],
    "answer": "O",
    "category": "Physique"
  },
  {
    "id": 75,
    "question": "Quelle est la formule de l’énergie cinétique ?",
    "options": ["E = m × g", "E = ½mv²", "E = m × v", "E = m × a"],
    "answer": "E = ½mv²",
    "category": "Physique"
  },
  {
    "id": 93,
    "question": "Quelle est l’unité de mesure de la fréquence ?",
    "options": ["Hertz", "Joule", "Watt", "Pascal"],
    "answer": "Hertz",
    "category": "Physique"
  },
  {
    "id": 94,
    "question": "Quel est le symbole chimique de l’hydrogène ?",
    "options": ["H", "Hy", "Hg", "He"],
    "answer": "H",
    "category": "Physique"
  },
  {
    "id": 95,
    "question": "Quelle est la formule de la force ?",
    "options": ["F = m × a", "F = m / a", "F = m + a", "F = m × v"],
    "answer": "F = m × a",
    "category": "Physique"
  }
]


[
  {
    "id": 16,
    "question": "Quel est le plus grand océan du monde ?",
    "options": ["Atlantique", "Indien", "Arctique", "Pacifique"],
    "answer": "Pacifique",
    "category": "Culture Générale"
  },
  {
    "id": 17,
    "question": "Qui a peint la Joconde ?",
    "options": ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Van Gogh"],
    "answer": "Léonard de Vinci",
    "category": "Culture Générale"
  },
  {
    "id": 18,
    "question": "Quel est le pays le plus peuplé du monde ?",
    "options": ["Inde", "États-Unis", "Chine", "Brésil"],
    "answer": "Chine",
    "category": "Culture Générale"
  },
  {
    "id": 19,
    "question": "Combien de continents existe-t-il ?",
    "options": ["5", "6", "7", "8"],
    "answer": "7",
    "category": "Culture Générale"
  },
  {
    "id": 20,
    "question": "Quel est l’élément chimique dont le symbole est Fe ?",
    "options": ["Fer", "Fluor", "Francium", "Phosphore"],
    "answer": "Fer",
    "category": "Culture Générale"
  },
   {
    "id": 36,
    "question": "Quel est le plus long fleuve du monde ?",
    "options": ["Nil", "Amazon", "Yangtsé", "Mississippi"],
    "answer": "Amazon",
    "category": "Culture Générale"
  },
  {
    "id": 37,
    "question": "Quel pays a inventé les sushis ?",
    "options": ["Chine", "Japon", "Corée", "Thaïlande"],
    "answer": "Japon",
    "category": "Culture Générale"
  },
  {
    "id": 38,
    "question": "Quel est l’auteur de 'Les Misérables' ?",
    "options": ["Victor Hugo", "Émile Zola", "Albert Camus", "Jean-Paul Sartre"],
    "answer": "Victor Hugo",
    "category": "Culture Générale"
  },
  {
    "id": 39,
    "question": "Quel est le plus haut sommet du monde ?",
    "options": ["Mont Blanc", "K2", "Everest", "Kilimandjaro"],
    "answer": "Everest",
    "category": "Culture Générale"
  },
  {
    "id": 40,
    "question": "Quel est le symbole chimique de l’or ?",
    "options": ["Ag", "Au", "Fe", "Pb"],
    "answer": "Au",
    "category": "Culture Générale"
  },
   {
    "id": 56,
    "question": "Quel est le plus grand pays du monde par superficie ?",
    "options": ["Canada", "Chine", "États-Unis", "Russie"],
    "answer": "Russie",
    "category": "Culture Générale"
  },
  {
    "id": 57,
    "question": "Quel est le plus petit pays du monde ?",
    "options": ["Monaco", "Liechtenstein", "Vatican", "San Marin"],
    "answer": "Vatican",
    "category": "Culture Générale"
  },
  {
    "id": 58,
    "question": "Quel est l’auteur de 'Le Petit Prince' ?",
    "options": ["Jules Verne", "Antoine de Saint-Exupéry", "Victor Hugo", "Albert Camus"],
    "answer": "Antoine de Saint-Exupéry",
    "category": "Culture Générale"
  },
  {
    "id": 59,
    "question": "Quel est le plus grand mammifère terrestre ?",
    "options": ["Éléphant", "Girafe", "Hippopotame", "Rhinocéros"],
    "answer": "Éléphant",
    "category": "Culture Générale"
  },
  {
    "id": 60,
    "question": "Quel est le symbole chimique du cuivre ?",
    "options": ["Cu", "Co", "C", "Cr"],
    "answer": "Cu",
    "category": "Culture Générale"
  },
   {
    "id": 76,
    "question": "Quel est le plus grand lac d’eau douce au monde ?",
    "options": ["Lac Supérieur", "Lac Victoria", "Lac Tanganyika", "Lac Baïkal"],
    "answer": "Lac Supérieur",
    "category": "Culture Générale"
  },
  {
    "id": 77,
    "question": "Quel pays est connu pour la Tour Eiffel ?",
    "options": ["Italie", "France", "Espagne", "Allemagne"],
    "answer": "France",
    "category": "Culture Générale"
  },
  {
    "id": 78,
    "question": "Quel est l’auteur de 'L’Étranger' ?",
    "options": ["Albert Camus", "Victor Hugo", "Jean-Paul Sartre", "Émile Zola"],
    "answer": "Albert Camus",
    "category": "Culture Générale"
  },
  {
    "id": 79,
    "question": "Quel est le plus grand continent ?",
    "options": ["Afrique", "Asie", "Europe", "Amérique"],
    "answer": "Asie",
    "category": "Culture Générale"
  },
  {
    "id": 80,
    "question": "Quel est le symbole chimique du plomb ?",
    "options": ["Pb", "Pl", "P", "Po"],
    "answer": "Pb",
    "category": "Culture Générale"
  },
  {
    "id": 96,
    "question": "Quel est le plus grand volcan actif du monde ?",
    "options": ["Etna", "Kilauea", "Mauna Loa", "Vésuve"],
    "answer": "Mauna Loa",
    "category": "Culture Générale"
  },
  {
    "id": 97,
    "question": "Quel pays est célèbre pour les pyramides de Gizeh ?",
    "options": ["Mexique", "Grèce", "Égypte", "Inde"],
    "answer": "Égypte",
    "category": "Culture Générale"
  },
  {
    "id": 98,
    "question": "Quel est l’auteur de 'Candide' ?",
    "options": ["Molière", "Voltaire", "Rousseau", "Diderot"],
    "answer": "Voltaire",
    "category": "Culture Générale"
  },
  {
    "id": 99,
    "question": "Quel est le plus grand désert chaud du monde ?",
    "options": ["Gobi", "Sahara", "Kalahari", "Atacama"],
    "answer": "Sahara",
    "category": "Culture Générale"
  },
  {
    "id": 100,
    "question": "Quel est le symbole chimique de l’argent ?",
    "options": ["Ag", "Au", "Al", "As"],
    "answer": "Ag",
    "category": "Culture Générale"
  }
]







































