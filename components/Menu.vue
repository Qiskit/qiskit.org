<template>
  <nav>
    <section class="ibm-research">
      <a href="https://qiskit.org" class="text-logo" target="_blank" rel="noopener"><img class="logo" alt="Qiskit logo" src="https://qiskit.camp/img/qiskit-logo.png">&nbsp;Qiskit</a>
    </section>
    <div class="convertible-menu">
      <input class="hamburger" type="checkbox">
      <span class="hamburger" />
      <span class="hamburger" />
      <span class="hamburger" />
      <ul>
        <slot />
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  width: 1.7rem;
  margin-top: -0.2rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}

.ibm-research {
  position: fixed;
  left: 5%;
  z-index: 101;
}

.ibm-research a {
  margin: 0;
  padding-top: 0.2rem;
  display: inline-block;
  border-top: 4px solid black;
  font-size: 1.7rem;
  color: black;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0px 0px 16px #2B2B2B;
  background-color: white;
  flex-wrap: wrap;
  min-height: 63px;
}

nav ul:empty {
  display: none;
}

nav ul {
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  list-style: none;
  flex-wrap: wrap;
}

nav li {
  font-weight: bold;
  list-style: none;
  text-indent: 0;
  margin: 0 0.8rem;
  height: 100%;
  line-height: 3.5rem;
  cursor: pointer;
}

nav li:hover a {
  opacity: 0.6;
  border-bottom: 2px solid #0A1D8F;
}

nav li.active a,
nav li.active:hover a {
  opacity: 0.6;
  border: none;
}

nav li a {
  color: black;
}

.convertible-menu {
  display: block;
  position: relative;
  align-self: center;
  width: 100%;
  z-index: 1;
}

.convertible-menu .hamburger {
  display: none;
  margin-left: calc(100% - 40px - 1rem);
}

.convertible-menu input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

.convertible-menu span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  background-color: #cdcdcd;
  transform-origin: 4px 0;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

.convertible-menu input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg)
             translate(0, -1px);
  background: #232323;
}

.convertible-menu input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.convertible-menu input:checked ~ span:nth-last-child(2) {
  opacity: 1;
  transform: rotate(-45deg)
             translate(-1px, -2px);
  background: #232323;
}

@media (max-width: 800px) {

  .convertible-menu .hamburger {
    display: block;
  }

  .convertible-menu ul {
    text-align: right;
    width: 100vw;
    position: absolute;
    background-color: white;
    display: block;
    height: auto;
    border-bottom: 1px solid #0A1D8F;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    transform: translateX(100%);
  }

  .convertible-menu input:checked ~ ul {
    transform: translateX(0);
  }

  .convertible-menu ul li {
    padding-right: 2.5%;
  }

  .id-stub {
    top: -380px;
  }
}
</style>
