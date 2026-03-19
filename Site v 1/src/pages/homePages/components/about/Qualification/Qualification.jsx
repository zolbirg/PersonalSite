import classes from './qualification.module.scss';
import { PiBriefcaseDuotone, PiCertificateDuotone } from 'react-icons/pi';
import Work from './QualificationComponent/Work.jsx';
import Education from './QualificationComponent/Education.jsx';

import { useState } from 'react';

export default function Qualification() {
    const [tab, setTab] = useState('work');

    return (
        <section>
            <div className={classes.qualification__tabs}>
                <div
                    onClick={() => setTab('work')}
                    className={
                        tab === 'work'
                            ? `${classes.qualification__name} button button__active `
                            : `${classes.qualification__name} button `
                    }
                >
                    <PiBriefcaseDuotone
                        className={classes.qualification__icon}
                    />
                    Work
                </div>
                <div
                    onClick={() => setTab('education')}
                    className={
                        tab === 'education'
                            ? `${classes.qualification__name} button button__active `
                            : `${classes.qualification__name} button `
                    }
                >
                    <PiCertificateDuotone
                        className={classes.qualification__icon}
                    />
                    Education
                </div>
            </div>
            <div>
                {tab === 'work' && <Work />}
                {tab === 'education' && <Education />}
            </div>
        </section>
    );
}
