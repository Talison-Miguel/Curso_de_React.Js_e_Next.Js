import { useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export function Post() {
    const params = useParams()
    const { id } = params
    const [searchParams] = useSearchParams();

    console.log(searchParams)

    return (
        <div>
            <h1>Post {`Param: ${id}`} {`QS: ${searchParams.get('page')}`}</h1>
        </div>
    )
}