<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ImageStore from '../stores/image';
import ImageComponent from '../components/Base/ImageComp.vue';
import { mapState } from 'pinia';

export default {
    name: 'projectview',
    components: {
        Navbar,
        Footer,
        ImageComponent
    },
    computed: {
    ...mapState(ImageStore, ['g$list']),
  }

}
</script>

<template>
    <div>
        <Navbar />
        <div class="container mt-lg-4">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                        <h1>Project</h1>
                        <p class="mx-auto">Here are some personal projects and freelance projects,</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <template v-for="(img, index) in g$list" :key="index">
       
                    <div class="col-md-4 mb-lg-3">
                        <article class="blog-post mb-lg-4">
                            <!-- <img :src="img.img" alt=""> -->
                            <ImageComponent :src="img.image"  />
                            
                            <a href="#" class="tag">{{ img.category }}</a>
             
                            <div class="content">
                                <h5>{{ img.title }}</h5>
                         
                            </div>
                        
                        </article>
                    <center>    <RouterLink  class="btn btn-brand ms-lg-3 route-link " :to="{ name: 'detail', params: { id: img.id }}">Detail</RouterLink ></center>
                    </div>
     
                </template>
            </div>
        </div>
        <Footer />
    </div>
</template>



<style lang="scss" scoped>

</style>