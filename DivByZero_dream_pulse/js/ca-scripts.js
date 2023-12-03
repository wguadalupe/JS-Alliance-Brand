function addCustomerName() {
    let header = document.getElementById('tm-header');
    header.textContent = customerName;
}
function toggleColors() {
    let elements = document.querySelectorAll('.tm-white-rect');
    elements.forEach(element => {
        element.classList.replace('tm-white-rect', 'tm-blue-rect');
    });
}

function hideElement() {
    let socialLinks = document.querySelector('.nav.flex-row.tm-social-links');
    if (socialLinks) {
        socialLinks.style.display = 'none';
    }
}

function addAllianceToHeader() {
    let introHeader = document.getElementById('introheader');
    if (introHeader) {
        introHeader.textContent += ' Alliance';
    }
}


function addText() {
    document.getElementById('intropara1').textContent = customerIntro1;
    document.getElementById('intropara2').textContent = customerIntro2;
    document.getElementById('aboutpara1').textContent = customerAbout1;
    document.getElementById('aboutpara2').textContent = customerMotto;
    document.getElementById('addresspara').textContent = customerPhoneNumber;
}
