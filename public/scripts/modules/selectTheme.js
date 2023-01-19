export const selectTheme = () => {
  let content = document.querySelector('.contentTheme')
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}