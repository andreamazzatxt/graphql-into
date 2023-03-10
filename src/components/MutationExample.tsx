import { useMutation, useQuery } from "@apollo/client"
import { JsonViewer } from "@textea/json-viewer"
import { useState } from "react"
import { mutation, query } from "../queries"
import { LoginFormEvent } from "../types"

export const MutationExample = () => {
    const [login, setLogin] = useState('')
    const { loading, error, data } = useQuery(query, { variables: { login, withFollowers: true } })
    const [mutate, mutationStatus] = useMutation(mutation, { variables: { userId: data?.user?.id } })

    const onSubmit = (e: LoginFormEvent) => {
        e.preventDefault()
        setLogin(e.target?.githubUser?.value || '')
    }

    if (loading || mutationStatus.loading) {
        return <>Loading...</>
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name="githubUser" />
                <button type="submit">Find</button>
            </form>


            <div style={{
                padding: '10px',
                border: error ? '1px solid red' : 'none'
            }}>
                <JsonViewer value={data || error} />
            </div>

            <button
                disabled={!data?.user?.id}
                onClick={() => mutate()}
            >Follow</button>


            <div style={{
                padding: '10px',
                border: mutationStatus.error ? '1px solid red' : 'none'
            }}>
                <JsonViewer value={mutationStatus.data || mutationStatus.error} />
            </div>
        </div>
    )
}