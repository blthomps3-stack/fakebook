'use strict';
const infobox = document.getElementById('infobox');

const postForm = document.getElementById('postform');
const upload = document.getElementById('upload');
const textbox = document.getElementById('textbox');
const submit = document.getElementById('submit');
const postTemplate = document.getElementById('basePost');
const timeline = document.getElementById('timeline');

class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email){
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {return this.#id;}
    get name() {return this.#name;}
    get userName() {return this.#userName;}
    get email() {return this.#email;}

    getInfo() {
        return([this.id, this.name, this.userName, this.email]);
    }
}

class Subscriber extends User {
    #pages = [];
    #groups = [];
    #canMonetize = true;

    constructor(id, name, userName, email, pages, groups, canMonetize){
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {return this.#pages;}
    get groups() {return this.#groups;}
    get canMonetize() {return this.#canMonetize;}

    getInfo() {
        return([this.id, this.name, this.userName, this.email, this.pages, this.groups, this.canMonetize]);
    }
}

const subscriber = new Subscriber(
    '1000', 
    'Firstname Lastname', 
    'User Name', 
    'user@email.com',
    ['page1', 'page2'],
    ['group1', 'group2'],
    true,
);

function createPost(){
    let post = postTemplate.cloneNode(true);
    let valid = false;
    if(textbox.value.trim() !== ''){
        let postCaption = document.createElement('p');
        postCaption.innerText = textbox.value.trim();
        postCaption.className = "caption";
        post.appendChild(postCaption);
        valid = true;
    }
    if(upload.files[0] !== undefined) {
        let image = URL.createObjectURL(upload.files[0]);
        let postImage = document.createElement('img');
        console.log(postImage);
        postImage.setAttribute("src", image);
        post.appendChild(postImage);
        valid = true;
    }
    console.log(post);
    if(valid) {
        post.setAttribute('id', '');
        timeline.prepend(post);
        postForm.reset();
    } else {
        console.log('Test');
        post.removeChild;
    }
}

submit.addEventListener('click', function(){
    createPost();
});