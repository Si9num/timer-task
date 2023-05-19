
function timer(){
    let today = new Date();
    const deadline = new Date(2023,4,31);
    let diff = deadline - today;
    let days = Math.floor(diff/86400000);
    let hours = Math.floor(diff/3600000) % 24;
    let minutes = Math.floor(diff/60000) % 60;
    let seconds = Math.floor(diff/1000) % 60;
    const date ={
        days : days,
        hours : hours,
        minutes : minutes,
        seconds : seconds
    }
    return date
    
}
export default timer