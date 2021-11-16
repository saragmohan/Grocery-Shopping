function ajax() {



    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("listButton").innerHTML

            var response = JSON.parse(this.responseText);
            // console.log(response);
            var Jitem = response.item;
            console.log(Jitem);
            var output = "<table>";
            output += "<tr><th>SlNo</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th><th>Add to cart</th></tr>";

            for (var i = 0; i < Jitem.length; i++) {
                output += "<tr><td>" + Jitem[i].SlNo + "</td>" + "<td>" + Jitem[i].Name + "</td>" + "<td>" + Jitem[i].Quantity + "</td>" + "<td>" + Jitem[i].Unit + "</td>" + "<td>" + Jitem[i].Department + "</td>" + "<td>" + Jitem[i].Notes + "</td>" + "<td>" + "<input type=checkbox> </td></tr > ";
            }
            output += "</table>";
            document.getElementById("listButton").innerHTML = output;

        }
    }
    xhttp.open("GET", "list.json", true);
    xhttp.send();

}