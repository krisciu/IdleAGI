import { useState } from "preact/hooks";


function MainGameComponent() {
    const [gameState, setGameState] = useState({
        compute: 0,
        money: 0,
        stage: 'pi',
        upgrades: [],
    });

    function train() {
        setGameState(prevGameState => ({
            ...prevGameState,
            compute: prevGameState.compute + 1
        }));
    }

    function purchaseUpgrade();

}