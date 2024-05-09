/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
// var quiz = {
//     "JS": [
//     {
//     "id": 1,
//     "question": "Anarkali digitally signs a message and sends it to Salim. Verification of the signature by Salim requires",
//     "options": [
//     {
//     "a": "Anarkali's public key",
//     "b": "salim's public key",
//     "c": "salim's private key",
//     "d": "Anarkali's private key",
//     }
//     ],
//     "answer": "Anarkali's public key",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 2,
//     "question": "The minimum positive integer p such that (3p modulo 17) = 1 is",

//     "options": [
//     {
//     "a": "5",
//     "b": "8",
//     "c": "12",
//     "d":"16"
//     }
//     ],
//     "answer": "16",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 3,
//     "question": "A sender is employing public key Cryptography to send a secret message to a receiver. Which one of the following statement is true?",
//     "options": [
//     {
//     "a": "Sender encrypts using receiver's public key",
//     "b": "Sender encrypts using his own public key",
//     "c": "Receiver decrypts using sender's public key ",
//     "d":"Receiver decrypts using his own public key",
//     }
//     ],
//     "answer": "Sender encrypts using receiver's public key",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 4,
//     "question": "Identify the correct sequence in which the following packets are transmitted on the network by a host when a browser requests a webpage from a remote server, assuming that the host has just been restarted.",
//     "options": [
//     {
//     "a": "HTTP GET request,DNS query,TCP SYN ",
//     "b": "DNS query,HTTP GET request,TCP SYN",
//     "c":"DNS query,TCP SYN,HTTP GET request",
//     "d":"TCP SYN,DNS query,HTTP GET request",

//     }
//     ],
//     "answer": "DNS query,TCP SYN,HTTP GET request",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 5,
//     "question": "The set {1,2,4,7,8,11,13,14} is a group under multiplication modulo 15. The inverse of 4 and 7 are respectively:Which one of the following protocols is NOT used to resolve one form of address to another one?",
//     "options": [
//     {
//     "a": "DNS",
//     "b": "ARP",
//     "c": "DHCP",
//     "d": "RARP",
//     }
//     ],
//     "answer": "DHCP",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 6,
//     "question": "In one of the pairs of protocols given below, both the protocols can use multiple TCP connections between the same client and the server. Which one is that?",
//     "options": [
//     {
//     "a": "HTTP,FTP",
//     "b": "HTTP,TELNET",
//     "c": "FTP,SMTP",
//     "d":"HTTP,SMTP",
//     }
//     ],
//     "answer": "HTTP,SMTP",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 7,
//     "question": "Which one of the following uses UDP as the transport protocol?",
//     "options": [
//     {
//     "a": "HTTP",
//     "b": "Telnet",
//     "c": "DNS",
//     "d":"SMTP",
//     }
//     ],
//     "answer": "DNS",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 8,
//     "question": "Identify the correct order in which a server process must invoke the function calls accept, bind, listen, and recv according to UNIX socket APL",
//     "options": [
//     {
//     "a": "listen,accept,bind recv",
//     "b": "bind,listen,accept,recv",
//     "c": "bind,accept,listen,recv",
//     "d": "accept,listen,bind,recv",
//     }
//     ],
//     "answer": "bind,listen,accept,recv",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 9,
//     "question": "Which one of the following is TRUE about the interior gateway routing protocols – Routing Information Protocol (RIP) and Open Shortest Path First (OSPF)?",
//     "options": [
//     {
//     "a": "RILP uses distance vector routing and OSPF uses link state routing",
//     "b": "OSPF uses distance vector routing and RIP uses link state routing",
//     "c": "Both RIP and OSPF use link state routing",
//     "d": "Both RIP and OSPF use distance vector routing"
//     }
//     ],
//     "answer": "RILP usues distence vector routing and OSPF uses link state routing",
//     "score": 0,
//     "status": ""
//     },
//     {
//     "id": 10,
//     "question": "Consider a CSMA/CD network that transmits data at a rate of 100 Mbps (108 bits second) over a 1 km(kilometer) cable with no repeaters. If the minimum frame size required for this network is 1250 bytes, what is the signal speed (km/sec) in the cable?",
//     "options": [
//     {
//     "a": "8000",
//     "b": "10000",
//     "c": "16000",
//     "d": "20000",
//     }
//     ],
//     "answer": "20000 ",
//     "score": 0,
//     "status": ""
//     }
   
