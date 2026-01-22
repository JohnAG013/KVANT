function switchLang(lang) {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    window.location.href = `../${lang}/${page}`;
}