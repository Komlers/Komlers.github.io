// Bing Search

function search() {
    var searchEngine = document.getElementById('searchSelect').value;
    var query = document.getElementById('searchInput').value;
    
    if (query.trim() === "") {
        alert("请输入搜索关键字！");
        return;
    }
    
    var searchUrl = searchEngine + encodeURIComponent(query);
    
    window.open(searchUrl, '_blank');
}

function handleEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}
