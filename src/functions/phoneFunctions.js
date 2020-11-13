import React from 'react';
import { COUNTRY_CODES } from '../constants';
import { Flag } from 'semantic-ui-react';

export var GetCountryByNumber = (strCountryNumber='') => {
    var country = Object.values(COUNTRY_CODES).find(country => country.code === strCountryNumber);

    if(country) return {name: country?.name, code: country?.iso2?.toLowerCase()};

    return null;
};

export var GetCountryFlagByNumber = (strCountryNumber='') => {
    var number = strCountryNumber.replace('+', '');
    var country = GetCountryByNumber(number);

    if(country) return <Flag name={country.code} />

    return (<></>);
};

export var PhoneTextToComponent = phone => {
    if(!phone) return (<></>);

    var tokens = phone.split(' ');
    return (
        <>
            {GetCountryFlagByNumber(tokens[0])} ({tokens[0]}) {tokens[1]}
            <br/>
            {tokens.length > 3 ? `${tokens[2]} ${tokens[3]}` : tokens[2]}
        </>
    );
};