// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"AbstractView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class _default {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHTML() {
    return "";
  }

}

exports.default = _default;
},{}],"Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractView = _interopRequireDefault(require("./AbstractView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class _default extends _AbstractView.default {
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

exports.default = _default;
},{"./AbstractView":"AbstractView.js"}],"../data/cardsData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardsData = void 0;
const cardsData = [{
  image: "components",
  title: "Network Components",
  id: 1001
}, {
  image: "types-of-network",
  title: "Types of Network",
  id: 2001
}, {
  image: "sitemap",
  title: "OSI & TCP/IP Model",
  id: 3001
}, {
  image: "domain",
  title: "Domain Name System ",
  id: 4001
}, {
  image: "address-ip",
  title: "IP Address & Subnetting",
  id: 5001
}, {
  image: "router",
  title: "Routers & Switches",
  id: 6001
}, {
  image: "p2p",
  title: "P2P Configuration",
  id: 7001
}, {
  image: "cabling",
  title: "Network Cabling",
  id: 8001
}, {
  image: "configuration-of-switch",
  title: "Configuration of Switch",
  id: 9001
}];
exports.cardsData = cardsData;
},{}],"../../node_modules/slugify/slugify.js":[function(require,module,exports) {
var define;
;

(function (name, root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
    module.exports['default'] = factory();
  }
  /* istanbul ignore next */
  else if (typeof define === 'function' && define.amd) {
      define(factory);
    } else {
      root[name] = factory();
    }
})('slugify', this, function () {
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","„":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');
  var locales = JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"}}');

  function replace(string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected');
    }

    options = typeof options === 'string' ? {
      replacement: options
    } : options || {};
    var locale = locales[options.locale] || {};
    var replacement = options.replacement === undefined ? '-' : options.replacement;
    var slug = string.normalize().split('') // replace characters based on charMap
    .reduce(function (result, ch) {
      return result + (locale[ch] || charMap[ch] || (ch === replacement ? ' ' : ch)). // remove not allowed characters
      replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '');
    }, '');

    if (options.strict) {
      slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
    } // Remove leading/trailing spaces, then replace all other spaces with
    // replacement character, treating multiple consecutive spaces as a single
    // space.


    slug = slug.trim().replace(/\s+/g, replacement);

    if (options.lower) {
      slug = slug.toLowerCase();
    }

    return slug;
  }

  replace.extend = function (customMap) {
    Object.assign(charMap, customMap);
  };

  return replace;
});
},{}],"Lessons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractView = _interopRequireDefault(require("./AbstractView"));

