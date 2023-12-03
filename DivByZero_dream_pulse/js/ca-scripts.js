function addCustomerName() {
    let customerName = 'Customer Name'
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
    let customerIntro1 = 'Alliance was founded in 1931 by Albert Daniels.';
    let customerIntro2 = 'The company is a leader in P.C. Manufacturing';
    let customerAbout1 = 'We deliver the best service this side of creation';
    let customerMotto = 'Our motto is satisfaction guaranteed';
    let customerPhoneNumber = '1-800-565-5656';

    document.getElementById('intropara1').textContent = customerIntro1;
    document.getElementById('intropara2').textContent = customerIntro2;
    document.getElementById('aboutpara1').textContent = customerAbout1;
    document.getElementById('aboutpara2').textContent = customerMotto;
    document.getElementById('addresspara').textContent = customerPhoneNumber;
}
