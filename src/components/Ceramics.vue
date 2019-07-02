<template>
    <div>
        <p>Ceramics</p>
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
