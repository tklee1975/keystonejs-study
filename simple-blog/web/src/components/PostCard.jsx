export default function PostCard(props) {
    const post = props.post;

    console.debug("props", props);
    const url = `/post/${post.slug}`;
    return (
        <div style={{background:'white', color: 'black', width:'500px',  textAlign:'left', padding:10, margin:10 }}>
        
            {/* <pre>{JSON.stringify(post)}</pre> */}
            <div style={{fontSize:'1.5rem', paddingBottom:10}}>{post.title}</div>
            <a href={url}>Read more</a>
        </div>
    );
}