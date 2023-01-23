<template>
  <section>
    <div class="blockbuster__container">
      <div class="bx--row">
        <div class="bx--col-lg-8">
          <h2>
            Pulling back the curtain
          </h2>
          <h3>
            Project summary
          </h3>
          <p>
            This project is an April Fools’ joke. It doesn't really use a real
            quantum computer to give you real movie recommendations for the real
            last remaining Blockbuster. And we're not saying that would even be
            a "good" or useful use of a real quantum computer anyway. The goal
            of this project is to shed light on the hype and misunderstandings
            associated with quantum computing. See the related video
            <BasicLink
              class="blockbuster-explanation-section__text-link"
              url="https://youtube.com/qiskit"
            >
              here
            </BasicLink>.
          </p>
          <h3>
            FAQs
          </h3>
          <h4>
            Are quantum computers real?
          </h4>
          <p>
            Yes. Quantum computers are very much real and they are already
            available today but not at Blockbuster.
          </p>
          <h4>
            Is Blockbuster real?
          </h4>
          <p>
            Yes. Blockbuster is very much real but do not use quantum computers.
            In fact much of their systems still rely on floppy disks. If you can
            travel (safely) to Bend, Oregon - we highly recommend stopping by
            for some real nostalgia.
          </p>
          <h4>
            Do quantum computers provide speedups over classical computers?
          </h4>
          <p>
            There are a number of studies suggesting that a quantum computer
            with very high fidelity quibits could outperform classical computers in some
            application areas. Quantum computing is still in the research phase
            of its lifecycle with scientists, researchers, engineers and many
            others working hard to study the limitations and applications of the
            quantum systems that exist today.
          </p>
          <h4>
            What’s a qubit? What’s quantum advantage?
          </h4>
          <p>
            If you’re asking these types of questions, then we highly recommend
            reading through the first chapter of the
            <BasicLink
              class="blockbuster-explanation-section__text-link"
              url="https://qiskit.org/textbook/preface.html"
            >
              Qiskit Textbook
            </BasicLink>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blockbuster-explanation-section {
  &__text-link {
    color: $carbon--blue-70 !important;
  }
}
</style>
