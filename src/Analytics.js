import React, { useState, useEffect } from 'react';
import {
    useHistory, useLocation,
} from 'react-router-dom';
import ReactGA from 'react-ga';

export const onClickAnalytics = (func, knopTitel) => {
    return () => {
        ReactGA.event({
            category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
            action: `Doelgroep: ${localStorage.getItem('userType') || 'gebruiker zonder type'}. Op pagina ${window.location.pathname} geklikt op de knop: ${knopTitel}`,
            label: '',
          });
        func();
    };
};

export const Analytics = () => {
    const [pathname, setPathname] = useState('');
    let history = useHistory();
    let query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        history.listen(loc => {
            const title = loc.pathname.split('/').filter(a => a.length).join(' / ').split('-').join(' ')
            if (!title.trim().length) return;
            if (title.trim().length) {
                setPathname('Home / ' + title);
                ReactGA.pageview(window.location.pathname);
                ReactGA.event({
                    category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
                    action: `Doelgroep: ${localStorage.getItem('userType') || 'gebruiker zonder type'}. Naar pagina ${window.location.pathname}`,
                  });
            } else {
                setPathname('Home')
                ReactGA.pageview('Home');
                ReactGA.event({
                    category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
                    action: `Doelgroep: ${localStorage.getItem('userType') || 'gebruiker zonder type'}. Naar pagina ${window.location.pathname}`,
                  });
            }
        })
    }, [])

    useEffect(() => {
            localStorage.setItem('userType', query.has('userType') ? query.get('userType') : 'gebruiker zonder type');
        ReactGA.initialize('UA-183966412-1');
        const title = window.location.pathname.split('/').filter(a => a.length).join(' / ').split('-').join(' ')
        if (title.trim().length) {
            setPathname('Home / ' + title);
            ReactGA.pageview(window.location.pathname);
            ReactGA.event({
                category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
                action: `Doelgroep: ${localStorage.getItem('userType') || 'gebruiker zonder type'}. Gestart op pagina ${window.location.pathname}`,
              });
        } else {
            setPathname('Home')
            ReactGA.pageview('Home');
            ReactGA.event({
                category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
                action: `Doelgroep: ${localStorage.getItem('userType') || 'gebruiker zonder type'}. Gestart op pagina ${window.location.pathname}`,
              });
        }
    }, [])
    return <></>
}
