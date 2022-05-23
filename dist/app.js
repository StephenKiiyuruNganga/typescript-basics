"use strict";
/************* Classes and Interfaces ***************/
/*
this ====> refers to the thing that is responsible for calling a method
access modifiers ====> public,  private, protected(similar to private, in addition, it allows other classes that inherit from the parent to access the property)
read modifiers =====> readonly
*/
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string
        this.members = [];
        // this.name = name
    }
    /*
    add a special argument "this" and set it's type to the class so that ts will scream at you
    when you try accessing the method using other objcets that don't match the Department blueprint
    Example below:
    */
    desc() {
        console.log(`Name: ${this.name}\nMembers: ${this.members}\nTotal: ${this.members.length}`);
    }
    add_member(new_member) {
        this.members.push(new_member);
    }
}
class ITDepartment extends Department {
    constructor(id, project = "") {
        super(id, "IT");
        this.project = project;
    }
    set_project(project_name) {
        this.project = project_name;
    }
    desc() {
        super.desc();
        console.log(`Current project: ${this.project}`);
    }
}
const d1 = new Department("d1", "Science");
d1.add_member("Faith");
d1.add_member("Mary");
d1.add_member("Daniel");
d1.desc();
const d2 = new ITDepartment("d2");
d2.add_member("Kiiyuru");
d2.add_member("Chege");
d2.add_member("Collins");
d2.add_member("Grace");
d2.set_project("Transcription Tool");
d2.desc();
