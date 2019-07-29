<template>
    <div>
        <div id="myModal" class="modal" v-if="imgClicked" v-on:click="closeImg">

  <!-- The Close Button -->
  <span class="close" v-on:click="closeImg">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" :src="clickedImgSource">

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>
            <div class="grid py-8">
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto" v-for="url in imgUrls">
            <img class="mx-auto p-2 h-64 thumbnail" :src="url" v-on:click="expandImg" alt="Failed to load.">
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
    </div>
</template>

<script>

export default {
    data() {
        return {
            imgUrls: [],
            imgClicked: false,
            clickedImgSource: null
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
        }).catch(err => { console.log(err) });
    },
    methods: {
        expandImg: function(event) {
            if (screen.width > 768) {
                this.clickedImgSource = event.target.src;
                this.imgClicked = true;
            }
        },
        closeImg: function(event) {
            this.imgClicked = false;
        }
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

    .thumbnail:hover {
        cursor: pointer;
        opacity: .7;
    }    

       /* The Modal (background) */
.modal {
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption { 
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {opacity: 0}
  to {opacity: 1}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
    }

</style>

