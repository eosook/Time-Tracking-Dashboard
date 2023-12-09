const dailyButton = document.getElementById("daily-button");
const weeklyButton = document.getElementById("weekly-button");
const monthlyButton = document.getElementById("monthly-button");
const dailyReports = document.querySelectorAll(".daily-report");
const weeklyReports = document.querySelectorAll(".weekly-report");
const monthlyReports = document.querySelectorAll(".monthly-report");

dailyButton.addEventListener("click", () => {
    dailyReports.forEach((report) => {
        report.classList.remove("hidden");
    });
    weeklyReports.forEach((report) => {
        report.classList.add("hidden");
    });
    monthlyReports.forEach((report) => {
        report.classList.add("hidden");
    });
});

weeklyButton.addEventListener("click", () => {
    dailyReports.forEach((report) => {
        report.classList.add("hidden");
    });
    weeklyReports.forEach((report) => {
        report.classList.remove("hidden");
    });
    monthlyReports.forEach((report) => {
        report.classList.add("hidden");
    });
});

monthlyButton.addEventListener("click", () => {
    dailyReports.forEach((report) => {
        report.classList.add("hidden");
    });
    weeklyReports.forEach((report) => {
        report.classList.add("hidden");
    });
    monthlyReports.forEach((report) => {
        report.classList.remove("hidden");
    });
});