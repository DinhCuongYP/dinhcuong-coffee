const topMenu = document.getElementById("dcd-top-menu")
const toggleTopMenu = document.getElementById("dcd-toggle-top-menu-icon")

document.addEventListener("click", (e) => {
  if (toggleTopMenu.contains(e.target)) {
    topMenu.classList.toggle("hidden")
    topMenu.classList.toggle("dcd-top-menu-expanded")
  } else {
    if (topMenu.classList.contains("dcd-top-menu-expanded")) {
      topMenu.classList.remove("dcd-top-menu-expanded")
      topMenu.classList.add("hidden")
    }
  }
})
