import AbstractView from "./AbstractView";
import { cardsData } from "./../data/cardsData";
import slugify from "slugify";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Erovoutika | Lessons");
  }

  clickHandler() {
    console.log("Hello World!");
  }

  populateCards() {
    let html = "";
    cardsData.forEach((el) => {
      el.link = slugify(el.title, { lower: true });
      html += `
          <div class="card">
              <span id="progress"> 0 / 7</span>
              <div class="img-container">
                  <div class="img-top">
                      <img src="/assets/images/${el.image}.png" alt="${el.image}" srcset="">
                  </div>
              </div>
              <div class="card-body">
                  <div classs="title"> <span>${el.title}</span> </div>
                  <div class="learn-btn"> 
                 <a  href="/learn/${el.link}/${el.id}/1" data-link> 
                 Learn </a>
                 </div>
              </div>
          </div>`;
    });

    return html;
  }

  async getHTML() {
    return `
    <!-- Header Part -->
    <div class="ero__header--top">
        <div class="ero__container--inner">
            <div class="ero__container--logo">
            <a href="/">
                <img src="/assets/images/ero3.png" alt="erovoutika logo">
            </a>
            </div>
            <div class="ero__container--left">
                <button type="button" class="ero-btn__dropdown" id="dropdown"> Modules <i class="fas fa-caret-down">  </i> </button>
            </div>
        </div>
    </div>
    <!-- End Header Part -->




    <!-- Start Card Section -->
    <div class="ero__section--overview">
        <div class="card__container">
            <div class="card_row" >
                ${this.populateCards()}
            </div>
        </div>
    </div>
    <!-- End Card Section -->
    `;
  }
}
