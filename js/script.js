
    var link = document.querySelector(".write-us-button");
    var popup = document.querySelector(".write-us");
    var close = document.querySelector(".close-btn");
    var form = popup.querySelector("form");
    var writeusName = document.querySelector("[name=popup-name]");
    var writeusEmail = document.querySelector("[name=popup-email]");
    var writeusText = document.querySelector("[name=popup-text]");
    var storage = "";

    try {
      storage = localStorage.getItem("writeusName");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("write-us-show");

      if (storage) {
        writeusName.value = storage;
        writeusEmail.focus();
      } else {
        writeusName.focus();
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!writeusName.value || !writeusEmail.value || !writeusText.value) {
        evt.preventDefault();
        popup.classList.remove("write-us-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("write-us-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("writeusName", writeusName.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("write-us-show")) {
          popup.classList.remove("write-us-show");
          popup.classList.remove("write-us-error");
        }
      }
    });

    var mapLink = document.querySelector(".contacts-map-btn");
    var mapPopup = document.querySelector(".map");
    var mapClose = mapPopup.querySelector(".close-btn");

    mapLink.addEventListener("click",
      function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("map-show");
      });

    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("map-show");

    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("map-show")) {
          mapPopup.classList.remove("map-show");
        }
      }
    });
