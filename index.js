const schedule = require("node-schedule")
const events = [
    {
                            	"text": "textOne",
                                "dateTime":"2023-02-13 16:59:00.000"
},
{

                                "text": "textTwoThreeFour",
                            	"dateTime": "2023-02-13 16:59:00.000"
},
{
                            	"text": "textFinal",
                            	"dateTime": "2023-02-13 16:59:00.000"
}
]

for (let event of events) {
    let text=event.text
    let routine = schedule.scheduleJob(event.dateTime, function (time) {
   
        setTimeout(() => {
            console.log(text.split("").reverse().join(""),time)

        },text.length*1000)
     })
}