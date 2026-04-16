'use strict';
const usericon = document.getElementById('usericon');
const infobox = document.getElementById('infobox');
const fullname = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pages = document.getElementById('pages');
const groups = document.getElementById('groups');
const moenyicon = document.getElementById('moneyicon');

const postForm = document.getElementById('postform');
const upload = document.getElementById('upload');
const textbox = document.getElementById('textbox');
const submit = document.getElementById('submit');
const postTemplate = document.getElementById('basePost');
const date = document.querySelector('.date');
const timeline = document.getElementById('timeline');

date.innerText = (new Date).toLocaleString('en-ca', {year: 'numeric', month: 'short', day: '2-digit'});

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
        return([this.name, this.userName, this.id, this.email]);
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
        return([this.name, this.userName, this.id, this.email, this.pages, this.groups, this.canMonetize]);
    }
}

const subscriber = new Subscriber(
    '1072', 
    'John Smith', 
    'jsmith', 
    'jsmith@email.com',
    ['page1', 'page2'],
    ['smithing', 'johnning'],
    true,
);

function writeModal(info){
    fullname.innerText = info[0];
    username.innerText = `${info[1]}#${info[2]}`;
    email.innerText = info[3];
    if(info.length > 4){ /* In this program there's only a subscriber but this if statement makes it compatible with users too */
        pages.innerText = `Pages: ${info[4].join(', ')}`;
        groups.innerText = `Groups: ${info[5].join(', ')}`;
        moneyicon.style.color = info[6] ? 'green' : 'red';
    } else {
        pages.innerText = '';
        groups.innerText = '';
        moneyicon.style.color = 'grey';
    }
}

usericon.addEventListener('click', function(){
    writeModal(subscriber.getInfo());
    infobox.showModal();
});

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
        postImage.setAttribute("src", image);
        postImage.className = "postimage";
        post.appendChild(postImage);
        valid = true;
    }
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

textbox.setAttribute("placeholder", `What's new, ${subscriber.name}?`)