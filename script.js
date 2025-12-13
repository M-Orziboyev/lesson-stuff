const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const pink = document.querySelector('.pink');
const body = document.querySelector('body');

dark.addEventListener('click', () => {
    body.className = '';
});

light.addEventListener('click', () => {
    body.className = 'light-mode';
});

pink.addEventListener('click', () => {
    body.className = 'pink-mode';
});

document.addEventListener('DOMContentLoaded', () => {
    const allUsersContainer = document.querySelector('.all-users');
    const totalUsers = 20;

    const users = Array.from({ length: totalUsers }, (_, i) => ({
        name: `User Name ${i + 1}`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }));

    users.forEach((user, index) => {
        const userSection = document.createElement('div');
        userSection.classList.add('user-section');
        if (index > 0) {
            userSection.classList.add('hidden');
        }

        const userPic = document.createElement('div');
        userPic.classList.add('user-pic');
        const img = document.createElement('img');
        img.src = 'po.webp';
        img.alt = 'User Picture';
        userPic.appendChild(img);

        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');

        const h3 = document.createElement('h3');
        h3.textContent = user.name;

        const badges = document.createElement('div');
        badges.classList.add('badges');
        const badge1 = document.createElement('span');
        badge1.classList.add('badge');
        badge1.innerHTML = '<i class="fas fa-check-circle"></i> Verified';
        const badge2 = document.createElement('span');
        badge2.classList.add('badge');
        badge2.innerHTML = '<i class="fas fa-star"></i> Top Contributor';
        badges.appendChild(badge1);
        badges.appendChild(badge2);

        const p = document.createElement('p');
        p.classList.add('user-text');
        p.textContent = user.text;

        const readMoreBtn = document.createElement('button');
        readMoreBtn.classList.add('read-more');
        readMoreBtn.textContent = 'Read More';
        if (index === 0) {
            readMoreBtn.id = 'read-more-btn';
        }

        userInfo.appendChild(h3);
        userInfo.appendChild(badges);
        userInfo.appendChild(p);
        userInfo.appendChild(readMoreBtn);

        userSection.appendChild(userPic);
        userSection.appendChild(userInfo);

        allUsersContainer.appendChild(userSection);
    });

    const mainReadMoreBtn = document.getElementById('read-more-btn');
    if (mainReadMoreBtn) {
        mainReadMoreBtn.addEventListener('click', () => {
            const hiddenSections = document.querySelectorAll('.user-section.hidden');
            hiddenSections.forEach(section => {
                section.classList.remove('hidden');
            });

            const allReadMoreBtns = document.querySelectorAll('.read-more');
            allReadMoreBtns.forEach(btn => {
                btn.style.display = 'none';
            });
        });
    }
});
