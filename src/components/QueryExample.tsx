import { useQuery } from "@apollo/client"
import { JsonViewer } from "@textea/json-viewer"
import { useState } from "react"
import { query } from "../queries"
import { LoginFormEvent } from "../types"

export const QueryExample = () => {
    const [login, setLogin] = useState('')
    const { loading, error, data } = useQuery(query, { variables: { login, withFollowers: true } })

    // const onSubmit = (e: LoginFormEvent) => {
    //     e.preventDefault()
    //     setLogin(e.target?.githubUser?.value || '')
    // }

    if (loading) {
        return <>Loading...</>
    }

    return (
        <div>
            {/* <form onSubmit={onSubmit}>
                <input type='text' name="githubUser" />
                <button type="submit">Find</button>
            </form> */}
            <div style={{
                padding: '10px',
                border: error ? '2px solid red' : 'none'

                
            }}>
                <JsonViewer value={data || error} />
            </div>
        </div>
    )
}