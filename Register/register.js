// Hiệu ứng load form
window.addEventListener("load", () => {
    const form = document.querySelector(".register-form");
    form.classList.add("show");
});

// Toggle hiện / ẩn mật khẩu
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.textContent = "";
    } else {
        input.type = "password";
        icon.textContent = "";
    }
}

// Validate & animation khi submit
const form = document.querySelector(".register-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");
    const button = document.querySelector(".btn-register");

    // Reset trạng thái lỗi
    password.classList.remove("error");
    confirm.classList.remove("error");
    form.classList.remove("shake");

    if (password.value !== confirm.value) {
        password.classList.add("error");
        confirm.classList.add("error");
        form.classList.add("shake");
        return;
    }

    // Hiệu ứng loading
    button.disabled = true;
    button.textContent = "Đang đăng ký...";

    setTimeout(() => {
        button.textContent = "Đăng ký thành công ✔";
        button.classList.add("success");
    }, 1500);
});
