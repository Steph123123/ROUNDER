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
            src="https://rr1---sn-h5qzen7y.c.drive.google.com/videoplayback?expire=1653437438&ei=vjuNYo-DDKOn0AG-3774Aw&ip=93.176.144.228&cp=QVRKVUVfVlRRSVhPOllfNTNqQ0w0Q0ZUNnNaeTlOZmpMSlpiUHpMYmlZYWt4YUFnUDVQYXkwUVQ&id=288c5ce80f9a64d0&itag=22&source=webdrive&requiressl=yes&mh=RA&mm=32&mn=sn-h5qzen7y&ms=su&mv=m&mvi=1&pl=21&ttl=transient&susc=dr&driveid=1zsTqSkS867K6WvvHFXli-z5wGyDRPK05&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=18.459&lmt=1631644745365841&mt=1653422664&subapp=DRIVE_WEB_FILE_VIEWER&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgbn7UQUr3TuWe3aZ4Q3hAYx0yJFijqM85KdPR9k-7eBoCIDUSchpexrOG-yN30yybWm64bucS56WzJQUzv4PyLXx8&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAP9A-hvaDvP5ZSkUSwVspetZlU4wjZw_13m3orEUbEAFAiEAwBAoG2j5TPWiIqe1dwnXjdiQuFjFZ_4MCjvPkk7UXKI=&cpn=iRFj3zOOE8wIT81x&c=WEB_EMBEDDED_PLAYER&cver=1.20220522.00.00"
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
