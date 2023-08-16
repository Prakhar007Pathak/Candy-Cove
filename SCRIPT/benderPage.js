function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.image-upload-wrap').hide();

        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();

        $('.image-title').html(input.files[0].name);
      };

      reader.readAsDataURL(input.files[0]);
    // }
  } else {
    removeUpload();
  };
};

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});




// Function to handle the button click event
function addInput() {
  const parentDiv = document.querySelector('.spaceForFlavour'); // Change selector if needed

  // Get the reference to the first input element
  const firstInput = document.querySelector('.flavour');

  // Create a new input element
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = "Enter Flavour Name"
  newInput.classList.add("inputs", "flavour");

  // Insert the new input element after the first input
  parentDiv.insertBefore(newInput, firstInput.nextSibling);
}

// Attach event listener to the button
const addButton = document.getElementById('buttonForFlavour');
addButton.addEventListener('click', addInput);