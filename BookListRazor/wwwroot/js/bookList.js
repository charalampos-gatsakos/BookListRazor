var dataTable;

$(document).ready(Function(){
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#DT_Load').DataTable({
        "ajax": {
            "url": "api/book",
            "type": "GET",
            "datatype": "json"
        },
        "colums": [
            {"data": "name", "with": "30%" },
            {"data": "name", "with": "30%" },
            {"data": "name", "with": "30%" },
        ]
    })
}