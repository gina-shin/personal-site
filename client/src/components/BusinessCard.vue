<template>
  <div class="card">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .card {
        border-radius: 50px;
        background: #f0e3c8;
        box-shadow:  22px 22px 37px #ccc1aa, 
                    -22px -22px 37px #ffffe6;
    }
</style>