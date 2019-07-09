<template>
    <div>
        <p>Ceramics</p>
        <div class="col-sm-3" v-for="url in imgUrls">
        <img :src="url">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            imgUrls: []
        }
    },
    mounted() {
        let ceramicsRef = firebase.storage().ref('Ceramics');
        ceramicsRef.listAll().then(result => {
            result.items.forEach(imageRef => {
                imageRef.getDownloadURL()
                .then(url => this.imgUrls.push(url))
            })
        }).catch(err => console.log(err));
    }
}

</script>

<style scoped>

img {
    width: 100%;
}

</style>
