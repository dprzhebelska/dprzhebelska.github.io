document.getElementById("submit2").onclick = function() {togglea2()};


function togglea2() {
    document.getElementById("alertPlaceHolder2").innerHTML = '<div class="alert alert-success close alert-dismissible fade show" aria-label="Close" role="alert" id="success"> \
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button> \
    <strong>Success!</strong> A confirmation email was sent to your inbox. \
  </div>';
}  


document.getElementById("myModal").onmouseleave = function() {togglem()}

function togglem() {
    document.getElementById("alertPlaceHolder2").innerHTML = "";
}