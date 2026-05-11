import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

let form = document.querySelector("form");
form.addEventListener("submit", async (e) => {   // thêm async
    e.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    try {
        // ---- THAY localStorage bằng Firebase ----
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email.value.trim(),
            password.value.trim()
        );

        const existing_user = {
            uid: userCredential.user.uid,
            email: userCredential.user.email
        };

        localStorage.setItem("current_user", JSON.stringify(existing_user)); // giữ nguyên dòng này
        location.href = "index.html"; // giữ nguyên dòng này
        // -----------------------------------------

    } catch (error) {
        alert("username or password is incorrect"); // giữ nguyên thông báo lỗi
    }
});