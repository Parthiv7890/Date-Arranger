let btnSave = document.getElementById("btn")
let btnArrange = document.getElementById("btn_out")
let inputDate = document.getElementById("date")
let inputEvent = document.getElementById("event")
let date 
let event
let timeline = []
btnSave.addEventListener('click',()=>{
    if(inputDate!=" "&&inputEvent!=" "){
        
        date = inputDate.value 
        event1 = inputEvent.value
        let time = {
            date: date, 
            event: event1
        }
        timeline.push(time)
        console.log(timeline)
        document.getElementById("indiv").innerHTML = JSON.stringify(timeline) 
    }
})

btnArrange.addEventListener('click',()=>{ 
        timeline.sort((a,b)=> a.date - b.date)
        console.log(timeline) 
        document.getElementById("outputdiv").innerHTML = JSON.stringify(timeline) 
})

