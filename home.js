function message() {
    alert("Form Submission confirmed!")
    contactform.action="submit.html"
}

const responsearray = []
function question() {
    let response = document.getElementById('hero').value
    responsearray.push(response)
    console.log(responsearray)
    alert(`You have selected ${response}!`)

    const iron = responsearray.reduce(function (num, hero) {
        return num + (hero == "Iron Man");
    }, 0);

    const cap = responsearray.reduce(function (num, hero) {
        return num + (hero == "Captain America");
    }, 0);

    const thor = responsearray.reduce(function (num, hero) {
        return num + (hero == "Thor");
    }, 0);

    const widow = responsearray.reduce(function (num, hero) {
        return num + (hero == "Black Widow");
    }, 0);

    const other = responsearray.reduce(function (num, hero) {
        return num + (hero == "Other");
    }, 0);

    console.log(iron)
    console.log(cap)
    console.log(thor)
    console.log(widow)
    console.log(other)
}