import {ArrayList} from "./ArrayList";

interface Post {
    title: string;
}
 let arrayList = new ArrayList<Post>();
 arrayList.add({ title: "lap trinh js"});
 arrayList.add({ title: "lap trinh PHP"});
 arrayList.add({ title: "lap trinh java"});
console.log(arrayList.container)

