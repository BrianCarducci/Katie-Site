<template>
    <div>
        
        <h1 class="text-center text-xl p-1">Name of Piece</h1>
            <img :src="headlineImgSrc" class="mx-auto w-2/3 border-white border-4 rounded-sm shadow">

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
        let ceramicRef = firebase.storage().ref('Ceramics/' + this.imgPath);
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
