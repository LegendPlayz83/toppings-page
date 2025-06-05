document.addEventListener("DOMContentLoaded", function () {
  const rabbit = document.getElementById('rabbit-img');
  const icon = document.getElementById('theme-icon');
  const body = document.body;

  const dayIcon = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/8e09fc83ddf09318293ebc6519162a29bbdb432c_image.png";
  const nightIcon = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/0d1f49101cb3bfbb1f34f7a5a5a02d4dd50c5353_image.png";
  const rabbitNormal = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/36c58450b0d40343f7ea84fa6ad867488a668ab5_image.png";
  const rabbitHappy = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/5f41747004b4239bf9ce5a5b0771cbed20651ae1_image.png";

  let isDay = true;
  let rabbitClicked = false;

  const preload1 = new Image();
  preload1.src = nightIcon;
  const preload2 = new Image();
  preload2.src = dayIcon;

  if (icon) {
    icon.addEventListener("click", () => {
      isDay = !isDay;
      body.classList.toggle("night", !isDay);
      icon.src = isDay ? dayIcon : nightIcon;
    });

    icon.src = dayIcon;
  }

  if (rabbit) {
    rabbit.addEventListener("click", () => {
      rabbitClicked = !rabbitClicked;
      rabbit.src = rabbitClicked ? rabbitHappy : rabbitNormal;
    });
  }
});
