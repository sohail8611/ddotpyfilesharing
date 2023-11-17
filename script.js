var fileUrl = "https://github.com/sohail8611/openai-assistant-api-data-retrieval"


var nonSubscriberText = "Please make sure you've subscribed to 'D DOT PY' youtube channel and visit back to get Code URL."
var subscriberText = "Following is the url to code"

const handleSubscribe = () => {
    localStorage.setItem("youtube_ddotpy_subscriber", "true");
    window.location.href = "https://www.youtube.com/@ddotpy?sub_confirmation=1"

}
// try
let storageData = localStorage.getItem("youtube_ddotpy_subscriber");

if (!storageData) {

    // means you are not a subscriber
    
    let githubLink = document.querySelector(".link");
    // console.log("githubLinkIf:", githubLink);
    githubLink.style.display = "none"
    
    
    
    let subscriberSpan = document.querySelector("#subscriberText");
    subscriberSpan.style.display = "none";
    // subscriberSpan.innerHTML = subscriberText;
    
    let nonSubscriberSpan = document.querySelector("#nonSubscriberText");
    nonSubscriberSpan.style.display = "block";
    nonSubscriberSpan.innerHTML = nonSubscriberText;
    
    
    
    let subscribeButton = document.querySelector("#subscribeButton");
    subscribeButton.style.display = "flex";
    
    
    
    
    
} else {
    
    // means you are a subscriber
    
    let githubLink = document.querySelector(".link");
    console.log("githubLinkElse:", githubLink);
    githubLink.style.display = "block"
    
    let subscribeButton = document.querySelector("#subscribeButton");
    subscribeButton.style.display = "none";

    let subscriberSpan = document.querySelector("#subscriberText");
    subscriberSpan.style.display = "block";
    subscriberSpan.innerHTML = subscriberText;

    let nonSubscriberSpan = document.querySelector("#nonSubscriberText");
    nonSubscriberSpan.style.display = "none";
    // nonSubscriberSpan.innerHTML = nonSubscriberText;
    // window.location.href = fileUrl;
}
