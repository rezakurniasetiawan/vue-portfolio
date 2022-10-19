<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ImageStore from '../stores/image';
import ImageComponent from '../components/Base/ImageComp.vue';
import { mapState } from 'pinia';

export default {
    name: "detail",
    components: {
        Navbar,
        Footer,
        ImageComponent,
    },
    computed: {
        ...mapState(ImageStore, ['g$detail']),
        detail(){
            return this.g$detail(this.$route.params.id);
        }
    }
};
</script>

<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                        <h1>Detail Project</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <ImageComponent :src="detail.image" class="mb-lg-5" alt="" width="50%" />
                        <h3>{{detail.title}}</h3>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>



<style lang="scss" scoped>

</style>
