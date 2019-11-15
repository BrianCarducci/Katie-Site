<template>
  <div class="rounded overflow-hidden shadow-lg content-center text-card">
    <div class="px-6 pt-2">
      <div class="font-bold text-xl mb-2">About Me</div>
      <p class="text-gray-700 text-base">
        Considering memory, the mundane and the romance often found in both, the
        moments that are at the core of my practice are those which are fleeting
        and ephemeral. I find inspiration in sad clowns, middle ground and 11
        am. Coffee without the threat of a hangover, mid-afternoon light, pickup
        soccer games, that time you broke a glass in a quiet room. Achieved
        through painterly surface, juxtaposing chaos and quiet, I aim to
        recognize secular divinity, a ritual where it is often overlooked. The
        core of my work is allegory and color and image recollection, images are
        often reoccurring linking one piece to the next creating a visual
        vocabulary and conversation between the pieces. My intent is to create
        objects and images that are catalysts for reflection and sentimentality.
        I received my bachelor of science in studio art with a concentration in
        painting and ceramics from Skidmore college in 2019 and currently live
        and work in Philadelphia, Pa.
      </p>
      <br />
      <p>Contact me:</p>
    </div>
    <div class="px-6 pb-2 inline-block pt-1">
      <a href="mailto:katiesalk@gmail.com">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 contact-button"
        >
          <img src="@/assets/icon-mail.svg" class="inline-block mr-1" />
          <i class="text-center">Katiesalk@gmail.com</i>
        </span>
      </a>
      <a href="http://www.instagram.com/katiesalk">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 contact-button"
        >
          <img src="@/assets/insta_logo.png" class="inline-block w-5 mr-1" />
          <i class="text-center">@katiesalk</i>
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.text-card {
  margin: auto;
  margin-top: 20px;
  width: 75%;
  animation-name: fadein;
  animation-duration: 0.5s;
}

.contact-button:hover {
  cursor: pointer;
  background-color: lightgray;
}
</style>
