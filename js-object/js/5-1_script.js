//5.1. Создать объект "Пользователь" с полями имя, фамилия, год рождения и методами sayName() -
//     выводит фамилию и имя, sayAge() - выводит возраст, changeName(name, surname) -
//     меняет имя на name, фамилию на surname.


var user = {};
user.name = 'Dima';
user.surname = 'Kornieenko';
user.age = 25;

user.sayName = function() {
    document.write('Привет, ' + this.name + ' ' + this.surname + '!<br>');
};

user.sayAge = function() {
    document.write('Ваш возраст - ' + this.age + '<br>');
}

user.changeName = function(name, surname) {
    this.name = name;
    this.surname = surname;
}

user.sayName();
user.sayAge();
user.changeName('Vadim', 'Sereda');
user.sayName();