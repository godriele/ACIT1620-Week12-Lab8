/** COMPLETE THIS PART */
async function addPost(post) {
    /**
     * 1. Get the list posts from local storage
     *      if local storage is empty, initialize the list of posts to an empty array
     * 2. Add the new post at the front of list
     * 3. Save the list posts back to local storage
     */

    try {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        posts.unshift(post); // Corrected line
        localStorage.setItem('posts', JSON.stringify(posts));
        
        // Trigger event to update the displayed posts
        const select = document.querySelector('select');
        const event = new Event('change');
        select.dispatchEvent(event);
    } catch (error) {
        console.error('Error adding post:', error);
    }
}
