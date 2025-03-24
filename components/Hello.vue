<template>
  <div class="container-hello">
    <div class="grid-container">
      <div class="image-wrapper">
        <NuxtImg class="image" src="https://i.imgur.com/ZhPz5xP.png" />
      </div>
      <div class="text-wrapper">
        <h2 class="title">{{ $t("hello") }}</h2>
        <h1 class="my-name">
          <div class="tooltip" data-tip="Siplhes">Joseph Hurtado</div>
        </h1>
        <h3 class="description">{{ $t("description") }}</h3>
      </div>
    </div>
  </div>
</template>