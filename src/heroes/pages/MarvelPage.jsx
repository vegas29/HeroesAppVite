import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl py-5">Marvel Comics</h1>
    
            <HeroList
                publisher="Marvel Comics"
            />
        </div>
    )
}
