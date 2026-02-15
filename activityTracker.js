// Which activity will have the highest enjoyment?
//     The activity with the most enjoyment will be swimming. I get to feel like a mermaid when I do it, so it's especially healing to the soul.
// What category will dominate your week?
//     Realistically there should be a work category that would dominate, but that would be boring. Otherwise reading because I can squeeze it into the day.
// What patterns might exist around time of day?
//     All of my free time is after work in the evenings on weekdays, so the evenings are where I spend "me" time.

const myWeek = [
  { day: "Monday", activity: "reading", category: "creative", hoursSpent: 2, enjoyment: 7, timeOfDay: "evening"},
  { day: "Tuesday", activity: "swimming", category: "physical", hoursSpent: 1, enjoyment: 9, timeOfDay: "morning"},
  { day: "Wednesday", activity: "pilates", category: "physical", hoursSpent: 1, enjoyment: 8, timeOfDay: "evening"},
  { day: "Thursday", activity: "running", category: "physical", hoursSpent: 1, enjoyment: 6, timeOfDay: "evening"},
  { day: "Friday", activity: "reading", category: "creative", hoursSpent: 1, enjoyment: 7, timeOfDay: "evening"},
  { day: "Saturday", activity: "reading", category: "creative", hoursSpent: 2, enjoyment: 8, timeOfDay: "afternoon"},
  { day: "Sunday", activity: "pilates", category: "physical", hoursSpent: 1, enjoyment: 7, timeOfDay: "morning"}
];


// reduce(): Total time spent doing hobbies
function hoursTotal(log) {
    return log.reduce((sum, session) => sum + session.hoursSpent, 0);
}
console.log("Hours spent on hobbies this week: ", hoursTotal(myWeek))

// filter(): Only top-tier enjoyment rated 8 or higher
function highReward(log) {
    return log.filter(entry => entry.enjoyment >= 8)  
}
console.log("Instances of the most happiness this week: ", highReward(myWeek))

//map(): Building on previous function to only return the activity name because I don't care about the details, I just want to see what activity brings me most joy
function highRewardActivity(log) {
    return log
        .filter(entry => entry.enjoyment>=8)
        .map(entry => entry.activity);
}
console.log("Activities that bring the most enjoyment: ", highRewardActivity(myWeek))