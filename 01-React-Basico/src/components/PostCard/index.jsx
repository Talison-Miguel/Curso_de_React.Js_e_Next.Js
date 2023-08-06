import './style.css'

export default function PostCard({title, cover, body, id}) {
    return (
        <div className='post'>
            <img src={cover} alt={title}></img>
            <div className='postCard'>
                <h2>{title} {id}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}