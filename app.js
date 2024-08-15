document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.getElementById('register-button');
  const loginButton = document.getElementById('login-button');
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const profileForm = document.getElementById('profileForm');
  const landingContainer = document.getElementById('landing-container');
  const registerContainer = document.getElementById('register-container');
  const loginContainer = document.getElementById('login-container');
  const profileContainer = document.getElementById('profile-container');
  const activityContainer = document.getElementById('activity-container');
  const editProfileModal = document.getElementById('edit-profile-modal');
  const closeModalButton = document.getElementById('close-modal-button');
  const editProfileButton = document.getElementById('edit-profile-button');
  const welcomeNote = document.getElementById('welcome-note');
  const playerName = document.getElementById('profile-name');
  const playerFlags = document.getElementById('profile-flags');
  const playerGender = document.getElementById('profile-gender');
  const playerAge = document.getElementById('profile-age');
  const playerBirthday = document.getElementById('profile-birthday');
  const playerHeight = document.getElementById('profile-height');
  const playerWeight = document.getElementById('profile-weight');
  const playerPositionPlayed = document.getElementById('profile-positionPlayed');
  const playerStats = document.getElementById('player-stats');
  const profilePhoto = document.getElementById('profile-photo');
  const logoutButton = document.getElementById('logout-button');
  const editProfileName = document.getElementById('edit-profile-name');
  const editProfileGender = document.getElementById('edit-profile-gender');
  const editProfileAge = document.getElementById('edit-profile-age');
  const editProfileBirthday = document.getElementById('edit-profile-birthday');
  const editProfileHeight = document.getElementById('edit-profile-height');
  const editProfileWeight = document.getElementById('edit-profile-weight');
  const editProfilePositionPlayed = document.getElementById('edit-profile-positionPlayed');
  const editProfilePhoto = document.getElementById('edit-profile-photo');
  const editProfileNationality1 = document.getElementById('edit-profile-nationality1');
  const editProfileNationality2 = document.getElementById('edit-profile-nationality2');
  const confirmationMessage = document.createElement('div');
  confirmationMessage.classList.add('confirmation-message');
  document.body.appendChild(confirmationMessage);

  const createClubButton = document.getElementById('create-club-button');
  const createClubModal = document.getElementById('create-club-modal');
  const closeCreateClubModalButton = document.getElementById('close-create-club-modal-button');
  const createClubForm = document.getElementById('createClubForm');
  const clubSelect = document.getElementById('club-select');
  const clubList = document.getElementById('club-list');
  const addAdminButton = document.getElementById('add-admin-button');
  const clubAdminsInput = document.getElementById('club-admins');
  const clubAdminsContainer = document.getElementById('club-admins-container');
  const clubAmbassadorInput = document.getElementById('club-ambassador');
  const deleteClubModal = document.getElementById('delete-club-modal');
  const closeDeleteClubModalButton = document.getElementById('close-delete-club-modal-button');
  const deleteClubButton = document.getElementById('delete-club-button');
  const deleteClubPassword = document.getElementById('delete-club-password');
  const calendar = document.getElementById('calendar');
  const gameFormContainer = document.getElementById('game-form-container');
  const createGameForm = document.getElementById('createGameForm');
  const eventsList = document.getElementById('events-list');

  let clubs = JSON.parse(localStorage.getItem('clubs')) || [];
  let currentUserEmail = localStorage.getItem('currentUser');
  let currentUser = JSON.parse(localStorage.getItem(currentUserEmail)) || null;
  let clubAdmins = [];
  let games = JSON.parse(localStorage.getItem('games')) || [];

  const countries = {
    "af": "Afghanistan",
    "ax": "Åland Islands",
    "al": "Albania",
    "dz": "Algeria",
    "as": "American Samoa",
    "ad": "Andorra",
    "ao": "Angola",
    "ai": "Anguilla",
    "aq": "Antarctica",
    "ag": "Antigua and Barbuda",
    "ar": "Argentina",
    "am": "Armenia",
    "aw": "Aruba",
    "au": "Australia",
    "at": "Austria",
    "az": "Azerbaijan",
    "bs": "Bahamas",
    "bh": "Bahrain",
    "bd": "Bangladesh",
    "bb": "Barbados",
    "by": "Belarus",
    "be": "Belgium",
    "bz": "Belize",
    "bj": "Benin",
    "bm": "Bermuda",
    "bt": "Bhutan",
    "bo": "Bolivia",
    "bq": "Bonaire, Sint Eustatius and Saba",
    "ba": "Bosnia and Herzegovina",
    "bw": "Botswana",
    "bv": "Bouvet Island",
    "br": "Brazil",
    "io": "British Indian Ocean Territory",
    "bn": "Brunei Darussalam",
    "bg": "Bulgaria",
    "bf": "Burkina Faso",
    "bi": "Burundi",
    "cv": "Cabo Verde",
    "kh": "Cambodia",
    "cm": "Cameroon",
    "ca": "Canada",
    "ky": "Cayman Islands",
    "cf": "Central African Republic",
    "td": "Chad",
    "cl": "Chile",
    "cn": "China",
    "cx": "Christmas Island",
    "cc": "Cocos (Keeling) Islands",
    "co": "Colombia",
    "km": "Comoros",
    "cg": "Congo",
    "cd": "Congo, Democratic Republic of the",
    "ck": "Cook Islands",
    "cr": "Costa Rica",
    "ci": "Côte d'Ivoire",
    "hr": "Croatia",
    "cu": "Cuba",
    "cw": "Curaçao",
    "cy": "Cyprus",
    "cz": "Czech Republic",
    "dk": "Denmark",
    "dj": "Djibouti",
    "dm": "Dominica",
    "do": "Dominican Republic",
    "ec": "Ecuador",
    "eg": "Egypt",
    "sv": "El Salvador",
    "gq": "Equatorial Guinea",
    "er": "Eritrea",
    "ee": "Estonia",
    "sz": "Eswatini",
    "et": "Ethiopia",
    "fk": "Falkland Islands (Malvinas)",
    "fo": "Faroe Islands",
    "fj": "Fiji",
    "fi": "Finland",
    "fr": "France",
    "gf": "French Guiana",
    "pf": "French Polynesia",
    "tf": "French Southern Territories",
    "ga": "Gabon",
    "gm": "Gambia",
    "ge": "Georgia",
    "de": "Germany",
    "gh": "Ghana",
    "gi": "Gibraltar",
    "gr": "Greece",
    "gl": "Greenland",
    "gd": "Grenada",
    "gp": "Guadeloupe",
    "gu": "Guam",
    "gt": "Guatemala",
    "gg": "Guernsey",
    "gn": "Guinea",
    "gw": "Guinea-Bissau",
    "gy": "Guyana",
    "ht": "Haiti",
    "hm": "Heard Island and McDonald Islands",
    "va": "Holy See",
    "hn": "Honduras",
    "hk": "Hong Kong",
    "hu": "Hungary",
    "is": "Iceland",
    "in": "India",
    "id": "Indonesia",
    "ir": "Iran, Islamic Republic of",
    "iq": "Iraq",
    "ie": "Ireland",
    "im": "Isle of Man",
    "il": "Israel",
    "it": "Italy",
    "jm": "Jamaica",
    "jp": "Japan",
    "je": "Jersey",
    "jo": "Jordan",
    "kz": "Kazakhstan",
    "ke": "Kenya",
    "ki": "Kiribati",
    "kp": "Korea, Democratic People's Republic of",
    "kr": "Korea, Republic of",
    "kw": "Kuwait",
    "kg": "Kyrgyzstan",
    "la": "Lao People's Democratic Republic",
    "lv": "Latvia",
    "lb": "Lebanon",
    "ls": "Lesotho",
    "lr": "Liberia",
    "ly": "Libya",
    "li": "Liechtenstein",
    "lt": "Lithuania",
    "lu": "Luxembourg",
    "mo": "Macao",
    "mg": "Madagascar",
    "mw": "Malawi",
    "my": "Malaysia",
    "mv": "Maldives",
    "ml": "Mali",
    "mt": "Malta",
    "mh": "Marshall Islands",
    "mq": "Martinique",
    "mr": "Mauritania",
    "mu": "Mauritius",
    "yt": "Mayotte",
    "mx": "Mexico",
    "fm": "Micronesia (Federated States of)",
    "md": "Moldova (Republic of)",
    "mc": "Monaco",
    "mn": "Mongolia",
    "me": "Montenegro",
    "ms": "Montserrat",
    "ma": "Morocco",
    "mz": "Mozambique",
    "mm": "Myanmar",
    "na": "Namibia",
    "nr": "Nauru",
    "np": "Nepal",
    "nl": "Netherlands",
    "nc": "New Caledonia",
    "nz": "New Zealand",
    "ni": "Nicaragua",
    "ne": "Niger",
    "ng": "Nigeria",
    "nu": "Niue",
    "nf": "Norfolk Island",
    "mk": "North Macedonia",
    "mp": "Northern Mariana Islands",
    "no": "Norway",
    "om": "Oman",
    "pk": "Pakistan",
    "pw": "Palau",
    "ps": "Palestine, State of",
    "pa": "Panama",
    "pg": "Papua New Guinea",
    "py": "Paraguay",
    "pe": "Peru",
    "ph": "Philippines",
    "pn": "Pitcairn",
    "pl": "Poland",
    "pt": "Portugal",
    "pr": "Puerto Rico",
    "qa": "Qatar",
    "re": "Réunion",
    "ro": "Romania",
    "ru": "Russian Federation",
    "rw": "Rwanda",
    "bl": "Saint Barthélemy",
    "sh": "Saint Helena, Ascension and Tristan da Cunha",
    "kn": "Saint Kitts and Nevis",
    "lc": "Saint Lucia",
    "mf": "Saint Martin (French part)",
    "pm": "Saint Pierre and Miquelon",
    "vc": "Saint Vincent and the Grenadines",
    "ws": "Samoa",
    "sm": "San Marino",
    "st": "Sao Tome and Principe",
    "sa": "Saudi Arabia",
    "sn": "Senegal",
    "rs": "Serbia",
    "sc": "Seychelles",
    "sl": "Sierra Leone",
    "sg": "Singapore",
    "sx": "Sint Maarten (Dutch part)",
    "sk": "Slovakia",
    "si": "Slovenia",
    "sb": "Solomon Islands",
    "so": "Somalia",
    "za": "South Africa",
    "gs": "South Georgia and the South Sandwich Islands",
    "ss": "South Sudan",
    "es": "Spain",
    "lk": "Sri Lanka",
    "sd": "Sudan",
    "sr": "Suriname",
    "sj": "Svalbard and Jan Mayen",
    "se": "Sweden",
    "ch": "Switzerland",
    "sy": "Syrian Arab Republic",
    "tw": "Taiwan, Province of China",
    "tj": "Tajikistan",
    "tz": "Tanzania, United Republic of",
    "th": "Thailand",
    "tl": "Timor-Leste",
    "tg": "Togo",
    "tk": "Tokelau",
    "to": "Tonga",
    "tt": "Trinidad and Tobago",
    "tn": "Tunisia",
    "tr": "Turkey",
    "tm": "Turkmenistan",
    "tc": "Turks and Caicos Islands",
    "tv": "Tuvalu",
    "ug": "Uganda",
    "ua": "Ukraine",
    "ae": "United Arab Emirates",
    "gb": "United Kingdom of Great Britain and Northern Ireland",
    "us": "United States of America",
    "um": "United States Minor Outlying Islands",
    "uy": "Uruguay",
    "uz": "Uzbekistan",
    "vu": "Vanuatu",
    "ve": "Venezuela (Bolivarian Republic of)",
    "vn": "Viet Nam",
    "vg": "Virgin Islands (British)",
    "vi": "Virgin Islands (U.S.)",
    "wf": "Wallis and Futuna",
    "eh": "Western Sahara",
    "ye": "Yemen",
    "zm": "Zambia",
    "zw": "Zimbabwe"
  };

  const populateCountryDropdowns = () => {
    Object.keys(countries).forEach(code => {
      const option1 = document.createElement('option');
      option1.value = code;
      option1.textContent = countries[code];
      editProfileNationality1.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = code;
      option2.textContent = countries[code];
      editProfileNationality2.appendChild(option2);
    });
  };

  const showConfirmationMessage = (message) => {
    confirmationMessage.innerText = message;
    confirmationMessage.style.display = 'block';
    setTimeout(() => {
      confirmationMessage.style.display = 'none';
    }, 3000);
  };

  const getFlagIcon = (countryCode) => {
    if (!countryCode) return '';
    return `<span class="fi fi-${countryCode.toLowerCase()}"></span>`;
  };

  const displayProfile = () => {
    const email = localStorage.getItem('currentUser');
    const storedUser = JSON.parse(localStorage.getItem(email));

    playerName.innerText = storedUser.name;
    playerGender.innerText = `Gender: ${storedUser.gender || ''}`;
    playerAge.innerText = `Age: ${storedUser.age || ''}`;
    playerBirthday.innerText = `Birthday: ${storedUser.birthday || ''}`;
    playerHeight.innerText = `Height: ${storedUser.height || ''} cm`;
    playerWeight.innerText = `Weight: ${storedUser.weight || ''} kg`;
    playerPositionPlayed.innerText = `Position Played: ${storedUser.positionPlayed || ''}`;
    profilePhoto.src = storedUser.profilePhoto || 'default-profile.png';
    playerStats.innerText = `Reputation: ${storedUser.reputation || 0}\nAttitude: ${storedUser.attitude || 0}\nGames Played: ${storedUser.gamesPlayed || 0}\nGames Missed: ${storedUser.gamesMissed || 0}\nLeague MVP: ${storedUser.leagueMVP || 0}\nMythical Awards: ${storedUser.mythicalAwards || 0}`;

    playerFlags.innerHTML = '';
    if (storedUser.nationality1) {
      playerFlags.innerHTML += getFlagIcon(storedUser.nationality1);
    }
    if (storedUser.nationality2) {
      playerFlags.innerHTML += getFlagIcon(storedUser.nationality2);
    }

    loginContainer.style.display = 'none';
    profileContainer.style.display = 'block';
    activityContainer.style.display = 'block';
  };

  const displayActivity = () => {
    activityContainer.style.display = 'block';
  };

  const fillEditProfileForm = () => {
    const email = localStorage.getItem('currentUser');
    const storedUser = JSON.parse(localStorage.getItem(email));

    editProfileName.value = storedUser.name;
    editProfileGender.value = storedUser.gender || '';
    editProfileAge.value = storedUser.age || '';
    editProfileBirthday.value = storedUser.birthday || '';
    editProfileHeight.value = storedUser.height || '';
    editProfileWeight.value = storedUser.weight || '';
    editProfilePositionPlayed.value = storedUser.positionPlayed || '';
    editProfileNationality1.value = storedUser.nationality1 || '';
    editProfileNationality2.value = storedUser.nationality2 || '';
  };

  const checkLoginStatus = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      welcomeNote.innerText = 'Welcome back Ballers';
      displayProfile();
      displayActivity();
    } else {
      landingContainer.style.display = 'block';
      profileContainer.style.display = 'none';
      activityContainer.style.display = 'none';
    }
  };

  registerButton.addEventListener('click', () => {
    landingContainer.style.display = 'none';
    registerContainer.style.display = 'block';
  });

  loginButton.addEventListener('click', () => {
    landingContainer.style.display = 'none';
    loginContainer.style.display = 'block';
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = { name, email, password };

    localStorage.setItem(email, JSON.stringify(newUser));
    showConfirmationMessage('User registered successfully');
    registerForm.reset();
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser && storedUser.password === password) {
      localStorage.setItem('currentUser', email);
      displayProfile();
      displayActivity();
    } else {
      alert('Invalid credentials');
    }
  });

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = localStorage.getItem('currentUser');
    const storedUser = JSON.parse(localStorage.getItem(email));

    storedUser.name = editProfileName.value;
    storedUser.gender = editProfileGender.value;
    storedUser.age = editProfileAge.value;
    storedUser.birthday = editProfileBirthday.value;
    storedUser.height = editProfileHeight.value;
    storedUser.weight = editProfileWeight.value;
    storedUser.positionPlayed = editProfilePositionPlayed.value;
    storedUser.nationality1 = editProfileNationality1.value;
    storedUser.nationality2 = editProfileNationality2.value;

    if (editProfilePhoto.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        storedUser.profilePhoto = e.target.result;
        profilePhoto.src = e.target.result;
        localStorage.setItem(email, JSON.stringify(storedUser));
        showConfirmationMessage('Profile updated successfully');
        displayProfile();
        editProfileModal.style.display = 'none';
      };
      reader.readAsDataURL(editProfilePhoto.files[0]);
    } else {
      localStorage.setItem(email, JSON.stringify(storedUser));
      showConfirmationMessage('Profile updated successfully');
      displayProfile();
      editProfileModal.style.display = 'none';
    }
  });

  editProfileButton.addEventListener('click', () => {
    editProfileModal.style.display = 'block';
    fillEditProfileForm();
  });

  closeModalButton.addEventListener('click', () => {
    editProfileModal.style.display = 'none';
  });

  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    profileContainer.style.display = 'none';
    activityContainer.style.display = 'none';
    landingContainer.style.display = 'block';
  });

  const renderClubs = () => {
    clubSelect.innerHTML = '';
    clubList.innerHTML = '';

    clubs.forEach(club => {
      const option = document.createElement('option');
      option.value = club.name;
      option.textContent = club.name;
      clubSelect.appendChild(option);

      const clubDiv = document.createElement('div');
      clubDiv.classList.add('club');
      clubDiv.innerHTML = `
        <h4><img src="${club.logo}" alt="${club.name} logo" class="club-logo"> ${club.name}</h4>
        <button class="leave-club-button" data-club-name="${club.name}">Leave Club</button>
        <p>${club.history}</p>
        <p>Established: ${club.year}</p>
        <p>Location: ${club.location}</p>
        <p>Ambassador: ${club.ambassador}</p>
        <p>Admins: ${club.admins.join(', ')}</p>
        <p>Total Members: ${club.members.length}</p>
      `;
      
      if (club.ambassador === currentUser.name || club.admins.includes(currentUser.name)) {
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit Club Details';
        editButton.classList.add('edit-club-button');
        editButton.addEventListener('click', () => {
          fillEditClubForm(club);
          createClubModal.style.display = 'block';
        });
        clubDiv.appendChild(editButton);
      }

      if (club.ambassador === currentUser.name) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Club';
        deleteButton.classList.add('delete-club-button');
        deleteButton.addEventListener('click', () => {
          deleteClubModal.style.display = 'block';
          deleteClubButton.addEventListener('click', () => {
            const password = deleteClubPassword.value;
            if (password === currentUser.password) {
              clubs = clubs.filter(c => c.name !== club.name);
              localStorage.setItem('clubs', JSON.stringify(clubs));
              showConfirmationMessage('Club deleted successfully');
              deleteClubModal.style.display = 'none';
              renderClubs();
              checkCreateClubButtonVisibility();
            } else {
              alert('Incorrect password');
            }
          });
        });
        clubDiv.appendChild(deleteButton);
      }

      clubList.appendChild(clubDiv);
    });

    document.querySelectorAll('.leave-club-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const clubName = e.target.getAttribute('data-club-name');
        leaveClub(clubName);
      });
    });
  };

  const leaveClub = (clubName) => {
    clubs = clubs.map(club => {
      if (club.name === clubName) {
        club.members = club.members.filter(member => member !== currentUser.name);
        club.admins = club.admins.filter(admin => admin !== currentUser.name);
      }
      return club;
    });
    localStorage.setItem('clubs', JSON.stringify(clubs));
    showConfirmationMessage('You have left the club.');
    renderClubs();
  };

  const checkCreateClubButtonVisibility = () => {
    if (clubs.some(club => club.ambassador === currentUser.name)) {
      createClubButton.style.display = 'none';
    } else {
      createClubButton.style.display = 'block';
    }
  };

  createClubButton.addEventListener('click', () => {
    clubAmbassadorInput.value = currentUser.name;
    createClubModal.style.display = 'block';
  });

  closeCreateClubModalButton.addEventListener('click', () => {
    createClubModal.style.display = 'none';
  });

  closeDeleteClubModalButton.addEventListener('click', () => {
    deleteClubModal.style.display = 'none';
  });

  addAdminButton.addEventListener('click', () => {
    const adminName = clubAdminsInput.value.trim();
    if (adminName && !clubAdmins.includes(adminName)) {
      clubAdmins.push(adminName);
      const adminTag = document.createElement('span');
      adminTag.textContent = adminName;
      adminTag.style.marginRight = '10px';
      clubAdminsContainer.appendChild(adminTag);
      clubAdminsInput.value = '';
    }
  });

  createClubForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const ambassador = document.getElementById('club-ambassador').value;
    const name = document.getElementById('club-name').value;
    const logoFile = document.getElementById('club-logo').files[0];
    const history = document.getElementById('club-history').value;
    const year = document.getElementById('club-year').value;
    const location = document.getElementById('club-location').value;

    if (!logoFile) {
      alert('Please upload a logo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const logo = e.target.result;
      const newClub = { ambassador, name, logo, history, year, location, admins: clubAdmins, members: [ambassador] };
      clubs.push(newClub);
      localStorage.setItem('clubs', JSON.stringify(clubs));
      showConfirmationMessage('Club created successfully');
      createClubForm.reset();
      clubAdmins = [];
      clubAdminsContainer.querySelectorAll('span').forEach(span => span.remove());
      createClubModal.style.display = 'none';
      renderClubs();
      checkCreateClubButtonVisibility();
    };
    reader.readAsDataURL(logoFile);
  });

  const fillEditClubForm = (club) => {
    document.getElementById('club-ambassador').value = club.ambassador;
    document.getElementById('club-name').value = club.name;
    document.getElementById('club-history').value = club.history;
    document.getElementById('club-year').value = club.year;
    document.getElementById('club-location').value = club.location;
    clubAdmins = club.admins;
    clubAdminsContainer.innerHTML = '';
    club.admins.forEach(admin => {
      const adminTag = document.createElement('span');
      adminTag.textContent = admin;
      adminTag.style.marginRight = '10px';
      clubAdminsContainer.appendChild(adminTag);
    });
  };

  calendar.addEventListener('change', (e) => {
    gameFormContainer.style.display = 'block';
  });

  createGameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const gameTitle = document.getElementById('game-title').value;
    const gameLocation = document.getElementById('game-location').value;
    const gameDate = document.getElementById('game-date').value;
    const gameTime = document.getElementById('game-time').value;
    const gameDuration = document.getElementById('game-duration').value;
    const gameSetDuration = document.getElementById('game-set-duration').value;
    const gameMaxPlayers = document.getElementById('game-max-players').value;
    const gameReputationReward = document.getElementById('game-reputation-reward').value;

    const newGame = {
      title: gameTitle,
      location: gameLocation,
      date: gameDate,
      time: gameTime,
      duration: gameDuration,
      setDuration: gameSetDuration,
      maxPlayers: gameMaxPlayers,
      reputationReward: gameReputationReward,
      attendees: []
    };

    games.push(newGame);
    localStorage.setItem('games', JSON.stringify(games));
    showConfirmationMessage('Game scheduled successfully');
    createGameForm.reset();
    gameFormContainer.style.display = 'none';
    renderGames();
  });

  const renderGames = () => {
    eventsList.innerHTML = '';
    games.forEach(game => {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('event');
      eventDiv.innerHTML = `
        <h4>${game.title}</h4>
        <p>Date: ${game.date}</p>
        <p>Time: ${game.time}</p>
        <p>Location: ${game.location}</p>
      `;
      eventsList.appendChild(eventDiv);
    });
  };

  // Initial setup
  renderClubs();
  checkCreateClubButtonVisibility();
  renderGames();

  // Populate country dropdowns on page load
  populateCountryDropdowns();

  // Check login status on page load
  checkLoginStatus();
});
