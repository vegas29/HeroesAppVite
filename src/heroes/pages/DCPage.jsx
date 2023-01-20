import { HeroList } from "../components/HeroList";

export const DCPage = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl py-5">DC Comics</h1>
    
            <HeroList
                publisher="DC Comics"
            />
        </div>
    )
}
