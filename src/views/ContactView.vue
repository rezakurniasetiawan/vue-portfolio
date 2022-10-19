<template>
    <div>
        <Navbar />

        <div class="container">
            <div class="intro mt-lg-5 mb-lg-5">
                <h1>Contact Us</h1>
            </div>
            <form action="https://formspree.io/f/xrgdlnop" method="POST">
                <div class="row justify-content-lg-evenly ">

                    <div class=" col-lg-5">
                        <label class="form-label">Name :</label>
                        <input type="text" name="name" class="form-control" required>
                        <label class="form-label">Email :</label>
                        <input type="email" name="email" class="form-control" required>
                        <label class="form-label">Message :</label>
                        <textarea type="text" name="message" class="form-control" rows="4" required></textarea>
                        <button type="submit" class="btn btn-brand mt-lg-3">Submit</button>
                    </div>

                </div>
            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Contact',
    input: {
        name: "",
        email: "",
        message: "",
    },
    methods: {
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        async submit() {
            const data = new FormData();
            Object.keys(this.input).forEach(key => data.append(key, this.input[key]));
            await fetch('https://formspree.io/f/xrgdlnop', {
                method: 'POST',
                body: data,
            });
            this.reset();
        },
    },
    components: {
        Navbar,
        Footer
    }

}
</script>

<style lang="scss" scoped>

</style>