const tableBody = document.querySelector("#table-body");

export const renderTable = data => {
    tableBody.innerHTML = data.map(row => `<tr><td>${row.spacecraft}</td><td>${row.launch_date}</td><td>${row.operator}</td><td>${row.outcome}</td></tr>`).join("");
}