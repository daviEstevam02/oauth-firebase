import { Button } from "../../components/Button";
import { useUser } from "../../hooks/useUser";

export function Home(){
    const { signOut } = useUser();
    const handleSignOut = () => {
        signOut()
    }
    return(
        <>
            <h1>Home</h1>
            <Button 
                title="Sign out"
                type="button"
                onClick={handleSignOut}
            />
        </>
    )
}