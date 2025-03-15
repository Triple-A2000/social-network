'use strict';

class User {
    _id;
    _name;
    _userName;
    _email;

    constructor(id, name, userName, email) {
        this._id = id;
        this._name = name;
        this._userName = userName;
        this._email = email;
    }

    get name() {
        return this._name;
    }

    get userName() {
        return this._userName;
    }

    get email() {
        return this._email;
    }

    getInfo() {
        return `Name: ${this.name}\nUsername: ${this.userName}\nEmail: ${this.email}`;
    }
}

class Subscriber extends User {
    _pages;
    _groups;
    _canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this._pages = pages;
        this._groups = groups;
        this._canMonetize = canMonetize;
    }

    get pages() {
        return this._pages;
    }

    get groups() {
        return this._groups;
    }

    get canMonetize() {
        return this._canMonetize;
    }

    getInfo() {
        return super.getInfo() + `\nPages: ${this.pages.join(', ')}\nGroups: ${this.groups.join(', ')}\nCan Monetize: ${this.canMonetize}`;
    }
}

const user = new Subscriber(1, "Ayomide Boye", "boyeayomide2000", "boyeayomide@gmail.com", ["Tech News"], ["Developers Group"], false);

const postsSection = document.getElementById("posts");
const fileInput = document.getElementById("imageUpload");
const fileNameDisplay = document.getElementById("fileName");
const postText = document.getElementById("postText");
const userInfoElement = document.getElementById("userInfo");
const modalElement = document.getElementById("modal");

function displayFileName() {
    fileNameDisplay.textContent = fileInput.files.length > 0 ? fileInput.files[0].name : "";
}

function createPost() {
    const text = postText.value;
    const file = fileInput.files[0];

    let postHtml = 
    `<div class='post'>
        <p><strong>${user.name}</strong> - ${new Date().toDateString()}</p>
        <p>${text}</p>`;

    if (file) {
        const imageUrl = URL.createObjectURL(file);
        postHtml += `<img src='${imageUrl}' width='100%'>`;
    }
    postHtml += `</div>`;
    postsSection.innerHTML += postHtml;

    postText.value = "";
    fileInput.value = "";
    fileNameDisplay.textContent = "";
}

function showModal() {
    userInfoElement.innerText = user.getInfo();
    modalElement.style.display = "block";
}

function closeModal() {
    modalElement.style.display = "none";
}
