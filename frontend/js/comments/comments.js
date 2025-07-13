$(document).ready(getAllComments);

async function getAllComments() {
    const eventID = getParamFromURL('id');
    const url = EVENTSADDRESS + eventID + '/comments';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.statusText}`);
        }

        const comments = await response.json();
        console.log(comments);
        comments.forEach(comment => {
            $('#comments-list').append(createCommentElement(comment));
        })
    } catch (error) {
        console.error('Error while fetching events: ' + error.message);
    }
}


function createCommentElement(comment) {
    const $template = $('#comment-template').contents().clone();

    const formattedDate = moment(comment.creationDate).format('MMMM D, YYYY, h:mm a');

    $template.find('.user-avatar')
        .attr('src', comment.pictureURI)
        .attr('alt', `${comment.username}’s avatar`);

    $template.find('.comment-username').text(comment.username);
    $template.find('.comment-time').text(formattedDate);
    $template.find('p').text(comment.text);

    return $template;
}