
function uhrZeit(){
    const date = new Date();
    // console.log(date);
    return date.getUTCHours() + ':' + (date.getUTCMinutes());
}
if (process.argv[2]== "uhrzeit") console.log(uhrZeit());

function datum(){
    const date = new Date();
    // console.log(date);
    return date.getFullYear() + '-' + (date.getMonth()+1) + `-` + date.getDate();
}
if (process.argv[2]== "datum") console.log(datum());

