const profileCard = document.getElementById("profile-card");
const profileOtherDetails = document.getElementById("other-details");
const profileNotFound = document.getElementById("not-found");
const profileNameInput = document.getElementById("profile-name");
const apiUrl = 'https://api.github.com/users/';

//function to initialize page - convention
//do not show the following in the DOM
function init() {
    profileCard.style.display = 'none';
    profileNotFound.style.display = 'none';
    profileOtherDetails.style.display = 'none';
    //callback function when there is a change event, declare function below
    profileNameInput.addEventListener('change', onProfileNameChange);
}

function renderProfileCard(profile) {
    //destructuring props 
    const { blog, public_repos, public_gists, bio, avatar_url,
        name, followers, following, html_url, location, company } = profile;

    profileCard.style.display = "block";
    profileOtherDetails.style.display = "block";
    const profileImage = document.getElementById("profile-image");
    const profileTitle = document.getElementById("profile-title");
    const profileFollowers = document.getElementById("profile-followers");
    const profileFollowing = document.getElementById("profile-following");
    const profilePage = document.getElementById('profile-page');
    const profileLocation = document.getElementById('profile-location');
    const organization = document.getElementById('org');
    const repos = document.getElementById('repos');
    const gists = document.getElementById('gists');
    const _bio = document.getElementById('bio');
    const _blog = document.getElementById('blog');

    // add the info to card details so that it renders 
    profileImage.setAttribute("src", avatar_url);
    profileTitle.innerHTML = name;
    profileFollowers.innerHTML = `Followers: ${followers || 0}`;
    profileFollowing.innerHTML = `Following: ${following || 0}`;
    profilePage.setAttribute("href", html_url);
    profileLocation.innerHTML = location;

    //Other details
    // if any of the details are not available show the second option
    organization.innerHTML = company || 'No Organization Data';
    _bio.innerHTML = bio || "No Bio Data";
    repos.innerHTML = public_repos || 0;
    gists.innerHTML = public_gists || 0;
    _blog.innerHTML = blog || 'No blog data';
}

//get event object, which event fired up this function and its elements
function onProfileNameChange(event) {
    const profileName = event.target.value;
    if (profileName.length > 0) {
        axios.get(`${apiUrl}${profileName}`)

            .then(function (response) {
                renderProfileCard(response.data)})

                .catch(function (err) {
                    profileCard.style.display = 'none';
                    profileNotFound.style.display = 'none';
                    profileOtherDetails.style.display = 'block';
                })
    } else {
        profileCard.style.display = 'none';
        profileNotFound.style.display = 'none';
        profileOtherDetails.style.display = 'none';
    }
}

init();



