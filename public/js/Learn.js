import AbstractView from "./AbstractView";
import { lessonList } from "../data/lessonData";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Erovoutika | Learn");
  }

  getLesson() {
    const { slug, topicId, orderRank } = this.params;
    const currentModule = lessonList.filter((el) => el.slug === slug)[0];
    const chapterCount = currentModule.units.length;
    const currentChapter = currentModule.units.filter(
      (el) => el.lessonId == topicId
    )[0];
    const currentTopic = currentChapter.content.filter(
      (el) => el.orderRank == orderRank
    )[0];
    return {
      chapterCount,
      currentModule,
      currentChapter,
      currentTopic,
    };
  }

  showTopic() {
    const title = this.getLesson().currentChapter.title;
    const html = this.getLesson().currentTopic.text;

    return { html, title };
  }

  getNextTopic() {
    const chapterCount = this.getLesson().chapterCount;
    const contentLen = this.getLesson().currentChapter.content.length;
    const currentParam = this.params.topicId;
    const currentOrder = this.params.orderRank;
    const currentSlug = this.params.slug;
    let lastNumParam = parseInt(currentParam.split("").pop());

    if (lastNumParam === chapterCount && currentOrder == contentLen) {
      return "/lessons";
    }

    if (currentOrder == contentLen) {
      return `/learn/${currentSlug}/${currentParam * 1 + 1}/1`;
    }

    return `/learn/${currentSlug}/${currentParam}/${currentOrder * 1 + 1}`;
  }

  getButton() {
    const lessonType = this.getLesson().currentTopic.type;
    if (lessonType === "coach")
      return `<a id="btn-continue" href="${this.getNextTopic()}" data-link> Continue </a>`;

    if (lessonType === "quiz")
      return `<div id="btn-quiz" class="disabled"> Check </div>`;
  }

  classToApply(
    target,
    choice,
    style,
    btnText,
    resultColor,
    message,
    classIcon,
    action
  ) {
    const resultContainer = document.querySelector(".ero-result");
    const resultMessage = document.querySelector("#result-message");
    const resultIcon = document.querySelector(".far");

    choice.classList[action](style);
    target.textContent = btnText;
    resultContainer.classList[action]("animate");
    resultContainer.style.backgroundColor = resultColor;
    resultMessage.textContent = message;
    resultIcon.classList.add(classIcon);
  }

  checkSelected() {
    const selectedChoice = Array.from(
      document.querySelectorAll(".ero__quiz--choice")
    );
    const btnText = document.querySelector("#btn-quiz");
    const userChoice = selectedChoice.find((el) =>
      el.classList.contains("selected")
    );

    const isCorrect =
      this.getLesson().currentTopic.answer === userChoice.dataset.attribute
        ? true
        : false;

    if (isCorrect) {
      this.classToApply(
        btnText,
        userChoice,
        "correct",
        "Continue",
        "#40bf9c",
        "Well done!",
        "fa-check-circle",
        "add"
      );
    } else {
      this.classToApply(
        btnText,
        userChoice,
        "error",
        "Retry",
        "#f35843",
        "Incorrect, Try again!",
        "fa-times-circle",
        "add"
      );
    }
  }

  async getHTML() {
    return ` 
    <!-- Header Part -->
            <div class="ero__header--top">
                <div class="ero__container--inner">
                    <div class="ero__title--left">
                      <a href="/lessons" data-link> <span id="exit"> X </span> </a> <span id="title-text">${
                        this.showTopic().title
                      }</span> 
                    </div>
                </div>
                <div class="nav__link--container"> 
                  <div class="nav__link--inner">
                  </div>  
                </div>
            </div>
    <!-- End Header Part -->

    <!-- Content Part --> 
        <div class="ero__main"> 
          <div class="ero__content">
          ${this.showTopic().html}
          <div class="ero-result">
              <div class="ero__result--inner">
              <i class="far"></i>
              <span id="result-message"></span>
              </div>
          </div>
          </div>
          
        </div>
    <!-- End Content Part --> 
    <!-- Footer Part --> 
        
    <footer class="ero__footer--learn"> 
            <div class="ero__btn--container">
                <div id="btn-back"> Back </div>
                ${this.getButton()}
            </div>
    </footer>`;
  }
}
