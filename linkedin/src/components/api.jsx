/**
 * /* Profiles
 *
 * @format
 */

/* - GET https://striveschool-api.herokuapp.com/api/profile/
Gets a list of user profiles */
/*- GET https://striveschool-api.herokuapp.com/api/profile/me
Retrieves my own profile*/
/*- GET https://striveschool-api.herokuapp.com/api/profile/{userId}
Retrieves a specific profile*/
/*- PUT https://striveschool-api.herokuapp.com/api/profile/
Updates current user's profile*/

/*
PROFILE Model:
{
    "_id": "5d84937322b7b54d848eb41b", 				// server generated
    "name": "Diego",
    "surname": "Banovaz",
    "email": "diego@strive.school",
    "bio": "SW ENG",
    "title": "COO @ Strive School",
    "area": "Berlin",
    "image": ..., 														// server generated on upload
    "username": "admin", 											// server generated from Auth
    "createdAt": "2019-09-20T08:53:07.094Z", 	// server generated
    "updatedAt": "2019-09-20T09:00:46.977Z", 	// server generated
    "__v": 0 																	// server generated
}
*/

/* Experiences */

/*- GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
Gets a list of user experiences*/

/*- POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
Creates a new experience. NOTE: every user is allowed to mess only with his own experiences*/

/*- GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
Retrieves a specific experience*/

/*- PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
Edits a specific experience*/

/*- DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
Deletes a specific experience*/

/* Posts */
/*- GET https://striveschool-api.herokuapp.com/api/posts/ 
Gets a list of existing posts*/

/*- POST https://striveschool-api.herokuapp.com/api/posts/
Creates a new post. NOTE: every user is allowed to mess only with his own posts*/

/*- GET https://striveschool-api.herokuapp.com/api/posts/{postId}
Retrieves a specific post*/

/*- PUT https://striveschool-api.herokuapp.com/api/posts/{postId}
Edits a specific post*/

/*- DELETE https://striveschool-api.herokuapp.com/api/posts/{postId}
Deletes a specific post*/

/* image */

/*IMAGE UPLOAD:- POST https://striveschool-api.herokuapp.com/api/profile/{userId}/picture

Replaces user profile's picture.

Name of the picture property in the form-data: profile*/

/*- POST https://striveschool-api.herokuapp.com/api/profile/{userId}/experiences/:expId/picture

Adds an image to the experience. 

NOTE: every user is allowed to mess only with his own experiences

Name of the picture property in the form-data: experience*/

/*- POST https://striveschool-api.herokuapp.com/api/posts/:postId

Adds an image to the post. */
