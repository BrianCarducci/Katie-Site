<template>
    <div>
        
        <h1 class="text-center text-xl p-1">Name of Piece</h1>
        <div class="slideshow-container">

            <div v-for="(url, index) in imgUrls" class="mySlides fade">
                <div class="numbertext">{{index + 1}}/{{imgUrls.length}}</div>
                <img :src="url" style="width:100%" class="border-white border-4 rounded-sm shadow">
            </div>

            <a class="prev" v-on:click="prevSlide">&#10094;</a>
            <a class="next" v-on:click="nextSlide">&#10095;</a>
        </div>

    </div>
</template>

<script>

export default {
    props: ['clickedImg'],
    data() {
        return {
            imgUrls: [],
            imgPath: '',
            slides: ''
        }
    },
    created() {
        this.imgPath = this.$route.query.imgPath;
        let ceramicRef = firebase.storage().ref(`Ceramics/${this.imgPath}`);
        ceramicRef.listAll().then(result => {
            result.items[0].getDownloadURL().then(url => {
                this.imgUrls.push(url);
            })
        }).finally(() => {
            let altViewsRef = firebase.storage().ref(`Ceramics/${this.imgPath}/altviews`);
            altViewsRef.listAll().then(results => {
                results.items.forEach(imgRef => {
                    imgRef.getDownloadURL().then(url => {
                    this.imgUrls.push(url);
                    })
                })
            })
        })
    },
    mounted() {
        this.slides = document.getElementsByClassName('mySlides');
    },
    updated() {
        
        this.slides[0].style.display = 'block';
    },
    methods: {
        nextSlide: function() {
            let i = 0;
            for (i; i < this.slides.length; i++) {
                if (this.slides[i].style.display === 'block') {
                    break;
                }
            }
            this.slides[i].style.display = 'none';
            if (i+1 >= this.slides.length) {
                this.slides[0].style.display = 'block';
            } else {
                this.slides[i+1].style.display = 'block';
            }
        },
        prevSlide: function() {
            let i = 0;
            for (i; i < this.slides.length; i++) {
                if (this.slides[i].style.display === 'block') {
                    break;
                }
            }
            this.slides[i].style.display = 'none';
            if (i-1 < 0) {
                this.slides[this.slides.length-1].style.display = 'block';
            } else {
                this.slides[i-1].style.display = 'block';
            }
        }
    }
}

</script>

<style scoped>

    @keyframes zoom {
        from {opacity: 0}
        to {opacity: 1}
    }

    .thumbnail:hover {
        cursor: pointer;
        opacity: .7;
    }    

* {box-sizing:border-box}

    /* Slideshow container */
.slideshow-container {
  width: 33%;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}



    

</style>
