<template>
    <div>
        <h1>Name of Piece</h1>
        <img :src="headlineImgSrc" alt="hi">

    </div>
</template>

<script>

export default {
    props: ['clickedImg'],
    data() {
        return {
            imgUrls: [],
            imgPath: '',
            headlineImgSrc: ''
        }
    },
    created() {
        this.imgPath = this.$route.query.imgPath;
    },
    mounted() {
        let ceramicRef = firebase.storage().ref(this.imgPath);
        console.log(ceramicRef)
        ceramicRef.listAll().then(result => {
            result.items[0].getDownloadURL().then(url => {
                this.headlineImgSrc = url;
            })
        })

    },
    methods: {
       
    }
}

</script>

<style scoped>



    .thumbnail:hover {
        cursor: pointer;
        opacity: .7;
    }    

</style>
