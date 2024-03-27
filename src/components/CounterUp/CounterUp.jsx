import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import classes from './CounterUp.module.css'

const CounterUp = () => {
    const [counterOn, setCounterOn] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (counterOn) {
            setLoaded(true);
        }
    }, [counterOn]);

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-6 col-md-12 d-flex justify-content-center mt-5">
                    <ScrollTrigger onEnter={() => setCounterOn(true)}>
                        <div className={`${classes.number_custom} text-color ms-2`}>
                            <h5 className="">Utenti registrati</h5>
                            + {loaded && <CountUp start={0} end={1500000} duration={10} delay={0} />}
                        </div>
                    </ScrollTrigger>
                </div>
                <div className="col-6 col-md-12 d-flex justify-content-center mt-5">
                    <ScrollTrigger onEnter={() => setCounterOn(true)}>
                        <div className={`${classes.number_custom} text-color ms-2`}>
                            <h5 className="">Giochi disponibili</h5>
                            + {loaded && <CountUp start={0} end={800000} duration={9} delay={0} />}
                        </div>
                    </ScrollTrigger>
                </div>
                <div className={`col-6 col-md-12 d-flex justify-content-center mt-5 ${classes.margin_custom}`}>
                    <ScrollTrigger onEnter={() => setCounterOn(true)}>
                        <div className={`${classes.number_custom} text-color`}>
                            <h5 className="">Condivisioni</h5>
                            + {loaded && <CountUp start={0} end={500000} duration={8} delay={0} />}
                        </div>
                    </ScrollTrigger>
                </div>
                <div className={`col-6 col-md-12 d-flex justify-content-center mt-5 ${classes.margin_custom}`}>
                    <ScrollTrigger onEnter={() => setCounterOn(true)}>
                        <div className={`${classes.number_custom} text-color`}>
                            <h5 className="">Recensioni</h5>
                            + {loaded && <CountUp start={0} end={100000} duration={6} delay={0} />}
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </div>
    );
};

export default CounterUp;
