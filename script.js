"use strict";

    window.addEventListener("load", function () {
      const page = document.querySelector(".page");
      const members = document.querySelectorAll(".member");
      const teamScene = document.querySelector(".team-scene");
      const carStage = document.querySelector(".car-stage");
      const productStage = document.querySelector(".product-stage");
      const spiritStage = document.querySelector(".takumi-spirit-stage");
      const storyStage = document.querySelector(".customer-story-stage");
      const decisionStage = document.querySelector(".decision-stage");
      const smileStage = document.querySelector(".smile-stage");
      const shootingStars = document.querySelector(".shooting-stars");
      let shootingStarTimer;
      let shootingStarStopTimer;

      function createShootingStar() {
        const star = document.createElement("div");
        const top = 8 + Math.random() * 38;
        const left = 68 + Math.random() * 28;
        const width = 80 + Math.random() * 70;
        const duration = 1.4 + Math.random() * 0.9;

        star.className = "shooting-star";
        star.style.top = top + "%";
        star.style.left = left + "%";
        star.style.width = width + "px";
        star.style.setProperty("--duration", duration + "s");
        shootingStars.appendChild(star);

        requestAnimationFrame(function () {
          star.classList.add("fly");
        });

        setTimeout(function () {
          star.remove();
        }, duration * 1000 + 300);
      }

      function startShootingStars() {
        stopShootingStars();
        createShootingStar();

        shootingStarTimer = setInterval(function () {
          if (Math.random() > 0.35) {
            createShootingStar();
          }
        }, 1500);

        shootingStarStopTimer = setTimeout(function () {
          stopShootingStars();
        }, 5200);
      }

      function stopShootingStars() {
        clearInterval(shootingStarTimer);
        clearTimeout(shootingStarStopTimer);
        shootingStars.innerHTML = "";
      }

      function resetAnimation() {
        page.classList.remove("map-small");
        teamScene.classList.remove("show");
        teamScene.classList.remove("lift");
        carStage.classList.remove("show-car");
        productStage.classList.remove("show-product");
        spiritStage.classList.remove("show-spirit");
        storyStage.classList.remove("show-customer-story");
        decisionStage.classList.remove("show-decision");
        smileStage.classList.remove("show-smile");
        stopShootingStars();

        members.forEach(function (member) {
          member.classList.remove("arrive");
        });

        // CSSアニメーションを最初から再実行するための処理
        void page.offsetWidth;
      }

      function startAnimation() {
        resetAnimation();

        setTimeout(function () {
          members.forEach(function (member, index) {
            setTimeout(function () {
              member.classList.add("arrive");
            }, index * 120);
          });
        }, 800);

        setTimeout(function () {
          page.classList.add("map-small");
          teamScene.classList.add("show");
          startShootingStars();
        }, 3600);

        setTimeout(function () {
          teamScene.classList.add("lift");
        }, 5000);

        setTimeout(function () {
          carStage.classList.add("show-car");
        }, 7600);

        setTimeout(function () {
          spiritStage.classList.add("show-spirit");
        }, 10500);

        setTimeout(function () {
          storyStage.classList.add("show-customer-story");
        }, 16000);

        setTimeout(function () {
          decisionStage.classList.add("show-decision");
        }, 22000);

        setTimeout(function () {
          productStage.classList.add("show-product");
        }, 29000);

        setTimeout(function () {
          smileStage.classList.add("show-smile");
        }, 38000);
      }

      startAnimation();

      // 52秒ごとに最初から繰り返す（少しゆっくり）
      setInterval(function () {
        startAnimation();
      }, 52000);
    });
