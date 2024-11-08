//
// Simulate Data Fetching Using Promises:
// Create three asynchronous functions to simulate data fetching for user profiles, posts, and comments.
// Each function should return a promise that resolves after a delay, simulating a time-intensive operation (e.g., fetching data from a remote server).
function fetchUserProfiles() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = [
                { id: 1, name: 'Jay' },
                { id: 2, name: 'Marie' },
                { id: 3, name: 'claire' },
            ];
            console.log("Fetched user profiles");
            resolve(users);
        }, 5000); ///1 second delay
    });
}

// function to simulate fetch posts
function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { id: 1, userID: 1, name: 'Post 1' },
                { id: 2, userID: 2, name: 'Post 2' },
                { id: 3, userID: 3, name: 'Post 3' },
            ];
            console.log("fetcched posts");
            resolve(posts);
        }, 2000);           // 2 second delay
    });
}

// function to simulate fetch comments
function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = [
                { id: 1, postID: 1, cmnt: 'comment 1!' },
                { id: 2, postID: 2, cmnt: 'comment 2 ' },
                { id: 3, postID: 3, cmnt: 'comment 3' },
            ];
            console.log("fetched comments");
            resolve(comments);
        }, 2000); // Simulate 2-second delay
    });
}



//  Implement Sequential and Parallel Data Fetching:
// Fetch the data using both sequential and parallel techniques. For example, you could fetch the user profile first, then the posts for that user, and finally, the comments on each post in a sequential flow.
// In another instance, fetch the user, posts, and comments in parallel, observing how they differ in response time and behaviour.

//below is sequential calling: 

fetchUserProfiles()
    .then(users => console.log(users))
    .then(fetchPosts)
    .then(posts => console.log(posts))
    .then(fetchComments)
    .then(comments => console.log(comments));
// .catch(error => console.error(error)); 


//following is parallel execution
Promise.all([fetchUserProfiles(), fetchPosts(), fetchComments()])
    .then(([users, posts, comments]) => {
        console.log(users);
        console.log(posts);
        console.log(comments);
    })
    .catch(error => console.error(error));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//   Refactor with Async/Await:
// Rewrite each function to use async/await syntax instead of .then.
// Use try...catch blocks to handle errors and provide custom error messages for each failure point.
async function getUserContent() {
    try {
        console.log("getting user profilees");
        var users = await fetchUserProfiles();
        if (users) {
            console.log("User profiles are: ", users);
        } else {
            console.log("User profiles data not found.");
        }
    }
    catch (error) {
        console.error("error occured while fetching users:", error.message);
    }
    try {
        console.log("getting posts:");
        var posts = await fetchPosts();
        if (posts) {
            console.log("Posts fetched:", posts);
        } else {
            console.log("Posts data not found.");
        }
    }
    catch (error) {
        console.error("error occured while fetching posts:", error.message);
    }
    try {
        console.log("getting comments:");
        var comments = await fetchComments();
        if (comments) {
            console.log("Comments fetched:", comments);
        } else {
            console.log("Comments data not found.");
        }
    } catch (error) {
        console.error("error occured while fetching:", error.message);
    }
   
}

getUserContent();



// Function to simulate fetching user profiles with random failure
async function fetchUserProfiles2() {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.4) { // 40% chance to failure
            reject(new Error("Failed to fetch user profiles"));
          } else {
            const users = [
              { id: 1, name: 'Alice' },
              { id: 2, name: 'Bob' },
              { id: 3, name: 'Charlie' },
            ];
            console.log("Fetched user profiles");
            resolve(users);
          }
        }, 1000);
      });
    } catch (error) {
      console.error(error.message);
      return null; // Return null on failure to handle gracefully
    }
  }
  
  // Function to simulate fetching posts with random failure
  async function fetchPosts2() {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.3) { // 30% chance to fail
            reject(new Error("Failed to fetch posts"));
          } else {
            const posts = [
              { id: 1, userId: 1, title: 'Post 1' },
              { id: 2, userId: 2, title: 'Post 2' },
              { id: 3, userId: 3, title: 'Post 3' },
            ];
            console.log("Fetched posts");
            resolve(posts);
          }
        }, 1500);
      });
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  
  // Function to simulate fetching comments with random failure
  async function fetchComments2() {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.3) { // 30% chance to fail
            reject(new Error("Failed to fetch comments"));
          } else {
            const comments = [
              { id: 1, postId: 1, text: 'Great post!' },
              { id: 2, postId: 2, text: 'Interesting read' },
              { id: 3, postId: 3, text: 'Thanks for sharing' },
            ];
            console.log("Fetched comments");
            resolve(comments);
          }
        }, 2000);
      });
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  
  // Main function to fetch all data sequentially
  async function fetchData2() {
    const users = await fetchUserProfiles();
    if (users) {
      console.log(users);
    } else {
      console.log("User profiles data not found.");
    }
  
    const posts = await fetchPosts2();
    if (posts) {
      console.log(posts);
    } else {
      console.log("Posts data not found.");
    }
  
    const comments = await fetchComments2();
    if (comments) {
      console.log(comments);
    } else {
      console.log("Comments data not found.");
    }
  }
  
  // Run the main function
  fetchData2();
  
//   Chaining Async Functions:
//   Design a primary getUserContent function that fetches all the data in sequence and logs it step-by-step, combining the results at the end.
//   Inside this function, call each async function in order, awaiting each result and logging a message like "User profile fetched," "Posts fetched," etc., to visualize the sequence.


  async function getUserContent5() {
    try {
      console.log("Fetching user profiles...");
      const users = await fetchUserProfiles();
      if (users) {
        console.log("User profiles fetched:", users);
      } else {
        console.log("User profiles data not found.");
      }
  
      console.log("Fetching posts...");
      const posts = await fetchPosts();
      if (posts) {
        console.log("Posts fetched:", posts);
      } else {
        console.log("Posts data not found.");
      }
  
      console.log("Fetching comments...");
      const comments = await fetchComments();
      if (comments) {
        console.log("Comments fetched:", comments);
      } else {
        console.log("Comments data not found.");
      }
  
      // Combine results at the end
      const userContent = {
        users: users || "User profiles not found",
        posts: posts || "Posts not found",
        comments: comments || "Comments not found",
      };
  
      console.log("Combined user content:", userContent);
    } catch (error) {
      console.error("An error occurred while fetching user content:", error.message);
    }
  }
  
  // Run the main function
  getUserContent5();
  