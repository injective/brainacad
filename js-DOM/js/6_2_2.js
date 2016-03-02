function Search() {
    this.searchAndReplace = function(searchText, searchElem, replaceWith) {
        searchText = searchText || '';
        searchElem = searchElem || '*';
        replaceWith = replaceWith || 'strong';
        var elems = document.querySelectorAll(searchElem);

        [].forEach.call(elems, function(elem) {
            var txt = elem.textContent;

            var position = txt.indexOf(searchText);
            var secondPart = elem.firstChild.splitText(position);
            secondPart.splitText(searchText.length);

            var replacer = document.createElement(replaceWith);
            elem.replaceChild(replacer, secondPart);
            replacer.appendChild(secondPart);
        });
    }
}

var search = new Search();

search.searchAndReplace('adipisicing', '#abz', 'strong')