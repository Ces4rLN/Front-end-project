function openDetails(profile) {
    document.getElementById(profile + '-details').style.display = 'flex';
}

function closeDetails() {
    const details = document.querySelectorAll('.details');
    details.forEach(detail => (detail.style.display = 'none'));
}


