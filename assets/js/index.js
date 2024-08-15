// submit application
const submitApplicationModal = document.querySelector("#submit-application");
const submitApplicationModalContent = document.querySelector(
  "#submit-application-content"
);

// language
const languageDropdown = document.getElementById("languageDropdown");

// navbar
const offCanvas = document.getElementById("headerOffCanvas");

// swiper partners
const bigPartnersSwiper = document.getElementById("bigPartnersSwiper");
const partnersNavigationPrevButton = document.getElementById(
  "partnersNavigationPrevButton"
);
const partnersNavigationNextButton = document.getElementById(
  "partnersNavigationNextButton"
);

// swiper specialists
const bigSpecialistsSwiper = document.getElementById("bigSpecialistsSwiper");
const specialistsNavigationPrevButton = document.getElementById(
  "specialistsNavigationPrevButton"
);
const specialistsNavigationNextButton = document.getElementById(
  "specialistsNavigationNextButton"
);

// swiper reviews
const bigReviewsSwiper = document.getElementById("bigReviewsSwiper");
const reviewsNavigationPrevButton = document.getElementById(
  "reviewsNavigationPrevButton"
);
const reviewsNavigationNextButton = document.getElementById(
  "reviewsNavigationNextButton"
);

// swiper sertificates
const bigSertificatesSwiper = document.getElementById("bigSertificatesSwiper");
const sertificatesNavigationPrevButton = document.getElementById(
  "sertificatesNavigationPrevButton"
);
const sertificatesNavigationNextButton = document.getElementById(
  "sertificatesNavigationNextButton"
);

// swiper
// slider
new Swiper(".mySwiperSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// partners
var partnersSwiper = new Swiper(".mySwiperPartners", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    500: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});

// specialists
var specialistsSwiper = new Swiper(".mySwiperSpecialists", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// reviews
var reviewsSwiper = new Swiper(".mySwiperReviews", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});

// sertificates
var sertificatesSwiper = new Swiper(".mySwiperSertificates", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});

// navigation events
// partners
if (partnersNavigationPrevButton && partnersNavigationNextButton) {
  partnersNavigationPrevButton.addEventListener("click", function () {
    partnersSwiper.navigation.prevEl.click();
  });

  partnersNavigationNextButton.addEventListener("click", function () {
    partnersSwiper.navigation.nextEl.click();
  });
}

// specialists
if (specialistsNavigationPrevButton && specialistsNavigationNextButton) {
  specialistsNavigationPrevButton.addEventListener("click", function () {
    specialistsSwiper.navigation.prevEl.click();
  });

  specialistsNavigationNextButton.addEventListener("click", function () {
    specialistsSwiper.navigation.nextEl.click();
  });
}

// reviews
if (reviewsNavigationPrevButton && reviewsNavigationNextButton) {
  reviewsNavigationPrevButton.addEventListener("click", function () {
    reviewsSwiper.navigation.prevEl.click();
  });

  reviewsNavigationNextButton.addEventListener("click", function () {
    reviewsSwiper.navigation.nextEl.click();
  });
}

// sertificates
if (sertificatesNavigationPrevButton && sertificatesNavigationNextButton) {
  sertificatesNavigationPrevButton.addEventListener("click", function () {
    sertificatesSwiper.navigation.prevEl.click();
  });

  sertificatesNavigationNextButton.addEventListener("click", function () {
    sertificatesSwiper.navigation.nextEl.click();
  });
}

function showHideNavigations(swiperClass, swiper, prevButton, nextButton) {
  if (swiperClass.navigation.prevEl.className.includes("swiper-button-lock")) {
    prevButton.classList.add("hidden");
    nextButton.classList.add("hidden");

    swiper.classList.remove("max-w-[1400px]");
    swiper.classList.remove("max-xl:max-w-[1100px]");
    swiper.querySelector(".swiper").classList.remove("max-w-screen-3xl");
    swiper
      .querySelector(".swiper")
      .classList.remove("max-2xl:w-[calc(100%-80px)]");

    swiper.classList.add("custom-container");
  } else {
    prevButton.classList.remove("hidden");
    nextButton.classList.remove("hidden");

    swiper.classList.remove("custom-container");

    swiper.classList.add("max-w-[1400px]");
    swiper.classList.add("max-xl:max-w-[1100px]");
    swiper.querySelector(".swiper").classList.add("max-w-screen-3xl");
    swiper
      .querySelector(".swiper")
      .classList.add("max-2xl:w-[calc(100%-80px)]");
  }
}

