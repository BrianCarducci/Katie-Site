<template>
    <div>
        <p>Paintings</p>
        <!-- <div class=" container mx-auto py-10">
            <div class="border m-6 rounded-lg  bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
            	<div class="sm:flex sm:items-center px-6 py-4">
                	<img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://api.adorable.io/avatars/196/abott@adorable.png" alt="">
               		<div class="text-center sm:text-left sm:flex-grow">
                    	<div class="mb-4">
                        	<p class="text-xl leading-tight">Jane Doe</p>
                           	<p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
                       	</div>
                        <div class="flex flex-wrap">
                        	<button class=" text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white">Call</button>
                        	<button class="  text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
                     	</div>
					</div>
                 </div>
            </div>
       </div> -->
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
