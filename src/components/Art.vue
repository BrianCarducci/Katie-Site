<template>
    <div>
        <p>Art</p>
        <!-- <div v-for="url in imgUrls"> -->
        <img :src="url" v-for="url in imgUrls">
    </div>
</template>

<script>
import axios from 'axios'

const config = {
  storageBucket: 'gs://katie-app.appspot.com'
};

firebase.initializeApp(config);
var paintingsRef = firebase.storage().ref('Paintings');


export default {
    data() {
        return {
            imgUrls: []
        }
    },
    mounted() {
        paintingsRef.listAll().then(result => {
            result.items.forEach(imageRef => {
                imageRef.getDownloadURL()
                .then(url => this.imgUrls.push(url))
            })
        }).catch(err => console.log(err));
    }
}
</script>