if (
  partnersSwiper &&
  bigPartnersSwiper &&
  partnersNavigationPrevButton &&
  partnersNavigationNextButton
)
  showHideNavigations(
    partnersSwiper,
    bigPartnersSwiper,
    partnersNavigationPrevButton,
    partnersNavigationNextButton
  );

if (
  specialistsSwiper &&
  bigSpecialistsSwiper &&
  specialistsNavigationPrevButton &&
  specialistsNavigationNextButton
)
  showHideNavigations(
    specialistsSwiper,
    bigSpecialistsSwiper,
    specialistsNavigationPrevButton,
    specialistsNavigationNextButton
  );

if (
  reviewsSwiper &&
  bigReviewsSwiper &&
  reviewsNavigationPrevButton &&
  reviewsNavigationNextButton
)
  showHideNavigations(
    reviewsSwiper,
    bigReviewsSwiper,
    reviewsNavigationPrevButton,
    reviewsNavigationNextButton
  );

if (
  sertificatesSwiper &&
  bigSertificatesSwiper &&
  sertificatesNavigationPrevButton &&
  sertificatesNavigationNextButton
)
  showHideNavigations(
    sertificatesSwiper,
    bigSertificatesSwiper,
    sertificatesNavigationPrevButton,
    sertificatesNavigationNextButton
  );

window.addEventListener("resize", () => {
  if (
    partnersSwiper &&
    bigPartnersSwiper &&
    partnersNavigationPrevButton &&
    partnersNavigationNextButton
  )
    showHideNavigations(
      partnersSwiper,
      bigPartnersSwiper,
      partnersNavigationPrevButton,
      partnersNavigationNextButton
    );

  if (
    reviewsSwiper &&
    bigReviewsSwiper &&
    reviewsNavigationPrevButton &&
    reviewsNavigationNextButton
  )
    showHideNavigations(
      reviewsSwiper,
      bigReviewsSwiper,
      reviewsNavigationPrevButton,
      reviewsNavigationNextButton
    );

  if (
    sertificatesSwiper &&
    bigSertificatesSwiper &&
    sertificatesNavigationPrevButton &&
    sertificatesNavigationNextButton
  )
    showHideNavigations(
      sertificatesSwiper,
      bigSertificatesSwiper,
      sertificatesNavigationPrevButton,
      sertificatesNavigationNextButton
    );

  if (
    specialistsSwiper &&
    bigSpecialistsSwiper &&
    specialistsNavigationPrevButton &&
    specialistsNavigationNextButton
  )
    showHideNavigations(
      specialistsSwiper,
      bigSpecialistsSwiper,
      specialistsNavigationPrevButton,
      specialistsNavigationNextButton
    );
});

function openSidebar() {
  offCanvas.classList.add("open-canvas");
  offCanvas.children[0].classList.remove("-translate-x-full");
  offCanvas.children[0].classList.add("translate-x-0");
}

function closeSidebar() {
  offCanvas.children[0].classList.add("-translate-x-full");
  offCanvas.children[0].classList.remove("translate-x-0");

  setTimeout(() => {
    offCanvas.classList.remove("open-canvas");
  }, 100);
}

document.body.addEventListener("click", (e) => {
  if (e.target === offCanvas) closeSidebar();
  else if (!e.target.classList.contains("language-dropdown")) {
    languageDropdown.classList.remove("block");
    languageDropdown.classList.add("hidden");
  }

  if (
    e.target === submitApplicationModal ||
    e.target === submitApplicationModalContent
  )
    submitApplicationModalClose();
});

function toggleLanguage() {
  if (languageDropdown.classList.contains("block")) {
    languageDropdown.classList.remove("block");
    languageDropdown.classList.add("hidden");
  } else {
    languageDropdown.classList.remove("hidden");
    languageDropdown.classList.add("block");
  }
}

function handleScrollAnimations(headerH, contentFixedHCF) {
  const mainWrapper = document.getElementById("mainWrapper");

  if (window.pageYOffset > 10) {
    headerH.style.top = "0";
    contentFixedHCF.style.top = "-200px";

    if (mainWrapper)
      mainWrapper.style.marginTop = `${headerH.offsetHeight + 10}px`;
  } else {
    headerH.style.top = "-100px";
    contentFixedHCF.style.top = "0";

    if (mainWrapper)
      mainWrapper.style.marginTop = `${contentFixedHCF.offsetHeight}px`;
  }
}