var _cardsData = require("./../data/cardsData");

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class _default extends _AbstractView.default {
  constructor(params) {
    super(params);
    this.setTitle("Erovoutika | Lessons");
  }

  clickHandler() {
    console.log("Hello World!");
  }

  populateCards() {
    let html = "";

    _cardsData.cardsData.forEach(el => {
      el.link = (0, _slugify.default)(el.title, {
        lower: true
      });
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
            <div> Hello World! </div>
            <div class="card_row" >
                ${this.populateCards()}
            </div>
        </div>
    </div>
    <!-- End Card Section -->
    `;
  }

}

exports.default = _default;
},{"./AbstractView":"AbstractView.js","./../data/cardsData":"../data/cardsData.js","slugify":"../../node_modules/slugify/slugify.js"}],"../data/lessonData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lessonList = void 0;
const lessonList = [{
  slug: "network-components",
  units: [{
    title: "Computer Network Components",
    lessonId: 1001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                        <span class="topic-heading">Computer Network Components</span>
                        <p class="topic-description">Computer Network Components are the significant parts which are expected to introduce the product. Some significant organization segments are <strong> NIC  switch, link, center, switch, and modem.</strong></p>
                    </div>
                    <div class="ero__container--right">
                        <figure class="single-image">
                            <img src="/assets/images/computer-network-components.png" alt="computer-network-components">
                            </figure>
                        </div>
                    </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                        <span class="topic-heading">Advantages of Computer Network</span>
                        <ul>
                            <li>Causes you to share printers, scanners, and email</li>
                            <li>Causes you to share data at exceptionally quick speed</li>
                            <li>Electronic correspondence is more productive and more affordable than without the network.</li>
                        </ul>
                    </div>
                    <div class="ero__container--right">
                        <figure class="single-image">
                            <img src="/assets/images/computer-network-components.png" alt="">
                        </figure>
                    </div>
                </div>`
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">A significant organization segments are NIC, switch, link, center, switch, and modem.</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">Router</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">Computer Network Components</div>
                        <div class="ero__quiz--choice" data-attribute="choice3">Switch</div>
                        <div class="ero__quiz--choice" data-attribute="choice4">Hub</div>
                  </div>`,
      answer: "choice2"
    }]
  }, {
    title: "Hardware Parts",
    lessonId: 1002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                    <span class="topic-heading">Server</span class="topic-heading">
                        <p class="topic-description">
                            are high-design PCs that wear down the assets of the organization. The organization operating framework is often introduced within the employee therefore they provide consumer gets to the organization assets. 
                        </p>
                    </div>
            
                    <div class="ero__container--right">
                    <figure class="single-image">
                        <img src="/assets/images/server.png" alt="server">
                            <figcaption>Server</figcaption>
                    </figure>
                    </div>
                </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                    <span class="topic-heading">Clients</span>
                        <p class="topic-description">
                            are PCs that fire and find administration from the staff to access and utilize the organization assets. 
                        </p>
                    </div>
            
                    <div class="ero__container--right">
                        <figure class="single-image">
                            <img src="/assets/images/server-2.png" alt="server-2">
                            <figcaption>Client and Server</figcaption>
                        </figure>
                    </div>
                </div>`
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
                        <div class="ero__container--left">
                        <span class="topic-heading">Peers</span class="topic-heading">
                            <p class="topic-description">
                                Peers − are PCs that offer even as get administrations from totally different companions in a very workgroup network. 
                            </p>
                        </div>
                
                        <div class="ero__container--right">
                            <figure class="single-image">
                                <img src="/assets/images/peers.png" alt="peers">
                                <figcaption>Peer to Peer</figcaption>
                            </figure>
                        </div>
                    </div>`
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container">
                        <div class="ero__container--left">
                            <span class="topic-heading">Transmission Media</span>
                            <p class="topic-description">
                                are the channels through that info is affected beginning with one widget then onto subsequent in a corporation. 
                            </p>
                        </div>
                        <div class="ero__container--right">
                            <figure class="single-image">
                                <img src="/assets/images/transmission.png" alt="transmission">
                            </figure>
                        </div>
                    </div>`
    }, {
      orderRank: 5,
      type: "coach",
      text: `<div class="ero__con--container">
                        <div class="ero__container--con">
                            <span class="topic-heading">Connecting Devices</span>
                            <p class="topic-description">
                                act as middleware between organizations or PCs, by proscribing the organization media along. A little of the essential associating gadgets are:
                            </p>
                        </div>

                        <div>
                            <div class="grid-img">
                                <figure>
                                    <img src="/assets/images/router.jpg" alt="router">
                                    <figcaption>Router</figcaption>
                                </figure>
                                <figure>
                                    <img src="/assets/images/bridges.jpg" alt="bridges">
                                    <figcaption>Bridges</figcaption>
                                </figure>
                                <figure>
                                    <img src="/assets/images/hub.png" alt="hub">
                                    <figcaption>Hub</figcaption>
                                </figure>
                                <figure>
                                    <img src="/assets/images/repeater.jpg" alt="repeater">
                                    <figcaption>Repeaters</figcaption>
                                </figure>
                                <figure>
                                    <img src="/assets/images/gateway.jpg" alt="gateway">
                                    <figcaption>Gateway</figcaption>
                                </figure>
                                <figure>
                                    <img src="/assets/images/switch.jpg" alt="switch">
                                    <figcaption>Switch</figcaption>
                                </figure>
                            </div>  
                        </div>
                    </div>`
    }]
  }, {
    title: "Major components required to install network",
    lessonId: 1003,
    quizCount: 7,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                    <span class="topic-heading">NIC</span>
                        <ul>
                            <li>NIC stands for Network Interface Card.</li>
                            <li>NIC is an equipment part used to associate a PC with another PC onto an network.</li>
                        </ul>
                        <span class="topic-subheading">There are two types of NIC:</span>
                        <span class="topic-heading">Wired NIC</span>
                        <p class="topic-description">
                            The Wired NIC is available inside the motherboard. Links and connectors are utilized with wired NIC to move information.
                        </p>
                        <span class="topic-heading">Wireless NIC</span>
                        <p class="topic-description">
                            The remote NIC contains the receiving wire to get the association over the remote organization. For instance, PC the remote NIC.
                        </p>
                    </div>
                </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">What are the two types of
                    NIC?.</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">Cables and
                        Connectors</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">Switch and
                        Router</div>
                        <div class="ero__quiz--choice" data-attribute="choice3">Wired and
                        Wireless</div>
                        <div class="ero__quiz--choice" data-attribute="choice4">Hub and
                        Modem</div>
                  </div>`,
      answer: "choice3"
    }, {
      orderRank: 3,
      type: "coach",
      text: ` <div class="ero__el--container">
                        <div class="ero__container--left">
                        <span class="topic-heading">Hub</span>
                            <p class="topic-description">
                                A Hub is an equipment gadget that splits the organization association between different gadgets. At the point when PC demands for some data from an organization, it initially sends the solicitation to the Hub through link. Nowadays, the use of hub is obsolete, and it is more advanced computer network components such as Switches and Routers.
                            </p>
                        </div>
                
                        <div class="ero__container--right">
                            <figure class="single-image">
                                <img src="/assets/images/hub.png" alt="">
                                <figcaption>Hub</figcaption>
                            </figure>
                        </div>
                    </div>`
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container p-image">
                        <div class="ero__container--left">
                        <span class="topic-heading">Switch</span>
                            <p class="topic-description">
                                A switch is an equipment gadget that associates different gadgets on a PC organization. A Switch contains further developed highlights than Hub. 
                            </p>
                            <p class="topic-description">
                                Switch conveys the message to the right objective dependent on the actual location present in the approaching message. 
                            </p>
                            <p class="topic-description">
                                A Switch doesn't communicate the message to the whole organization like the Hub
                            </p>
                        </div>

                        <div class="ero__container--right">
                            <figure class="single-image">
                                <img src="/assets/images/switch.jpg" alt="switch">
                                <figcaption>Switch</figcaption>
                            </figure>
                        </div>
                    </div>`
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">An equipment gadget that associates
                    different gadgets on a PC organization.</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">Cables and
                        Connectors</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">Router</div>
                        <div class="ero__quiz--choice" data-attribute="choice3">Hub</div>
                        <div class="ero__quiz--choice" data-attribute="choice4">Switch</div>
                  </div>`,
      answer: "choice4"
    }, {
      orderRank: 6,
      type: "coach",
      text: `<div class="ero__el--container">
                        <div class="ero__container--left">
                        <span class="topic-heading">Router</span>
                            <p class="topic-description">
                                A router is an equipment gadget which is utilized to associate a LAN with a web association. A router advances the bundle dependent on the data accessible in the steering table.
                            </p>
                            <p class="topic-description">
                                It decides the best way from the accessible ways for the transmission of the packet.
                            </p>

                            <span class="topic-heading">Advantages of Router</span>
                            <ul>
                                <li>Network Range</li>
                                <li>Performance</li>
                                <li>Security</li>
                            </ul>
                            
                        </div>
                
                        <div class="ero__container--right" style="display: flex;">
                            <figure class="single-image">
                                <img src="/assets/images/router.jpg" alt="router">
                                <figcaption>Router</figcaption>
                            </figure>
                        </div>
                    </div>`
    }, {
      orderRank: 7,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">An equipment gadget which is
                    utilized to associate a LAN with a
                    web association.</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">Cables and
                        Connectors</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">Router</div>
                        <div class="ero__quiz--choice" data-attribute="choice3">Hub</div>
                        <div class="ero__quiz--choice" data-attribute="choice4">Switch</div>
                  </div>`,
      answer: "choice2"
    }, {
      orderRank: 8,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">What is the advantage of
                    Router?.</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">Share printers,
                        scanners, and email.</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">Share data at
                        exceptionally
                        quick speed.</div>
                        <div class="ero__quiz--choice" data-attribute="choice3">Security</div>
                        <div class="ero__quiz--choice" data-attribute="choice4">More
                        productive and
                        more affordable.</div>
                  </div>`,
      answer: "choice3"
    }, {
      orderRank: 9,
      type: "coach",
      text: `<div class="ero__el--container">
                        <div class="ero__container--left">
                            <span class="topic-heading">Modem</span>
                            <p class="topic-description">
                                A modem is an equipment gadget that permits the PC to associate with the web over the current phone line.
                            </p>
                            <p class="topic-description">
                                A modem isn't incorporated with the motherboard instead of it is introduced on the PCI space found on the motherboard.
                            </p>
                            <p class="topic-description">
                                It represents Modulator/Demodulator. It changes over the computerized information into a simple sign via phone lines.
                            </p>

                            <span style="font-weight: 500;">A modem can be grouped in the
                            accompanying classes:</span>
                                <ul >
                                    <li>Cable modem</li>
                                    <li>Standard PC modem or Dial-up modem</li>
                                    <li>Cellular Modem</li>
                                </ul>
                            
                        </div>

                        <div class="ero__container--right">
                            <figure class="single-image"">
                                <img src="/assets/images/modem.png" alt="modem">
                                <figcaption>Modem</figcaption>
                            </figure>
                        </div>
                    </div>`
    }, {
      orderRank: 10,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">An equipment gadget that
                    permits the PC to associate with
                    the web over the current phone
                    line.</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">Cables and
                        Connectors</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">Router</div>
                        <div class="ero__quiz--choice" data-attribute="choice3">Hub</div>
                        <div class="ero__quiz--choice" data-attribute="choice4">Modem</div>
                  </div>`,
      answer: "choice4"
    }, {
      orderRank: 11,
      type: "coach",
      text: `<div class="ero__el--container">
                        <div class="ero__container--left">
                            <span class="topic-heading"> Cable and Connectors </span>
                            <span class="topic-subheading">Twisted pair cable</span>
                            <p class="topic-description">
                                It is delegated Category 1, 2, 3, 4, 5, 5E, 6 and 7. Classification 5E, 6 and 7 are high velocity links that can send 1Gbps or more.
                            </p>
                        </div>
                        <div class="ero__container--right">
                            <figure class="single-image">
                                <img src="/assets/images/twisted-pair.png" alt="twisted-pair">
                                <figcaption>Twisted Pair</figcaption>
                            </figure>
                        </div>
                    </div>  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-info-circle" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i>Cable is a transmission media utilized for communicating a sign</p>`
    }, {
      orderRank: 12,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">A transmission media utilized
                    for communicating a sign.</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">Cables and
                        Connectors</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">Router</div>
                        <div class="ero__quiz--choice" data-attribute="choice3">Hub</div>
                        <div class="ero__quiz--choice" data-attribute="choice4">Switch</div>
                  </div>`,
      answer: "choice1"
    }, {
      orderRank: 13,
      type: "coach",
      text: `<div class="ero__el--container">
                        <div class="ero__container--left">
                            <span class="topic-heading">Coaxial Cable</span>
                            <p class="topic-description">
                                Coaxial cable more looks like TV establishment link. It is more costly than contorted pair link however give high information transmission speed.
                            </p>
                        </div>
                        <div class="ero__container--right"> 
                        <figure class="single-image">
                            <img src="/assets/images/coaxial-cable.png" alt="coaxial-cable">
                            <figcaption>Coaxial Cable</figcaption>
                        </figure>
                        </div>
                    </div>`
    }, {
      orderRank: 14,
      type: "coach",
      text: `<div class="ero__el--container">
                        <div class="ero__container--left">
                            <span class="topic-heading">Fiber-optic cable</span>
                            <p class="topic-description">
                                It is a fast link which communicates information utilizing light pillars through a glass bound filaments. Fiber-optic link is high information transmission link contrasting with the other link types. 
                            </p>
                        </div>

                        <div class="ero__container--right"> 
                            <figure class="single-image">
                                <img src="/assets/images/fiber-optic.png" alt="fiber-optic">
                                <figcaption>Fiber Optic</figcaption>
                            </figure>
                        </div>
                    </div>`
    }]
  }]
}, {
  slug: "types-of-network",
  units: [{
    title: "Computer Network",
    lessonId: 2001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                        <span class="topic-heading">Computer Network</span>
                        <p class="topic-description">
                            A group of computers connected to each other that allows a computer
                            to communicate and share their resources, data and applications with another computer 
                        </p>
                    </div>

                    <div class="ero__container--right"> 
                        <figure class="single-image">
                            <img src="/assets/images/top-img.png" alt="fiber-optic" style="width: 320px;">
                        </figure>
                    </div>
                </div>`
    }]
  }, {
    title: "Local Area Network (LAN)",
    lessonId: 2002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                        <span class="topic-heading">LAN</span>
                        <p class="topic-description">
                            A group of computers connected to each other in a small area.
                        </p>
                        <p class="topic-description">
                            A LAN involves cables, access points, switches, routers, and other parts of empower devices that interface within the server.
                        </p>
                    </div>
            
                    <div class="ero__container--right"> 
                        <figure class="single-image">
                            <img src="/assets/images/lan.jpg" alt="fiber-optic" style="width: 320px;">
                        </figure>
                    </div>
                </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">What is acronym for LAN?</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">Locale Area Networking.</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">Local Area Networking.  </div>
                        <div class="ero__quiz--choice" data-attribute="choice3">Local Access Network. </div>
                        <div class="ero__quiz--choice" data-attribute="choice4">Local  Area Network. </div>
                </div>`,
      answer: "choice4"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">Define what is LAN?</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">A private network dependent on the internet protocol.</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">A group of computers connected to each other in a small area.</div>
                        <div class="ero__quiz--choice" data-attribute="choice3">A network organized within an individual person.</div>
                        <div class="ero__quiz--choice" data-attribute="choice4">A network that reaches out over an enormous geological area.</div>
                </div>`,
      answer: "choice2"
    }]
  }, {
    title: "Personal Area Network (PAN)",
    lessonId: 2003,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                <div class="ero__container--left">
                    <span class="topic-heading">PAN</span>
                    <p class="topic-description">
                        A network coordinated inside an individual person, commonly in a range of 10 meters.
                    </p>
                    <p class="topic-description">
                        There are two types of Personal Area Network, these are Wired Personal Area Network and Wireless Personal Area Network. 
                    </p>
        
                    <p class="topic-description">
                        The things to develop a Personal Area Network are Laptops, Mobile Phones, Media Player and Play Stations.
                    </p>
        
                    <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-info-circle" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i>Thomas Zimmerman is a scientist researcher which he brings the idea of the Personal Area Network.
                    </p>
                </div>
        
                <div class="ero__container--right"> 
                    <figure class="single-image">
                        <img src="/assets/images/pan.png" alt="fiber-optic" style="width: 320px;">
                    </figure>
                </div>
            </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
                <div class="ero__container--left">
                    <span class="topic-heading">PAN</span>
                    <p class="topic-description">
                        Some of examples of Personal Area Network :
                    </p>
                    <ul>
                        <li>Body Area Network</li>
                        <li>Offline Network or Home Network</li>
                        <li>Small Home Office</li>
                    </ul>
        
                    <p class="topic-description" style="margin-top: 20px;">
                        <strong>Body Area Network:</strong> a network that uproot with a person. For example, a mobile network moves with an individual. 
                    </p>
                    <p class="topic-description">
                        <strong>Offline Network or Home Network :</strong> was created to manipulate other devices such as computers, printers and other televisions which are not connected to the internet.
                    </p>
                    <p class="topic-description">
                        <strong>Small Home Office:</strong> is used to utilize a variety of devices to the internet and to a corporate network using a VPN.
                    </p>
                    
                </div>
        
                <div class="ero__container--right"> 
                    <figure class="single-image">
                        <img src="/assets/images/pan.png" alt="fiber-optic" style="width: 320px;">
                    </figure>
                </div>
            </div>`
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Who is the scientist researcher that brings the idea of PAN?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Marcus Zimmerman.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Thomas Zimmerman.</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Thomas Edison.</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">George Zimmerman.</div>
            </div>`,
      answer: "choice2"
    }]
  }, {
    title: "Metropolitan Area Network (MAN)",
    lessonId: 2004,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">MAN</span>
                      <p class="topic-description">
                          A network that covers a larger geographic zone by interconnecting an alternate LAN to frame a large network.
                      </p>
                      <p class="topic-description">
                          In MAN, different LANs are associated with one to another through a telephone exchange line.
                      </p>
                  </div>
          
                  <div class="ero__container--right"> 
                      <figure class="single-image">
                          <img src="/assets/images/man.png" alt="fiber-optic" style="width: 320px;">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is acronym MAN stands for?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Metropolitan Access Network.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Multi-Area Network.</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Metropolitan Area Network.</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Metropolitan Area Net.</div>
            </div>`,
      answer: "choice3"
    }]
  }, {
    title: "Wide Area Network (WAN)",
    lessonId: 2005,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">WAN</span>
                      <p class="topic-description">
                          A network that reaches out over an enormous geological zone like states or nations.
                      </p>
                      <p class="topic-description">
                          A Wide Area Network is very greater network than the LAN.
                      </p>
                      <p class="topic-description">
                          Some of examples of Wide Area Networks :
                      </p>
                      <p class="topic-description">
                         <strong> Mobile Broadband: </strong> A 4G network is generally utilized across a locale or country.
                      </p>
                      <p class="topic-description">
                         <strong> Last mile: </strong>is a telecom company that used to provide the internet services to the customers.
                      </p>
                      <p class="topic-description">
                         <strong> Internet: </strong> also one of the largest Wide Area Network.
                      </p>
          
                  </div>
          
                  <div class="ero__container--right"> 
                      <figure class="single-image">
                          <img src="/assets/images/wan.png" alt="fiber-optic" style="width: 320px;">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: ` <div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Advantages of Wide Area Network</span>
                  <p class="topic-description">
                      <strong>Geographical Area:</strong> A WAN gives an enormous geographical zone. 
                  </p>
                  <p class="topic-description">
                      <strong>Exchange Messages:</strong>
                      Web applications like Facebook, Skype permits to communicate with companions.
                  </p>
                  <p class="topic-description">
                      <strong>Centralized Data:</strong>
                      If there should be an occurrence of WAN network, information is concentrated.
                  </p>
                  <p class="topic-description">
                     <strong> High Bandwidth: </strong> This gives the high transmission capacity.
                  </p>
              </div>
      
              <div class="ero__container--right"> 
                  <figure class="single-image">
                      <img src="/assets/images/wan.png" alt="fiber-optic" style="width: 320px;">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "coach",
      text: ` <div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Advantages of Wide Area Network</span>
                  <p class="topic-description">
                      <strong>Get updated files:</strong> Programming organizations work on the live worker.
                  </p>
                  <p class="topic-description">
                      <strong>Sharing of software and resources:</strong>
                      In WAN network, we can share the product and different assets like a Hard Disk Drive, RAM.  
                  </p>
                  <p class="topic-description">
                      <strong>Global Business:</strong>
                      Presently everybody with PC abilities can work together on the web and extend his business internationally.
                  </p>
              </div>
      
              <div class="ero__container--right"> 
                  <figure class="single-image">
                      <img src="/assets/images/wan.png" alt="fiber-optic" style="width: 320px;">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">One of the largest Wide Area network?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Last Mile.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Intranet.</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Internet.</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Mobile Broadband.</div>
            </div>`,
      answer: `choice3`
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
                    <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
                    <span class="topic-subheading">Types of Network are categories by their Geographical Area Cover?</span>
                        <div class="ero__quiz--choice" data-attribute="choice1">True.</div>
                        <div class="ero__quiz--choice" data-attribute="choice2">False.</div>
                    </div>`,
      answer: "choice1"
    }, {
      orderRank: 6,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Wide Area Network is larger than the LAN?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">True.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">False.</div>
            </div>`,
      answer: "choice1"
    }, {
      orderRank: 7,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Disadvantages of Wide Area Network</span>
                  <p class="topic-description">
                      <strong>Troubleshooting problems:</strong> Troubleshooting WAN issues is a troublesome errand and requires additional time.
                  </p>
                  <p class="topic-description">
                      <strong>High Setup Costs:</strong>
                      Setting up a WAN requires buying of switches, switches and security arrangements.  
                  </p>
                  <p class="topic-description">
                      <strong>Security Issues:</strong>
                      A WAN network has greater security issues when contrasted with LAN and MAN network as every one of the advancements are joined together that makes the security issue.
                  </p>
                  <p class="topic-description">
                      <strong>Needs Firewall & Anti-virus Software:</strong>
                      The information was moved on the internet which can be changed or hacked by the programmers, so that firewall should be used.
                  </p>
              </div>
      
              <div class="ero__container--right"> 
                  <figure class="single-image">
                      <img src="/assets/images/wan.png" alt="fiber-optic" style="width: 320px;">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 8,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What are the three common types of Computer Networks ?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">RAM, LAN, WAN</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">MAN, BAN, WAN</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">MAN, LAN, WAN</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">None of the Above</div>
            </div>`,
      answer: "choice3"
    }]
  }, {
    title: "Internetwork",
    lessonId: 2006,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Internetwork</span>
                      <p class="topic-description">
                          An internetwork is characterized as at least two PC network LANs or WAN or PC network sections are associated utilizing gadgets, and they are arranged by a local addressing scheme.
                      </p>
          
                      <p class="topic-description">
                          The reference model is able to utilized for internetworking is Open System Interconnection or OSI. 
                      </p>
                      <span class="topic-heading">Types of Internetwork</span>
          
                      <p class="topic-description">
                          <strong>Extranet:</strong>
                          An extranet is a correspondence network dependent on the internet protocol like Transmission Control protocol and internet protocol. 
                      </p>
                      <p class="topic-description">
                          <strong>Intranet:</strong>
                          An Intranet is a private organization dependent on the internet protocol like Transmission Control convention and internet protocol.
                      </p>
                  </div>
          
                  <div class="ero__container--right"> 
                      <figure class="single-image">
                          <img src="/assets/images/internetwork.png" alt="fiber-optic" style="width: 320px;">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Advantages of Internetwork</span>
                  <p class="topic-description">
                      <strong>Time Saving:</strong>
                      Information on the intranet was partaken progressively, so the time has come saving
                  </p>
                  <p class="topic-description">
                      <strong>Collaboration:</strong>
                      Collaboration is perhaps the main benefit of the intranet.  
                  </p>
              </div>
              <div class="ero__container--right"> 
                  <figure class="single-image">
                      <img src="/assets/images/internetwork.png" alt="fiber-optic" style="width: 320px;">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What are the types of Internetwork?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Ultranet and Internet</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Intranet and Ultranet</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Extranet and Intranet</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Extranet and Internet</div>
            </div>`,
      answer: "choice3"
    }]
  }]
}, {
  slug: "osi-and-tcpip-model",
  units: [{
    title: "What is OSI Model?",
    lessonId: 3001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                      <div class="ero__container--left">
                          <span class="topic-heading">What is OSI Model?</span>
                          <p class="topic-description">
                              The OSI Model could be a logical and conceptual demonstrate that characterizes network communication utilized.
                          </p>
                          <p class="topic-description">
                              A logical network and successfully portrays computer packet transfer by utilizing different layers of conventions.
                          </p>
                      </div>
                  </div>`
    }]
  }, {
    title: "Network Layers of OSI Model",
    lessonId: 3002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                        <span class="topic-heading">Physical Layer (Layer 1)</span>
                        <p class="topic-description">
                            Accountable for the transmission and reception of unstructured information between a tool and a physical transmission medium.
                        </p>
                        <span class="topic-heading">Data Link Layer (layer 2)</span>
                        <p class="topic-description">
                            Provides node-to-node data transfer—a link between two directly connected nodes. 
                        </p>
                        <p class="topic-description">
                            It additionally defines the protocol for flow management between them.
                        </p>
                    </div>
                </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What layer in OSI model that accountable for the transmission and reception of unstructured information between a tool and a physical transmission medium?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Data layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Application layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Transport layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Physical Layer</div>
            </div>`,
      answer: "choice4"
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Network Layer (layer 3)</span>
                  <p class="topic-description">
                      Where the routing of network traffic begins.
                  </p>
                  <p class="topic-description">
                      The network layer not only makes the traffic routing choices but also provides control, fragmentation, and logical addressing (Internet Protocol (IP) addresses) the foremost common network layer protocol is IP, but alternative usually used protocols include the internet control Message Protocol (ICMP) and internet group Message Protocol (IGMP).
                  </p>
                  <span class="topic-heading">Transport Layer (layer 4)</span>
                  <p class="topic-description">
                      Responsible for the given link through flow control, segmentation/desegmentation, and error control.
                  </p>
                  <p class="topic-description">
                      TProvides successful data transmission and sends the following information if no errors occurred.
                  </p>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Session Layer (layer 5)</span>
                  <p class="topic-description">
                      The session layer is often enforced expressly in application environments that use remote procedure calls.
                  </p>
                  <p class="topic-description">
                      Liable for session checkpointing and recovery which isn't typically employed in the web Protocol Suite.
                  </p>
                  <span class="topic-heading">Presentation Layer (layer 6)</span>
                  <p class="topic-description">
                      Provides independence from data illustration by translating between network formats and application.
                  </p>
                  <p class="topic-description">
                      Includes compression functions and negotiates the Transfer Syntax.
                  </p>
              </div>
          </div>`
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">It is accountable for the character code translation, conversion, compression, and cryptography. What called this layer in OSI Model?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Application layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Transport layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Presentation layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Session Layer</div>
            </div>`,
      answer: "choice3"
    }, {
      orderRank: 6,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Application Layer (layer 7)</span>
                  <p class="topic-description">
                      The range of this stuff include resource sharing, remote file access, remote printer access, network management, and electronic communication (email). 
                  </p>
              </div>
      
              <div class="ero__container--right"> 
                  <figure class="single-image">
                      <img src="/assets/images/osi-table.png" alt="fiber-optic" style="width: 320px;">
                      <figcaption style="text-align: center;">The table of OSI Model according to the layers, functions and corresponding group of layers.</figcaption>
                  </figure>
              </div>
          </div>`
    }]
  }, {
    title: "TCP/IP Model",
    lessonId: 3003,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">History of TCP/IP Model</span>
                      <p class="topic-description">
                          <strong>1974 - </strong> 
                          publishing the “A protocol for Packet Network Interconnection” paper that describes the TCP/IP Model written by Vin Cerf and Bob Kahn.
                      </p>
                      <p class="topic-description">
                          <strong>1978 - </strong> 
                          called TCP/IP because of new protocols by testing and the development of the language.
                      </p>
                      <p class="topic-description">
                          <strong>1982 - </strong> 
                          during this time ARPANET decide to change the standard language from NCP to TCP/IP.
                      </p>
                      <p class="topic-description">
                          <strong>January 1, 1983 - </strong> 
                          ARPANET changed to TCP/IP.
                      </p>
                      <p class="topic-description">
                          <strong>1990 - </strong> 
                          TCP/IP was evolved to fill the changing requirements of the Internet. Totally finished the existence of ARPANET in this era.
                      </p>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">What is TCP/IP Model?</span>
                  <p class="topic-description">
                      TCP/IP makes a distinction you to determine however a selected pc ought to be associated to the online and the way you will transmit information between them. 
                  </p>
                  <p class="topic-description">
                      It helps to form a virtual network once totally different pc networks area unit associated along.
                  </p>
                  <p class="topic-description">
                      Demonstrate to supply extremely reliable and end-to-end computer memory unit stream over an untrusty internetwork. 
                  </p>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Link Layer (layer 1)</span>
                  <p class="topic-description">
                      The combination of physical and data link layers where functions into a single layer. 
                  </p>
                  <p class="topic-description">
                      The design of TCP/IP is hardware-independent and may be implemented on virtually any link-layer technology. 
                  </p>
              </div>
      
              <div class="ero__container--right"> 
                  <figure class="single-image">
                      <img src="/assets/images/osi-layer.png" alt="fiber-optic" style="width: 420px;">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What layer combine the physical and data link layers where functions into a single layer. Including all hosts accessible without traversing a router?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Application layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Internet layer </div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Session Layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Link Layer</div>
            </div>`,
      answer: "choice4"
    }, {
      orderRank: 5,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Internet Layer (layer 2)</span>
                  <p class="topic-description">
                      Provide unreliable datagram transmission linking the host in different IP networks by.
                  </p>
                  <p class="topic-description">
                      forwarding datagrams to the next-hop router for relaying to its destination.
                  </p>
              </div>
      
              <div class="ero__container--right"> 
                  <figure class="single-image">
                      <img src="/assets/images/osi-layer.png" alt="fiber-optic" style="width: 420px;">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 6,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Transport Layer (layer 3)</span>
                  <p class="topic-description">
                      Responsible for message segmentation, flow control and correction that establishes basic data channels that application use for task-specific data exchange.
                  </p>
              </div>
      
              <div class="ero__container--right"> 
                  <figure class="single-image">
                      <img src="/assets/images/osi-layer.png" alt="fiber-optic" style="width: 420px;">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 7,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">In TCP/IP model this layer is responsible for message segmentation, flow control and correction that establishes basic data channels that application, use for task-specific data exchange. What called in this layer?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Link layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Application layer </div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Transport Layer</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Internet Layer</div>
            </div>`,
      answer: "choice3"
    }]
  }]
}, {
  slug: "domain-name-system",
  units: [{
    title: "Domain Name System",
    lessonId: 4001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                      <div class="ero__container--left">
                          <span class="topic-heading">INTENDED LEARNING OUTCOME (S)</span>
                          <p class="topic-description">
                              Look at the possibility of the area name framework system and its requirements for embedded systems with serious objectives of structures, functions, and hierarchy. In this module, there are three different sections of the domain namespace, name goals, and Domain Name System security that will be discussed.
                          </p>
                      </div>
                  </div>`
    }]
  }, {
    title: "Intro to Domain Name System",
    lessonId: 4002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: ` <div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Domain Name System (DNS)</span>
                      <p class="topic-description">
                          <strong> Domain Name System (DNS)</strong> is a computer and network service naming system formed of a domain hierarchy.
                      </p>
                      <br>
                      <hr>
                      <span class="topic-heading">DNS History</span>
                      <p class="topic-description">
                          Domain Name System was made in 1983 and became one of the first Internet Standards in 1986 (after the formation of the Internet Engineering Task Force IETF). 
                      </p>
                      <p class="topic-description">
                          Domain Name System has seen different updates during its life. The main significant one was the presentation of the NOTIFY mechanism and Incremental Zone Transfer IXFR.
                      </p>
                      <p class="topic-description">
                          The undertaking of working on the network was given to Paul Mockapetris. He and his group had the mission to make it more amiable for the user network, where individuals wouldn't have to recall the IP address of each PC.
                      </p>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">A Domain Name System is a __________________ naming system formed of a domain hierarchy?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Programming</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Computer and Network Service</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Internet Protocol</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Hardware</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Domain Name System</strong> is a computer and network service naming system formed of a domain hierarchy.</p>
          </div>`,
      answer: "choice2"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
            <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
            <span class="topic-subheading">Who invented the Domain Name System?</span>
                <div class="ero__quiz--choice" data-attribute="choice1">Charles Babbage</div>
                <div class="ero__quiz--choice" data-attribute="choice2">Paul Mockapetris</div>
                <div class="ero__quiz--choice" data-attribute="choice3">Ray Noorda</div>
                <div class="ero__quiz--choice" data-attribute="choice4">Ada lovelace</div>
    
                <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i>The undertaking of working on the network was given to <strong>Paul Mockapetris.</strong>  He and his group had the mission to make it more amiable for the user network, where individuals wouldn't have to recall the IP address of each PC.</p></div>`,
      answer: "choice2"
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
            <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
            <span class="topic-subheading">The Domain Name System was made in _________ became one of the first Internet Standards in 1986?</span>
                <div class="ero__quiz--choice" data-attribute="choice1">1983</div>
                <div class="ero__quiz--choice" data-attribute="choice2">1985</div>
                <div class="ero__quiz--choice" data-attribute="choice3">1981</div>
                <div class="ero__quiz--choice" data-attribute="choice4">1984</div>
    
                <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i>The <strong>Domain Name System</strong> was made in <strong>1983</strong> and became one of the first Internet Standards in 1986 (after the formation of the Internet Engineering Task Force IETF).</p></div>`,
      answer: "choice1"
    }]
  }, {
    title: "Functions and Configurations",
    lessonId: 4003,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Server</span>
                      <p class="topic-description">
                          Configure DNS server and default domain names for the security machine.
                      </p>
                      <span class="topic-heading">Proxy</span>
                      <p class="topic-description">
                          The security machine goes about as a DNS proxy server and gives proxy administration to the associated PCs and different clients. Besides, the security machine can likewise pick distinctive DNS servers as indicated by domain names. 
                      </p>
                      <span class="topic-heading">Resolver</span>
                      <p class="topic-description">
                          Sets return times and break for DNS administration.
                      </p>
                      <span class="topic-heading">Cache</span>
                      <p class="topic-description">
                          Stores DNS mappings to reserve to accelerate questions. You can make, alter and erase DNS mappings.
                      </p>
                      <span class="topic-heading">NBT cache</span>
                      <p class="topic-description">
                          Showcases NBT cache data.
                      </p>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What function and configuration that stores DNS mappings to reserve to accelerate question?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Proxy</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Resolver</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Cache</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Server</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Cache</strong>stores DNS mappings to reserve to accelerate questions. You can make, alter and erase DNS mappings.
                  </p>
          </div>`,
      answer: "choice3"
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
            <div class="ero__container--left">
                <span class="topic-heading">Configuring a DNS Server</span>
                <ul>
                    <li>Creating a DNS Server</li>
                    <li>Deleting a DNS Server</li>
                </ul>
                <span class="topic-heading">Configuring a Resolver</span>
                <ul>
                    <li>Retry</li>
                    <li>Break</li>
                </ul>
                <span class="topic-heading">DNS Cache</span>
                <ul>
                    <li>Dynamic</li>
                    <li>Static</li>
                    <li>Register</li>
                </ul>
                <span class="topic-heading">NBT Cache</span>
                <ul>
                    <li>Deleting the NBT cache</li>
                </ul>
            </div>
        </div>`
    }, {
      orderRank: 4,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the function and configurations that sets retry time and break?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">NBT Cache</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Server</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Cache</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Resolver</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Resolver</strong> is a sets return times and break for DNS administration.
                  </p></div>`,
      answer: "choice4"
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the function and configuration that showcases the cache data??</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Server</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Resolver</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">NBT Cache</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Proxy</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>NBT Cache</strong>is a showcases NBT cache data.
                  </p></div>`,
      answer: "choice3"
    }, {
      orderRank: 6,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
            <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
            <span class="topic-subheading">Configure DNS ___________ and default domain names for the security machine.?</span>
                <div class="ero__quiz--choice" data-attribute="choice1">Server</div>
                <div class="ero__quiz--choice" data-attribute="choice2">Proxy</div>
                <div class="ero__quiz--choice" data-attribute="choice3">Resolver</div>
                <div class="ero__quiz--choice" data-attribute="choice4">NBT Cache</div>
    
                <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Server</strong> is a configure DNS server and default domain names for the security machine.
                </p></div>`,
      answer: "choice1"
    }, {
      orderRank: 7,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
            <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
            <span class="topic-subheading">What is the DNS demand isn't reacted after timeout and System will sit tight for DNS server's reaction subsequent to sending the DNS demand?</span>
                <div class="ero__quiz--choice" data-attribute="choice1">Final process</div>
                <div class="ero__quiz--choice" data-attribute="choice2">Retry and break</div>
                <div class="ero__quiz--choice" data-attribute="choice3">Resolver</div>
                <div class="ero__quiz--choice" data-attribute="choice4">Proxy</div>
    
                <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Retry</strong> if the DNS demand does not respond the once timeout. <br>
                    <strong>Break</strong> the system can remain for the Domain Name System server's response succeeds because of the DNS demand.
                </p></div>`,
      answer: "choice2"
    }]
  }, {
    title: "DNS Process Works",
    lessonId: 4004,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <p class="topic-description">
                          <span class="topic-heading">Step 1:</span>
                          Mentioning Website Information.
                      </p>
                      <p class="topic-description">
                          <span class="topic-heading">Step 2:</span>
                          Contact the Recursive DNS Servers.
                      </p>
                      <p class="topic-description">
                          <span class="topic-heading">Step 3:</span>
                          Query the Authoritative DNS Servers.
                      </p>
                      <p class="topic-description">
                          <span class="topic-heading">Step 4:</span>
                          Final process.
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/dns-process.jpg" alt="transmission" style="width: 400px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Our PC will at that point search for the IP address related with the domain name in its located DNS cache. What process is this?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Contact the Recursive DNS Servers</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Query the Authoritative DNS Servers</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Mentioning Website Information</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Final Process</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Mentioning Website Information </strong> our PC will begin settling the hostname, This cache stores this data that our PC has as of late saved. Assuming it is available locally, the site will show. On the off chance that our PC doesn't have the data, it will play out a DNS query to recover the correct data.
                  </p></div>`,
      answer: "choice3"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">A Recursive DNS server gets to the Address record for www.sololearn.com from the authoritative name servers. What process is this?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Final Process</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Mentioning Website Information</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Contact the Recursive DNS Servers</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Query the Authoritative DNS Servers</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Query the Authoritative DNS Servers</strong> A recursive Domain Name System server gets the address record for www.sololearn.com from the authoritative name servers that store the data in its local cache. 
                  </p></div>`,
      answer: "choice4"
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What process that talks about numerous ISP's utilization similar recursive DNS servers, it's conceivable that regular domain name is as of now in its cache?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Contact the Recursive DNS Servers</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Query the Authoritative DNS Servers</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Final Process</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Mentioning Website Information</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> Contact the Recursive DNS Servers If the data isn't in your PC's local cache, it will query another server. Recursive DNS servers have their local cached, similar to your PC. <strong>Numerous ISPs use similar recursive Domain Name System servers.</strong>
                  </p></div>`,
      answer: "choice1"
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This process explains the internet browser will interface with the web server related with the Address records IP and show the site. What is this?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Contact the Recursive DNS Servers</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Final Process</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Mentioning Website Information</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Query the Authoritative DNS Servers</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Final process</strong> the Recursive Domain Name System server has the data and returns the address record to your PC. Our PC that points stores the data in its local cache. 
                  </p></div>`,
      answer: "choice2"
    }, {
      orderRank: 6,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">How many steps a DNS process works has _________________?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">5 steps</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">6 steps</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">8 steps</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">4 steps</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> DNS processes has a <strong>4 steps</strong> Mentioning Website Information, Contact the Recursive DNS Servers, Query the Authoritative DNS Servers and Final process.</p>
          </div>`,
      answer: "choice4"
    }]
  }, {
    title: "Namespace Hierarchy",
    lessonId: 4005,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <p class="topic-description">
                          Domain namespace is a name administration given by the Internet to Transmission Control Protocol organizations/Internet Protocol (TCP/IP). 
                      </p>
                      <p class="topic-description">
                          A Domain namespaces are divided into three different sections: The inverse domains, the generic domains, and the country domains.
                      </p>
                     <ul>
                         <li>Inverse Domain</li>
                         <li>Generic Domain</li>
                         <li>Country Domain</li>
                     </ul>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/namin-hierarchy-model.png" alt="transmission" style="width: 300px">
                          <figcaption style="text-align: center;">Naming Hierarchy Model</figcaption>
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">It is utilized for planning a location to a name, to this stage, when the server has gotten the solicitation from the customers. What it is?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Inverse Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Generic Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Domain Name</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Country Domain</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Inverse Domain</strong> are utilized for planning locations to name, to this stage, when the server has gotten the solicitation from the customers, and the server contains the documents of just approved customers.</p></div>`,
      answer: "choice1"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is characterizes the enlisted has as per their conventional behavior?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Domain Name</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Country Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Inverse Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Generic Domain</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Generic Domain</strong> it characterizes the enlisted as per their conventional behavior. Each hub has three indicated domain names.</p></div>`,
      answer: "choice4"
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">The arrangement of country area is same as a nonexclusive space. What name space is this?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Domain Name</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Country Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Inverse Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Generic Domain</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Country Domain</strong> the arrangement of a country area is the same as a nonexclusive space; however, it utilizes two-character country truncations (e.g., us for the United States) instead of three character reliable shortened forms.</p></div>`,
      answer: "choice2"
    }, {
      orderRank: 5,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                 <ul>
                     <li>Top-Level-Domain <strong>.AERO</strong></li>
                     <li>Top-Level-Domain <strong>.BIZ</strong></li>
                     <li>Top-Level-Domain <strong>.COM</strong></li>
                     <li>Top-Level-Domain <strong>.COOP</strong></li>
                     <li>Top-Level-Domain <strong>.EDU</strong></li>
                     <li>Top-Level-Domain <strong>.GOV</strong></li>
                     <li>Top-Level-Domain <strong>.INFO</strong></li>
                     <li>Top-Level-Domain <strong>.INT</strong></li>
                     <li>Top-Level-Domain <strong>.MIL</strong></li>
                     <li>Top-Level-Domain <strong>.MUSEUM</strong></li>
                     <li>Top-Level-Domain <strong>.NET</strong></li>
                     <li>Top-Level-Domain <strong>.ORG</strong></li>
                 </ul>
              </div></div>`
    }, {
      orderRank: 6,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Domain __________________  name administration gave by the Internet to Transmission Control Protocol organizations/Internet Protocol (TCP/IP). What is the answer?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Generic Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Name Space Hierarchy </div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Country Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Inverse Domain</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Name Space Hierarchy</strong> domain namespace is a name administration given by the Internet to Transmission Control Protocol organizations/Internet Protocol (TCP/IP). </p></div>`,
      answer: "choice2"
    }]
  }, {
    title: "Root Server and Name Resolution Hierarchy",
    lessonId: 4006,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: ` <div class="ero__el--container">
            <div class="ero__container--left">
                <span class="topic-heading">Root servers</span>
                <p class="topic-description">
                    are DNS name servers that work in the root zone. These servers can straightforwardly answer questions for records put away or reserved inside the root zone, and they can likewise elude different solicitations to the suitable Top Level Domain (TLD) server. 
                </p>
                <span class="topic-heading">TLD</span>
                <p class="topic-description">
                    servers are the DNS server bunch one stage beneath root servers in the DNS order, and they are a necessary piece for settling DNS queries.
                </p>
            </div>
    
            <div class="ero__container--right">
                <figure class="single-image">
                    <img src="/assets/images/root-server-hierarchy-model.png" alt="transmission" style="width: 300px">
                    <figcaption style="text-align: center; ">Root Server Hierarchy Model</figcaption>
                </figure>
            </div>
        </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
            <div class="ero__container--left">
                <span class="topic-heading">Name Resolutions</span>
                <p class="topic-description">
                    in the realm of the Internet, the locations don't contain roads and urban areas; they have numbers and images.
                </p>
                <p class="topic-description">
                    This cycle includes domain name resolvers the primary answer that your program will get is the root server, at that point the TLD (high level space).
                </p>
            </div>
    
            <div class="ero__container--right">
                <figure class="single-image">
                    <img src="/assets/images/name-resolution-process-model.png" alt="transmission" style="width: 300px">
                    <figcaption style="text-align: center; ">Naming Hierarchy Model</figcaption>
                </figure>
            </div>
        </div>`
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is a DNS name servers that work in the ___________ These servers can straightforwardly answer questions for records put away or reserved inside the ______________?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Name Resolution </div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Query </div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Top Level Domain  </div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Root Server</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Root servers </strong> are DNS name servers that work in the root zone. These servers can straightforwardly answer questions for records put away or reserved inside the root zone. </p></div>`,
      answer: "choice4"
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Root servers are fundamental piece of ___________ internet browsers and numerous other web apparatuses would not work without them?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Realm of the internet </div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Framework of the internet </div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Server Domain  </div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Queries</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> Root servers are a fundamental piece of the <strong> framework of the Internet; internet</strong> browsers and numerous other web apparatuses would not work without them. 
                  </p></div>`,
      answer: "choice2"
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What cycle where the program needs to get the IP and sends queries to the name servers?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Name Space</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Name Resolution</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Queries</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Domain Name Resolver</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> The program needs to get the IP and send queries to the name servers. This cycle includes <strong>domain name resolvers</strong> the primary answer that your program will get is the root server, at that point the TLD (high level space).</p></div>`,
      answer: "choice4"
    }, {
      orderRank: 6,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is ____________ is one of the domain at the most elevated level in the progressive Domain Name System of the Internet after the root domain?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Troy Lee Designs</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Top Level Domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Technical Logistic Datas</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Third Level Domain</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Top Level Domain </strong> is one of the domain at the most elevated level in the progressive Domain Name System of the Internet after the root domain. The high level area names are installed in the root zone of the name space.</p></div>`,
      answer: "choice2"
    }]
  }, {
    title: "DNS Security",
    lessonId: 4007,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                <div class="ero__container--left">
                    <span class="topic-heading">DNS Security Extensions (DNSSEC)</span>
                    <p class="topic-description">
                        is a security convention made to moderate this issue. DNSSEC gets against attacks via cautiously checking data to help ensure its authenticity.
                    </p>
                    <p class="topic-description">
                        DNSSEC is intended to be in reverse viable to guarantee that conventional DNS queries actually resolve effectively, yet without the additional security.
                    </p>
                </div>
            </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
                <div class="ero__container--left">
                    <span class="topic-heading">some normal assaults, including DNS</span>
                    <p class="topic-description">
                        DNSSEC is an incredible security convention, yet lamentably it isn't presently generally received. Aggressors have tracked down various approaches to target and endeavor Domain Name System servers. Here are probably the <strong>most well-known:</strong> 
                    </p>
                    <ul>
                        <li>Domain Name System cache poisoning</li>
                        <li>Domain Name System tunneling</li>
                        <li>Domain Name System hijacking</li>
                        <li>NXDOMAIN</li>
                        <li>Phantom domain</li>
                        <li>Domain lock-up</li>
                        <li>Random subdomain</li>
                        <li>Botnet-based CP</li>
                    </ul>
                </div>
            </div>`
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This is an assault where fashioned Domain Name System information is brought into a Domain Name System resolver's cache. What is the answer?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Domain Name System tunneling</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Domain Name System hijacking</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Domain Name System cache poisonings</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">NXDOMAIN</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Domain Name System cache poisoning  </strong> an assault where fashioned Domain Name System information is brought into a Domain Name System resolver's cache, bringing about the resolver returning an erroneous IP address for a domain.</p></div>`,
      answer: "choice3"
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is a comparative outcome to a NXDOMAIN assault on a DNS resolver?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Phantom domain</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Domain lock-up</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Random subdomain</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Botnet-based CP</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Phantom domain </strong> assault has a comparative outcome to a NXDOMAIN assault on a DNS resolver.</p></div>`,
      answer: "choice1"
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What domain attack is this assaults are completed utilizing CPE gadgets?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Domain lock-up</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Domain Name System hijacking</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Random subdomain</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Botnet-based CP</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Botnet-based CP </strong> these assaults are completed utilizing CPE gadgets (Customer Premise Equipment; a client premises hardware or client gave gear CPE is any terminal and related gear situated at a supporter's premises and associated with a transporter's media transmission circuit at the outline point).</p></div>`,
      answer: "choice4"
    }, {
      orderRank: 6,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This is a sort of Domain Name System flood assault where an assailant immerses a Domain Name System server with demands, requesting records that don't exist, trying to cause a refusal of administration for real traffic. What is the correct answer?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Random subdomain</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Botnet-based CP</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">NXDOMAIN</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Domain lock-up</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>NXDOMAIN </strong> this is a sort of Domain Name System flood assault where an assailant immerses a Domain Name System server with demands, requesting records that don't exist, trying to cause a refusal of-administration for real traffic.</p></div>`,
      answer: "choice3"
    }, {
      orderRank: 7,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Domain security has _____ security?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">8</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">10</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">6</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">5</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> Domain security has <strong>eight</strong>  security these are Domain Name System cache poisoning, Domain Name System tunneling, Domain Name System hijacking, NXDOMAIN, Phantom domain, Domain lock-up, Random subdomain, and Botnet-based CP.
                  </p></div>`,
      answer: "choice1"
    }]
  }]
}, {
  slug: "ip-address-and-subnetting",
  units: [{
    title: "IPV4",
    lessonId: 5001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                      <div class="ero__container--left">
                          <p class="topic-description">
                              IPv4 Addressing IPv4 addresses are made up of 32 bits. There are 32 binary numbers in the above binary format. Each binary number separated by a dot is converted to its corresponding binary number. There are a total of 4 bytes here. Each octet can have a value between 0 to 255. There are 32 binary numbers in the above binary format. Each binary number separated by a dot is converted to its corresponding binary number. are shown in figure 1.1.   
                          </p>
                      </div>
              
                      <div class="ero__container--right">
                          <figure class="single-image">
                              <img src="/assets/images/ipv4.jpg" alt="transmission" style="width: 300px">
                              <figcaption style="text-align: center;">IPV4 IP Address (32 bits)</figcaption>
                          </figure>
                      </div>
                  </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the most commonly used around the world for the Internet, intranets, and private networks?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">IPv6</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">IPv4</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">vIP4</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">vIP6</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> IPV4 It allows for more efficient routing by providing a simplified and enhanced packet header. Improves mobile phone and other mobile computing device support. It offers more comprehensive quality-of-service (QoS) support
                  </p>
              </div>`,
      answer: "choice2"
    }]
  }, {
    title: "Basic Binary",
    lessonId: 5002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Basic Binary</span>
                      <p class="topic-description">
                          Binary (or base-2) is a numeric system with only two digits 0 and 1. Computers use binarys to store data and perform calculations, which means they only use zeros and ones.
                      </p>
                      <p class="topic-description">
                          In boolean logic, a single binary digit can only represent True (1) or False (0). Multiple binary digits, on the other hand, can be used to represent large numbers and perform complex functions. Any integer, in fact, can be represented in binary.
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/basic-binary.png" alt="transmission" style="width: 300px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">__________ is a numeric system with only two digits 0 and 1 .?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Boolean logic</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Binary</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Hexadecimal</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Decimal</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> Binary (also known as base-2) is a numeric form that uses only two digits: 0 and 1. Computers work in binary, which means they only use zeros and ones to store data and perform calculations.
                  </p>
              </div>`,
      answer: "choice2"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the binary of 41?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">00010011</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">01101101</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">10010001</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">00101001</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation: <br> Divide (41) 10 successively by 2 until the quotient is 0:
                  </strong> <br>
                          41/2 = 20, remainder is 1 <br>
                          20/2 = 10, remainder is 0 <br>
                          10/2 = 5, remainder is 0 <br>
                          5/2 = 2, the remainder is 1 <br>
                          2/2 = 1, remainder is 0 <br>
                          1/2 = 0, the remainder is 1 <br> <br>
                          101001 is read from the bottom (MSB) to the top (LSB).
                          As a result, the binary equivalent of the decimal number 41 is 101001
                  </p></div>`,
      answer: "choice4"
    }]
  }, {
    title: "Network Classes",
    lessonId: 5003,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: ` <div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Network Classes</span>
                      <p class="topic-description">
                          These IP addresses are classified into groups. A, B, and C are the most ordinary classes. Although classes D and E exist, they are rarely used by end users. Each address class has a unique default subnet mask. 
                      </p>
                      <p class="topic-description">
                          The first octet of an IP address can be used to determine its class. The following are the Class A, B, and C Internet address ranges, along with an example address:
                      </p>
                  </div>
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/network-classes.png" alt="transmission" style="width: 420px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What are the most common Classes?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Class A, B, C</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Class A, E, C</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Class D, B, C</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Class B, D, E</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> Class A refers to large networks with a large number of computers. Medium-sized networks are known as Class B. Small networks with a small number of hosts are classified as Class C.
                  </p>
              </div>`,
      answer: "choice1"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">The IP address 192.168.76.20 belongs to the __________ network?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Class D</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Class B</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Class E</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Class A</div>
                  <div class="ero__quiz--choice" data-attribute="choice5">Class C</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> Class C Its first octet is 192, which is in the range of 192 to 223.
                  </p>
              </div>`,
      answer: "choice5"
    }, {
      orderRank: 4,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Which of the network classes is experimental?
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Class D</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Class B</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Class E</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Class A</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Class C</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> Class E: IP addresses belonging to class E are reserved for experimental and research purposes. IP addresses of class E ranges from 240.0. 0.0 – 255.255. 255.254.9
                  </p>
              </div>`,
      answer: "choice3"
    }]
  }, {
    title: "Subnet Mask",
    lessonId: 5004,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
            <div class="ero__container--left">
                <span class="topic-heading">Subnet Mask</span>
                <p class="topic-description">
                    The second item required for TCP/IP to function is the subnet mask. The parts of an IP address that are used as network and host addresses are not fixed in TCP/IP. 
                </p>
                <p class="topic-description">
                    The network and host addresses can not be determined without additional information. This information is provided in the form of another 32-bit number known as a subnet mask.In this case, the subnet mask is 255.255.255.0. 
                </p>
            </div>
        </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the first IP address of the Subnet IP 192.168.1.64 from the table below?
              </span>
      
              <figure class="single-image" style="margin: 0 auto;">
                  <img src="/assets/images/quiz-ip-table.png" alt="transmission" style="width: 420px">
              </figure>
      
                  <div class="ero__quiz--choice" data-attribute="choice1">192.168.1.60</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">192.168.1.63</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">192.168.1.130</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">192.168.1.65</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> Since the subnet IP address is 192.168.164, the first IP address will be 192.168.1.65
                  </p>
              </div>`,
      answer: "choice4"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This information is provided in the form of another 32-bit number known as a _________?
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Subnet mask</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Subnetting</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Default Gateway</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">IP Addressing</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> This information is provided in the form of another 32-bit number known as a subnet mask.In this case, the subnet mask is 255.255.255.0. 
                  </p>
              </div>`,
      answer: "choice1"
    }]
  }, {
    title: "Default Gateway",
    lessonId: 5005,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Default Gateway</span>
                      <p class="topic-description">
                          If a TCP/IP computer needs to communicate with a host on another network, it will usually do so via a device known as a router. A default gateway is a TCP/IP router that is specified on a host and connects the host's subnet to other networks. 
                      </p>
          
                      <figure class="single-image" style="margin: 0 auto;">
                          <img src="/assets/images/default-gateway.jpg" alt="transmission" style="width: 420px">
                          <figcaption style="text-align: center; width: 420px;">Default Gateway IP Address</figcaption>
                      </figure>
                      <br><br>
                      <p class="topic-description">
                          This figure describes how TCP/IP determines whether to send packets to its default gateway in order to reach another computer or device on the network.
                      </p>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">___________ is a node in an internet protocol suite-based computer network that acts as a forwarding host (router) to other networks when no other path specification matches the packet's destination IP address?
              </span>
      
                  <div class="ero__quiz--choice" data-attribute="choice1">Default Gateway</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">IP Addressing</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Subnet Mask </div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Subnetting</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> A default gateway is a TCP/IP router that is specified on a host and connects the host's subnet to other networks. 
                  </p>
              </div>`,
      answer: "choice1"
    }]
  }, {
    title: "Subnetting",
    lessonId: 5006,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Subnetting</span>
                      <p class="topic-description">
                          Subnetting is the method of splitting a single physical network into several smaller sub-networks or subnets logically. Through inserting subnets without a new network number, a company may hide network complexity and reduce network traffic.
                      </p>
          
                      <figure class="single-image" style="margin: 0 auto;">
                          <img src="/assets/images/network-topology.png" alt="transmission" style="width: 420px">
                          <figcaption style="text-align: center; width: 420px;">Network Topology</figcaption>
                      </figure>
                      <br><br>
                      <p class="topic-description">
                          These are routers, and the networks they connect to are known as subnetworks. The topology depicted in the diagram below has been enhanced. Computers were given IP addresses, as well as IP addresses that corresponded to router interfaces shown in figure 
                      </p>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the method of splitting a single physical network into several smaller sub-networks or subnets logically?
              </span>
              
      
                  <div class="ero__quiz--choice" data-attribute="choice1">Subnet mask</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Subnetting</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Default Gateway </div>
                  <div class="ero__quiz--choice" data-attribute="choice4">IP Addressing</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> Subnetting is the method of splitting a single physical network into several smaller sub-networks or subnets logically. Through inserting subnets without a new network number, a company may hide network complexity and reduce network traffic.
                  </p>
              </div>`,
      answer: "choice2"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the Default Gateway for the network address 192.168.1.0 in the diagram below?
              </span>
      
              <figure class="single-image" style="margin: 0 auto;">
                  <img src="/assets/images/diagram-quiz.png" alt="transmission" style="width: 250px">
              </figure>
      
                  <div class="ero__quiz--choice" data-attribute="choice1">192.168.1.0</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">192.168.1.3</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">192.168.1.2</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">192.168.1.1</div>
      
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> 192.168.1.0 is the network address, the first IP address is 192.168.1.2, and the default gateway is 192.168.1.1
                  </p>
              </div>`,
      answer: "choice4"
    }]
  }, {
    title: "Network Topology",
    lessonId: 5007,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Cisco Packet Tracer</span>
                      <figure class="single-image" style="margin: 0 auto;">
                          <img src="/assets/images/cisco-packet-tracer.png" alt="transmission" style="width: 420px">
                          <figcaption style="text-align: center; width: 420px;">Cisco Packet Tracer (Network Topology)</figcaption>
                      </figure>
                      <br><br>
                      <p class="topic-description">
                          These Figure demonstrates a network topology of 1 router, 2 switches, and 4 PCs. Switch No. 1 has 2 PCs with their IP Address, Subnet, and Default Gateway, much like switch No. 2.
                      </p>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">IP Configuration</span>
                  <figure class="single-image" style="margin: 0 auto;">
                      <img src="/assets/images/ip-configuration.png" alt="transmission" style="width: 420px">
                      <figcaption style="text-align: center; width: 420px;">IP Configuration</figcaption>
                  </figure>
                  <br><br>
                  <p class="topic-description">
                       IP configuration, configure the computers IP address 192.168.1.2, subnet mask 255.255.255.0, and default gateway 192.168.1.1. The IP addresses of the router interfaces facing the PCs are used as the default gateways here. This is how all computers' IP settings are created.
                  </p>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Cli Configuration</span>
                  <figure class="single-image" style="margin: 0 auto;">
                      <img src="/assets/images/cli-configuration.png" alt="transmission" style="width: 420px">
                      <figcaption style="text-align: center; width: 420px;">Cli Configuration</figcaption>
                  </figure>
                  <br><br>
                  <p class="topic-description">
                      Activate it by typing “enable” in the command line that appears in the CLI portion of the router shown in figure 1.7. Form a configured terminal to put it in configuration mode. Then, make a list of the interfaces you'd like to customize. Then type “no shutdown” to open the closed interface and enter the IP address and subnet mask for this interface.
                  </p>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <p class="topic-description">
                      This is the router configuration that enables the network to communicate.
                  </p>
                  <p>
                      Router>enable <br>
                      Router#configure terminal<br>
                      Router(config)#interface FastEthernet0/0<br>
                      Router(config-if)#no shutdown<br>
                      Router(config-if)#exit<br>
                      <br>
                      Router(config)#interface FastEthernet0/1<br>
                      Router(config-if)#ip address 192.168.1.1 255.255.255.0 <br>
                      Router(config-if)#exit<br>
                      <br>
                      Router(config)#interface FastEthernet0/1<br>
                      Router(config-if)#no shutdown<br>
                      Router(config-if)#ip address 192.168.2.1 255.255.255.0<br>
                      Router(config-if)#exit
                  </p>
              </div>
          </div>`
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">To enable an interface, it must be activated using the _______________ command.
              </span>
      
                  <div class="ero__quiz--choice" data-attribute="choice1">enable</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">configure terminal</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">no shutdown</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Interface FastEthernet0/0</div>
      
          </div>`,
      answer: "choice3"
    }, {
      orderRank: 6,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the router configuration after Router > enable?
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">no shutdown</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Interface FastEthernet0/0</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">exit</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">configure terminal</div>
                  <p style="  background-color: #f6e9c8; padding: 1.2rem; border-radius: 4px;"><i class="far fa-lightbulb" style="font-size: 1.4rem; margin-right: 10px; color: #1b2945;"></i> <strong>Explanation:</strong> <br> Configure terminal command in privileged EXEC mode to enter global configuration .
                  </p>
          </div>`,
      answer: "choice4"
    }, {
      orderRank: 7,
      type: "coach",
      text: `<div class="ero__el--container">
            <div class="ero__container--left">
                <span class="topic-heading">Ping Command</span>
                <figure class="single-image" style="margin: 0 auto;">
                    <img src="/assets/images/ping-command.png" alt="transmission" style="width: 420px">
                    <figcaption style="text-align: center; width: 420px;">Network Topology</figcaption>
                </figure>
                <br><br>
                <p class="topic-description">
                    The ping command, also known as 'pinging,' is a useful, fast diagnostic tool. It's especially useful for determining if your computer and IP address or web address, either within or outside your school's network, have a communication issue. It means both switches computers are connected if it responds as shown in figure.
                </p>
            </div>
        </div>`
    }, {
      orderRank: 8,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What _______command is useful for determining if your computer and IP address or web address, either within or outside your school's network, have a communication issue.
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">exit</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">ping</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">ipconfig</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">ipconfig all </div>
          </div>`,
      answer: "choice2"
    }]
  }]
}, {
  slug: "routers-and-switches",
  units: [{
    title: "Intro to Routers",
    lessonId: 6001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                    <div class="ero__container--left">
                        <span class="topic-heading">Routers</span>
                        <p class="topic-description">
                            A router is a network system that manages various types of networks. It's mostly used in homes and offices to improve internet connectivity and link local networks.
                        </p>
                    </div>
            
                    <div class="ero__container--right">
                        <figure class="single-image">
                            <img src="/assets/images/router-coach.jpg" alt="transmission" style="width: 320px">
                        </figure>
                    </div>
                </div>`
    }]
  }, {
    title: "Types of Router",
    lessonId: 6002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Edge Router</span>
                      <p class="topic-description">
                          This computer, also known as an "access router," it is located at the network's edge. Work to secure and connect internal to external network.
                      </p>
          
                      <span class="topic-heading">Two types of Edge Router</span>
                      <p class="topic-description">
                          <strong>Subscriber Edge Routers</strong>
                          it serves at the border device and enables communication between an enterprise network and an external network. <br> <br>
                          <strong>Label Edge Router </strong>
                          is a protocol that is used in Multi-Protocol Label Switching (MPLS) networks to assign labels to outbound data transmissions and operate as a gateway between the local and wide area network (WAN).
                      </p>
                   
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/edge-router.jpg" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This device is also called an "access router," located at the 	_____ of a network.</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Interface</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Hardware</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Backbone</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Boundary</div>
          </div>`,
      answer: "choice4"
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Core Router</span>
                  <p class="topic-description">
                      A core router is a form of router that runs on the internet's backbone and distributes data packets within a network rather than between networks.
                  </p>
      
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/core-router.jpg" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">It is was designed to operate on the internet's backbone and distribute the data packets inside the network, not between networks.
                  ?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Virtual Router</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Core Router</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Edge Router</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Wired Router</div>
      
          </div>`,
      answer: "choice2"
    }, {
      orderRank: 5,
      type: "coach",
      text: ` <div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Virtual Router</span>
                  <p class="topic-description">
                      A virtual router is a software-based type of device with the same function like a physical router. The role of a virtual router is to become active if the main or primary router fails or is disabled. Unlike the physical router, this device is less expensive.
                  </p>
      
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/virtual-router.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 6,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Wired Router</span>
                  <p class="topic-description">
                      This router is often used in homes and small offices that provides a lower cost connection to the users. Businesses that need to share sensitive information or large files over a network can benefit from it.
                  </p>
      
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/wired-router.jpg" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 7,
      type: "coach",
      text: ` <div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Wireless Router</span>
                  <p class="topic-description">
                      A wireless router is also known as a Wi-Fi router, uses a cable to connect to the modem. This enables it to collect and send data to the internet. 
                  </p>
      
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/wired-router.jpg" alt="transmission" style="width: 320px">
                      <figcaption>The wireless router uses an access point to extend the coverage of a network for more users.
                      </figcaption>
                  </figure>
              </div>
          </div>`
    }]
  }, {
    title: "Switches",
    lessonId: 6003,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Switches</span>
                      <p class="topic-description">
                          Switches make resource sharing easier by connecting all of the devices. A network switch allowed all the connected devices like computers (PCs), printers, and other hardware devices exchange information and communicate with one another.
                      </p>
          
                  </div>
          
              </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Unmanaged Switch</span>
                  <p class="topic-description">
                      It's a plug-and-play network switch that doesn't require configuration or monitoring. It is one of the most affordable switches, which makes it popular in small businesses and home networks
                  </p>
                  
                  <span class="topic-heading">Types of Unmanaged Switch</span>
                  <figure class="single-image">
                      <img src="/assets/images/umanaged-switch-table.png" alt="transmission" style="width: 600px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Unmanaged switch is one of the most expensive switches that is why it is commonly used in big organizations.</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">True</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">False</div>
          </div>`,
      answer: "choice2"
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Managed Switch</span>
                  <p class="topic-description">
                      A managed switch is a network device that is commonly used in big organizations. Although it was more costly than an unmanaged switch, this system can be programmed and tailored for its functions.
                  </p>
                  
                  <span class="topic-heading">Types of Managed Switch</span>
                  <figure class="single-image">
                      <img src="/assets/images/umanaged-switch-table.png" alt="transmission" style="width: 600px">
                  </figure>
      
              </div>
      
          </div>`
    }, {
      orderRank: 5,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">LAN Switch</span>
                  <p class="topic-description">
                      The Local Area Network switch, also known as an Ethernet or data switch. An IP-based Ethernet switch connects the transmitter and the receiver into the network of interconnected links and ports, alowling multiple end users to share network resources.
                  </p>
                  
              </div>
          </div>`
    }, {
      orderRank: 6,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">PoE Switch</span>
                  <p class="topic-description">
                      A Power over Ethernet switch is a device that allows several network to communicate with one another. This technology combines power and data transmission on a single line, allowing each device connected to it to transmit power to endpoint devices such as phones.
                  </p>
                  
                  <span class="topic-heading">Types of PoE Switch</span>
                  <figure class="single-image">
                      <img src="/assets/images/umanaged-switch-table.png" alt="transmission" style="width: 600px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 7,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Cisco SG250-50HP Smart Managed PoE+ 48 Port Gigabit Switch is a 48-ports that has an additional 2 Gigabit combo ports. This switch is a high quality and failure free device.</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">True</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">False</div>
          </div>`,
      answer: "choice1"
    }, {
      orderRank: 8,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What does PoE stands for?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Preference of Ethernet</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Power only Ethernet</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Power of Ethernet</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Power over Ethernet</div>
      
          </div>`,
      answer: "choice4"
    }]
  }, {
    title: "Switch & Router Services in OSI Model",
    lessonId: 6004,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: ` <div class="ero__el--container">
                <div class="ero__container--left">
                    <span class="topic-heading">Router</span>
                    <p class="topic-description">
                        The router works at the 3rd layer of the OSI Model which is identified as the Network Layer. This layer is responsible for sending the packet to its determined destination path across multiple networks. 
                    </p>
                    <span class="topic-heading">Switch</span>
                    <p class="topic-description">
                        The switch works at the 2nd layer of the OSI Model. This layer is known as the Data Link Layer. The purpose of this layer is to control the flow of data. The switch is a hardware device that receives data and then resends it again.
                    </p>
                </div>
                <div class="ero__container--right">
                    <figure class="single-image">
                        <img src="/assets/images/router-switch-osi.png" alt="transmission" style="width: 200px">
                    </figure>
                </div>
        
            </div>`
    }]
  }, {
    title: "Switch and Router Services in TCP/IP Model",
    lessonId: 6005,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Router</span>
                      <p class="topic-description">
                          On the TCP/IP Model, the router works on the 2nd layer which is the Internet Layer. This layer works by sending data across networks and routing it to its intended destination. 
                      </p>
                      <span class="topic-heading">Switch</span>
                      <p class="topic-description">
                          The network interface layer located at the bottom layer of the TCP/IP model is aligned with the OSI Models 2nd Layer. The purpose of this is to send data across a network.
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/router-switch-tcp.png" alt="transmission" style="width: 200px">
                      </figure>
                  </div>
              </div>`
    }]
  }]
}, {
  slug: "p2p-configuration",
  units: [{
    title: "Peer to Peer Network",
    lessonId: 7001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
            <div class="ero__container--left">
                <span class="topic-heading">Peer-to-Peer Network</span>
                <p class="topic-description">
                    Peer-to-Peer Network is a way to deal  with PC organizing in which all PCs share  comparable duty regarding handling  information. 
                </p>
                <span class="topic-heading">Advantages of Peer-to-Peer Network</span>
                <ul>
                    <li>It is less expensive</li>
                    <li>It is reliable</li>
                    <li>PCs in distributed workgroups can be designed to permit sharing of  documents, printers, and different gadgets.</li>
                </ul>
            </div>
            <div class="ero__container--right">
                <figure class="single-image">
                    <img src="/assets/images/p2p-network-coach.png" alt="transmission" style="width: 300px">
                </figure>
            </div>
        </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Which  all computers are  linked together  and have equal  privileges and  responsibilities for  data processing?
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Peer to Peer Network</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Client</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Server</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Network</div>
          </div>`,
      answer: "choice1"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Which of the following are advantage of Peer to Peer Network?
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">It’s reliable.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">It is less expensive.</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Easy to maintain and manage</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">All of the choices. (A,B,C).</div>
          </div>`,
      answer: "choice4"
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Disadvantages of Peer-to-Peer Network</span>
                  <ul style="margin-bottom: 20px;">
                      <li>There is no centralized system.</li>
                      <li>It has a security flaw.</li>
                  </ul>
                  <span class="topic-heading">Qualities of a Peer Network</span>
                  <p class="topic-description">
                      Both wired and wireless network can be arranged as distributed conditions.
                  </p>
                  <span class="topic-heading">Security Concerns</span>
                  <p class="topic-description">
                      Information that is bad can be shared on Peer-to-Peer networks by changing  documents that are on the organization to present vindictive code.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/p2p-network-coach.png" alt="transmission" style="width: 300px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Which of the ff. is a quality of  Peer-to-Peer network?
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Accelerates the  sharing of resources.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Server uses a  Network Operating  System (NOS).</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Both (wired/wireless) network can be arranged as distributed conditions.</div>
          </div>`,
      answer: "choice3"
    }, {
      orderRank: 6,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Which of the ff. is a disadvantage of Peer-to  Peer network?
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">It is less expensive.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">SThere is no centralized system.</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">It has security flaw.</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">. Both B and C</div>
          </div>`,
      answer: "choice4"
    }]
  }, {
    title: "Client & Server Network",
    lessonId: 7002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: ` <div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Client & Server</span>
                      <p class="topic-description">
                          Client/Server networking is a network model that allows end users, known as  clients, to access resources such as songs,  videos, and so on from a central computer  known as the Server.
                      </p>
          
                      <ul>
                          <li style="margin-bottom: 10px">For example, if client  1 wants to send data to client 2, it must  first request permission from the server.</li>
                          <li>The server sends the response to client 1  in order to begin communication with  client 2.</li>
                      </ul>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/client-server-model.png" alt="transmission" style="width: 300px">
                          <figcaption>Example of Client-Server Model</figcaption>
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the meaning of  client/server?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">It is simple to set up and maintain.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">It’s reliable</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">A network model that allows end users</div>
          </div>`,
      answer: "choice3"
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is all the clients communicate with one  another via a server?
              </span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Peer to Peer Network</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Client</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Server</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Both A and C</div>
          </div>`,
      answer: "choice4"
    }, {
      orderRank: 4,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Which of the ff. is a disadvantage of  client/server?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Accelerates the  sharing of  resources.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Provide(NOS) resources to  clients, but NOS  is very expensive.</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">The centralized  system is housed  in a Client/Server  network.</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">It has a  security flaw.</div>
          </div>`,
      answer: "choice2"
    }]
  }, {
    title: "Setting up Peer-to-Peer Network",
    lessonId: 7003,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Putting in a workgroup</span>
                      <ul>
                          <li style="margin-bottom: 10px">Click begin, right-click PC and choose Properties from the setting menu.</li>
                          <li>Check the workgroup name  within the System properties window.</li>
                      </ul>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/pc-workgroup.png" alt="transmission" style="width: 300px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Configuring organization connectors</span>
                  <ul>
                      <li>Gateway address like: 192.168.1.1</li>
                      <li>For the IP address, 192.168.1.2</li>
                      <li>Subnet mask must be the same for all PCs in your association, for instance 255.255.255.0.</li>
                  </ul>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/setting-up-ipaddress.png" alt="transmission" style="width: 300px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">To see if DHCP is employed:</span>
                  <p class="topic-description">
                      Control Panel → Network and net, click Network and sharing  Center → amendment instrumentation settings → local area network  association → Information.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/dhcp-result.png" alt="transmission" style="width: 300px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Putting in clients’ accounts</span>
                  <p class="topic-description">
                      Open  Network and Sharing Center and allow file sharing and Public envelope  sharing. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/allow-file-sharing.png" alt="transmission" style="width: 300px">
                  </figure>
              </div>
          </div>`
    }]
  }]
}, {
  slug: "network-cabling",
  units: [{
    title: "Network Cabling",
    lessonId: 8001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                      <div class="ero__container--left">
                          <span class="topic-heading">Network Cabling</span>
                          <p class="topic-description">
                              Networking Cable is the medium of information usually moving from one network device to another. 
                          </p>
                      </div>
              
                      <div class="ero__container--right">
                          <figure class="single-image">
                              <img src="/assets/images/network-cabling.jpg" alt="transmission" style="width: 300px">
                          </figure>
                      </div>
                  </div>`
    }]
  }, {
    title: "Twisted Pair Cable",
    lessonId: 8002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                <div class="ero__container--left">
                    <span class="topic-heading">Twisted Pair Cable</span>
                    <p class="topic-description">
                        Two essential kinds of twisted pair cable industry standard have been characterized Unshielded Twisted Pair (UTP) and Shielded Twisted Pair (STP). 
                    </p>
                </div>
        
                <div class="ero__container--right">
                    <figure class="single-image">
                        <img src="/assets/images/twisted-pair-cable.png" alt="transmission" style="width: 320px">
                    </figure>
                </div>
            </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: ` <div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Categories of twisted Pair Cable</span>
                  <figure class="single-image">
                      <img src="/assets/images/twisted-pair-cable-table.png" alt="transmission" style="width: 520px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">______ Are invented in 1990s and was most well known sort of network cable margin around the world as the main cabling standard for Ethernet.?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Twisted Pair.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Fiber Optics.</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Coaxial Cable.</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Rolled Cable.</div></div>`,
      answer: "choice1"
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Similarities among STP and UTP Cable</span>
                  <ul>
                      <li style="margin-bottom: 10px;">Both STP and UTP can send data at 10Mbps, 100Mbps, 1Gbps, and 10Gbps. </li>
                      <li style="margin-bottom: 10px;">Since the STP cable contains more materials it is more costly than the UTP cable. </li>
                      <li style="margin-bottom: 10px;">The two cables utilize a similar RJ-45 (registered jack) modular connectors.</li>
                      <li style="margin-bottom: 10px;">The STP gives more noise and EMI resistant than the UTP cable. </li>
                      <li>The greatest portion length for the two cable is 100 meters or 328 feet. 
                      </li>
                  </ul>
              </div>
          </div>`
    }, {
      orderRank: 5,
      type: "coach",
      text: `<div class="ero__el--container">
            <div class="ero__container--left">
                <ul>
                    <li style="margin-bottom: 10px;">The TIA/EIA determines standards for the twisted pair cable. 
                    </li>
                    <li style="margin-bottom: 10px;">First standards were developed in 1991, known as TIA/EIA 568. 
                    </li>
                    <li style="margin-bottom: 10px;">The TIA/EIA 568 partitions the twisted pair cable into a few classifications.</li>
                    <li style="margin-bottom: 10px;">The following table records the most well-known and mainstream classifications of the twisted pair cable.</li>
                </ul>
            </div>
    
            <div class="ero__container--right">
                <figure class="single-image">
                    <img src="/assets/images/utp-stp-cables.png" alt="transmission" style="width: 320px">
                </figure>
            </div>
        </div>`
    }]
  }, {
    title: "Coaxial Cable",
    lessonId: 8003,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `  <div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Coaxial Cable</span>
                      <p class="topic-description">
                          This network cable contains the conductor, insulator, braid, and sheath. The sheath covers the braid, the braid covers the insulation, and the insulation covers the conductor.
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/coaxial-cable-coach.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Developed during the 1880s, __________ was most popular as the sort of cable that connected TVs to antenna wires?</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Twisted Pair.</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Fiber Optics.</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Coaxial Cable.</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Rolled Cable.</div></div>`,
      answer: "choice3"
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Sheath</span>
                  <p class="topic-description">
                      This is the external layer of the coaxial cable. It shields the cable from physical damage. 
                  </p>
                  <span class="topic-heading">Braid shield</span>
                  <p class="topic-description">
                      This shield protects signals from outside interference and noise. This shield is built from the metal that is utilized to assemble the core. 
                  </p>
                  <span class="topic-heading">Insulation</span>
                  <p class="topic-description">
                      Insulation secures the core. It likewise keeps the core separate from the braided shield. Since both the core and the braided shield utilize a similar metal, without this layer, they will contact one another and make a short-circuit in the wire. 
                  </p>
                  <span class="topic-heading">Conductor</span>
                  <p class="topic-description">
                      The conductor conveys electromagnetic signals. Based on conductor a coaxial cable can be arranged into two sorts; single-core coaxial cable and multi-core coaxial cable.
                  </p>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This is the external layer of the coaxial cable. It shields the cable from physical damage.</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Sheath</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Braided Shield</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Insulation</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Conductor</div>
          </div>`,
      answer: "choice1"
    }, {
      orderRank: 5,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This shield protects signals from outside interference and noise. This shield is built from the metal that is utilized to assemble the core.</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Sheath</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Braided Shield</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Insulation</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Conductor</div>
          </div>`,
      answer: "choice2"
    }, {
      orderRank: 6,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">2 Types of Coaxial Cable</span>
                  <ul>
                      <li style="margin-bottom: 10px;">A Single Core Coaxial Cable utilizes a central metal (normally copper) conductor.</li>
                      <li style="margin-bottom: 10px;">A Multi-Core Coaxial Cable utilizes multiple thin strands of metal wires. </li>
                      <li>The accompanying picture shows the two sorts of cable.</li>
                  </ul>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/2-types-coaxial-cable.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }]
  }, {
    title: "Fiber Optics",
    lessonId: 8004,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Fiber Optics</span>
                      <p class="topic-description">
                          Fiber optic network cables work using glass fibers and beats of light
                      </p>
                      <p class="topic-description">
                          These network cables are bent across being made of glass. 
                      </p>
                  </div>
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/fiber-optics.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">SMF (Single-Mode Fiber) optical cable </span>
                  <p class="topic-description">
                      This cable conveys just a solitary light emission this is more reliable and supports a lot higher bandwidth and longer distances.
                  </p>
                  <span class="topic-heading">MMF (Multi-Mode Fiber) optical cable  </span>
                  <p class="topic-description">
                      This cable conveys multiple beams of light because of multiple beams, this cable conveys substantially more data than the SMF cable. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/single-multi-optic-cable.png" alt="transmission" style="width: 320px">
      
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
            <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
            <span class="topic-subheading">These _______ network cables work using glass fibers and beats of light.</span>
                <div class="ero__quiz--choice" data-attribute="choice1">Twisted Pair.</div>
                <div class="ero__quiz--choice" data-attribute="choice2">Fiber Optics.</div>
                <div class="ero__quiz--choice" data-attribute="choice3">Coaxial Cable.</div>
                <div class="ero__quiz--choice" data-attribute="choice4">Rolled Cable.</div>
        </div>`,
      answer: "choice2"
    }]
  }, {
    title: "Straight-Through Cable",
    lessonId: 8005,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">T568A and T568B Wiring Standard Basis </span>
                      <p class="topic-description">
                          A RJ45 connector is a secluded 8 position, 8 pin connector utilized for ending Cat5e or Cat6 twisted pair cable. 
                      </p>
                      <p class="topic-description">
                          A pin out is a particular plan of wires that direct how the connector is ended there are two standards recognized by ANSI, TIA and EIA.
                      </p>
                  </div>
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/straight-through-cable.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }]
  }, {
    title: "Cross-over Cable",
    lessonId: 8006,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <p class="topic-description">
                          A Cross-over cable is a kind of CAT5/CAT6 where one end is T568A design and the opposite end as T568B Configuration.
                      </p>
                      <p class="topic-description">
                          In this sort of cable connection Pin 1 is crossed with Pin 3 and Pin 2 is crossed with Pin 6. 
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/cross-over-cable.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }]
  }]
}, {
  slug: "configuration-of-switch",
  units: [{
    title: "Packet Tracer",
    lessonId: 9001,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                      <div class="ero__container--left">
                          <span class="topic-heading">Packet Tracer</span>
                          <p class="topic-description">
                              is a cross-platform visual simulation tool designed by Cisco Systems that enables users to make network topologies and imitate modern computer networks.
                          </p>
                          <span class="topic-heading">Cisco Packet Tracer</span>
                          <p class="topic-description">
                              is a tool built by Cisco.
                          </p>
                      </div>
              
                      <div class="ero__container--right">
                          <figure class="single-image">
                              <img src="/assets/images/packet-tracer.png" alt="transmission" style="width: 320px">
                              <figcaption>Packet Tracer Design Structure</figcaption>
                          </figure>
                      </div>
                  </div>`
    }]
  }, {
    title: "OSI Model Reference Chart",
    lessonId: 9002,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <p class="topic-description">
                         <strong> Open Systems Interconnection model (OSI model)</strong> is a seven-layer abstract model that characterizes and standardizes the communication functions of a telecommunication or computer system.
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/osi-refference.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }]
  }, {
    title: "Network Switch",
    lessonId: 9003,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: ` <div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Network Switch</span>
                      <p class="topic-description">
                          Particular switches let add development modules depending on the situation, giving adaptability as network necessities change. Fixed-Configuration Switch
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/network-switches.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }]
  }, {
    title: "Different Types of Switch",
    lessonId: 9004,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: ` <div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Modular Switch</span>
                      <p class="topic-description">
                          Particular switches let add development modules depending on the situation, giving adaptability as network necessities change. Fixed-Configuration Switch
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/modular-switch.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What are the switch that let you add development modules depending on the situation, giving you adaptability as network necessities change</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Smart Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Fixed-Configuration Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Unmanaged Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Modular Switch</div>
          </div>`,
      answer: "choice4"
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Fixed-Configuration Switch</span>
                  <p class="topic-description">
                      Fixed - design switches give a fixed number of ports and are normally not expandable, which makes them more affordable generally. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/fixed-configuration-switch.jpg" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "quiz",
      text: ` <div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This is a type of switch that give a fixed number of ports and are normally not expandable</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Smart Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Fixed-Configuration Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Managed Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Modular Switch</div>
          </div>`,
      answer: "choice2"
    }, {
      orderRank: 5,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Unmanaged Switch</span>
                  <p class="topic-description">
                      Unmanaged switches are regularly used to give a fundamental network. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/unmanaged-switch.jpg" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 6,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This is a type of switch that regularly used to give a fundamental network</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Unmanaged Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Managed Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Fixed-Configuration Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Modular Switch</div>
          </div>`,
      answer: "choice1"
    }, {
      orderRank: 7,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Managed Switch</span>
                  <p class="topic-description">
                      Among fixed-configuration switches, overseen switches are intended to convey the most exhaustive arrangement of highlights to give the best application experience, the most significant levels of safety, the most exact control and the executives of the network, and the best versatility. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/managed-switch.jpg" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 8,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">Among fixed-configuration switches, overseen switches are intended to convey the most exhaustive arrangement of highlights to give the best application experience, the most significant levels of safety</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Smart Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Managed Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Fixed-Configuration Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Modular Switch</div>
          </div>`,
      answer: "choice2"
    }, {
      orderRank: 9,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Smart Switch</span>
                  <p class="topic-description">
                      Smart switches offer some administration and division, nature of administration, and security capacities, so they can be a practical option in contrast to measured switches. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/smart-switch.jpg" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 10,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">This is a the type of switch that offer some administration and division, nature of administration, and security capacities, so they can be a practical option in contrast to measured switches</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Smart Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Managed Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Fixed-Configuration Switch</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Modular Switch</div>
          </div>`,
      answer: "choice1"
    }]
  }, {
    title: "Basic Configuration of Switch",
    lessonId: 9005,
    quizCount: 1,
    content: [{
      orderRank: 1,
      type: "coach",
      text: `<div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Word Help </span>
                      <p class="topic-description">
                          Utilized to get a rundown of accessible orders that start with a particular letter.
                      </p>
                      <p class="topic-description">
                          We can list every accessible order, on the off chance that we don't have the foggiest idea about the initials of our order.
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/word-help-configuration.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 2,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Command Syntax Help </span>
                  <p class="topic-description">
                      Order punctuation help can be utilized to get the rundown of catchphrases, orders, or boundaries that are accessible beginning with the watchwords that we had effectively entered. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/command-syntax-help.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 3,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Set Name in Switch  </span>
                  <p class="topic-description">
                      Scan be set from worldwide setup mode. Use hostname [desired hostname] order to set name on the switch.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/set-name-in-switch.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 4,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Set Password on a Switch</span>
                  <p class="topic-description">
                      Passwords are utilized to limit actual admittance to switch. Cisco switch upholds support line for neighborhood login and VTYs for far-off login.
                  </p>
                  <p class="topic-description">
                      The two orders do the same work. The benefit of utilizing a secret alternative over password choice is that in the secret choice secret phrase is put away in MD5 encryption.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/set-password-switch.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 5,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Reset Switch to Factory Defaults </span>
                  <p class="topic-description">
                      During the training a few times we need to reset the change to manufacturing plant defaults. 
                  </p>
                  <p class="topic-description">
                      The two orders do the same work. The benefit of utilizing a secret alternative over password choice is that in the secret choice secret phrase is put away in MD5 encryption.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/reset-switch-to-factory-def.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 6,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Set IP Address in Switch </span>
                  <p class="topic-description">
                      An IP address is the location of devices in network. The switch permits us to set the IP address on interface level.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/set-ip-address-switch.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 7,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Set Interface Description</span>
                  <p class="topic-description">
                      Switches have a few interfaces. Adding description to interface is a decent propensity. In after model we would add portrayal Development VLAN to interface Fast Ethernet 0/1.
                  </p>
              </div>
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/set-interface-desc-switch.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 8,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Clear MAC Address Table</span>
                  <p class="topic-description">
                      Switch stores MAC addresses in the MAC address table. Gradually it very well may be full.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/clear-mc-address-table.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 9,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Add Static MAC Address in CAM Table </span>
                  <p class="topic-description">
                      For security reasons at some point, we need to add MAC address in the CAM table physically. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/add-static-mc-address.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 10,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Save Running Configuration in Switch </span>
                  <p class="topic-description">
                      Keeps all running arrangement in RAM. All information from RAM is deleted when the devices turn off. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/save-running-conf-switch.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 11,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Set Duplex Mode </span>
                  <p class="topic-description">
                      Switch consequently change duplex mode relying on far-off devices. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/half-duplex-mode.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 12,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Show Version </span>
                  <p class="topic-description">
                      Command provides general information about the device including its model number, type of interfaces, its software version, configuration settings, location of IOS and configuration files, and available memories.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/show-version-switch.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 13,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Show MAC Address Table </span>
                  <p class="topic-description">
                      Switch stores MAC address of devices that are connected with its interfaces in CAM table. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/show-mac-address.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 14,
      type: "coach",
      text: ` <div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Show Flash </span>
                  <p class="topic-description">
                      Switch stores IOS picture document in streak memory. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/show-flash.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 15,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Show Running-Configuration </span>
                  <p class="topic-description">
                      Setup boundary esteems are made, put away, refreshed, and erased from running design.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/show-running-conf.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 16,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Show Start-up Configuration </span>
                  <p class="topic-description">
                      Any setup put away in RAM is deleted when the device is killed. We can save the running setup in NVRAM. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/start-up-conf.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 17,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Show VLAN</span>
                  <p class="topic-description">
                      Order will show the VLANs. For a regulatory reason, the switch naturally makes VLAN 1 and allocates every one of its interfaces to it. 
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/show-vlan.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 18,
      type: "coach",
      text: `
              <div class="ero__el--container">
                  <div class="ero__container--left">
                      <span class="topic-heading">Show Interface </span>
                      <p class="topic-description">
                          The order shows data about interfaces. Without contention, it would list all interfaces. 
                      </p>
                  </div>
          
                  <div class="ero__container--right">
                      <figure class="single-image">
                          <img src="/assets/images/interface-configuration.png" alt="transmission" style="width: 320px">
                      </figure>
                  </div>
              </div>`
    }, {
      orderRank: 19,
      type: "coach",
      text: `<div class="ero__el--container">
              <div class="ero__container--left">
                  <span class="topic-heading">Show IP Interface Brief</span>
                  <p class="topic-description">
                      A very helpful order to get the snappy outline of all interfaces on the switch.
                  </p>
              </div>
      
              <div class="ero__container--right">
                  <figure class="single-image">
                      <img src="/assets/images/ip-interface.png" alt="transmission" style="width: 320px">
                  </figure>
              </div>
          </div>`
    }, {
      orderRank: 20,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the configuration to clear the mac-address-table</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Switch>clear address table</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Switch#show mac-address-table</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Switch>delete mac-address-table</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Switch#clear mac-address-table</div>
          </div>`,
      answer: "choice1"
    }, {
      orderRank: 21,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the command to show configuration</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Switch#look VLAN</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Switch>look VLAN</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Switch>vlan show</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Switch>show VLAN</div>
          </div>`,
      answer: "choice2"
    }, {
      orderRank: 22,
      type: "quiz",
      text: `<div class="ero__quiz--choice-container">
              <span class="topic-heading" style="display: block;">Pop-up Quiz</span>
              <span class="topic-subheading">What is the command to show the version</span>
                  <div class="ero__quiz--choice" data-attribute="choice1">Switch>show version</div>
                  <div class="ero__quiz--choice" data-attribute="choice2">Switch#show version</div>
                  <div class="ero__quiz--choice" data-attribute="choice3">Switch#version look</div>
                  <div class="ero__quiz--choice" data-attribute="choice4">Switch>version check</div>
          </div>`,
      answer: "choice1"
    }]
  }]
}];
exports.lessonList = lessonList;
},{}],"Learn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractView = _interopRequireDefault(require("./AbstractView"));

var _lessonData = require("../data/lessonData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class _default extends _AbstractView.default {
  constructor(params) {
    super(params);
    this.setTitle("Erovoutika | Learn");
  }

  getLesson() {
    const {
      slug,
      topicId,
      orderRank
    } = this.params;

    const currentModule = _lessonData.lessonList.filter(el => el.slug === slug)[0];

    const chapterCount = currentModule.units.length;
    const currentChapter = currentModule.units.filter(el => el.lessonId == topicId)[0];
    const currentTopic = currentChapter.content.filter(el => el.orderRank == orderRank)[0];
    return {
      chapterCount,
      currentModule,
      currentChapter,
      currentTopic
    };
  }

  showTopic() {
    const title = this.getLesson().currentChapter.title;
    const html = this.getLesson().currentTopic.text;
    return {
      html,
      title
    };
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
    if (lessonType === "coach") return `<a id="btn-continue" href="${this.getNextTopic()}" data-link> Continue </a>`;
    if (lessonType === "quiz") return `<div id="btn-quiz" class="disabled"> Check </div>`;
  }

  classToApply(target, choice, style, btnText, resultColor, message, classIcon, action) {
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
    const selectedChoice = Array.from(document.querySelectorAll(".ero__quiz--choice"));
    const btnText = document.querySelector("#btn-quiz");
    const userChoice = selectedChoice.find(el => el.classList.contains("selected"));
    const isCorrect = this.getLesson().currentTopic.answer === userChoice.dataset.attribute ? true : false;

    if (isCorrect) {
      this.classToApply(btnText, userChoice, "correct", "Continue", "#40bf9c", "Well done!", "fa-check-circle", "add");
    } else {
      this.classToApply(btnText, userChoice, "error", "Retry", "#f35843", "Incorrect, Try again!", "fa-times-circle", "add");
    }
  }

  async getHTML() {
    return ` 
    <!-- Header Part -->
            <div class="ero__header--top">
                <div class="ero__container--inner">
                    <div class="ero__title--left">
                      <a href="/lessons" data-link> <span id="exit"> X </span> </a> <span id="title-text">${this.showTopic().title}</span> 
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

exports.default = _default;
},{"./AbstractView":"AbstractView.js","../data/lessonData":"../data/lessonData.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = exports.navigateTo = void 0;

var _Home = _interopRequireDefault(require("./Home"));

var _Lessons = _interopRequireDefault(require("./Lessons"));

var _Learn = _interopRequireDefault(require("./Learn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

exports.navigateTo = navigateTo;

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));
};

const router = async () => {
  const routes = [{
    path: "/",
    view: _Home.default
  }, {
    path: "/lessons",
    view: _Lessons.default
  }, {
    path: "/learn/:slug/:topicId/:orderRank",
    view: _Learn.default
  }];
  const potentialMatches = routes.map(route => {
    return {
      route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });
  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
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
        const choiceContainer = document.querySelector(".ero__quiz--choice-container");
        const selectedChoice = Array.from(document.querySelectorAll(".ero__quiz--choice"));
        const btnText = document.querySelector("#btn-quiz");
        const userChoice = selectedChoice.find(el => el.classList.contains("selected"));
        view.classToApply(btnText, userChoice, "error", "Check", undefined, undefined, undefined, "remove");
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

exports.router = router;
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", async () => {
  document.body.addEventListener("click", e => {
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
},{"./Home":"Home.js","./Lessons":"Lessons.js","./Learn":"Learn.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49900" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.bundle.js.map