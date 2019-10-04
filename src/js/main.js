import {moonLandings} from "./data.js";
import {renderTable} from "./table.js";
import {resetSorting, sortData} from "./sorting.js";
import {filterData, getUniqueFilterByKey, getSelectOptions} from "./filtering.js";

renderTable(moonLandings);

// sorting
document.querySelectorAll(".sortable").forEach(th => {
    th.addEventListener("click", event => {
        const th = event.currentTarget;
        const key = th.dataset.key
        let sortMode = null;
        if (th.classList.contains("asc")){
            resetSorting();
            th.classList.add("desc");
            sortMode = 'desc';
        }else if (th.classList.contains("desc")){
            th.classList.remove("desc");
        }else {
            resetSorting();
            th.classList.add("asc");
            sortMode = 'asc';
        }

        const sorted = sortData(moonLandings, key, sortMode);
        const filtered = filterData(sorted);
        renderTable(filtered);
    });
});

//filtering
const outcomes = getUniqueFilterByKey(moonLandings, 'outcome');
const operators = getUniqueFilterByKey(moonLandings, 'operator');

document.querySelector("#filter-outcome").innerHTML = getSelectOptions(outcomes);
document.querySelector("#filter-operator").innerHTML = getSelectOptions(operators);

document.querySelectorAll(".filter").forEach(filter => {
    filter.addEventListener("change", () => {
        resetSorting();
        renderTable(filterData(moonLandings));
    });
});