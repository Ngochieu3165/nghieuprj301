document.addEventListener('DOMContentLoaded', function () {
    var danhMuc = document.getElementById('danhMuc');
    var dropdownMenu = danhMuc.querySelector('.dropdown-menu');

    // Toggle dropdown menu visibility on click
    danhMuc.addEventListener('mouseout', function (event) {
      event.stopPropagation(); // Prevent event from propagating to the window
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('mouseout', function (e) {
      if (!danhMuc.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  });