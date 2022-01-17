import React from "react"
import Header from "../components/Header"

const Post = ({ pageContext: { post } }) => {
	return (
		<div>
			<Header />
			<h2>{post.title}</h2>
			{/* <p>{post.author.name}</p> */}
			{/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
            
		</div>
	)
}

export default Post