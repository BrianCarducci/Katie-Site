<template>
   <div class="grid py-8">
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto" v-for="url in imgUrls">
            <img class="mx-auto p-2 h-64" :src="url" alt="Failed to load.">
            <!-- <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div> -->
        <!-- <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div> -->
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

 .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 992px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }    
    }

</style>
