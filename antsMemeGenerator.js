// used to wait for the DOM to be fully loaded before running
document.addEventListener('DOMContentLoaded', () => {
    //used to show where the memes will be placed on the page
    const memeForm = document.getElementById('memeForm');
    const memeContainer = document.getElementById('memeContainer');

    memeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // used to grab values from what was inputted
        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;
        const imageUrl = document.getElementById('imageUrl').value;

        createMeme(topText, bottomText, imageUrl);
        memeForm.reset();
    });

    // used to create and add a new meme to the page
    function createMeme(topText, bottomText, imageUrl) {
        const memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');

        const memeImage = document.createElement('img');
        memeImage.src = imageUrl;
        memeImage.alt = 'Meme';

        const topTextDiv = document.createElement('div');
        topTextDiv.classList.add('meme-text', 'top-text');
        topTextDiv.textContent = topText;

        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('meme-text', 'bottom-text');
        bottomTextDiv.textContent = bottomText;

        // creates delete button on memes
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        // adds event listener to delete button 
        deleteButton.addEventListener('click', () => {
            // deletes meme by removing meme div
            memeContainer.removeChild(memeDiv);
        });
        
        // appends all elements to the meme div
        memeDiv.appendChild(memeImage);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeDiv.appendChild(deleteButton);
        // adds new meme div
        memeContainer.appendChild(memeDiv);
    }
});
