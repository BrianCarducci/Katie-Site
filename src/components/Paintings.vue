<template>
    <div>
        <p>Paintings</p>
        <!-- <div v-for="url in imgUrls"> -->
        <img :src="url" v-for="url in imgUrls">
    </div>
</template>

<script>

export default {
    data() {
        return {
            imgUrls: []
        }
    },
    props: ['firebase'],
    mounted() {
        let paintingsRef = firebase.storage().ref('Paintings');
        paintingsRef.listAll().then(result => {
            result.items.forEach(imageRef => {
                imageRef.getDownloadURL()
                .then(url => this.imgUrls.push(url))
            })
        }).catch(err => console.log(err));
    }
}
</script>
