# Labforward Code Challenge for Backend Engineer Candidate

	
## Your Task	

You need to add a new endpoint to the API to allow users to *update the greetings they created*. 

## Solution

The changes and developments I have made are listed below; I took around 10 hours to implement this solution:

* Fixing `returnsBadRequestWhenUnexpectedAttributeProvided ()` Test in `HelloControllerTest.class` and declaring `BAD_REQUEST` in `GlobalControllerAdvice`.
* Correcting the endpoint `post (/hello)` to return the created entity with its location as the location is desired regarding `EntityCreatedResponse.class`.
* Adding the new endpoint `patch (/hello/{id})` to update the massage in the existing greeting if it is there in the system otherwise it will send a not found response. Accordingly, I declared the function `updateGreeting` in `HelloWorldService`.
* Adding the test in `HelloControllerTest` for the new end point updating the greeting.
* Implementing a user interface which utilizes the API with the new endpoint using HTML, JAVASCRIPT, CSS, VUE and assuming the default value for “id”, as in the real APP it must be generated from previous interface which must handle the user’s authorization to produce the “id” we want. I also checked for the empty value of the new greeting to guarantee the safe ajax call.


