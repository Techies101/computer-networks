import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Erovoutika | Home");
  }

  async getHTML() {
    return `
    <!-- Header Part -->
    <div class="ero__header--top">
        <div class="ero__container--inner">
            <div class="ero__container--logo">
                <a href="/"><img src="/assets/images/ero3.png" alt="erovoutika logo"> </a>
            </div>
            <div class="ero__container--left">
                <a href="/lessons" data-link>Get Started</a>
            </div>
        </div>
    </div>
    <!-- End Header Part -->

    <!-- Section 1 Part -->
    <div class="ero__main--center">
        <div class="ero__main--inner">
            <div class="ero__main--left">
                <div class="ero__main--desc">
                    <h2>Introduction to</h2>
                    <h1>Computer <span class="ero__el--border"> Network</span></h1>
                    <span class="ero__course--desc">
                    Learn the fundaments of Computer Network and build a solid base of Computer Networks.
                    </span>
                    <hr>
                        <span class="ero__course--desc-bottom">This course describe the basic information and configuration of Computer Networking.</span>
                </div>
            </div>
            <div class="ero__main--right">
                <div class="ero__video--container">
                    <video controls >
                        <source src="/assets/videos/sample.mp4" >
                    </video>
                </div>
            </div>
        </div>
    </div>
    <!-- End Section 1 Part -->

    <!-- Section 2 Part -->
        <div class="ero__section">
            <div class="ero__main--inner">
                <div class="row">
                    <div class="col-6">
                        <h1>Learning Outcomes</h1>
                        <p>
                            After completing this curriculum, students will have a basic understanding of each parts of Computer Networking, being able to explore and gain knowledge about the lessons and different configurations. The activities in this curriculum, focusing on pop-quizzes from each topics that will help  them develop skills such as Configuration Command in Cisco Packet Tracer and the basics of Computer Networking.
                        </p>
                        <p>
                            The aim of these modules is to teach the basics of Computer Networking Course for beginners. To provide information and teach configuration about Computer Networking.
                        </p>
                        <p>
                            This is to increase every learner's knowledge regarding this whole topic.
                        </p>
                        <p>
                            The curriculum is accompanied by detailed lesson plans, pop-up quizzes, and teaching slides for Computer Networking Course.
                        </p>
                    </div>
                    <div class="col-6 right">
                        <h3>Material Required</h3>
                        <p>
                            Cisco Packet tracer (Application)
                        </p>
                        <h3>Prerequisites</h3>
                        <p>
                            Basic Computer knowledge
                        </p>
                        <div class="row-box">
                            <div class="box">
                                <h2>18</h2>
                                <p>
                                    Lessons
                                </p>
                            </div>
                            <div class="box">
                                <h2>20</h2>
                                <p>
                                    Learning hours
                                </p>
                            </div>
                            
                            <div class="box">
                            <h2>2</h2>
                            <p>
                                Grades
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- End Section 2 Part -->


    <!-- Footer Part -->
        <footer id="home">
            <div class="ero__footer--center">
                <span>erovoutika@gmail.com</span>
                <span>Erovoutika International Corporation</span>
                <span>+91-8726 533 960 &nbsp; &nbsp; +91-8765 696 060</span>
            </div>

        </footer>
    <!-- End Footer Part -->`;
  }
}
