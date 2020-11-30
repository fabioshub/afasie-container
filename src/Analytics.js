import React, { useState, useEffect } from 'react';
import {
    useHistory, useLocation,
} from 'react-router-dom';
import ReactGA from 'react-ga';

export const onClickAnalytics = (func, knopTitel) => {
    return () => {
        ReactGA.event({
            category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
            action: 'Knop geklikt',
            label: `Op pagina ${window.location.pathname} geklikt op de knop: ${knopTitel}`
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
            console.log('RUNNING')
            if (title.trim().length) {
                setPathname('Home / ' + title);
                ReactGA.pageview(window.location.pathname);
                ReactGA.event({
                    category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
                    action: 'Navigeren',
                    label: `Naar pagina ${window.location.pathname}`
                  });
            } else {
                setPathname('Home')
                ReactGA.pageview('Home');
                ReactGA.event({
                    category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
                    action: 'Navigeren',
                    label: `Naar pagina ${window.location.pathname}`
                  });
            }
        })
    }, [])

    useEffect(() => {
            localStorage.setItem('userType', query.has('userType') ? query.get('userType') : 'gebruiker zonder type');
        ReactGA.initialize('G-86K3Q9C6GS');
        const title = window.location.pathname.split('/').filter(a => a.length).join(' / ').split('-').join(' ')
        if (title.trim().length) {
            setPathname('Home / ' + title);
            ReactGA.pageview(window.location.pathname);
            ReactGA.event({
                category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
                action: 'geland',
                label: `Gestart op pagina ${window.location.pathname}`
              });
        } else {
            setPathname('Home')
            ReactGA.pageview('Home');
            ReactGA.event({
                category: `${localStorage.getItem('userType') || 'gebruiker zonder type'} activiteiten`,
                action: 'Geland',
                label: `Gestart op pagina ${window.location.pathname}`
              });
        }
    }, [])
    return <></>
}
