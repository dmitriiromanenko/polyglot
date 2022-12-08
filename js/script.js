const showCodeDiv = document.getElementById("show-code-content");
const btnTitleShow = document.getElementById("show-code-title-show");
const btnTitleHide = document.getElementById("show-code-title-hide");
const btnArrowDown = document.getElementById("show-code-arrow-down");
const btnArrowUp = document.getElementById("show-code-arrow-up");

const btnShowCode = document.getElementById("show-code");



const generateTokenModal = document.getElementById("generate-token-modal");
const thankYouModal = document.getElementById("thank-you-modal");
const pleaseWaitModal = document.getElementById("please-wait-modal");
const needHelpModal = document.getElementById("need-help-modal");

const btnGenerateTokenOpen = document.getElementById("generate-token");
const btnExitModal = document.getElementById("absolute-modal-exit-1");
const btnExitModal2 = document.getElementById("absolute-modal-exit-2");
const btnExitModal3 = document.getElementById("absolute-modal-exit-3");
const btnExitModal4 = document.getElementById("absolute-modal-exit-4");
const btnGenerateTokenSubscribe = document.getElementById("subscribe");
const btnNeedHelp = document.getElementById("need-help-btn");



btnExitModal.onclick = function () {
  generateTokenModal.style.display = "none";
};



btnShowCode.onclick = function () {
  if (showCodeDiv.style.display !== "none") {
    showCodeDiv.style.display = "none";
    btnTitleShow.style.display = "block";
    btnTitleHide.style.display = "none";
    btnArrowDown.style.display = "block";
    btnArrowUp.style.display = "none";

  } else {
    showCodeDiv.style.display = "block";
    btnTitleShow.style.display = "none";
    btnTitleHide.style.display = "block";
    btnArrowDown.style.display = "none";
    btnArrowUp.style.display = "block";

  }
};

btnGenerateTokenOpen.onclick = function () {
  generateTokenModal.style.display = "flex";
  pleaseWaitModal.style.border = "none";
  needHelpModal.style.border = "none";
};



btnGenerateTokenSubscribe.onclick = function () {
  generateTokenModal.style.display = "none";
  thankYouModal.style.display = "flex";

  setTimeout(() => {
    if (thankYouModal.style.border !== "red" &&
      pleaseWaitModal.style.border !== "red") {
      thankYouModal.style.display = "none";
      pleaseWaitModal.style.display = "flex";
    }
  }, "1000")

  setTimeout(() => {
    if (pleaseWaitModal.style.border !== "red" &&
      needHelpModal.style.border !== "red") {
      pleaseWaitModal.style.display = "none";
      needHelpModal.style.display = "flex";
    }
  }, "5000")

};


btnExitModal2.onclick = function () {
  thankYouModal.style.display = "none";
};


btnExitModal3.onclick = function () {
  pleaseWaitModal.style.display = "none";
  needHelpModal.style.display = "none";
  pleaseWaitModal.style.border = "red";
  needHelpModal.style.border = "red";
};

btnExitModal4.onclick = function () {
  needHelpModal.style.display = "none";
};


btnNeedHelp.onclick = function () {
  needHelpModal.style.display = "none";
};