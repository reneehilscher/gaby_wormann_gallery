

//generate image gallery
var gallery = document.getElementById("gallery"); //target gallery

// console.log(gallery);

var images = [

	//each image has two versions :large and thumb 
	{
		large_src: "assets/images/brown_beetle.jpg",
		thumb_src: "assets/images/brown_beetle_thumb.jpg"
	},
	{
		large_src: "assets/images/dark_tarantula.jpg",
		thumb_src: "assets/images/dark_tarantula_thumb.jpg"
	},
	{
		large_src: "assets/images/golden_beetle.jpg",
		thumb_src: "assets/images/golden_beetle_thumb.jpg"
	},
	{
		large_src: "assets/images/hybrid_snail.jpg",
		thumb_src: "assets/images/hybrid_snail_thumb.jpg"
	},
	{
		large_src: "assets/images/terminator.jpg",
		thumb_src: "assets/images/terminator_thumb.jpg"
	},
		{
		large_src: "assets/images/yellow_tarantula.jpg",
		thumb_src: "assets/images/yellow_tarantula_thumb.jpg"
	}

];


//loop over the images and add them to the list item.


function addImage(currentImage){
	//creates a variable for each image passed in called currentImage


	var gallery_list_item = document.createElement('li');
	//create a new list item for each image
	gallery_list_item.classList.add("gallery_item");

	//then create the div,

	var gallery_image_div = document.createElement('div');
	//create a new div for each image
	gallery_image_div.classList.add("gallery_image");

	var gallery_image = document.createElement('IMG');
	gallery_image.src = currentImage.thumb_src;

	gallery_image.clicked = currentImage; //reference the currentImage in the array for later so that
	//I can associate the clicked thumbnail 
	//with the large version and change the main window image;

	gallery_image.addEventListener('click', changeMainImage); //add the listener to each image 
	//create a new image tag for each image
	
	gallery_image_div.appendChild(gallery_image); //add image to teh div
	gallery_list_item.appendChild(gallery_image_div); // add the div to the list item
	gallery.appendChild(gallery_list_item); //add the list item to the gallery (ul)


}

function addImages(){
	//only job is to loop through the images array and call the add function for each one.

	for(i=0; i < images.length; i++){
		// calls the add function for each image
		// passes the current image to the addImage function as
		// currentImage = images[i]
		addImage(images[i]); // calls the addImage function on the 'currentImage' at whatever index the loop is at
	}
//end of loop
}

addImages(); //call it finally.


//add the even listener to the thumbnails:

		var large_image = document.getElementById('large_image');

	large_image.src = images[0].large_src;
function changeMainImage(e){


	// debugger;
// console.log(e.currentTarget.clicked.large_src); //log out the current src for teh clicked image
	// debugger;
//change the main window image to the be large_src of whichever was clicked; 
 large_image.src = e.currentTarget.clicked.large_src;
};