eles = ["rani", "shivam", "rupa", "mano", "nitin", "akki", "monal", "moni", "naina", "nayan"]

update();

function update() {
    var j = Math.floor(Math.random() * eles.length);

    document.getElementById("firstPerson").innerHTML = eles[j];

    j = Math.floor(Math.random() * eles.length);

    document.getElementById("secondPerson").innerHTML = eles[j];

}