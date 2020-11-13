import { GITHUB_HOST, GOOGLE_MAPS_PLACE_LINK, INSTAGRAM_HOST, MAIL_TO, STRING_EMPTY } from "../constants";

export var CreateMailToLink = mailAddrress => mailAddrress ? `${MAIL_TO}${mailAddrress}` : STRING_EMPTY;

export var CreateGithubLink = githubUsername => githubUsername ? `${GITHUB_HOST}${githubUsername}` : STRING_EMPTY;

export var CreateInstagramLink = instagramUsername => instagramUsername ? `${INSTAGRAM_HOST}${instagramUsername}` : STRING_EMPTY;

export var CreateMapsLink = (address='', number='', neighboorhod='', city='', state='') => `
    ${GOOGLE_MAPS_PLACE_LINK}${address.replace(' ', '+')}+${number}
    +${neighboorhod}+${city}+ - + ${state}
`;