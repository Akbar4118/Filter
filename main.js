// Filter Items
function filterItems (e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemlist.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display = 'block';
    } else {
    item.style.display = 'none';
    }
});
}








    
