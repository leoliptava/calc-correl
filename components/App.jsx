import { useEffect } from "react";
import FilterStock from '../pages/api/FilterStock'

export function App() {

    useEffect(() => {
        const loadAll = async () => {
        
            let df = FilterStock.dateStock()
        
        }
        
        loadAll()

    }, [])

    return (
        <>
            <h1>Hello Next!</h1>
        </>
    )
}