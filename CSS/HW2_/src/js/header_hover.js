export const headerHover = () => {
  console.log("aasdasd");
  const buttons = document.querySelectorAll(".list__item");

  buttons.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      item.style.color = "#57A4A4";
    });

    item.addEventListener("mouseout", (e) => {
      item.style.color = '#4E4E4E';
    });
  });
};
