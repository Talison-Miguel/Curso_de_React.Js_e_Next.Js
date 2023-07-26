export default function PostCard({title, cover, body, id}) {
    return (
        <div className='post'>
            <img src={cover} alt={title}></img>
            <div className='postCard'>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}