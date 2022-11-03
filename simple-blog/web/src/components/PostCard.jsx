export default function PostCard(props) {
    const post = props.post;

    console.debug("props", props);

    return (
        <div style={{background:'white', color: 'black', width:'500px', minHeight: '50px', textAlign:'left', padding:10, margin:10 }}>
            {/* <pre>{post}</pre> */}
            {/* <pre>{JSON.stringify(post)}</pre> */}
            <h2>{post.title}</h2>
        </div>
    );
}