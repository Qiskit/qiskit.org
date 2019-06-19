<template>
  <article>
    <a href="">
      <h3>Discover Qiskit Camp Europe</h3>
      <section>
        <p>Bla bla bla bla bla bla</p>
      </section>
    </a>
  </article>
</template>

<style scoped>
article {
  border: 1px solid #cccccc;
  box-shadow: 0 0 2rem 0rem rgba(0, 0, 0, 0.1);
  background-color: white;
  min-height: 15rem;
  position: relative;
  transition: box-shadow 0.2s;
}

article:hover {
  box-shadow: 0 0rem 1rem 0rem rgba(0, 0, 0, 0.2);
}

article > a {
  color: black;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

article h3 {
  margin: 1rem 1rem 0;
}

article section {
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  padding: 1rem;
}

article[small] {
  min-height: 7.5rem;
}
</style>
