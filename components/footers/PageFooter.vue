<template>
  <footer>
    <div class="page-footer-container">
      <div class="page-footer page-footer--framed">
        <section class="footer-column">
          <h2 class="footer-column__title">
            Qiskit Elements
          </h2>
          <ul>
            <li><a class="footer-column__link" href="https://qiskit.org/terra">Terra</a></li>
            <li><a class="footer-column__link" href="https://qiskit.org/aer">Aer</a></li>
            <li><a class="footer-column__link" href="https://qiskit.org/aqua">Aqua</a></li>
            <li><a class="footer-column__link" href="https://qiskit.org/ignis">Ignis</a></li>
            <li><a class="footer-column__link" href="https://qiskit.org/ibmqaccount">IBM Q Account</a></li>
          </ul>
        </section>
        <section class="footer-column">
          <h2 class="footer-column__title">
            Qiskit for Educators
          </h2>
          <ul>
            <li><a class="footer-column__link" href="/textbook">Textbook</a></li>
            <li><a class="footer-column__link" href="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY" target="_blank" rel="noopener">Coding With Qiskit</a></li>
            <li><a class="footer-column__link" href="mailto:hello@qiskit.camp" target="_blank" rel="noopener">Host an Event</a></li>
          </ul>
          <h2 class="footer-column__title">
            Qiskit Advocates
          </h2>
          <ul>
            <li><a class="footer-column__link" href="/advocates#become-an-advocate">Become an Advocate</a></li>
          </ul>
          <h2 class="footer-column__title">
            Qiskit Experiments
          </h2>
          <ul>
            <li><a class="footer-column__link" href="/experiments#browse-the-experiments">Browse the experiments</a></li>
          </ul>
        </section>
        <section class="footer-column">
          <h2 class="footer-column__title">
            Social Media
          </h2>
          <ul>
            <li><a class="footer-column__link" href="https://github.com/Qiskit" target="_blank" rel="noopener">GitHub</a></li>
            <li><a class="footer-column__link" href="https://qiskit.slack.com/" target="_blank" rel="noopener">Slack</a></li>
            <li><a class="footer-column__link" href="https://twitter.com/Qiskit" target="_blank" rel="noopener">Twitter</a></li>
            <li><a class="footer-column__link" href="https://medium.com/Qiskit" target="_blank" rel="noopener">Medium</a></li>
            <li><a class="footer-column__link" href="https://www.youtube.com/Qiskit" target="_blank" rel="noopener">YouTube</a></li>
            <li><a class="footer-column__link" href="https://quantumcomputing.stackexchange.com/questions/tagged/qiskit" target="_blank" rel="noopener">Stack Exchange</a></li>
            <li><a class="footer-column__link" href="https://www.facebook.com/Qiskit" target="_blank" rel="noopener">Facebook</a></li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';

.page-footer-container {
  margin-top: 4rem;
  padding-bottom: 4rem;
}

.page-footer {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  color: var(--primary-color-lightmost);

  ul {
    list-style: none;
    margin-top: 1.5rem;
  }

  li {
    margin-top: 0.5rem;
    display: inline-block;
    width: 100%;
  }

  &--framed {
    @include framed();
  }
}

.footer-column {
  flex: 1;
  margin-right: 2rem;

  &__title {
    margin-top: 2rem;
    font-size: inherit;
    font-weight: normal;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--primary-color-lightmost);

    &:first-child {
      margin-top: 0;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    width: 100%;

    &:hover {
      color: var(--body-color-light);
    }
  }

  &:last-child {
    margin-right: 0;
  }
}

@media (max-width: 600px) {
  .page-footer {
    display: block;
  }

  .footer-column {
    margin-top: 2rem;
    margin-right: 0;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
