import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

let form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    try {
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: username });
        

        alert("create account successful please login");   
        location.href = "login.html";                      

    } catch (error) {
        alert("Lỗi: " + error.message);  
    }
});