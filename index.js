let user = {
  name: "Oluwalayomi Lawore",
  track: "Frontend",
  gitHubUrl: "https://github.com/Layomi1/Hng-stage-1-assignment",
  day: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const today = new Date();

function updateDateTime() {
  const slackDisplayImage = document.querySelector(
    '[data-testid="slackDisplayImage"]'
  );
  slackDisplayImage.src = "./images/you.jpg";
  // name
  const slackUserName = document.querySelector('[data-testid="slackUserName"]');
  slackUserName.textContent = user.name;
  // Track
  const myTrack = document.querySelector('[data-testid="myTrack"]');
  myTrack.textContent = "Track: " + user.track;
  // day
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  currentDayOfTheWeek.textContent = "Day: " + user.day[today.getUTCDay()];

  // time
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  currentUTCTime.textContent =
    "Time: " +
    today.getUTCHours() +
    ":" +
    today.getUTCMinutes() +
    ":" +
    today.getUTCSeconds();

  const gitHubUrl = document.querySelector('[data-testid="gitHubUrl"]');
  gitHubUrl.innerHTML = user.gitHubUrl;
}

// Call the function initially and set an interval to update it every minute
updateDateTime();
setInterval(updateDateTime, 60000);
