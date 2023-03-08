flatpickr("input[type=datetime-local]", {
    dateFormat: "d.m.Y",
});

const btn = document.getElementById("add")
const dateInp = document.getElementById("date");
const titleInp = document.getElementById("title");
const descInp = document.getElementById("desc");
const textveiw = document.getElementById("view")

let textDesc = "";

descInp.addEventListener('change',()=>{
    textDesc = descInp.value
    textveiw.innerText = textDesc
})

btn.addEventListener('click',()=>{
    date = dateInp.value
    title = titleInp.value 
    desc = descInp.value 

    console.log(date)
    console.log(title)
    console.log(desc)

    formattedDate = date.replaceAll("."," ")

    const allDetail = {
        "date" : formattedDate,
        "title": title,
        "description": desc
    }

    console.log(allDetail)
})

