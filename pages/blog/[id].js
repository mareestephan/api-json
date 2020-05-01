import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()

    return (
        <>
            <h1>Appel Blog post</h1>
            <p>Post id: {router.query.id}</p>
        </>
    )
}