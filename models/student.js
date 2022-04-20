const db = require('../utils/db');

class Student {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  static async getAll() {
    const result = await db.execute('select * from student');
    return result[0];   
  }

  static async getOne(name) {
    const result = await db.execute('select * from student where name ="' + name + '"');
    return result[0];
  }

  static async update(attribute_name, value, name) {
    try {
      await db.execute('update student set ' + attribute_name + ' = ' + value + ' where name = "' + name + '"');
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }    
  }

  static async add(name, height, weight) {
    try {
      await db.execute('insert into student(name, height, weight) value("' + name + '", ' + height + ', ' + weight + ')');
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  static async delete(name) {
    try {
      await db.execute('delete from student where name = "' + name + '"');
      return true;
    } catch(err) {
      console.log(err);
      return false
    }
  }
}

module.exports = Student;