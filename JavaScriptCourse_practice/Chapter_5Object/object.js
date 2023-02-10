//object literals

const blogs = [
    {title:'why mac & cheese rules', likes: 30},
    {title:'10 things to make with marmite', likes: 60}
];

console.log(blogs);

let user = {
  //key: 'value' = one property
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs:[
        {title:'why mac & cheese rules', likes: 30},
        {title:'10 things to make with marmite', likes: 60}
    ],

    login: () => {
        console.log('the user logged in');
    },
    logout: () => {
        console.log('the user logged out');
    },
    logBlogs(){  //this use arrow function will get global this, so use normal function with this
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog => {  
            console.log(blog.title, blog.likes, 'likes');
        });
    }
};

console.log(user);
console.log(user.name);

user.age = 10;
console.log(user.age);

console.log(user['email']);

user.name ='qwer';
console.log(user.name);

user['name'] ='yoshi';
console.log(user.name);

console.log(typeof user);


//method (defined inside an object)
user.login();
user.logout();
user.logBlogs();
console.log(this); //global this
