let arr = new Map();
arr.set("keys1", "values1");
arr.set("keys2", "values2");
arr.set("keys3", "values3");


for (let name of arr.keys()){
    console.log(`Ключ — ${name}, значение — ${arr.get(name)}`);
}