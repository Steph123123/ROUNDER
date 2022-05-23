import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Aboutus = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="jumboabout profcont container  mt-5">
        <div class="mt-4 p-5   rounded">
          <h1 className="abouth1 container text-center mt-5">
            About REX-ROUNDER
          </h1>
         
          <div className="d-flex">
             <video className="videoaout"
            src="https://rr5---sn-h5q7knel.c.drive.google.com/videoplayback?expire=1653336089&ei=2a-LYsejAsnWhwb8ppe4CQ&ip=83.41.213.31&cp=QVRKVURfVVBWSlhPOmN5X3J5M0ZZdG1hSkRqalV3WDN0YldwbVZzd1dPU2o2Y1VoZTZSeWhlRjU&id=288c5ce80f9a64d0&itag=22&source=webdrive&requiressl=yes&mh=RA&mm=32&mn=sn-h5q7knel&ms=su&mv=m&mvi=5&pl=16&ttl=transient&susc=dr&driveid=1zsTqSkS867K6WvvHFXli-z5wGyDRPK05&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=18.459&lmt=1631644745365841&mt=1653321392&subapp=DRIVE_WEB_FILE_VIEWER&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhALx06SsFz-vlDG6MonGMZd6Y1l_zcXmZNN7zsYXBq6LrAiBRGv36RSKOSM4DViexaDXcGMqCFTxaF7-DTmayIz_jcA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAMDWAKAwicyHqBQEObSvtO2OS0iduC6tnj8WdAt1fDYzAiEA2JScc8AimjAlRNx3R9hJL-Mzh0cHrGd4Iw2cZG4oJs0=&cpn=eQMwr2Kgni_FHjbt&c=WEB_EMBEDDED_PLAYER&cver=1.20220517.01.01"
            controls
          >
            {" "}
          </video>
            <p className="pabout">
              I am Stephania Alvarez, a veterinarian getting into new work fields where I
              have found new goals, different ways of working and which have
              greatly enriched me in the world of programming and web
              development. This project <strong>like others</strong>, was born from my passion
              for motorcycles and in it I put into practice the knowledge
              acquired at the 4 Geeks Academy during these last months I hope you like it and enjoy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
