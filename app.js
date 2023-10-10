function validate() {
    if (document.forms["frs"]["Email"].value == "") {
      alert("Minimal isi email!");
      document.forms["frs"]["Email"].focus();
      return false;
    }
    if (document.forms["frs"]["Password"].value == "") {
      alert("Minimal isi pw!");
      document.forms["frs"]["Password"].focus();
      return false;
    }
  }