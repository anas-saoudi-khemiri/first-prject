function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function filterCars() {
    var input = document.getElementById('search');
    var filter = input.value.toLowerCase();
    var carList = document.getElementById('carList');
    var cars = carList.getElementsByClassName('car-item');
  
    for (let i = 0; i < cars.length; i++) {
      var car = cars[i];
      var carName = car.getAttribute('data-name').toLowerCase();
  
      if (carName.includes(filter)) {
        car.style.display = '';
      } else {
        car.style.display = 'none';
      }
    }
  }