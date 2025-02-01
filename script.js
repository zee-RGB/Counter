let count = 0

function addOn() {
    count++
    document.getElementById("counter").textContent = count
}

function save() {
    console.log(count)
    let paraTotal = `${count} - `
    document.getElementById("para").textContent += paraTotal
    count = 0
    document.getElementById("counter").textContent = 0


}