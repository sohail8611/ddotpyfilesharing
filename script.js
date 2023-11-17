var fileUrl = "https://github.com/sohail8611/openai_assistant_api_tutorial";
var visitorAndClickApiUrl = "https://134.209.228.154:24245/visitor_and_click/increment"; 

var nonSubscriberText = "Please make sure you've subscribed to 'D DOT PY' youtube channel and visit back to get Code URL.";
var subscriberText = "Together we'll be stronger :) - Here is url to code:";

const handleSubscribe = () => {
    localStorage.setItem("youtube_ddotpy_subscriber", "true");

    // Call the 'visitor_and_click' API when the user subscribes
    //fetch(visitorAndClickApiUrl)
        //.then(response => {
            // Do nothing here, as per your request

        //})
        //.catch(error => {
        //    console.error('Error calling visitor_and_click API:', error);
        //});

    window.location.href = "https://www.youtube.com/@ddotpy?sub_confirmation=1";
};

// Call the 'visitors' API when the user visits the page

let storageData = localStorage.getItem("youtube_ddotpy_subscriber");

if (!storageData) {

    // means you are not a subscriber
    
    let githubLink = document.querySelector(".link");
    githubLink.style.display = "none";
    
    let subscriberSpan = document.querySelector("#subscriberText");
    subscriberSpan.style.display = "none";
    
    let nonSubscriberSpan = document.querySelector("#nonSubscriberText");
    nonSubscriberSpan.style.display = "block";
    nonSubscriberSpan.innerHTML = nonSubscriberText;
    
    let subscribeButton = document.querySelector("#subscribeButton");
    subscribeButton.style.display = "flex";
} else {
    // means you are a subscriber
    
    let githubLink = document.querySelector(".link");
    githubLink.style.display = "block"
    
    let subscribeButton = document.querySelector("#subscribeButton");
    subscribeButton.style.display = "none";

    let subscriberSpan = document.querySelector("#subscriberText");
    subscriberSpan.style.display = "block";
    subscriberSpan.innerHTML = subscriberText;

    let nonSubscriberSpan = document.querySelector("#nonSubscriberText");
    nonSubscriberSpan.style.display = "none";
}