//     ]
//     }
var quiz = {
    "OS" : [
        {
          "id": 1,
          "question": "What is the primary function of an operating system?",
          "options": [
           {"a" : "Run applications",
            "b" : "Manage hardware resources",
            "C" : "Handle user interfaces",
            "d" : "All of the above"}
          ],
          "answer":  "All of the above",
          "score": 0,
          "status": ""
        },
        {
          "id": 2,
          "question": "Which operating system is open source and based on the Linux kernel?",
          "options": [
            {"a" : "Windows",
            "b" : "macOS",
            "c" : "Ubuntu",
            "d" : "Android"}
          ],
          "answer": " Ubuntu",
          "score": 0,
          "status": ""
        },
        {
          "id": 3,
          "question": "What does the acronym 'GUI' stand for in the context of operating systems?",
          "options": [
         {   "a" : "Graphical User Interface",
            "b" : "General User Interaction",
            "c" : "Global User Integration",
            "d" : "Graphical Unit Interface"}
          ],
          "answer": " Graphical User Interface",
          "score": 0,
          "status": ""
        },
        {
          "id": 4,
          "question": "Which scheduling algorithm allocates CPU time to processes based on their priority?",
          "options": [
            {"a" : "First-Come, First-Served (FCFS)",
            "b" : "Round Robin",
            "c" : "Priority Scheduling",
            "d" : "Shortest Job Next (SJN)"}
          ],
          "answer": " Priority Scheduling",
          "score": 0,
          "status": ""
        },
        {
          "id": 5,
          "question": "What is the purpose of the 'swap space' in an operating system?",
          "options": [
            {"a" : "To store temporary files",
            "b" : "speed up disk access",
            "c" : "To store the operating system kernel",
            "d" :  "To move inactive processes out of RAM"}
          ],
          "answer": " To move inactive processes out of RAM",
          "score": 0,
          "status": ""
        },
        {
          "id": 6,
          "question": "Which file system is commonly used in Windows operating systems?",
          "options": [
            {"a" : "EXT4",
            "b" : "NTFS",
            "c" : "FAT32",
            "d" : "HFS+"}
          ],
          "answer": "NTFS",
          "score": 0,
          "status": ""
        },
        {
          "id": 7,
          "question": "What is the purpose of the 'Command Prompt' or 'Terminal' in an operating system?",
          "options": [
           {"a" : "To launch applications",
            "b" : "To provide a graphical user interface",
            "c" : "To execute commands and scripts",
            "d" : "To manage system settings"}
          ],
          "answer": " To execute commands and scripts",
          "score": 0,
          "status": ""
        },
        {
          "id": 8,
          "question": "Which of the following is not a multitasking operating system?",
          "options": [
          { "a": "Linux",
            "b" : "Windows 95",
            "c" : "DOS",
            "d" : "macOS"}
          ],
          "answer": "DOS",
          "score": 0,
          "status": ""
        },
        {
          "id": 9,
          "question": "What is the role of the 'kernel' in an operating system?",
          "options": [
          { "a" : " Manage user interfaces",
            "b" : "Provide security features",
            "c" : "Manage hardware resources",
            "d" : "Run application software"}
          ],
          "answer": "Manage hardware resources",
          "score": 0,
          "status": ""
        },
        {
          "id": 10,
          "question": "In virtual memory, what is the term for the space on the hard disk used as an extension of RAM?",
          "options": [
            {"a" : "Cache",
            "b" : "Buffer",
            "c" : "Pagefile",
            "d" : "Registers"}
          ],
          "answer": "Pagefile",
          "score": 0,
          "status": ""
        }
      ]
           
}
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.OS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.OS[this.currentque].id + '.');
    $("#question").html(quiz.OS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.OS[this.currentque].options[0]) {
    if (quiz.OS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.OS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.OS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.OS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.OS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.OS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.OS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.OS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.OS[this.currentque].answer) {
    if (quiz.OS[this.currentque].score == "") {
    quiz.OS[this.currentque].score = 1;
    quiz.OS[this.currentque].status = "correct";
    }
    } else {
    quiz.OS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });