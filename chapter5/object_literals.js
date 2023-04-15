//object literals
let user = {
    name: 'Khant',
    age: 30,
    email: 'khantkoko5352@gmail.com',
    location: 'Yangon',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function() {
        console.log('the user logged in');
    },

    logout: function() {
        console.log('the user logged out');
    },

    logBlogs: function() {
        // console.log(this.blogs);
        this.blogs.forEach(blogs => {
            console.log(blogs);
        });
    },



};
user.logBlogs();
// console.log(this);
// console.log(user.name);
// console.log(user.age);
// console.log(user['email']);
// console.log(user['name']);

// user['name'] = 'KOkO';
// console.log(user['name']);

// const key = 'location';
// console.log(user[key]);
// console.log(typeof user);

user.login();
user.logout();