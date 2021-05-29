import Home from "./Home";
import Lessons from "./Lessons";
import Learn from "./Learn";

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

export const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/lessons", view: Lessons },
    { path: "/learn/:slug/:topicId/:orderRank", view: Learn },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }
  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHTML();

  const quizBtn = document.querySelector("#btn-quiz");
  const bckBtn = document.querySelector("#btn-back");
  const dropdown = document.querySelector("#dropdown");

  if (bckBtn) {
    bckBtn.addEventListener("click", () => history.back());
  }

  if (quizBtn) {
    quizBtn.addEventListener("click", function (e) {
      const btnText = e.target.innerText;
      if (btnText === "Check") {
        view.checkSelected();
      }

      if (btnText === "Continue") {
        location.assign(view.getNextTopic());
      }

      if (btnText === "Retry") {
        const choiceContainer = document.querySelector(
          ".ero__quiz--choice-container"
        );
        const selectedChoice = Array.from(
          document.querySelectorAll(".ero__quiz--choice")
        );
        const btnText = document.querySelector("#btn-quiz");
        const userChoice = selectedChoice.find((el) =>
          el.classList.contains("selected")
        );
        view.classToApply(
          btnText,
          userChoice,
          "error",
          "Check",
          undefined,
          undefined,
          undefined,
          "remove"
        );
        choiceContainer.style.pointerEvents = "";
        userChoice.classList.remove("selected");
        btnText.classList.remove("disabled");
        btnText.style.opacity = 0.5;
      }
    });
  }
  if (dropdown) {
    dropdown.addEventListener("click", () => {
      if (dropdown.firstElementChild.classList.contains("animate")) {
        dropdown.firstElementChild.classList.remove("animate");
      } else {
        dropdown.firstElementChild.classList.add("animate");
      }
    });
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", async () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
    if (e.target.matches("[data-attribute]")) {
      const btnQuiz = document.querySelector("#btn-quiz");
      e.target.parentElement.style.pointerEvents = "none";
      e.target.classList.add("selected");
      btnQuiz.style.opacity = 1;
      btnQuiz.classList.remove("disabled");
    }
  });

  router();
});
