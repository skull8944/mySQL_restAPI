const Student = require('../models/student');

module.exports.home_get = (req, res) => {
    res.send('home');
};

module.exports.student_get = async (req, res) => {
    const students = await Student.getAll();
    console.log(students);
    res.status(200).json(students);
}

module.exports.student1_get = async (req, res) => {
    console.log(req.params.user);
    const students = await Student.getOne(req.params.user);
    res.status(200).json(students);
}

module.exports.form = async (req, res) => {
    const result = await Student.getAll();
    if(result)
        res.render('form', { students: result });
    else
        res.render('404.html');
}

module.exports.height_update = async (req, res) => {
    const user = req.params.user;
    const height = req.params.height;
    const result = await Student.update('height', height, user);
    if(result) {
        console.log('true')
        res.status(200).send('success');
    } else {
        console.log('false')
        res.status(404).send('fail');
    }
}

module.exports.weight_update = async (req, res) => {
    const user = req.params.user;
    const weight = req.params.weight;
    const result = await Student.update('weight', weight, user);
    if(result) {
        console.log('true')
        res.status(200).send('success');
    } else {
        console.log('false')
        res.status(404).send('fail');
    }
}

module.exports.add_student = async (req, res) => {
    const { user, height, weight } = req.body;
    const result = await Student.add(user, height, weight);
    if(result) {
        console.log('true')
        res.status(200).send('success');
    } else {
        console.log('false')
        res.status(404).send('fail');
    }
}

module.exports.delete_student = async (req, res) => {
    const user = req.params.user;
    console.log(user)
    const result = await Student.delete(user);
    if(result) {
        console.log('true')
        res.status(200).send('success');
    } else {
        console.log('false')
        res.status(404).send('fail');
    }
}
/** 
資料定義語言(Data Definition Language, DDL)
    指令：CREATE、DROP、ALTER 對象：SCHEMA、TABLE、VIEW
    1. 建立CREATE:
        CREATE TABLE <table-name>
        (
            <attribute-name> <data-type> <null or not null> <default value>,
            PRIMARY KEY( ),
            UNIQUE( ),
            FOREIGN KEY( ),
            ONDELTE ... ON UPDATE ... => 1.NO ACTION 2.CASCADE 3.SET NULL 4.SET DEFAULT
        );
    2. 丟棄DROP:
        DROP TABLE <table-name> CASCADE/RESTRICT
    3. 更改ALTER:
        ALTER TABLE <table-name> ADD/DROP/ALTER
    4. CREATE SCHEMA <schema-name> AUTHORIZATION <user-id>
    5. DROP SCHENA <schema-name> AUTHORIZATION <user-id>
    6. CREATE VIEW <view-name> AS
            SELECT ...
            FROM ...
            WHERE ...
    7. DROP VIEW <view-name> CASCADE/RESTRICT
    8. CREATE INDEX <index-name> ON <table-name>
資料處理語言(Data Manipulation Language, DML)
    1. INSERT INTO <table-name> (attributes) VALUES( )
        (1) INSERT INTO EMPLOYEE VALUES('14', 'Yuzhi', 'Xue', '165', '55)
        (2) INSERT INTO EMPLOREE (Fname, Lname) VALUES('Yuzhi', 'Xue')
        (3) INSERT INTO EMPLOYEE (SELECT ENo,EName FROM EMPOYEE WHERE ...)
    2. DELETE FROM <table-name> WHERE ...
    3. UPADATE <table-name> SET <attribute-name> = <new-value> WHERE ...
 */