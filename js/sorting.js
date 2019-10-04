import _ from "lodash"
export const sortData = (data, key, sortMode) => {
     let sorted = _.chain(data);
    if (sortMode && key === "launch_date"){
        sorted = sorted.orderBy(item => new Date(item.launch_date), sortMode);
        
    }else if (sortMode){
        sorted = sorted.orderBy(key, sortMode);
    }
    return sorted.value();
    return data;
}

export const resetSorting = () => {
    document.querySelectorAll(".asc").forEach(item => item.classList.remove("asc"));
    document.querySelectorAll(".desc").forEach(item => item.classList.remove("desc"));
}