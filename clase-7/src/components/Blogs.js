const Blog = (props) => {
  const postsList = props.posts.map(post => (
    <li key={post.id} > {post.title} </li>
  ))
  const sideBar = (
    <ul>
      {postsList}
    </ul>
  )
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3> {post.title}</h3>
      <p>{post.content}</p>
    </div>
  ))

  return (
    <div>
      {sideBar}
      <hr />
      {content}
    </div>
  )
}

export default Blog