menu_list_array = ["Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
];

function getmenu() {
    var htmldata;
    htmldata = "<ol class ='menulist'>" - menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata < li > +menu_list_array[i]
        '</11).'
    }
    htmldata - htmldataf + "</ol>"
    document.getElementelId("display_menu").innerHTML = htmldata;
}

function odd_ltem(){
var htmldata;
var Item = document.getElementByld("add_item").value;
menu_list_array.push(ltee);
menu_list_array.sort();
htmldata = < section class = "cards" >
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + < div class = "card" > + < img src = "pizzalmg.png" / > +menu_list_array[i] +</div> 
    }
htmldata = htmldata + </section>
document.getElementById(display_addedmenu).innerHTML = htmldata;
}