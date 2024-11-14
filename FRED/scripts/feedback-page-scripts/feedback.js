const feedbackForm = document.querySelector('#feedback-form');
const userName = document.getElementById('input-name');
const userEmail = document.getElementById('input-email');
const userMessage = document.getElementById('comment-section');
const previewCloseBtn = document.querySelectorAll(".preview-close-btn");
const feedbackPreview = document.querySelector(".feedback-preview");
const previewText = document.querySelector(".preview-text");
var userVisit, userType, userSatis;

function fetchingNodeData() {
    const visitNodeList = document.getElementsByName('visit-time');
    const userTypeNodeList = document.getElementsByName('user-type');
    const satisLevelNodeList = document.getElementsByName('satis-level');

    for (let i = 0; i < visitNodeList.length; i++) {
        if (visitNodeList[i].checked) {
            userVisit = visitNodeList[i].value;
            break;
        }
    }

    for (let i = 0; i < userTypeNodeList.length; i++) {
        if (userTypeNodeList[i].checked) {
            userType = userTypeNodeList[i].value;
            break;
        }
    }

    for (let i = 0; i < satisLevelNodeList.length; i++) {
        if (satisLevelNodeList[i].checked) {
            userSatis = satisLevelNodeList[i].value;
            break;
        }
    }

}

function sendEmail() {

    fetchingNodeData();

    const emailMessage = `Name : ${userName.value}<br> Email: ${userEmail.value}<br> First visit? ${userVisit}<br> User type: ${userType}<br> User satisfactory level: ${userSatis}<br> Comment: ${userMessage.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fred23official@gmail.com",
        Password : "434B2D65F7E1AE2EB6706CFA4D26188B6C3D",
        To : 'fred23official@gmail.com',
        From : "fred23official@gmail.com",
        Subject : `You have received a feedback from ${userName.value}`,
        Body : emailMessage
    }).then(
        message => {
            if (message == "OK") {
                window.location.href = "feedback-completion.html";
            } else {
                alert("Message was not sent successfully")
            }
        }
    );
}

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
});

[].forEach.call(previewCloseBtn, function(button) {
    button.addEventListener("click", function() {
        fetchingNodeData();
        feedbackPreview.classList.toggle("toggle-preview");
        if (userName.value.length == 0 || userEmail.value.length == 0 || userVisit == undefined || userType == undefined || userSatis == undefined) {
            previewText.textContent = "Please fill the relevant fields";
        } else {
            const previewBody = `Name: ${userName.value}<br>
                    Email: ${userEmail.value}<br>
                    First visit? ${userVisit}<br>
                    User type: ${userType}<br>
                    Satisfactory level: ${userSatis}<br>
                    Comments: ${userMessage.value}`;

            previewText.innerHTML = previewBody;
        }
    });
});
/* 
-- Safe Main Transfer Protocol credentials --
username: fred23official@gmail.com
password: 434B2D65F7E1AE2EB6706CFA4D26188B6C3D
server: smtp.elasticemail.com
port: 2525
*/