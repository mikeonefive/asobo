const imageBaseURL = "/images/events/";

$(document).ready(getAllEvents);

function getAllEvents() {
    $.getJSON('/api/events')
        .done(function (jsonData) {
            jsonData.forEach(element => {
                console.log(element);
            });
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log('Error', textStatus, errorThrown);
        });
}


// TODO: target events list and append each created eventCard to that list


function createEventCard(event) {
    const $card = $('<div>').addClass('card event-card');

    const $image = $('<img>')
        .addClass('card-img-top')
        .attr('src', imageBaseURL + event.pictureURI)
        .attr('alt', event.title + ' picture');

    const $imageContainer = $('<div>')
        .addClass('card-image-container')
        .append($image);

    const $cardBody = $('<div>').addClass('card-body');

    const $title = $('<h6>').addClass('card-title').text(event.title);
    const $date = $('<div>').addClass('date-text text-muted').text(event.date);
    const $time = $('<div>').addClass('date-text text-muted').text(event.time);
    const $location = $('<div>').addClass('location-text text-muted mt-2').text('in ' + event.location);

    $cardBody.append($title, $date, $time, $location);
    $card.append($imageContainer, $cardBody);

    return $card;
}