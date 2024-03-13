const template = document.createElement("template");
template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="Components/Header/header.css" type="text/css">

    <header class="header">
      <section class="header__content">

        <a href="">
          <img class="logo" src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8aad816e1ead4175ca869_Logo.png" alt="link-logo">
        </a>

        <nav class="nav">
          <svg class="burger" xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path></svg>  
          <section class="nav__pages">
            <a href="" class="nav__link">Home</a>
            <a href="" class="nav__link">About us</a>
            <a href="" class="nav__link">Products</a>
            <a href="" class="nav__link">Contact me</a>
          </section>
          <a href="">
            <img class="cart" src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8bd2a0b40a2df68cce0da_cart.png" alt="link-to-cart">
          </a>
        </nav>
      </section>
      <section class="burger__content">
        <a href="" class="nav__link">Home</a>
        <a href="" class="nav__link">About us</a>
        <a href="" class="nav__link">Products</a>
        <a href="" class="nav__link">Contact me</a>
      </section>
    </header>
`;

export class Header extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));

    shadow.querySelector(".burger").onclick = () => {
      shadow.querySelector(".header").classList.toggle("header--active");
    };
  }
}

customElements.define("app-header", Header);
