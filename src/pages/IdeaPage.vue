<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bannerRef = ref(null)
const handleScroll = () => {
  const scrollY = window.scrollY
  if (bannerRef.value) {
    bannerRef.value.style.backgroundPositionY = `${scrollY * 0.5}px`
  }
}

onMounted(() => {
  if (bannerRef.value) bannerRef.value.style.backgroundPositionY = '0px'
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="bannerRef" class="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center "
      style="background-image: url('/banner.png'); clip-path: polygon(0 0, 100% 0, 100% 55%, 0 100%);">
    
    <div class="absolute inset-0 bg-black/55 backdrop-blur-[0px]"></div>

    <div class="relative text-center text-white z-10">
      <h1 class="text-3xl font-bold mb-1">Ideas</h1>
      <p class="text-lg">Where all our great things begin.</p>
    </div>
  </div>

  <div class="wrapper z-10">
    <div class="container pt-12 py-6">
      <p class="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam itaque molestias nemo facilis expedita consequuntur doloremque, placeat totam quisquam amet porro odio esse ipsum. Deleniti commodi nulla alias saepe.
        Modi vero earum odio, et fuga id doloribus! Nesciunt, labore. Officia vitae provident nostrum sapiente neque delectus possimus ipsum recusandae qui aut odit quam cumque, sequi at minima voluptatem consequuntur!
        Nesciunt ullam sed hic id vitae rem natus harum nemo beatae pariatur porro optio sequi fugiat, temporibus cumque ea perspiciatis nulla, odio, quibusdam at voluptatem tempora quo? Vero, quas rerum.
        Fugit quam perferendis tempore, voluptates magnam enim soluta, deserunt facilis facere dignissimos aspernatur harum quaerat in explicabo eaque nam corporis similique adipisci tempora. Consequuntur vel expedita adipisci officiis, accusamus in.
        Dolore laborum, itaque, earum voluptate beatae voluptatem eaque inventore eligendi nostrum iusto libero tenetur possimus maiores quasi eius. Nisi animi sed recusandae tempora voluptates repudiandae ipsa libero laboriosam exercitationem illo!
        Sit accusantium magnam atque voluptas suscipit rerum eveniet quidem omnis sapiente culpa labore non, officiis optio architecto quo, eum error asperiores illum quos qui perspiciatis voluptate doloribus iure. Odio, facilis!
        Quod nobis harum similique omnis, ab possimus dicta atque veniam deserunt alias tenetur maxime laborum exercitationem laboriosam earum perferendis qui doloribus vero iusto magnam porro? A nostrum similique consequatur esse.
        Aspernatur facere assumenda ipsam doloremque quo asperiores eveniet nam possimus, commodi harum sequi culpa velit natus nobis. Dicta rem qui delectus illum, praesentium est fugiat, culpa accusantium cum cupiditate voluptates!
        Quam debitis eveniet quisquam ipsam ratione maiores, eaque eligendi eius odit fuga voluptate itaque! Expedita cum quod, esse iste ducimus qui. Quis, quod deserunt unde odit velit repellat explicabo quo!
        Quos, aspernatur. Voluptate tempora ducimus nisi soluta, iure cupiditate ad vel recusandae, atque iste molestiae minus veniam facere laborum iusto sed omnis optio quis eveniet sequi eum quo sit fugiat!
      </p>
      <p class="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam itaque molestias nemo facilis expedita consequuntur doloremque, placeat totam quisquam amet porro odio esse ipsum. Deleniti commodi nulla alias saepe.
        Modi vero earum odio, et fuga id doloribus! Nesciunt, labore. Officia vitae provident nostrum sapiente neque delectus possimus ipsum recusandae qui aut odit quam cumque, sequi at minima voluptatem consequuntur!
        Nesciunt ullam sed hic id vitae rem natus harum nemo beatae pariatur porro optio sequi fugiat, temporibus cumque ea perspiciatis nulla, odio, quibusdam at voluptatem tempora quo? Vero, quas rerum.
        Fugit quam perferendis tempore, voluptates magnam enim soluta, deserunt facilis facere dignissimos aspernatur harum quaerat in explicabo eaque nam corporis similique adipisci tempora. Consequuntur vel expedita adipisci officiis, accusamus in.
        Dolore laborum, itaque, earum voluptate beatae voluptatem eaque inventore eligendi nostrum iusto libero tenetur possimus maiores quasi eius. Nisi animi sed recusandae tempora voluptates repudiandae ipsa libero laboriosam exercitationem illo!
        Sit accusantium magnam atque voluptas suscipit rerum eveniet quidem omnis sapiente culpa labore non, officiis optio architecto quo, eum error asperiores illum quos qui perspiciatis voluptate doloribus iure. Odio, facilis!
        Quod nobis harum similique omnis, ab possimus dicta atque veniam deserunt alias tenetur maxime laborum exercitationem laboriosam earum perferendis qui doloribus vero iusto magnam porro? A nostrum similique consequatur esse.
        Aspernatur facere assumenda ipsam doloremque quo asperiores eveniet nam possimus, commodi harum sequi culpa velit natus nobis. Dicta rem qui delectus illum, praesentium est fugiat, culpa accusantium cum cupiditate voluptates!
        Quam debitis eveniet quisquam ipsam ratione maiores, eaque eligendi eius odit fuga voluptate itaque! Expedita cum quod, esse iste ducimus qui. Quis, quod deserunt unde odit velit repellat explicabo quo!
        Quos, aspernatur. Voluptate tempora ducimus nisi soluta, iure cupiditate ad vel recusandae, atque iste molestiae minus veniam facere laborum iusto sed omnis optio quis eveniet sequi eum quo sit fugiat!
      </p>
      <p class="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam itaque molestias nemo facilis expedita consequuntur doloremque, placeat totam quisquam amet porro odio esse ipsum. Deleniti commodi nulla alias saepe.
        Modi vero earum odio, et fuga id doloribus! Nesciunt, labore. Officia vitae provident nostrum sapiente neque delectus possimus ipsum recusandae qui aut odit quam cumque, sequi at minima voluptatem consequuntur!
        Nesciunt ullam sed hic id vitae rem natus harum nemo beatae pariatur porro optio sequi fugiat, temporibus cumque ea perspiciatis nulla, odio, quibusdam at voluptatem tempora quo? Vero, quas rerum.
        Fugit quam perferendis tempore, voluptates magnam enim soluta, deserunt facilis facere dignissimos aspernatur harum quaerat in explicabo eaque nam corporis similique adipisci tempora. Consequuntur vel expedita adipisci officiis, accusamus in.
        Dolore laborum, itaque, earum voluptate beatae voluptatem eaque inventore eligendi nostrum iusto libero tenetur possimus maiores quasi eius. Nisi animi sed recusandae tempora voluptates repudiandae ipsa libero laboriosam exercitationem illo!
        Sit accusantium magnam atque voluptas suscipit rerum eveniet quidem omnis sapiente culpa labore non, officiis optio architecto quo, eum error asperiores illum quos qui perspiciatis voluptate doloribus iure. Odio, facilis!
        Quod nobis harum similique omnis, ab possimus dicta atque veniam deserunt alias tenetur maxime laborum exercitationem laboriosam earum perferendis qui doloribus vero iusto magnam porro? A nostrum similique consequatur esse.
        Aspernatur facere assumenda ipsam doloremque quo asperiores eveniet nam possimus, commodi harum sequi culpa velit natus nobis. Dicta rem qui delectus illum, praesentium est fugiat, culpa accusantium cum cupiditate voluptates!
        Quam debitis eveniet quisquam ipsam ratione maiores, eaque eligendi eius odit fuga voluptate itaque! Expedita cum quod, esse iste ducimus qui. Quis, quod deserunt unde odit velit repellat explicabo quo!
        Quos, aspernatur. Voluptate tempora ducimus nisi soluta, iure cupiditate ad vel recusandae, atque iste molestiae minus veniam facere laborum iusto sed omnis optio quis eveniet sequi eum quo sit fugiat!
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>