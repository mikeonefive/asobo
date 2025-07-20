$(document).ready(getAndShowEvent);

$("#media-thumbnail-container").on("click", "#add-media-container", function() {
    $("#media-input").click();
});

$("#media-thumbnail-container").on("change", "#media-input", async function (e) {
    e.preventDefault();

    let formData = new FormData();
    const fileInput = $("input[name='mediumFile']")[0];
    if (fileInput && fileInput.files.length > 0) {
        formData.append("mediumFile", fileInput.files[0]);
    }

    const eventID = getParamFromURL('id');
    const url = EVENTSADDRESS + eventID + '/media';

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            console.error(`Request failed. Status: ${response.status} (${response.statusText})`);
            throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Media upload:", data);

        const $singleMediaContainer = createMediaThumbnail(data);
        const $mediaThumbnailContainer = $("#media-thumbnail-container .single-media-container:last-child");
        $mediaThumbnailContainer.before($singleMediaContainer);

    } catch (error) {
        console.error('Network or fetch error:', error);
    }
});


async function getAndShowEvent() {
    const eventID = getParamFromURL('id');
    const url = EVENTSADDRESS + eventID;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.statusText}`);
        }

        const event = await response.json();
        addEventToPage(event);
        showParticipantsAvatars(event.participants);
        showMediaThumbnails(event.media);
    } catch (error) {
        console.error(error.message);
    }
}


function addEventToPage(event) {
    const $template = $('#event-template').contents().clone();
    $template.find('.event-image-container img')
        .attr('src', event.pictureURI)
        .attr('alt', event.title);

    $template.find('#event-basic-info-container #event-title')
        .text(event.title);

    const formattedDate = moment(event.date).format('ddd, MMMM D, YYYY');
    $template.find('#event-basic-info-container #event-date')
        .text(formattedDate);

    $template.find('#event-basic-info-container #event-location')
        .text(`in ${event.location}`);

    const formattedTime = moment(event.date).format('h:mm a');
    $template.find('#event-basic-info-container #event-time')
        .text(formattedTime);

    $template.find('#event-description-container')
        .text(event.description);

    $('#single-event-container').append($template);
}


function showParticipantsAvatars(participants) {
    participants.forEach(participant => {
        createUserAvatar(participant);
    });
}


function createUserAvatar(participant) {
    const $participantsAvatarContainer = $("#participants-avatar-container");
    const $avatar = $('#participant-avatar-template')
        .contents()
        .clone()
        .attr('src', participant.pictureURI)
        .attr('alt', participant.username);

    $participantsAvatarContainer.append($avatar);
}


function showMediaThumbnails(media) {
    createAddMediaButton();

    media.forEach(mediaItem => {
        const $singleMediaContainer = createMediaThumbnail(mediaItem);
        const $mediaThumbnailContainer = $("#media-thumbnail-container .single-media-container:last-child");
        $mediaThumbnailContainer.before($singleMediaContainer);
    });
}


function createAddMediaButton() {
    const $mediaThumbnailContainer = $("#media-thumbnail-container");

    const $inputField = $('<input>')
        .attr('type', 'file')
        .attr('id', 'media-input')
        .attr('name', 'mediumFile')
        .attr('accept', 'image/*,video/*')
        .attr('style', 'display:none');

    const $addMediaContainer = $('<div>')
        .addClass('single-media-container');

    const $addMediaThumbnail = $('<div>')
        .attr('id', 'add-media-container')
        .addClass('add-media-button')
        .text('+');

    $addMediaContainer.append($addMediaThumbnail);
    $mediaThumbnailContainer.append($inputField, $addMediaContainer);
}


function createMediaThumbnail(mediaItem) {
    const $singleMediaContainer = $('<div>')
        .addClass('single-media-container');

    let $createdThumbnail;
    if (mediaItem.mediumURI.match(/\.(mp4|webm|ogg)$/)) {
        $createdThumbnail = $('<video>')
            .attr('src', mediaItem.mediumURI)
            .attr('controls', true)
            .attr('width', '100%');
    } else {
        $createdThumbnail = $('<img>')
            .attr('src', mediaItem.mediumURI)
            .attr('alt', mediaItem.id);
    }

    $singleMediaContainer.append($createdThumbnail);
    return $singleMediaContainer;
}
