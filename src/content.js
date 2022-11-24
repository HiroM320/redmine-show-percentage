function is_redmine() {
    const description = document.querySelector("meta[name ='description']")
    return description ? description.getAttribute('content') === 'Redmine' : false;
}

(function () {

    if (!is_redmine()) {
        return;
    }

    const progress_tables = Array.from(document.querySelectorAll('table.progress').values());

    // 進捗率を取得して上書き
    progress_tables.forEach(function (table) {
        const closed = table.querySelector('td.closed');
        const ratio = closed ? closed.style.width : '0%';

        const td = table.parentElement;
        const p = td.querySelector('p.percent');
        p.textContent = ratio;
    })

})();
