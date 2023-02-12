let count = 0

function increment() {
    count = count + 1
    document.getElementById("count-el").textContent = count
}

function save(){
    document.getElementById("entries-el").textContent += + count + ' - '
    count = 0
    document.getElementById("count-el").textContent = count
}
// 1. Create a function, save(), which logs out the count when it's called


