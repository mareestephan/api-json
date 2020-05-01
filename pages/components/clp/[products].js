import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// const Appels = dynamic(() => import('../../components/product'))


export default () => {
    const router = useRouter()

    // const post = posts[router.query.id]

    return (
        <>

            <h1>Appel en Pere</h1>
        </>
    )
}

