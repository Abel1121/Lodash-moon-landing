import _ from "lodash";
const filterOutcome = document.querySelector("#filter-outcome");
const filterOperator = document.querySelector("#filter-operator");

export const filterData = (data) => {
        if(filterOutcome.value <= 'All'){
    }else {
        data = _.filter(data, user => user.outcome === filterOutcome.value)
    }
     if(filterOperator.value <= 'All'){
    }else {
        data = _.filter(data, user => user.operator === filterOperator.value)
    }
    return data;
}

export const getUniqueFilterByKey = (data, key) => {
   return _.chain(data)
    .uniqBy (key)
    .map(key)
    .value();
}

export const getSelectOptions = data => {
    return [
        `<option value="">All</option>`,
        ...data.map(item => `<option value="${item}">${item}</option>`)
    ]
    .join("");

}