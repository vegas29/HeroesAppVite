import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher]);    
    
    return (
       <div className="grid grid-cols-1 gap-5 justify-center items-center md:grid-cols-2 lg:grid-cols-4 animate__animated animate__fadeIn">
            {
                heroes.map( hero =>(
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
       </div> 
    )
}
