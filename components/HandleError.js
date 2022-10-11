export default function handleError(res){
    if(res.status == 300){
        console.log("Redirection  client needs to perform further actions to complete the request");
        return
    }
    if(res.status == 400){
        console.log("Client error - client sent an invalid request")
        return
    }
    if(res.status == 500){
        console.log("server error - server failed to fulfill a valid request due to an error with server")
    }
}

// 100-level (Informational) – server acknowledges a request
// 200-level (Success) – server completed the request as expected
// 300-level (Redirection) – client needs to perform further actions to complete the request
// 400-level (Client error) – client sent an invalid request
// 500-level (Server error) – server failed to fulfill a valid request due to an error with server