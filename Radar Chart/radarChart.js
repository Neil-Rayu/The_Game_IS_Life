
var hours = [0, 0, 0, 0, 0];
function getHour() {
  document.getElementById("demo").innerHTML = x;
    var category = document.getElementById('aspect').value;
    var inputHr = document.getElementById('hour').value;
    console.log("hello yes inputHR works");
    if(category === "Mental"){
      hours[0] += inputHr;
    }
    if(category === "Intellectual"){
      hours[1] += inputHr;
    }
    if(category === "Physical"){
      hours[2] += inputHr;
    }
    if(category === "Social Helath"){
      hours[3] += inputHr;
    }
    if(category === "Personal development/Hobbies"){
      hours[4] += inputHr;
    }

}

const chart = document.getElementById("chart");
let radarChart = new Chart(chart,{
    "type": "radar",
    "data": {
        "labels": [
            "Mental Health",
            "Intellectual Health",
            "Physical Health",
            "Knowledge",
            "Personal Dev/Hobbies"
        ],
        "datasets": [
            {
                "label": "Your Current Stats",
                "backgroundColor": "rgb(231,74,59,0.5)",
                "hoverBackgroundColor": "rgb(231,74,59,0.8)",
                "borderColor": "rgb(231,74,59)",
                "data": [
                    hours[0],
                    hours[1],
                    hours[2],
                    hours[3],
                    hours[4]
                ]
            }
        ]
    },
    "options": {
        "responsive": true,
        "maintainAspectRatio": false,
        "scale": {
            "angleLines": {
                "color": "rgb(90,92,105)"
            },
            "gridLines": {
                "color": "rgb(90,92,105)"
            },
            "ticks": {
                 max: 10,
                 min: 0,
                 stepSize: 2,
            }
        }
    }
});
