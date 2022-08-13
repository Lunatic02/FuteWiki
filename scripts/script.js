 function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideClick);
    })
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}
function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  };
}


  class MobileNavBar{
      constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(){
        this.navList.classList.toggle(this.activeClass)
      }
      addClickEvent(){
          this.mobileMenu.addEventListener('click', this.handleClick)}
      init(){
          if(this.mobileMenu){
              this.addClickEvent()
          }
          return this;
      }
  }

  const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavBar.init();

  function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
  
    if(tabMenu.length && tabContent.length) {
      tabContent[0].classList.add('ativo');
  
      function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove('ativo');
        });
        const direcao = tabContent[index].dataset.anime;
        tabContent[index].classList.add('ativo', direcao);
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          activeTab(index);
        });
      });
    }
  }
  initTabNav()

  const page1 = "arsenal.html";
  const page2 = "athletico.html"
  const page3 = "atletico-madrid.html"
  const page4 = "bahia.html"
  const page5 = "barcelona.html"
  const page6 = "bayern.html"
  const page7 = "botafogo.html"
  const page8 = "chelsea.html"
  const page9 = "city.html"
  const page10 = "corinthians.html"
  const page11 = "coritiba.html"
  const page12 = "cruzeiro.html"
  const page13 = "dortmund.html"
  const page14 = "flamengo.html"
  const page15 = "fluminense.html"
  const page16 = "gremio.html"
  const page17 = "internacional.html"
  const page18 = "italiana.html"
  const page19 = "juventus.html"
  const page20 = "liverpool.html"
  const page21 = "milan.html"
  const page22 = "milao.html"
  const page23 = "palmeiras.html"
  const page24 = "real-madrid.html"
  const page25 = "santos.html"
  const page26 = "sao-paulo.html"
  const page27 = "selecao-alema.html"
  const page28 = "selecao-espanhola.html"
  const page29 = "tottenham.html"
  const page30 = "united.html"
  const page31 = "vasco.html"

 const pages = [page1,page2,page3,page4,page5,page6,page7,page8,page9,page10,page11,page12,page13,page14,page15,page16,page17,page18,page19,page20,page21,page22,page23,page24,page25,page26,page27,page28,page29,page30,page31];
function showRandomPage()
{
    const num = Math.round(Math.random() * (pages.length-1));
    window.location.href=pages[num];
    console.log(num);
};