const H = document.querySelector("#scroollableHeader");
const HCF = document.querySelector("#scrollableContentFixed");
if (H && HCF) handleScrollAnimations(H, HCF);

window.addEventListener("scroll", function () {
  if (H && HCF) handleScrollAnimations(H, HCF);
});

const inputComment = document.getElementById("formCommentSubmit");
if (inputComment) inputComment.value = "";

// submit application
function submitApplicationModalClose() {
  submitApplicationModal.classList.remove("flex");
  submitApplicationModal.classList.add("hidden");
}

function submitApplicationModalOpen() {
  submitApplicationModal?.classList.remove("hidden");
  submitApplicationModal?.classList.add("flex");
}

// data-aos
AOS.init();

// fancybox
Fancybox.bind();

// phone
const phoneContent = document.querySelectorAll(".phoneContent");

function setPhoneNumber(src, code) {
  phoneContent.forEach((element) => {
    element.querySelector(".selectedPhone-image").src = src;
  });
  document.querySelectorAll(".phoneNumber").forEach((element) => {
    element.value = code;
    element.focus();
    closePhoneDropdown();
  });
}

function handlePhoneDropdown() {
  phoneContent.forEach((element) => {
    if (element.classList.contains("close-phone-dropdown")) openPhoneDropdown();
    else closePhoneDropdown();
  });
}
function openPhoneDropdown() {
  phoneContent.forEach((element) => {
    element.classList.remove("close-phone-dropdown");
    element.classList.add("open-phone-dropdown");
  });
}
function closePhoneDropdown() {
  phoneContent.forEach((element) => {
    element.classList.remove("open-phone-dropdown");
    element.classList.add("close-phone-dropdown");
  });
}

if (phoneContent && phoneContent.length) {
  phoneContent.forEach((element) => {
    element
      .querySelector(".selectedPhone")
      .addEventListener("click", handlePhoneDropdown);
  });
}

document.addEventListener("click", (event) => {
  if (phoneContent && phoneContent.length)
    phoneContent.forEach((element) => {
      if (
        ![event.target, event.target.parentNode].includes(
          element.querySelector(".selectedPhone")
        ) &&
        ![
          event.target,
          event.target.parentNode,
          event.target.parentNode.parentNode,
        ].includes(element.querySelector(".phone-dropdown")) &&
        element.classList.contains("open-phone-dropdown")
      ) {
        closePhoneDropdown();
      }
    });
});

// phone
const phoneContent2 = document.querySelectorAll(".phoneContent2");

function setPhoneNumber2(src, code) {
  phoneContent2.forEach((element) => {
    element.querySelector(".selectedPhone2-image").src = src;
  });
  document.querySelectorAll(".phoneNumber2").forEach((element) => {
    element.value = code;
    element.focus();
    closePhoneDropdown2();
  });
}

function handlePhoneDropdown2() {
  phoneContent2.forEach((element) => {
    if (element.classList.contains("close-phone-dropdown2"))
      openPhoneDropdown2();
    else closePhoneDropdown2();
  });
}
function openPhoneDropdown2() {
  phoneContent2.forEach((element) => {
    element.classList.remove("close-phone-dropdown2");
    element.classList.add("open-phone-dropdown2");
  });
}
function closePhoneDropdown2() {
  phoneContent2.forEach((element) => {
    element.classList.remove("open-phone-dropdown2");
    element.classList.add("close-phone-dropdown2");
  });
}

if (phoneContent2 && phoneContent2.length) {
  phoneContent2.forEach((element) => {
    element
      .querySelector(".selectedPhone2")
      .addEventListener("click", handlePhoneDropdown2);
  });
}

document.addEventListener("click", (event) => {
  if (phoneContent && phoneContent.length)
    phoneContent2.forEach((element) => {
      if (
        ![event.target, event.target.parentNode].includes(
          element.querySelector(".selectedPhone2")
        ) &&
        ![
          event.target,
          event.target.parentNode,
          event.target.parentNode.parentNode,
        ].includes(element.querySelector(".phone-dropdown2")) &&
        element.classList.contains("open-phone-dropdown2")
      ) {
        closePhoneDropdown2();
      }
    });
});
